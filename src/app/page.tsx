"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SESSIONS, getSessionById } from "@/lib/sessions";
import {
  BODY_PART_LABELS,
  BodyPart,
  DIFFICULTY_LABELS,
  Difficulty,
  TYPE_LABELS,
  ExerciseType,
} from "@/lib/types";
import { getSessionTypes } from "@/lib/workout";
import { WEEKDAY_LABELS, getDailyCoreSessionId, getDayPlan } from "@/lib/schedule";
import { getStreak } from "@/lib/history";
import { PROGRAM_WEEKS, ProgramDayPlan, getProgramDayPlan, getProgramStartDate } from "@/lib/program";
import { SessionCard } from "@/components/SessionCard";
import { ThemeToggle } from "@/components/ThemeToggle";

const BODY_PARTS = Object.keys(BODY_PART_LABELS) as BodyPart[];
const DIFFICULTIES = Object.keys(DIFFICULTY_LABELS) as Difficulty[];
const TYPES = Object.keys(TYPE_LABELS) as ExerciseType[];

type EquipmentFilter = "todos" | "sin-equipo" | "con-kettlebell";

export default function Home() {
  const [bodyPart, setBodyPart] = useState<BodyPart | "todos">("todos");
  const [difficulty, setDifficulty] = useState<Difficulty | "todos">("intermedio");
  const [equipment, setEquipment] = useState<EquipmentFilter>("todos");
  const [type, setType] = useState<ExerciseType | "todos">("todos");
  const [weekday, setWeekday] = useState<number | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [streak, setStreak] = useState<number | null>(null);
  const [programToday, setProgramToday] = useState<ProgramDayPlan | null | undefined>(undefined);

  useEffect(() => {
    setWeekday(new Date().getDay());
    setStreak(getStreak());
    const startDate = getProgramStartDate();
    setProgramToday(startDate ? getProgramDayPlan(startDate) : null);
  }, []);

  const todayPlan = weekday !== null ? getDayPlan(weekday) : null;
  const dailyCoreSession =
    weekday !== null ? getSessionById(getDailyCoreSessionId(weekday)) : undefined;

  const sessions = useMemo(() => {
    return SESSIONS.filter((s) => {
      if (bodyPart !== "todos" && !s.bodyParts.includes(bodyPart)) return false;
      if (difficulty !== "todos" && s.difficulty !== difficulty) return false;
      const isBodyweightOnly =
        s.equipment.length === 1 && s.equipment[0] === "ninguno";
      if (equipment === "sin-equipo" && !isBodyweightOnly) return false;
      if (equipment === "con-kettlebell" && isBodyweightOnly) return false;
      if (type !== "todos" && !getSessionTypes(s).includes(type)) return false;
      return true;
    });
  }, [bodyPart, difficulty, equipment, type]);

  const dayBanner = todayPlan && (
    <div className="flex flex-col gap-2 rounded-xl border border-black/10 p-3 dark:border-white/15">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
        {WEEKDAY_LABELS[weekday!]}
      </span>
      <p className="text-xs leading-snug">
        {todayPlan.recovery ? (
          <>
            Descanso activo: movilidad suave, nada de intensidad hoy.
          </>
        ) : todayPlan.flexible ? (
          <>
            Día flexible: <strong>full body</strong> o <strong>cardio/HIIT</strong>.
          </>
        ) : (
          <>
            Toca{" "}
            <strong>
              {todayPlan.bodyParts.map((bp) => BODY_PART_LABELS[bp]).join(" / ")}
            </strong>
            .
          </>
        )}
      </p>
      <div className="flex flex-wrap gap-1.5">
        <button
          onClick={() => {
            setBodyPart(todayPlan.bodyParts[0]);
            if (todayPlan.recovery) setDifficulty("principiante");
          }}
          className="rounded-full border border-black bg-black px-2.5 py-1 text-xs font-medium text-white dark:border-white dark:bg-white dark:text-black"
        >
          {todayPlan.recovery ? "Sesiones suaves" : "Sesiones de hoy"}
        </button>
        {dailyCoreSession && (
          <Link
            href={`/session/${dailyCoreSession.id}`}
            className="rounded-full border border-black/20 px-2.5 py-1 text-xs font-medium dark:border-white/25"
          >
            + Core (8 min)
          </Link>
        )}
      </div>
    </div>
  );

  const programSession = programToday?.sessionId ? getSessionById(programToday.sessionId) : undefined;
  const programWidget =
    programToday === undefined ? null : programToday ? (
      <Link
        href="/programa"
        className="flex flex-col gap-0.5 rounded-xl border border-black/10 p-3 text-xs dark:border-white/15"
      >
        <span className="font-semibold">
          Programa · Semana {programToday.week}/{PROGRAM_WEEKS}
        </span>
        <span className="text-black/60 dark:text-white/60">
          {programSession ? `Hoy: ${programSession.name}` : "Ver plan de hoy"}
        </span>
      </Link>
    ) : (
      <Link
        href="/programa"
        className="rounded-xl border border-dashed border-black/20 p-3 text-xs text-black/60 hover:border-black/40 dark:border-white/25 dark:text-white/60 dark:hover:border-white/50"
      >
        ¿Seguir un programa estructurado de 8 semanas? →
      </Link>
    );

  const filters = (
    <div className="flex flex-col gap-4">
      <FilterRow
        label="Zona"
        value={bodyPart}
        onChange={setBodyPart}
        options={[
          { value: "todos", label: "Todas" },
          ...BODY_PARTS.map((bp) => ({ value: bp, label: BODY_PART_LABELS[bp] })),
        ]}
      />
      <FilterRow
        label="Dificultad"
        value={difficulty}
        onChange={setDifficulty}
        options={[
          { value: "todos", label: "Todas" },
          ...DIFFICULTIES.map((d) => ({ value: d, label: DIFFICULTY_LABELS[d] })),
        ]}
      />
      <FilterRow
        label="Equipo"
        value={equipment}
        onChange={setEquipment}
        options={[
          { value: "todos", label: "Todo" },
          { value: "sin-equipo", label: "Sin equipo" },
          { value: "con-kettlebell", label: "Con kettlebell" },
        ]}
      />
      <FilterRow
        label="Tipo"
        value={type}
        onChange={setType}
        options={[
          { value: "todos", label: "Todos" },
          ...TYPES.map((t) => ({ value: t, label: TYPE_LABELS[t] })),
        ]}
      />
    </div>
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8 lg:max-w-none lg:flex-row lg:items-start lg:gap-8 lg:px-8 lg:py-8">
      <aside className="hidden lg:sticky lg:top-8 lg:flex lg:w-56 lg:shrink-0 lg:flex-col lg:gap-4">
        <header className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xl font-black tracking-tight">JAYFIT</h1>
            <ThemeToggle />
          </div>
          <p className="text-xs text-black/60 dark:text-white/60">
            Cuerpo libre o kettlebell.
          </p>
          <div className="mt-1 flex items-center justify-between gap-2">
            {!!streak && (
              <span className="text-xs font-semibold">🔥 {streak} {streak === 1 ? "día seguido" : "días seguidos"}</span>
            )}
            <Link
              href="/historial"
              className="text-xs font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
            >
              Historial →
            </Link>
          </div>
        </header>
        {dayBanner}
        {programWidget}
        {filters}
      </aside>

      <main className="flex flex-1 flex-col gap-8 min-w-0">
        <div className="flex flex-col gap-6 lg:hidden">
          <header className="flex flex-col gap-1">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-black tracking-tight">JAYFIT</h1>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Sesiones de entrenamiento sin excusas. Cuerpo libre o kettlebell.
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-1 flex items-center justify-between gap-2">
              {!!streak && (
                <span className="text-sm font-semibold">🔥 {streak} {streak === 1 ? "día seguido" : "días seguidos"}</span>
              )}
              <Link
                href="/historial"
                className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
              >
                Historial →
              </Link>
            </div>
          </header>
          {dayBanner}
          {programWidget}
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 self-start rounded-full border border-black/15 px-4 py-2 text-sm font-medium dark:border-white/20"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            Filtros
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
          {sessions.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-black/50 dark:text-white/50">
              No hay sesiones con esos filtros.
            </p>
          )}
        </div>
      </main>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Cerrar filtros"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col gap-6 overflow-y-auto bg-white p-5 shadow-xl dark:bg-black">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-black tracking-tight">Filtros</h2>
              <button
                onClick={() => setFiltersOpen(false)}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 dark:border-white/20"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            {filters}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
        {label}
      </span>
      <div className="flex flex-wrap gap-1">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`whitespace-nowrap rounded-full border px-2 py-1 text-xs font-medium transition-colors ${
                active
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 text-black/70 hover:border-black/40 dark:border-white/20 dark:text-white/70 dark:hover:border-white/50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
