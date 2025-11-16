import React from "react";
import type { Headphone } from "../data/headphones";
import { CompatibilityBadge } from "./CompatibilityBadge";
import { ScoreBadge } from "./ScoreBadge";

interface HeadphoneCardProps {
  headphone: Headphone;
  highlight?: boolean;
}

export function HeadphoneCard({ headphone, highlight = false }: HeadphoneCardProps) {
  return (
    <article className={`surface stack ${highlight ? "highlight" : ""}`}>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div>
          <h3>{headphone.name}</h3>
          <p className="muted">
            {headphone.brand} · {headphone.release} · {headphone.generation}
          </p>
        </div>
        <ScoreBadge score={headphone.appleIntegration.score} />
      </div>
      <p>
        {headphone.soundSignature}. Autonomie&nbsp;: {headphone.battery}. Poids&nbsp;:{" "}
        {headphone.weight} g.
      </p>
      <div className="badge-row">
        <CompatibilityBadge level={headphone.appleIntegration.level} context="apple" />
        <CompatibilityBadge level={headphone.pcIntegration.level} context="pc" />
        <span className="chip">{headphone.codecs.join(" · ")}</span>
        {headphone.spatialAudio && <span className="chip">Audio spatial</span>}
      </div>
      <div>
        <strong>Atouts</strong>
        <ul>
          {headphone.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>À surveiller</strong>
        <ul>
          {headphone.tradeoffs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Idéal pour</strong>
        <div className="badge-row">
          {headphone.useCases.map((useCase) => (
            <span className="chip" key={useCase}>
              {useCase}
            </span>
          ))}
        </div>
      </div>
      <div>
        <strong>Prix indicatif</strong>
        <p>
          {headphone.price.eur}€ · <span className="muted">{headphone.price.comment}</span>
        </p>
      </div>
      <div>
        <strong>Apple</strong>
        <p className="muted">{headphone.appleIntegration.details}</p>
      </div>
      <div>
        <strong>PC</strong>
        <p className="muted">{headphone.pcIntegration.details}</p>
      </div>
      {headphone.notes && (
        <div>
          <strong>Notes</strong>
          <p className="muted">{headphone.notes}</p>
        </div>
      )}
    </article>
  );
}
