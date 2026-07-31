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
}

/**
 * Split recomendado para ganar músculo entrenando con solo peso corporal y un
 * kettlebell: piernas dos veces por semana (responden mejor a más frecuencia
 * cuando la carga es baja), pecho/espalda/brazos una vez, y el fin de semana
 * libre para full body o cardio.
 */
export const WEEKLY_SPLIT: Record<number, DayPlan> = {
  0: { bodyParts: ["full-body", "cardio"], flexible: true }, // domingo
  1: { bodyParts: ["piernas"], flexible: false }, // lunes
  2: { bodyParts: ["pecho"], flexible: false }, // martes
  3: { bodyParts: ["espalda"], flexible: false }, // miércoles
  4: { bodyParts: ["piernas"], flexible: false }, // jueves
  5: { bodyParts: ["brazos"], flexible: false }, // viernes
  6: { bodyParts: ["full-body", "cardio"], flexible: true }, // sábado
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
