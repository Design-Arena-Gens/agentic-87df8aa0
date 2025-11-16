import React from "react";
import type { CompatibilityLevel } from "../data/headphones";

interface CompatibilityBadgeProps {
  level: CompatibilityLevel;
  context: "apple" | "pc";
}

const palette: Record<CompatibilityLevel, string> = {
  Excellente: "tag",
  "Très bonne": "tag",
  Bonne: "tag warning",
  Correcte: "tag danger"
};

const labelByContext: Record<CompatibilityLevel, string> = {
  Excellente: "Intégration parfaite",
  "Très bonne": "Intégration solide",
  Bonne: "Compatible avec compromis",
  Correcte: "Fonctionnel basique"
};

export function CompatibilityBadge({ level, context }: CompatibilityBadgeProps) {
  return (
    <span className={palette[level]}>
      {context === "apple" ? "Apple · " : "PC · "}
      {labelByContext[level]}
    </span>
  );
}
