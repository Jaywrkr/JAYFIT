import Link from "next/link";
import { notFound } from "next/navigation";
import { SESSIONS, getSessionById } from "@/lib/sessions";
import { getExerciseById } from "@/lib/exercises";
import {
  BODY_PART_LABELS,
  DIFFICULTY_LABELS,
  EQUIPMENT_LABELS,
  TYPE_LABELS,
} from "@/lib/types";
import { buildRounds, estimateSessionSeconds, formatMinutes } from "@/lib/workout";
import { Badge } from "@/components/Badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SessionHistoryTip } from "@/components/SessionHistoryTip";

export function generateStaticParams() {
  return SESSIONS.map((s) => ({ id: s.id }));
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = getSessionById(id);
  if (!session) notFound();

  const duration = formatMinutes(estimateSessionSeconds(session));
  const rounds = buildRounds(session);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-10 sm:px-8">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="text-sm font-medium text-muted hover:text-foreground"
        >
          ← Sesiones
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium tracking-tight">{session.name}</h1>
        <p className="text-muted">{session.description}</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="solid">{DIFFICULTY_LABELS[session.difficulty]}</Badge>
          {session.bodyParts.map((bp) => (
            <Badge key={bp}>{BODY_PART_LABELS[bp]}</Badge>
          ))}
          <Badge>{duration}</Badge>
        </div>
        <div className="text-sm text-muted">
          Equipo: {session.equipment.map((e) => EQUIPMENT_LABELS[e]).join(" / ")}
        </div>
      </div>

      <SessionHistoryTip sessionId={session.id} />

      <Link
        href={`/session/${session.id}/entrenar`}
        className="rounded-full bg-accent px-6 py-3.5 text-center text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Empezar entrenamiento
      </Link>

      <div className="flex flex-col gap-6">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted">
          Timeline del entrenamiento
        </h2>
        {(() => {
          const seen = new Set<string>();
          return rounds.map((round) => (
            <div key={round.roundNumber} className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Ronda {round.roundNumber}
              </span>
              <ol className="flex flex-col divide-y divide-border">
                {round.items.map((item) => {
                  const exercise = getExerciseById(item.exerciseId);
                  if (!exercise) return null;
                  const showDescription = !seen.has(item.exerciseId);
                  seen.add(item.exerciseId);
                  return (
                    <li key={`${round.roundNumber}-${item.blockIndex}`} className="flex flex-col gap-1 py-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-medium">{exercise.name}</span>
                        <span className="shrink-0 text-sm text-muted">
                          {item.reps ? `${item.reps} reps` : `${item.workSeconds}s`}
                        </span>
                      </div>
                      {showDescription && (
                        <>
                          <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
                            {TYPE_LABELS[exercise.type]}
                          </span>
                          <p className="text-sm text-muted">
                            {exercise.instructions}
                          </p>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          ));
        })()}
      </div>
    </div>
  );
}
