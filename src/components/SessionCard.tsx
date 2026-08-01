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
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-all hover:border-foreground hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-medium leading-tight tracking-tight">{session.name}</h3>
        <span className="shrink-0 text-sm font-medium text-muted">
          {duration}
        </span>
      </div>
      <p className="text-sm text-muted">
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
