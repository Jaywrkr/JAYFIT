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

/** Sesión corta de core sugerida como añadido diario, sin importar la zona del día. */
export const DAILY_CORE_SESSION_ID = "core-express";
