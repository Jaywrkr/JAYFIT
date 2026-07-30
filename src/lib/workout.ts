import { Session } from "./types";

/** Estimated seconds per repetition, used to size timers and duration estimates for rep-based exercises. */
export const REP_SECONDS = 3.5;

export interface WorkoutStep {
  kind: "prepare" | "work" | "rest";
  seconds: number;
  exerciseId?: string;
  reps?: number;
  setNumber?: number;
  totalSets?: number;
  blockIndex?: number;
}

function blockWorkSeconds(workSeconds?: number, reps?: number): number {
  if (workSeconds) return workSeconds;
  if (reps) return Math.round(reps * REP_SECONDS);
  return 30;
}

/**
 * Sesiones en formato "circuito": en vez de completar todas las series de un
 * ejercicio antes de pasar al siguiente, se recorren todos los ejercicios en
 * la ronda 1, luego todos en la ronda 2, etc. (ejercicio A serie 1, ejercicio
 * B serie 1, ejercicio C serie 1, ejercicio A serie 2...).
 */
export function buildSteps(session: Session): WorkoutStep[] {
  const steps: WorkoutStep[] = [{ kind: "prepare", seconds: 10 }];

  const maxSets = Math.max(...session.blocks.map((b) => b.sets));

  for (let round = 1; round <= maxSets; round++) {
    session.blocks.forEach((block, blockIndex) => {
      if (round > block.sets) return;

      steps.push({
        kind: "work",
        seconds: blockWorkSeconds(block.workSeconds, block.reps),
        exerciseId: block.exerciseId,
        reps: block.reps,
        setNumber: round,
        totalSets: block.sets,
        blockIndex,
      });

      const isLastStepOfSession =
        round === maxSets && blockIndex === session.blocks.length - 1;

      if (!isLastStepOfSession) {
        steps.push({ kind: "rest", seconds: block.restSeconds });
      }
    });
  }

  return steps;
}

export interface WorkoutRound {
  roundNumber: number;
  items: {
    blockIndex: number;
    exerciseId: string;
    reps?: number;
    workSeconds?: number;
  }[];
}

/** Misma agrupación en rondas que buildSteps, para mostrarla en la vista previa de la sesión. */
export function buildRounds(session: Session): WorkoutRound[] {
  const maxSets = Math.max(...session.blocks.map((b) => b.sets));
  const rounds: WorkoutRound[] = [];

  for (let round = 1; round <= maxSets; round++) {
    const items = session.blocks
      .map((block, blockIndex) => ({ block, blockIndex }))
      .filter(({ block }) => round <= block.sets)
      .map(({ block, blockIndex }) => ({
        blockIndex,
        exerciseId: block.exerciseId,
        reps: block.reps,
        workSeconds: block.workSeconds,
      }));

    rounds.push({ roundNumber: round, items });
  }

  return rounds;
}

export function estimateSessionSeconds(session: Session): number {
  return buildSteps(session).reduce((sum, step) => sum + step.seconds, 0);
}

export function formatMinutes(totalSeconds: number): string {
  const minutes = Math.round(totalSeconds / 60);
  return `${Math.max(minutes, 1)} min`;
}

export function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
