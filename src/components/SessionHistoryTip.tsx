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
    <div className="flex flex-col gap-1 rounded-xl border border-black/10 p-3 text-sm dark:border-white/15">
      <span className="text-black/70 dark:text-white/70">
        Última vez: <strong>{formatRelativeDate(lastEntry.completedAt)}</strong>
        {lastEntry.rpe !== undefined && <> · esfuerzo {lastEntry.rpe}/10</>}
      </span>
      {tip && <span className="text-black/60 dark:text-white/60">{tip}</span>}
    </div>
  );
}
