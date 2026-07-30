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

export function buildSteps(session: Session): WorkoutStep[] {
  const steps: WorkoutStep[] = [
    { kind: "prepare", seconds: 10 },
  ];

  session.blocks.forEach((block, blockIndex) => {
    for (let set = 1; set <= block.sets; set++) {
      steps.push({
        kind: "work",
        seconds: blockWorkSeconds(block.workSeconds, block.reps),
        exerciseId: block.exerciseId,
        reps: block.reps,
        setNumber: set,
        totalSets: block.sets,
        blockIndex,
      });

      const isLastSetOfSession =
        blockIndex === session.blocks.length - 1 && set === block.sets;

      if (!isLastSetOfSession) {
        steps.push({ kind: "rest", seconds: block.restSeconds });
      }
    }
  });

  return steps;
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
