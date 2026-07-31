const STORAGE_KEY = "jayfit_history";

export interface HistoryEntry {
  sessionId: string;
  completedAt: string; // ISO timestamp
  rpe?: number; // esfuerzo percibido 1-10
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getHistory(): HistoryEntry[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(history: HistoryEntry[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

/** Registra una sesión completada y devuelve la entrada creada. */
export function addHistoryEntry(sessionId: string): HistoryEntry {
  const entry: HistoryEntry = { sessionId, completedAt: new Date().toISOString() };
  const history = getHistory();
  history.push(entry);
  saveHistory(history);
  return entry;
}

/** Actualiza el esfuerzo percibido (RPE) de la última entrada de una sesión. */
export function setLastEntryRpe(sessionId: string, rpe: number) {
  const history = getHistory();
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].sessionId === sessionId) {
      history[i].rpe = rpe;
      break;
    }
  }
  saveHistory(history);
}

function toLocalDateKey(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

/** Racha de días consecutivos con al menos una sesión completada (incluye hoy o ayer). */
export function getStreak(history: HistoryEntry[] = getHistory()): number {
  if (history.length === 0) return 0;

  const daysWithActivity = new Set(history.map((e) => toLocalDateKey(e.completedAt)));
  const today = new Date();
  const cursor = new Date(today);

  // Si hoy no entrenaste todavía, la racha puede seguir contando desde ayer.
  if (!daysWithActivity.has(toLocalDateKey(cursor.toISOString()))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (daysWithActivity.has(toLocalDateKey(cursor.toISOString()))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/** Última vez que se completó una sesión específica. */
export function getLastEntryForSession(
  sessionId: string,
  history: HistoryEntry[] = getHistory()
): HistoryEntry | undefined {
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i].sessionId === sessionId) return history[i];
  }
  return undefined;
}

export function formatRelativeDate(iso: string): string {
  const then = new Date(iso);
  const days = Math.floor((Date.now() - then.getTime()) / 86_400_000);
  if (days <= 0) return "hoy";
  if (days === 1) return "ayer";
  if (days < 7) return `hace ${days} días`;
  const weeks = Math.floor(days / 7);
  if (weeks === 1) return "hace 1 semana";
  if (weeks < 5) return `hace ${weeks} semanas`;
  const months = Math.floor(days / 30);
  return months <= 1 ? "hace 1 mes" : `hace ${months} meses`;
}

/**
 * Sugerencia de progresión simple basada en el esfuerzo percibido la última
 * vez: si fue fácil, empuja a subir volumen; si fue muy duro, sugiere
 * mantener el mismo nivel en vez de sumar más.
 */
export function getProgressionTip(lastEntry: HistoryEntry | undefined): string | null {
  if (!lastEntry || lastEntry.rpe === undefined) return null;
  if (lastEntry.rpe <= 4) {
    return "La última vez te resultó fácil (RPE bajo) — prueba sumar 1-2 repeticiones por ejercicio o reducir un poco el descanso.";
  }
  if (lastEntry.rpe >= 9) {
    return "La última vez fue muy exigente (RPE alto) — mantén el mismo volumen hoy y prioriza la técnica antes de sumar más.";
  }
  return "La última vez el esfuerzo fue adecuado — mantén el ritmo o suma una repetición extra por serie si te sientes bien.";
}
