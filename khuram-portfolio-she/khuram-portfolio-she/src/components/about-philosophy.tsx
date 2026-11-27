import { Check } from "lucide-react";

/*
 * About Philosophy panel — distinct from the homepage Philosophy section.
 * Image-backed panel (max-width 1000px) with a 480px-wide stack of two light
 * cards on the right. Intro card + body card (paragraphs, 80px gap, checklist,
 * "Talk With Me" button linking to /book). Khuram-specific content.
 */

const SATOSHI = '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const philosophyAboutConfig = {
  image:
    "https://framerusercontent.com/images/nAvnJCSVsBuAhYXIcZ74X4IUml0.png?width=3346&height=2266",
  label: "My Approach",
  heading: "Start with the customer journey.",
  paragraphs: [
    "Before adding another workflow, I map what happens from the first enquiry to the next conversation, booking, and sale.",
    "Then I connect the pages, CRM, calendars, and follow-up so the team can see each lead and act with confidence.",
    "The result is a system people can understand, use, and improve as the business changes.",
  ],
  checklist: [
    "Clear pipeline ownership.",
    "Follow-up that fits the process.",
    "Training for the team using it.",
  ],
};

export function AboutPhilosophy() {
  return (
    <section aria-labelledby="about-philosophy-heading" className="about-philosophy">
      <div className="about-philosophy-panel">
        <img
          src={philosophyAboutConfig.image}
          alt="Dark studio backdrop used as the approach panel cover"
          loading="lazy"
          className="about-philosophy-bg"
        />
        <div aria-hidden="true" className="about-philosophy-overlay" />

        <div className="about-philosophy-cards">
          <div className="about-philosophy-intro-card">
            <span className="section-label">{philosophyAboutConfig.label}</span>
            <h2 id="about-philosophy-heading" className="about-philosophy-heading">
              {philosophyAboutConfig.heading}
            </h2>
          </div>

          <div className="about-philosophy-body-card">
            <div className="about-philosophy-paragraphs">
              {philosophyAboutConfig.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about-philosophy-actions">
              <ul className="about-philosophy-checklist">
                {philosophyAboutConfig.checklist.map((item) => (
                  <li key={item}>
                    <span className="about-philosophy-check-tile" aria-hidden="true">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <span className="about-philosophy-check-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/book" className="btn-dark about-philosophy-cta">
                Talk With Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-philosophy { width: 100%; background: #ffffff; padding: 24px; box-sizing: border-box; }
        .about-philosophy-panel { position: relative; width: 100%; max-width: 1000px; margin-inline: auto; min-height: 560px; border-radius: 56px; padding: 24px; overflow: hidden; box-sizing: border-box; display: flex; align-items: center; justify-content: flex-end; }
        .about-philosophy-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0; }
        .about-philosophy-overlay { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.35); z-index: 1; }
        .about-philosophy-cards { position: relative; z-index: 2; width: 480px; max-width: 100%; display: flex; flex-direction: column; gap: 12px; }
        .about-philosophy-intro-card, .about-philosophy-body-card { background: #fafafa; border-radius: 48px; box-sizing: border-box; }
        .about-philosophy-intro-card { padding: 32px; display: flex; flex-direction: column; gap: 40px; }
        .about-philosophy-heading { margin: 0; font-family: ${SATOSHI}; font-size: 24px; line-height: 31.2px; font-weight: 500; letter-spacing: -0.48px; color: #09090b; }
        .about-philosophy-body-card { padding: 40px 32px; }
        .about-philosophy-paragraphs { display: flex; flex-direction: column; gap: 16px; }
        .about-philosophy-paragraphs p { margin: 0; font-family: ${SATOSHI}; font-size: 16px; line-height: 24px; font-weight: 400; color: #52525b; }
        .about-philosophy-actions { margin-top: 80px; display: flex; flex-direction: column; align-items: flex-start; }
        .about-philosophy-checklist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
        .about-philosophy-checklist li { display: flex; align-items: center; gap: 12px; min-height: 32px; }
        .about-philosophy-check-tile { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; flex-shrink: 0; border-radius: 12px; background: #f4f4f5; color: #09090b; }
        .about-philosophy-check-text { font-family: ${SATOSHI}; font-size: 14px; line-height: 20px; font-weight: 500; letter-spacing: -0.28px; color: #09090b; }
        .about-philosophy-cta { margin-top: 16px; }
        @media (max-width: 809px) {
          .about-philosophy { padding: 16px; }
          .about-philosophy-panel { min-height: 0; flex-direction: column; align-items: stretch; justify-content: flex-start; padding: 16px; }
          .about-philosophy-cards { width: 100%; }
          .about-philosophy-intro-card { padding: 24px; gap: 24px; }
          .about-philosophy-body-card { padding: 24px; }
          .about-philosophy-actions { margin-top: 40px; }
        }
      `}</style>
    </section>
  );
}
