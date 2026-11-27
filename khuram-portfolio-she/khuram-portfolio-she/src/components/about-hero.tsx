import { useEffect, useState } from "react";

/*
 * About hero — image orbit ring + small "GOHIGHLEVEL SPECIALIST" label.
 * 20 thumbnail positions around a circular ring (18° spacing), 10 images used
 * twice. Ring rotates clockwise over 40s linear infinite; centre intro stays
 * stationary. Reduced motion shows a static ring. Content visible by default.
 */

const SATOSHI = '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const orbitImages = [
  "https://framerusercontent.com/images/hVYK0WSNcPdBxQHQADe9z8zLLw.png",
  "https://framerusercontent.com/images/xiLzZgy3jYf4lkNwFRCA2YicvCs.png",
  "https://framerusercontent.com/images/E3MtlfQVIcRkQpQvdZeHXrreyUU.png",
  "https://framerusercontent.com/images/DlaZyYukLrgCyOwnLbFDrjNPWyw.png",
  "https://framerusercontent.com/images/ASn2v5JIG69kj4XZBiajqgyWH0.png",
  "https://framerusercontent.com/images/MKw8sF9d2zeVtAMFYWYv9RepLPg.png",
  "https://framerusercontent.com/images/KM6WeLGUWNNbbqORGf2TfTxg.png",
  "https://framerusercontent.com/images/DCyoSe4o70ddOEhiWamZ5Cm8V4k.png",
  "https://framerusercontent.com/images/q1KELJ5MACxL8MnzmCJrpopJVCo.png",
  "https://framerusercontent.com/images/rfjs12UXWVa5GLRXNd7S13bWw8Q.png",
];

// 10 images used twice around a 20-position ring.
const orbitSlots = [...orbitImages, ...orbitImages];

const heroConfig = {
  intro:
    "I'm Khuram Shahzad, a GoHighLevel specialist and founder of KDM Growth. I work across CRM setup, lead generation, automation, and practical training.",
  wordmark: "GOHIGHLEVEL SPECIALIST",
};

export function AboutHero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-hero-heading"
      className={`about-hero${ready ? " about-ready" : ""}`}
    >
      <div className="about-hero-inner">
        <div className="about-orbit-stage">
          <div className="about-orbit-ring" aria-hidden="true">
            {orbitSlots.map((src, i) => (
              <span
                key={i}
                className="about-orbit-thumb"
                style={{ "--angle": `${i * 18}deg` } as React.CSSProperties}
              >
                <img src={src} alt="" loading="lazy" />
              </span>
            ))}
          </div>

          <div className="about-orbit-center">
            <h1 id="about-hero-heading" className="about-hero-intro">
              {heroConfig.intro}
            </h1>
          </div>

          {/* Small label beneath the orbit, without covering the portrait */}
          <div className="about-wordmark-wrap">
            <span className="about-wordmark-label">{heroConfig.wordmark}</span>
          </div>
        </div>
      </div>

      <style>{`
        .about-hero { width: 100%; background: #ffffff; padding: 24px; box-sizing: border-box; }
        .about-hero-inner { width: 100%; max-width: 1000px; margin-inline: auto; min-width: 0; display: flex; flex-direction: column; gap: 24px; }
        .about-orbit-stage { position: relative; width: 100%; aspect-ratio: 1 / 1; max-width: 1000px; margin-inline: auto; min-width: 0; overflow: hidden; }
        .about-orbit-ring { position: absolute; inset: 0; animation: about-orbit-rotate 40s linear infinite; will-change: transform; }
        @keyframes about-orbit-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .about-orbit-thumb { position: absolute; left: calc(50% + 45.5% * cos(var(--angle))); top: calc(50% + 45.5% * sin(var(--angle))); width: 9%; aspect-ratio: 1 / 1; transform: translate(-50%, -50%) rotate(var(--angle)); border-radius: 16px; overflow: hidden; background: #e4e4e7; }
        .about-orbit-thumb img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .about-orbit-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 18%; pointer-events: none; }
        .about-hero-intro { margin: 0; max-width: 460px; font-family: ${SATOSHI}; font-size: clamp(18px, 2.4vw, 24px); line-height: 1.3; font-weight: 500; color: #09090b; text-align: center; }
        .about-wordmark-wrap { position: absolute; left: 0; right: 0; bottom: 8%; display: flex; justify-content: center; pointer-events: none; }
        .about-wordmark-label { font-family: ${SATOSHI}; font-size: clamp(14px, 2.2vw, 22px); font-weight: 500; letter-spacing: 0.18em; color: #09090b; text-transform: uppercase; }
        @media (max-width: 1199px) { .about-hero-intro { font-size: 22px; } }
        @media (max-width: 809px) { .about-hero { padding: 16px; } .about-hero-intro { font-size: 18px; } .about-orbit-center { padding: 22%; } .about-wordmark-wrap { bottom: 5%; } }
        @media (prefers-reduced-motion: reduce) { .about-orbit-ring { animation: none; } }
      `}</style>
    </section>
  );
}
