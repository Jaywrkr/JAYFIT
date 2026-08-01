"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getSessionById } from "@/lib/sessions";
import { getExerciseById } from "@/lib/exercises";
import { buildSteps } from "@/lib/workout";
import { ThemeToggle } from "@/components/ThemeToggle";
import { addHistoryEntry, setLastEntryRpe } from "@/lib/history";

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
  const [rpe, setRpe] = useState<number | null>(null);

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

  useEffect(() => {
    if (finished && session) {
      addHistoryEntry(session.id);
      setRpe(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

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
        <h1 className="text-4xl font-medium tracking-tight">Listo</h1>
        <p className="text-muted">
          Completaste {session.name}. Buen trabajo.
        </p>

        <div className="flex w-full flex-col gap-2">
          <p className="text-sm font-medium text-foreground/80">
            ¿Qué tan duro estuvo? (1 = fácil, 10 = al límite)
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => {
                  setRpe(n);
                  setLastEntryRpe(session.id, n);
                }}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  rpe === n
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Link
            href={`/session/${session.id}/entrenar`}
            onClick={() => {
              setProgress({ index: 0, seconds: steps[0]?.seconds ?? 0 });
              setFinished(false);
            }}
            className="rounded-full bg-accent px-6 py-3.5 text-center text-base font-medium text-accent-foreground"
          >
            Repetir sesión
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border px-6 py-3.5 text-center text-base font-medium hover:border-foreground"
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
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ✕
        </button>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <ThemeToggle />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        {isPrepare && (
          <>
            <p className="text-sm font-medium uppercase tracking-widest text-muted">
              Prepárate
            </p>
            <p className="text-2xl font-medium">{session.name}</p>
          </>
        )}

        {isRest && (
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Descanso
          </p>
        )}

        {!isRest && !isPrepare && (
          <>
            <p className="text-sm font-medium uppercase tracking-widest text-muted">
              Ronda {step.setNumber} de {step.totalSets}
            </p>
            <h1 className="text-3xl font-medium leading-tight tracking-tight">
              {exercise?.name}
            </h1>
            {step.reps && (
              <p className="text-lg font-medium text-muted">
                {step.reps} repeticiones
              </p>
            )}
          </>
        )}

        <div className="text-7xl font-medium tabular-nums">{secondsLeft}</div>

        {!isRest && !isPrepare && exercise && (
          <p className="max-w-sm text-sm text-muted">
            {exercise.instructions}
          </p>
        )}

        {isRest && nextExercise && (
          <p className="text-base text-muted">
            Sigue: <span className="font-medium">{nextExercise.name}</span>
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setPaused((p) => !p)}
          className="flex-1 rounded-full border border-border px-6 py-3.5 text-base font-medium hover:border-foreground"
        >
          {paused ? "Reanudar" : "Pausar"}
        </button>
        <button
          onClick={skip}
          className="flex-1 rounded-full bg-accent px-6 py-3.5 text-base font-medium text-accent-foreground"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
