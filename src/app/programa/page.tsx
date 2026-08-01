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
        <h1 className="text-3xl font-black tracking-tight">Programa de 8 semanas</h1>
        <p className="text-black/60 dark:text-white/60">
          Sube de nivel automáticamente cada pocas semanas en vez de elegir la
          dificultad a mano cada día: semanas 1-3 intermedio, 4-6 avanzado, 7-8
          extremo. Sigue tu split de zonas de siempre, un día a la vez.
        </p>
        <button
          onClick={() => {
            startProgram();
            refresh();
          }}
          className="w-full rounded-full bg-black px-6 py-3.5 text-base font-semibold text-white dark:bg-white dark:text-black"
        >
          Empezar programa
        </button>
        <Link href="/" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white">
          Prefiero seguir eligiendo sesiones libremente
        </Link>
      </div>
    );
  }

  if (!today) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-5 py-10 text-center">
        <h1 className="text-3xl font-black tracking-tight">¡Programa completo!</h1>
        <p className="text-black/60 dark:text-white/60">
          Terminaste las {PROGRAM_WEEKS} semanas. Puedes repetirlo desde cero con un
          nivel más alto o volver a elegir sesiones libremente.
        </p>
        <button
          onClick={() => {
            startProgram();
            refresh();
          }}
          className="w-full rounded-full bg-black px-6 py-3.5 text-base font-semibold text-white dark:bg-white dark:text-black"
        >
          Reiniciar programa
        </button>
        <Link href="/" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white">
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
      <Link href="/" className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white">
        ← Sesiones
      </Link>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight">Programa de 8 semanas</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Semana {today.week} de {PROGRAM_WEEKS} · Fase &ldquo;{today.phase.label}&rdquo; (
          {DIFFICULTY_LABELS[today.phase.difficulty]})
        </p>
        <div className="h-1.5 overflow-hidden rounded-full bg-black/10 dark:bg-white/15">
          <div
            className="h-full rounded-full bg-black transition-all dark:bg-white"
            style={{ width: `${weekProgressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-black/10 p-4 dark:border-white/15">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
          Hoy
        </span>
        <p className="text-sm">
          {today.recovery ? (
            <>Descanso activo: movilidad suave, nada de intensidad hoy.</>
          ) : today.flexible ? (
            <>Día flexible: <strong>full body</strong> o <strong>cardio/HIIT</strong>.</>
          ) : (
            <>Toca <strong>{today.bodyParts.map((bp) => BODY_PART_LABELS[bp]).join(" / ")}</strong>.</>
          )}
        </p>
        {todaySession ? (
          <Link
            href={`/session/${todaySession.id}`}
            className="rounded-full bg-black px-4 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-black"
          >
            {todaySession.name}
          </Link>
        ) : (
          <p className="text-sm text-black/50 dark:text-white/50">
            No encontré una sesión que calce hoy — elige una libremente desde el inicio.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
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
                  isToday ? "border-black dark:border-white" : "border-black/10 dark:border-white/15"
                }`}
              >
                <span className="text-[10px] uppercase text-black/40 dark:text-white/40">
                  {WEEKDAY_LABELS[d.getDay()].slice(0, 3)}
                </span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                    done
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "border border-black/15 dark:border-white/20"
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
        className="self-start text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
      >
        Salir del programa
      </button>
    </div>
  );
}
