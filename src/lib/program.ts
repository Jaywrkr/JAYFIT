import { Difficulty } from "./types";
import { SESSIONS } from "./sessions";
import { getDayPlan } from "./schedule";

const STORAGE_KEY = "jayfit_program_start";

export const PROGRAM_WEEKS = 8;

export interface ProgramPhase {
  weeks: [number, number];
  difficulty: Difficulty;
  label: string;
}

/**
 * Progresión de 8 semanas: sube de intensidad por fases en vez de dejar la
 * dificultad a elección diaria, para forzar sobrecarga progresiva real.
 */
export const PROGRAM_PHASES: ProgramPhase[] = [
  { weeks: [1, 3], difficulty: "intermedio", label: "Adaptación" },
  { weeks: [4, 6], difficulty: "avanzado", label: "Progresión" },
  { weeks: [7, 8], difficulty: "extremo", label: "Pico" },
];

export function getPhaseForWeek(week: number): ProgramPhase {
  return (
    PROGRAM_PHASES.find((p) => week >= p.weeks[0] && week <= p.weeks[1]) ??
    PROGRAM_PHASES[PROGRAM_PHASES.length - 1]
  );
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getProgramStartDate(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function startProgram(): string {
  const iso = new Date().toISOString();
  if (isBrowser()) window.localStorage.setItem(STORAGE_KEY, iso);
  return iso;
}

export function stopProgram() {
  if (isBrowser()) window.localStorage.removeItem(STORAGE_KEY);
}

function daysBetween(a: Date, b: Date): number {
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor((startOfDay(b).getTime() - startOfDay(a).getTime()) / 86_400_000);
}

/** Semana del programa (1-8) para una fecha dada, o null si el programa ya terminó. */
export function getProgramWeek(startDate: string, date: Date = new Date()): number | null {
  const day = daysBetween(new Date(startDate), date);
  const week = Math.floor(day / 7) + 1;
  return week > PROGRAM_WEEKS ? null : Math.max(1, week);
}

export interface ProgramDayPlan {
  week: number;
  phase: ProgramPhase;
  bodyParts: ReturnType<typeof getDayPlan>["bodyParts"];
  flexible: boolean;
  recovery: boolean;
  sessionId: string | null;
}

/**
 * Elige una sesión concreta para el día. Usa el número de día desde el
 * inicio del programa (no la semana) para variar el índice dentro del pool:
 * si usáramos la semana, los 3 días de piernas de una misma semana caerían
 * en el mismo índice y elegirían exactamente la misma sesión los tres días.
 * Con el día como índice, cada día de piernas de la semana avanza una
 * posición en el pool, así que no se repite la sesión ni esa semana ni
 * (mientras el pool tenga más de una opción) en el siguiente día cercano.
 */
function pickSessionId(
  bodyParts: ReturnType<typeof getDayPlan>["bodyParts"],
  difficulty: Difficulty,
  dayIndex: number
): string | null {
  const matches = SESSIONS.filter(
    (s) => s.difficulty === difficulty && s.bodyParts.some((bp) => bodyParts.includes(bp))
  );
  const pool = matches.length > 0
    ? matches
    : SESSIONS.filter((s) => s.bodyParts.some((bp) => bodyParts.includes(bp)));
  if (pool.length === 0) return null;
  return pool[dayIndex % pool.length].id;
}

export function getProgramDayPlan(startDate: string, date: Date = new Date()): ProgramDayPlan | null {
  const week = getProgramWeek(startDate, date);
  if (week === null) return null;

  const phase = getPhaseForWeek(week);
  const dayPlan = getDayPlan(date.getDay());
  const dayIndex = daysBetween(new Date(startDate), date);
  // Un día de recuperación se mantiene siempre suave, sin importar en qué
  // fase del programa esté la semana (nunca sube a avanzado/extremo).
  const effectiveDifficulty: Difficulty = dayPlan.recovery ? "principiante" : phase.difficulty;
  const sessionId = pickSessionId(dayPlan.bodyParts, effectiveDifficulty, dayIndex);

  return {
    week,
    phase,
    bodyParts: dayPlan.bodyParts,
    flexible: dayPlan.flexible,
    recovery: !!dayPlan.recovery,
    sessionId,
  };
}
