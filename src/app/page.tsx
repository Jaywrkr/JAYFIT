"use client";

import { useMemo, useState } from "react";
import { SESSIONS } from "@/lib/sessions";
import {
  BODY_PART_LABELS,
  BodyPart,
  DIFFICULTY_LABELS,
  Difficulty,
  TYPE_LABELS,
  ExerciseType,
} from "@/lib/types";
import { getSessionTypes } from "@/lib/workout";
import { SessionCard } from "@/components/SessionCard";

const BODY_PARTS = Object.keys(BODY_PART_LABELS) as BodyPart[];
const DIFFICULTIES = Object.keys(DIFFICULTY_LABELS) as Difficulty[];
const TYPES = Object.keys(TYPE_LABELS) as ExerciseType[];

type EquipmentFilter = "todos" | "sin-equipo" | "con-kettlebell";

export default function Home() {
  const [bodyPart, setBodyPart] = useState<BodyPart | "todos">("todos");
  const [difficulty, setDifficulty] = useState<Difficulty | "todos">("todos");
  const [equipment, setEquipment] = useState<EquipmentFilter>("todos");
  const [type, setType] = useState<ExerciseType | "todos">("todos");

  const sessions = useMemo(() => {
    return SESSIONS.filter((s) => {
      if (bodyPart !== "todos" && !s.bodyParts.includes(bodyPart)) return false;
      if (difficulty !== "todos" && s.difficulty !== difficulty) return false;
      const isBodyweightOnly =
        s.equipment.length === 1 && s.equipment[0] === "ninguno";
      if (equipment === "sin-equipo" && !isBodyweightOnly) return false;
      if (equipment === "con-kettlebell" && isBodyweightOnly) return false;
      if (type !== "todos" && !getSessionTypes(s).includes(type)) return false;
      return true;
    });
  }, [bodyPart, difficulty, equipment, type]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-5 py-10 sm:px-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-black tracking-tight">JAYFIT</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Sesiones de entrenamiento sin excusas. Cuerpo libre o kettlebell.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <FilterRow
          label="Zona"
          value={bodyPart}
          onChange={setBodyPart}
          options={[
            { value: "todos", label: "Todas" },
            ...BODY_PARTS.map((bp) => ({ value: bp, label: BODY_PART_LABELS[bp] })),
          ]}
        />
        <FilterRow
          label="Dificultad"
          value={difficulty}
          onChange={setDifficulty}
          options={[
            { value: "todos", label: "Todas" },
            ...DIFFICULTIES.map((d) => ({ value: d, label: DIFFICULTY_LABELS[d] })),
          ]}
        />
        <FilterRow
          label="Equipo"
          value={equipment}
          onChange={setEquipment}
          options={[
            { value: "todos", label: "Todo" },
            { value: "sin-equipo", label: "Sin equipo" },
            { value: "con-kettlebell", label: "Con kettlebell" },
          ]}
        />
        <FilterRow
          label="Tipo"
          value={type}
          onChange={setType}
          options={[
            { value: "todos", label: "Todos" },
            ...TYPES.map((t) => ({ value: t, label: TYPE_LABELS[t] })),
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
        {sessions.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-black/50 dark:text-white/50">
            No hay sesiones con esos filtros.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-black/40 dark:text-white/40">
        {label}
      </span>
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 text-black/70 hover:border-black/40 dark:border-white/20 dark:text-white/70 dark:hover:border-white/50"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
