"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getSessionById } from "@/lib/sessions";
import { getExerciseById } from "@/lib/exercises";
import { buildSteps } from "@/lib/workout";
import { StickFigure } from "@/components/StickFigure";

export default function TrainPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const session = getSessionById(params.id);

  const steps = useMemo(() => (session ? buildSteps(session) : []), [session]);

  const [progress, setProgress] = useState({
    index: 0,
    seconds: steps[0]?.seconds ?? 0,
  });
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  const stepIndex = progress.index;
  const secondsLeft = progress.seconds;
  const step = steps[stepIndex];
  const nextStep = steps[stepIndex + 1];
  const exercise = step?.exerciseId ? getExerciseById(step.exerciseId) : undefined;
  const nextExercise = nextStep?.exerciseId
    ? getExerciseById(nextStep.exerciseId)
    : undefined;

  useEffect(() => {
    if (paused || finished || !step) return;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p.seconds > 1) return { index: p.index, seconds: p.seconds - 1 };
        return { index: p.index + 1, seconds: steps[p.index + 1]?.seconds ?? 0 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [paused, finished, step, steps]);

  useEffect(() => {
    if (stepIndex >= steps.length && steps.length > 0) {
      setFinished(true);
    }
  }, [stepIndex, steps.length]);

  if (!session) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-5 text-center">
        <p>Sesión no encontrada.</p>
        <Link href="/" className="underline">
          Volver
        </Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-5 text-center">
        <h1 className="text-4xl font-black">Listo</h1>
        <p className="text-black/60 dark:text-white/60">
          Completaste {session.name}. Buen trabajo.
        </p>
        <div className="flex w-full flex-col gap-3">
          <Link
            href={`/session/${session.id}/entrenar`}
            onClick={() => {
              setProgress({ index: 0, seconds: steps[0]?.seconds ?? 0 });
              setFinished(false);
            }}
            className="rounded-full bg-black px-6 py-3.5 text-center text-base font-semibold text-white dark:bg-white dark:text-black"
          >
            Repetir sesión
          </Link>
          <Link
            href="/"
            className="rounded-full border border-black/20 px-6 py-3.5 text-center text-base font-semibold dark:border-white/25"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  if (!step) return null;

  const isRest = step.kind === "rest";
  const isPrepare = step.kind === "prepare";
  const progressPercent = ((stepIndex + 1) / steps.length) * 100;

  function skip() {
    const nextIndex = stepIndex + 1;
    if (nextIndex >= steps.length) {
      setFinished(true);
    } else {
      setProgress({ index: nextIndex, seconds: steps[nextIndex].seconds });
    }
  }

  function goBack() {
    if (confirm("¿Salir del entrenamiento? Perderás el progreso de esta sesión.")) {
      router.push(`/session/${session!.id}`);
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-5 py-8 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={goBack}
          className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
        >
          ✕
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/15">
          <div
            className="h-full rounded-full bg-black transition-all dark:bg-white"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        {isPrepare && (
          <>
            <p className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
              Prepárate
            </p>
            <p className="text-2xl font-bold">{session.name}</p>
          </>
        )}

        {isRest && (
          <p className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
            Descanso
          </p>
        )}

        {!isRest && !isPrepare && (
          <>
            <p className="text-sm font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
              Serie {step.setNumber} de {step.totalSets}
            </p>
            <h1 className="text-3xl font-black leading-tight">
              {exercise?.name}
            </h1>
            {exercise && (
              <div className="h-28 w-28 text-black/80 dark:text-white/80">
                <StickFigure pose={exercise.pose} />
              </div>
            )}
            {step.reps && (
              <p className="text-lg font-medium text-black/60 dark:text-white/60">
                {step.reps} repeticiones
              </p>
            )}
          </>
        )}

        <div className="text-7xl font-black tabular-nums">{secondsLeft}</div>

        {!isRest && !isPrepare && exercise && (
          <p className="max-w-sm text-sm text-black/50 dark:text-white/50">
            {exercise.instructions}
          </p>
        )}

        {isRest && nextExercise && (
          <p className="text-base text-black/60 dark:text-white/60">
            Sigue: <span className="font-semibold">{nextExercise.name}</span>
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setPaused((p) => !p)}
          className="flex-1 rounded-full border border-black/20 px-6 py-3.5 text-base font-semibold dark:border-white/25"
        >
          {paused ? "Reanudar" : "Pausar"}
        </button>
        <button
          onClick={skip}
          className="flex-1 rounded-full bg-black px-6 py-3.5 text-base font-semibold text-white dark:bg-white dark:text-black"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
