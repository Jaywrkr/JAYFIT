import { ExercisePose } from "@/lib/types";

/**
 * Minimal looping SVG stick-figure animation, one per movement pattern.
 * Shares stroke styling so every exercise gets a consistent B&W illustration
 * without needing bespoke art per exercise.
 */
export function StickFigure({
  pose,
  className = "",
}: {
  pose: ExercisePose;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`stick-figure pose-${pose} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <circle className="sf-head" cx="50" cy="18" r="7" />
      <line className="sf-spine" x1="50" y1="25" x2="50" y2="58" />
      <g className="sf-arms">
        <line className="sf-arm-l" x1="50" y1="34" x2="34" y2="50" />
        <line className="sf-arm-r" x1="50" y1="34" x2="66" y2="50" />
      </g>
      <g className="sf-legs">
        <line className="sf-leg-l" x1="50" y1="58" x2="38" y2="88" />
        <line className="sf-leg-r" x1="50" y1="58" x2="62" y2="88" />
      </g>
    </svg>
  );
}
