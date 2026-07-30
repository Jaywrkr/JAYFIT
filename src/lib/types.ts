export type BodyPart =
  | "piernas"
  | "espalda"
  | "pecho"
  | "core"
  | "brazos"
  | "full-body"
  | "cardio";

export type Difficulty =
  | "principiante"
  | "intermedio"
  | "avanzado"
  | "extremo";

export type Equipment = "ninguno" | "kb-10kg" | "kb-15lb" | "kb-10lb";

export type ExerciseType =
  | "fuerza"
  | "pliometrico"
  | "isometrico"
  | "movilidad-equilibrio"
  | "cardio-metabolico";

export interface Exercise {
  id: string;
  name: string;
  bodyParts: BodyPart[];
  equipment: Equipment[];
  instructions: string;
  type: ExerciseType;
}

export interface SessionBlock {
  exerciseId: string;
  sets: number;
  /** Duration of each set in seconds. If reps is set instead, workSeconds is omitted. */
  workSeconds?: number;
  reps?: number;
  restSeconds: number;
}

export interface Session {
  id: string;
  name: string;
  bodyParts: BodyPart[];
  difficulty: Difficulty;
  equipment: Equipment[];
  description: string;
  blocks: SessionBlock[];
}

export const BODY_PART_LABELS: Record<BodyPart, string> = {
  piernas: "Piernas",
  espalda: "Espalda",
  pecho: "Pecho",
  core: "Core",
  brazos: "Brazos",
  "full-body": "Full Body",
  cardio: "Cardio / HIIT",
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
  extremo: "Extremo",
};

export const EQUIPMENT_LABELS: Record<Equipment, string> = {
  ninguno: "Sin equipo",
  "kb-10kg": "Kettlebell 10 kg",
  "kb-15lb": "Kettlebell 15 lb",
  "kb-10lb": "Kettlebell 10 lb",
};

export const TYPE_LABELS: Record<ExerciseType, string> = {
  fuerza: "Fuerza",
  pliometrico: "Pliométrico",
  isometrico: "Isométrico",
  "movilidad-equilibrio": "Movilidad / Equilibrio",
  "cardio-metabolico": "Cardio metabólico",
};
