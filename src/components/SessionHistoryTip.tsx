"use client";

import { useEffect, useState } from "react";
import {
  formatRelativeDate,
  getLastEntryForSession,
  getProgressionTip,
  HistoryEntry,
} from "@/lib/history";

export function SessionHistoryTip({ sessionId }: { sessionId: string }) {
  const [lastEntry, setLastEntry] = useState<HistoryEntry | null | undefined>(undefined);

  useEffect(() => {
    setLastEntry(getLastEntryForSession(sessionId) ?? null);
  }, [sessionId]);

  if (!lastEntry) return null;

  const tip = getProgressionTip(lastEntry);

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-3 text-sm">
      <span className="text-foreground/80">
        Última vez: <strong className="font-medium">{formatRelativeDate(lastEntry.completedAt)}</strong>
        {lastEntry.rpe !== undefined && <> · esfuerzo {lastEntry.rpe}/10</>}
      </span>
      {tip && <span className="text-muted">{tip}</span>}
    </div>
  );
}
