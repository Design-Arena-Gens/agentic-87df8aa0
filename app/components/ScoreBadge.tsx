import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const getTone = (score: number) => {
  if (score >= 9) return "tag";
  if (score >= 7.5) return "tag warning";
  return "tag danger";
};

export function ScoreBadge({ score }: ScoreBadgeProps) {
  return <span className={getTone(score)}>{score.toFixed(1)}/10</span>;
}
