"use client";

import React, { useMemo } from "react";
import { headphones } from "./data/headphones";
import { ComparisonTable } from "./components/ComparisonTable";
import { HeadphoneCard } from "./components/HeadphoneCard";

const getTopBy = (key: "appleIntegration" | "pcIntegration", take = 3) => {
  return [...headphones]
    .sort((a, b) => b[key].score - a[key].score)
    .slice(0, take);
};

const segments = [
  {
    title: "Immersion totale dans l’écosystème Apple",
    summary:
      "Privilégiez des modèles capables de tirer parti de l’audio spatial, de la bascule automatique et du lossless Apple Music.",
    picks: ["airpods-max-v2", "airpods-max-v1", "sonos-ace"]
  },
  {
    title: "Polyvalence entre Mac et PC gaming/travail",
    summary:
      "Un bon codec PC (LC3, aptX Adaptive) ou un mode USB direct limite la latence lors des visioconférences et du gaming.",
    picks: ["sony-wh1000xm6", "sonos-ace", "sennheiser-momentum-4"]
  },
  {
    title: "Signature audiophile & matériaux premium",
    summary:
      "Optez pour des casques hi-fi avec USB-C audio ou jack pour profiter de fichiers haute résolution sur Mac/PC.",
    picks: ["bw-px8", "beoplay-hx", "sennheiser-momentum-4"]
  }
];

export default function Page() {
  const topApple = useMemo(() => getTopBy("appleIntegration", 3), []);
  const topHybrid = useMemo(() => getTopBy("pcIntegration", 3), []);

  return (
    <main>
      <section className="hero">
        <h1>Comparatif casques premium Apple & PC</h1>
        <p>
          Analyse détaillée des casques haut de gamme capables d&apos;exploiter au mieux
          l&apos;écosystème Apple, tout en restant impeccables sur un PC pour le travail ou
          le gaming occasionnel.
        </p>
      </section>

      <section className="grid grid-3">
        {headphones.map((headphone) => (
          <HeadphoneCard
            key={headphone.id}
            headphone={headphone}
            highlight={headphone.id === "airpods-max-v2" || headphone.id === "sonos-ace"}
          />
        ))}
      </section>

      <section>
        <ComparisonTable data={headphones} />
      </section>

      <section className="surface stack highlight">
        <h2>Recommandations rapides</h2>
        <div className="row">
          <div>
            <h3>Top intégration Apple</h3>
            <ul>
              {topApple.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> — {item.appleIntegration.details}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Top usage hybride Mac + PC</h3>
            <ul>
              {topHybrid.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> — {item.pcIntegration.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-3">
        {segments.map((segment) => (
          <div className="surface stack" key={segment.title}>
            <h2>{segment.title}</h2>
            <p className="muted">{segment.summary}</p>
            <ul>
              {segment.picks.map((id) => {
                const headphone = headphones.find((item) => item.id === id);
                if (!headphone) {
                  return null;
                }
                return (
                  <li key={id}>
                    <strong>{headphone.name}</strong> · {headphone.soundSignature}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="surface stack">
        <h2>Checklist Apple</h2>
        <ul>
          <li>
            <strong>Audio spatial & Dolby Atmos :</strong> requis pour Apple TV+, Apple Music
            et Vision Pro. Les AirPods Max et Bose QC Ultra le gèrent nativement.
          </li>
          <li>
            <strong>Bascule automatique :</strong> unique aux AirPods (et Beats récents).
            Les autres modèles nécessitent la sélection Bluetooth manuelle.
          </li>
          <li>
            <strong>Lossless Apple Music :</strong> uniquement via USB-C audio (AirPods Max
            V2, Sonos Ace, Px8) ou adaptateur filaire.
          </li>
        </ul>
      </section>

      <section className="surface stack">
        <h2>Checklist PC</h2>
        <ul>
          <li>
            <strong>Latence :</strong> privilégiez aptX Adaptive, LC3 ou USB-C audio pour le
            gaming et la visioconférence. Les codecs AAC/SBC sont suffisants pour la musique.
          </li>
          <li>
            <strong>Multipoint :</strong> Sony XM6 (3 appareils), Sonos Ace (2) et Bose QC
            Ultra (2) facilitent la bascule Mac ↔ PC ↔ smartphone.
          </li>
          <li>
            <strong>Filaire :</strong> Momentum 4 et Px8 livrés avec jack 3,5 mm, pratique
            pour les PC fixes ou consoles.
          </li>
        </ul>
      </section>

      <section className="surface stack">
        <h2>Conseils pratiques</h2>
        <ul>
          <li>
            <strong>Environnement mixte Apple + Windows :</strong> Sonos Ace offre la
            meilleure cohérence entre les deux mondes grâce à l&apos;USB-C audio et au
            multipoint stable.
          </li>
          <li>
            <strong>Studio léger / logic pro :</strong> AirPods Max V2 et B&W Px8 assurent
            une restitution neutre et support filaire/USB pour monitoring rapide.
          </li>
          <li>
            <strong>Gaming PC :</strong> Sony XM6 avec dongle WLA-NS7 ou Momentum 4 filaire
            pour limiter la latence et profiter d&apos;un surround virtuel.
          </li>
        </ul>
      </section>
    </main>
  );
}
