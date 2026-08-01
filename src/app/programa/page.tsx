"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PROGRAM_WEEKS,
  ProgramDayPlan,
  getProgramDayPlan,
  getProgramStartDate,
  startProgram,
  stopProgram,
} from "@/lib/program";
import { getCompletedDateKeys, toLocalDateKey } from "@/lib/history";
import { getSessionById } from "@/lib/sessions";
import { BODY_PART_LABELS, DIFFICULTY_LABELS } from "@/lib/types";
import { WEEKDAY_LABELS, getDayPlan } from "@/lib/schedule";

export default function ProgramaPage() {
  const [startDate, setStartDate] = useState<string | null | undefined>(undefined);
  const [today, setToday] = useState<ProgramDayPlan | null>(null);
  const [completedDates, setCompletedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    const sd = getProgramStartDate();
    setStartDate(sd);
    setToday(sd ? getProgramDayPlan(sd) : null);
    setCompletedDates(getCompletedDateKeys());
  }

  if (startDate === undefined) return null;

  if (!startDate) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-5 py-10 text-center">
        <h1 className="text-3xl font-medium tracking-tight">Programa de 8 semanas</h1>
        <p className="text-muted">
          Sube de nivel automáticamente cada pocas semanas en vez de elegir la
          dificultad a mano cada día: semanas 1-3 intermedio, 4-6 avanzado, 7-8
          extremo. Sigue tu split de zonas de siempre, un día a la vez.
        </p>
        <button
          onClick={() => {
            startProgram();
            refresh();
          }}
          className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground"
        >
          Empezar programa
        </button>
        <Link href="/" className="text-sm font-medium text-muted hover:text-foreground">
          Prefiero seguir eligiendo sesiones libremente
        </Link>
      </div>
    );
  }

  if (!today) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-5 py-10 text-center">
        <h1 className="text-3xl font-medium tracking-tight">¡Programa completo!</h1>
        <p className="text-muted">
          Terminaste las {PROGRAM_WEEKS} semanas. Puedes repetirlo desde cero con un
          nivel más alto o volver a elegir sesiones libremente.
        </p>
        <button
          onClick={() => {
            startProgram();
            refresh();
          }}
          className="w-full rounded-full bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground"
        >
          Reiniciar programa
        </button>
        <Link href="/" className="text-sm font-medium text-muted hover:text-foreground">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const todaySession = today.sessionId ? getSessionById(today.sessionId) : undefined;
  const weekProgressPercent = (today.week / PROGRAM_WEEKS) * 100;

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    const mondayOffset = (d.getDay() + 6) % 7; // lunes = inicio de semana visual
    d.setDate(d.getDate() - mondayOffset + i);
    return d;
  });

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-10 sm:px-8">
      <Link href="/" className="text-sm font-medium text-muted hover:text-foreground">
        ← Sesiones
      </Link>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-medium tracking-tight">Programa de 8 semanas</h1>
        <p className="text-sm text-muted">
          Semana {today.week} de {PROGRAM_WEEKS} · Fase &ldquo;{today.phase.label}&rdquo; (
          {DIFFICULTY_LABELS[today.phase.difficulty]})
        </p>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${weekProgressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4">
        <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
          Hoy
        </span>
        <p className="text-sm">
          {today.recovery ? (
            <>Descanso activo: movilidad suave, nada de intensidad hoy.</>
          ) : today.flexible ? (
            <>Día flexible: <strong>full body</strong> o <strong>cardio/HIIT</strong>.</>
          ) : (
            <>Toca <strong className="font-medium">{today.bodyParts.map((bp) => BODY_PART_LABELS[bp]).join(" / ")}</strong>.</>
          )}
        </p>
        {todaySession ? (
          <Link
            href={`/session/${todaySession.id}`}
            className="rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-foreground"
          >
            {todaySession.name}
          </Link>
        ) : (
          <p className="text-sm text-muted">
            No encontré una sesión que calce hoy — elige una libremente desde el inicio.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted">
          Esta semana
        </h2>
        <div className="grid grid-cols-7 gap-1.5 text-center">
          {weekDates.map((d) => {
            const plan = getDayPlan(d.getDay());
            const done = completedDates.has(toLocalDateKey(d));
            const isToday = toLocalDateKey(d) === toLocalDateKey(new Date());
            return (
              <div
                key={d.toISOString()}
                className={`flex flex-col items-center gap-1 rounded-lg border p-2 ${
                  isToday ? "border-foreground" : "border-border"
                }`}
              >
                <span className="text-[10px] uppercase text-muted">
                  {WEEKDAY_LABELS[d.getDay()].slice(0, 3)}
                </span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                    done
                      ? "bg-accent text-accent-foreground"
                      : "border border-border"
                  }`}
                >
                  {done ? "✓" : ""}
                </span>
                <span className="text-[9px] leading-tight text-black/50 dark:text-white/50">
                  {plan.recovery ? "Descanso" : plan.flexible ? "Libre" : BODY_PART_LABELS[plan.bodyParts[0]]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => {
          if (confirm("¿Salir del programa? Puedes volver a empezarlo cuando quieras.")) {
            stopProgram();
            refresh();
          }
        }}
        className="self-start text-sm font-medium text-muted hover:text-foreground"
      >
        Salir del programa
      </button>
    </div>
  );
}
