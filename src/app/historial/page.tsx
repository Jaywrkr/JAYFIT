"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getHistory, getStreak, HistoryEntry } from "@/lib/history";
import { getSessionById } from "@/lib/sessions";

export default function HistorialPage() {
  const [history, setHistory] = useState<HistoryEntry[] | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const h = getHistory();
    setHistory([...h].reverse());
    setStreak(getStreak(h));
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-10 sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
      >
        ← Sesiones
      </Link>

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black tracking-tight">Historial</h1>
        {streak > 0 && (
          <p className="text-sm text-black/60 dark:text-white/60">
            🔥 {streak} {streak === 1 ? "día seguido" : "días seguidos"} entrenando.
          </p>
        )}
      </div>

      {history === null ? null : history.length === 0 ? (
        <p className="py-10 text-center text-sm text-black/50 dark:text-white/50">
          Todavía no completaste ninguna sesión. Cuando termines una, aparece aquí.
        </p>
      ) : (
        <ol className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
          {history.map((entry, i) => {
            const session = getSessionById(entry.sessionId);
            const date = new Date(entry.completedAt);
            return (
              <li key={i} className="flex items-center justify-between gap-3 py-3">
                <div className="flex flex-col gap-0.5">
                  <Link
                    href={session ? `/session/${session.id}` : "#"}
                    className="font-semibold hover:underline"
                  >
                    {session?.name ?? entry.sessionId}
                  </Link>
                  <span className="text-xs text-black/50 dark:text-white/50">
                    {date.toLocaleDateString("es", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                {entry.rpe !== undefined && (
                  <span className="shrink-0 rounded-full border border-black/15 px-2.5 py-1 text-xs font-medium dark:border-white/20">
                    {entry.rpe}/10
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
