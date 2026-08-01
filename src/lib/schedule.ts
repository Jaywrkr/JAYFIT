import { BodyPart } from "./types";

export const WEEKDAY_LABELS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export interface DayPlan {
  bodyParts: BodyPart[];
  /** Días "flexibles": full body / cardio, sirven cualquier día de la semana. */
  flexible: boolean;
  /** Día de descanso activo: intensidad siempre baja, sin importar la fase del programa. */
  recovery?: boolean;
}

/**
 * Split de 6 días de entrenamiento + 1 de recuperación real, pensado para
 * maximizar la frecuencia por grupo muscular con carga fija (peso corporal +
 * un kettlebell):
 *
 * - Piernas 3x/semana: con carga externa baja, las piernas toleran y se
 *   benefician de más frecuencia que un solo día pesado semanal.
 * - Empuje (pecho + brazos) y tirón (espalda + brazos) 1x dedicado cada uno,
 *   más una segunda exposición indirecta el sábado (full body/cardio toca
 *   los dos patrones), dando ~1.5-2x/semana real a pecho y espalda, y 2x
 *   dedicado a brazos (están en ambos días).
 * - Domingo es descanso activo de verdad — antes el "día flexible" era otro
 *   entrenamiento completo, así que no había ningún día de recuperación real
 *   en la semana.
 * - Core se cubre aparte todos los días con el añadido "Core Express" diario
 *   (ver DAILY_CORE_SESSION_BY_WEEKDAY), así que no necesita su propio día.
 */
export const WEEKLY_SPLIT: Record<number, DayPlan> = {
  0: { bodyParts: ["full-body"], flexible: true, recovery: true }, // domingo: descanso activo
  1: { bodyParts: ["piernas"], flexible: false }, // lunes: piernas (cuádriceps/sentadilla)
  2: { bodyParts: ["pecho", "brazos"], flexible: false }, // martes: empuje
  3: { bodyParts: ["piernas"], flexible: false }, // miércoles: piernas (glúteo/isquios)
  4: { bodyParts: ["espalda", "brazos"], flexible: false }, // jueves: tirón
  5: { bodyParts: ["piernas"], flexible: false }, // viernes: piernas (unilateral/explosivo)
  6: { bodyParts: ["full-body", "cardio"], flexible: true }, // sábado: full body / cardio
};

export function getDayPlan(weekday: number): DayPlan {
  return WEEKLY_SPLIT[weekday];
}

/**
 * Sesión corta de core (8 min) sugerida como añadido diario, sin importar la
 * zona del día. Hay una distinta para cada día de la semana, así el añadido
 * diario nunca se repite de una semana a otra.
 */
export const DAILY_CORE_SESSION_BY_WEEKDAY: Record<number, string> = {
  0: "core-express-explosivo", // domingo
  1: "core-express", // lunes
  2: "core-express-rotacion", // martes
  3: "core-express-plancha", // miércoles
  4: "core-express-piernas", // jueves
  5: "core-express-isometrico", // viernes
  6: "core-express-equilibrio", // sábado
};

export function getDailyCoreSessionId(weekday: number): string {
  return DAILY_CORE_SESSION_BY_WEEKDAY[weekday];
}
