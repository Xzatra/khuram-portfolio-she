import { useEffect, useRef, useState } from "react";

/*
 * About Experience — a wider 1000px timeline (distinct from the homepage's
 * 624px card). Desktop rows: marker left, practice area middle, description
 * right. 48px dashed connectors aligned to the marker column. Four truthful
 * practice areas (no fictional employers or dates). Includes a compact
 * Academy mention below the experience card.
 */

const SATOSHI = '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

type Area = { id: string; area: string; category: string; description: string };

const practiceAreas: Area[] = [
  {
    id: "digital-marketing",
    area: "Digital Marketing",
    category: "Focus",
    description: "Campaign and conversion thinking across websites, search, and paid channels",
  },
  {
    id: "ghl-systems",
    area: "GoHighLevel Systems",
    category: "Focus",
    description: "CRM, pipelines, calendars, and connected client operations",
  },
  {
    id: "automation-ai",
    area: "Automation & AI",
    category: "Focus",
    description: "Practical workflows and assistants for lead response and handoff",
  },
  {
    id: "training-mentorship",
    area: "Training & Mentorship",
    category: "Focus",
    description: "Hands-on guidance that helps learners deliver client-ready systems",
  },
];

const aboutExperienceConfig = {
  label: "My Experience",
  heading: "Experience that connects the pieces",
  intro:
    "A focused set of practice areas that cover the journey from enquiry to a working, followable system.",
  academy:
    "I also teach practical GoHighLevel skills through GHL Growth Success Academy, with live classes, assignments, and feedback.",
  academyHref: "/academy",
};

export function AboutExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="about-experience-heading"
      className={`about-experience${inView ? " is-visible" : ""}`}
    >
      <div className="about-experience-inner">
        <div className="about-experience-head">
          <h2 id="about-experience-heading" className="about-experience-heading">
            {aboutExperienceConfig.heading}
          </h2>
        </div>

        <div className="about-experience-panel">
          <p className="about-experience-intro">{aboutExperienceConfig.intro}</p>

          <div className="about-experience-rolepanel">
            {practiceAreas.map((item, index) => (
              <div className="about-exp-role" key={item.id}>
                <div className="about-exp-row">
                  <div className="about-exp-marker-col" aria-hidden="true">
                    <span className="about-exp-marker" />
                  </div>
                  <div className="about-exp-role-col">
                    <h3 className="about-exp-role-title">{item.area}</h3>
                    <p className="about-exp-dates">{item.category}</p>
                  </div>
                  <div className="about-exp-desc-col">
                    <p className="about-exp-desc">{item.description}</p>
                  </div>
                </div>
                {index < practiceAreas.length - 1 && (
                  <div className="about-exp-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compact Academy mention */}
        <p className="about-exp-academy">
          {aboutExperienceConfig.academy}{" "}
          <a href={aboutExperienceConfig.academyHref} className="about-exp-academy-link">
            Visit the Academy →
          </a>
        </p>
      </div>

      <style>{`
        .about-experience { width: 100%; background: #ffffff; padding: 80px 24px; box-sizing: border-box; }
        .about-experience-inner { width: 100%; max-width: 1000px; margin-inline: auto; min-width: 0; }
        .about-experience-head { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 12px; }
        .about-experience-heading { margin: 0; font-family: ${SATOSHI}; font-size: 48px; line-height: 52px; font-weight: 500; letter-spacing: -2.4px; color: #09090b; }
        .about-experience-panel { margin-top: 48px; background: #f4f4f5; border-radius: 56px; padding: 32px 12px 12px; box-sizing: border-box; }
        .about-experience-intro { margin: 0 0 24px; padding: 0 20px; max-width: 624px; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; color: #52525b; }
        .about-experience-rolepanel { background: #fafafa; border-radius: 48px; padding: 32px 40px; box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); box-sizing: border-box; }
        .about-exp-role { display: block; }
        .about-exp-row { display: grid; grid-template-columns: 24px minmax(0, 1fr) minmax(0, 1.4fr); column-gap: 24px; align-items: center; }
        .about-exp-marker-col { display: flex; align-items: center; justify-content: center; }
        .about-exp-marker { width: 8px; height: 8px; border-radius: 9999px; background: #09090b; box-shadow: 0 0 0 4px rgba(9, 9, 11, 0.08); flex-shrink: 0; }
        .about-exp-role-title { margin: 0; font-family: ${SATOSHI}; font-size: 16px; line-height: 20px; font-weight: 500; letter-spacing: -0.32px; color: #09090b; }
        .about-exp-dates { margin: 2px 0 0; font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 400; letter-spacing: -0.28px; color: #71717a; }
        .about-exp-desc { margin: 0; font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 400; letter-spacing: -0.28px; color: #52525b; }
        .about-exp-connector { width: 0; height: 48px; margin-left: 12px; border-left: 1px dashed #d4d4d8; }
        .about-exp-academy { margin: 32px 0 0; padding: 0 8px; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; color: #52525b; text-align: center; }
        .about-exp-academy-link { color: #09090b; font-weight: 500; text-decoration: none; }
        .about-exp-academy-link:hover { text-decoration: underline; }
        @media (max-width: 1199px) { .about-experience-heading { font-size: 40px; line-height: 44px; } }
        @media (max-width: 809px) {
          .about-experience { padding: 48px 16px; }
          .about-experience-heading { font-size: 32px; line-height: 36px; }
          .about-experience-panel { padding: 24px 8px 8px; }
          .about-experience-rolepanel { padding: 24px 20px; }
          .about-exp-row { grid-template-columns: 16px 1fr; column-gap: 16px; row-gap: 8px; }
          .about-exp-desc-col { grid-column: 2; }
          .about-exp-connector { margin-left: 8px; }
          .about-exp-academy { text-align: center; }
        }
      `}</style>
    </section>
  );
}
