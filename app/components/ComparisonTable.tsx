import React from "react";
import type { Headphone } from "../data/headphones";
import { ScoreBadge } from "./ScoreBadge";

interface ComparisonTableProps {
  data: Headphone[];
}

const headers = [
  "Modèle",
  "Prix indicatif",
  "Autonomie ANC",
  "Compatibilité Apple",
  "Compatibilité PC",
  "Codecs clés",
  "Points forts",
  "Points faibles"
];

export function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <div className="surface comparison-table">
      <h2>Comparatif synthétique</h2>
      <div className="legend">
        <div className="legend-item">
          <span className="green" /> Excellent
        </div>
        <div className="legend-item">
          <span className="yellow" /> Bon
        </div>
        <div className="legend-item">
          <span className="red" /> À considérer
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.name}</strong>
                <br />
                <span className="muted">{item.brand}</span>
              </td>
              <td>
                {item.price.eur}€
                <br />
                <span className="muted">{item.price.comment}</span>
              </td>
              <td>{item.battery}</td>
              <td>
                <ScoreBadge score={item.appleIntegration.score} />
                <p className="muted">{item.appleIntegration.level}</p>
              </td>
              <td>
                <ScoreBadge score={item.pcIntegration.score} />
                <p className="muted">{item.pcIntegration.level}</p>
              </td>
              <td>{item.codecs.join(" · ")}</td>
              <td>
                <ul>
                  {item.strengths.slice(0, 2).map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {item.tradeoffs.slice(0, 2).map((tradeoff) => (
                    <li key={tradeoff}>{tradeoff}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
