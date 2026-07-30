import Link from "next/link";
import { Session, BODY_PART_LABELS, DIFFICULTY_LABELS } from "@/lib/types";
import { estimateSessionSeconds, formatMinutes } from "@/lib/workout";
import { Badge } from "./Badge";

export function SessionCard({ session }: { session: Session }) {
  const duration = formatMinutes(estimateSessionSeconds(session));
  const noEquipment =
    session.equipment.length === 1 && session.equipment[0] === "ninguno";

  return (
    <Link
      href={`/session/${session.id}`}
      className="group flex flex-col gap-3 rounded-2xl border border-black/10 p-5 transition-colors hover:border-black dark:border-white/15 dark:hover:border-white"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold leading-tight">{session.name}</h3>
        <span className="shrink-0 text-sm font-medium text-black/50 dark:text-white/50">
          {duration}
        </span>
      </div>
      <p className="text-sm text-black/60 dark:text-white/60">
        {session.description}
      </p>
      <div className="mt-1 flex flex-wrap gap-1.5">
        <Badge variant="solid">{DIFFICULTY_LABELS[session.difficulty]}</Badge>
        {session.bodyParts.map((bp) => (
          <Badge key={bp}>{BODY_PART_LABELS[bp]}</Badge>
        ))}
        <Badge>{noEquipment ? "Sin equipo" : "Con kettlebell"}</Badge>
      </div>
    </Link>
  );
}
