import { KSLogo } from "@/components/ks-logo";
import { ContactForm, contactFormConfig } from "@/components/contact-form";

/*
 * Contact CTA + Footer section (Section 11).
 *
 * Wider footer layout (24px side insets inside the main column) — NOT forced
 * into the 1000px section wrapper. Two stacked panels with a 24px vertical gap:
 *  1. Contact CTA panel: monogram + nested form panel (ContactForm).
 *  2. Lower contact + navigation panel: email/phone row, then nav groups + legal.
 *
 * The form is NOT connected to a real submission endpoint yet — see
 * contact-form.tsx. Do not display false success when nothing is connected.
 */

const contactConfig = {
  monogram:
    "https://vibe.filesafe.space/1794496492347241952/assets/b2acf3e0-e1fd-489b-8bdf-79d2455b2f88.png",
  email: contactFormConfig.email,
  // Phone block hidden for now — no confirmed number. Re-enable by adding
  // `phone: "..."` and rendering the right-side link in cf-contact-row.
  phone: "",
  footerLinks: {
    groups: [
      {
        label: "Links",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        label: "Resources",
        links: [
          { label: "Services", href: "/services" },
          { label: "Blog", href: "/blog" },
          { label: "Works", href: "/works" },
          { label: "Academy", href: "/academy" },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
    copyright: "© 2026 Khuram Shahzad. All rights reserved.",
  },
};

export function ContactFooter({ forceH1 = false }: { forceH1?: boolean } = {}) {
  return (
    <section id="contact" className="cf-section" aria-labelledby="contact-heading">
      <div className="cf-stack">
        {/* ── Contact CTA panel ── */}
        <div className="cf-cta-panel">
          {/* Monogram: ~55px, links to homepage — KS white variant on dark tile */}
          <a href="/" className="cf-monogram" aria-label="Back to homepage">
            <KSLogo variant="white" style={{ width: 32, height: 32 }} />
          </a>

          {/* Nested form panel (extracted — see contact-form.tsx) */}
          <ContactForm forceH1={forceH1} />
        </div>

        {/* ── Lower contact + navigation panel ── */}
        <div className="cf-lower-panel">
          {/* First row: email left, phone right (phone hidden until a number is supplied) */}
          <div className="cf-contact-row">
            <a href={`mailto:${contactConfig.email}`} className="cf-contact-link">
              {contactConfig.email}
            </a>
            {contactConfig.phone && (
              <a
                href={`tel:${contactConfig.phone.replace(/[^+\d]/g, "")}`}
                className="cf-contact-link cf-contact-right"
              >
                {contactConfig.phone}
              </a>
            )}
          </div>

          {/* Second row: nav groups left, legal + copyright right */}
          <div className="cf-nav-row">
            {/* Left: link groups */}
            <div className="cf-nav-groups">
              {contactConfig.footerLinks.groups.map((group) => (
                <div key={group.label} className="cf-nav-group">
                  <span className="cf-nav-label">{group.label}</span>
                  <div className="cf-nav-links">
                    {group.links.map((link) => (
                      <a key={link.label} href={link.href} className="cf-nav-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: legal + copyright */}
            <div className="cf-legal">
              <div className="cf-legal-links">
                {contactConfig.footerLinks.legal.map((link, i) => (
                  <span key={link.label} className="cf-legal-item">
                    <a href={link.href} className="cf-nav-link">
                      {link.label}
                    </a>
                    {i < contactConfig.footerLinks.legal.length - 1 && (
                      <span aria-hidden="true" className="cf-legal-dot" />
                    )}
                  </span>
                ))}
              </div>
              <span className="cf-copyright">{contactConfig.footerLinks.copyright}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Component-scoped styles ── */}
      <style>{`
        /* Outer section: white, 80px 24px padding (footer wrapper) */
        .cf-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }

        /* Stack of two main panels, 24px vertical gap */
        .cf-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        /* ── CTA panel ──
         * Width 100%, #F4F4F5, radius 56px, padding 32px 12px 12px,
         * flex column, align center, gap 32px. */
        .cf-cta-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
          padding: 32px 12px 12px;
          background: #f4f4f5;
          border-radius: 56px;
          box-sizing: border-box;
        }

        /* Monogram: ~55px, links to homepage */
        .cf-monogram {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          border-radius: 14px;
          background: #27272a;
          box-shadow: 0 4px 10px -4px rgba(0,0,0,0.5), 0 8px 14px -2px rgba(0,0,0,0.25);
        }
        .cf-monogram-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        /* Nested form panel: #FAFAFA, radius 48px, padding 40px 24px, shadow */
        .cf-form-panel {
          width: 100%;
          background: #fafafa;
          border-radius: 48px;
          padding: 40px 24px;
          box-shadow: 0 10px 48px rgba(0, 0, 0, 0.15);
          box-sizing: border-box;
        }

        /* Centre content in max-width 460px */
        .cf-form-content {
          width: 100%;
          max-width: 460px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 0;
        }

        /* Heading: 48px/52px, weight 500, -2.4px, #09090B, centred, two lines */
        .cf-heading {
          margin: 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          letter-spacing: -2.4px;
          color: #09090b;
        }
        .cf-br { display: block; }

        /* Subtitle: max-width 400px, centred, 24px below heading, 16px/20px, #52525B */
        .cf-subtitle {
          margin: 24px 0 0 0;
          max-width: 400px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.32px;
          color: #52525b;
        }

        /* Form: max-width 460px, 35px gap from subtitle group, 10px vertical gap */
        .cf-form {
          width: 100%;
          max-width: 460px;
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Field wrapper (input + error) */
        .cf-field-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* Input wrapper for trailing icon positioning */
        .cf-input-wrap {
          position: relative;
          width: 100%;
        }

        /* Input: 48px, white, radius 10px, shadow, padding 8px 56px 8px 16px */
        .cf-input {
          width: 100%;
          height: 48px;
          background: #ffffff;
          border-radius: 10px;
          padding: 8px 56px 8px 16px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid transparent;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 16.8px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #09090b;
          outline: none;
          box-sizing: border-box;
        }
        .cf-input::placeholder {
          color: #a1a1aa;
        }
        .cf-input:focus-visible {
          border-color: #27272a;
        }
        .cf-input[aria-invalid="true"] {
          border-color: #ef4444;
        }

        /* Trailing circular icon surface: 32px, #F4F4F5, 8px right inset */
        .cf-input-icon {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          background: #f4f4f5;
          pointer-events: none;
        }
        .cf-glyph {
          width: 14px;
          height: 14px;
          color: #09090b;
          stroke-width: 1.5;
        }

        /* Validation error */
        .cf-error {
          margin: 0;
          text-align: left;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 12px;
          line-height: 16px;
          color: #ef4444;
        }

        /* Submit button: full-width, 40px, #27272A, white text, radius 10px */
        .cf-submit {
          width: 100%;
          height: 40px;
          border: none;
          border-radius: 10px;
          background: #27272a;
          color: #ffffff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: background-color 200ms ease;
        }
        .cf-submit:hover {
          background-color: #1f1f22;
        }
        .cf-submit:focus-visible {
          outline: none;
          box-shadow:
            inset 0 3px 1px rgba(255, 255, 255, 0.1),
            0 0 0 2px #fff,
            0 0 0 4px #27272a;
        }
        .cf-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Submission status messages */
        .cf-status {
          margin: 4px 0 0 0;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 13px;
          line-height: 18px;
        }
        .cf-status-success { color: #09b001; }
        .cf-status-error { color: #ef4444; }
        .cf-status-link {
          color: #09090b;
          text-decoration: underline;
        }

        /* ── Lower contact + navigation panel ──
         * Width 100%, #F4F4F5, radius 56px, padding 48px 40px, 64px vertical gap. */
        .cf-lower-panel {
          display: flex;
          flex-direction: column;
          gap: 64px;
          width: 100%;
          padding: 48px 40px;
          background: #f4f4f5;
          border-radius: 56px;
          box-sizing: border-box;
        }

        /* First row: email left, phone right */
        .cf-contact-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .cf-contact-link {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 32px;
          line-height: 36px;
          font-weight: 500;
          letter-spacing: -0.64px;
          color: #09090b;
          text-decoration: none;
          transition: opacity 200ms ease;
        }
        .cf-contact-link:hover {
          opacity: 0.7;
        }
        .cf-contact-right {
          text-align: right;
        }

        /* Second row: nav groups left, legal + copyright right */
        .cf-nav-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
        }

        /* Left: nav groups, 56px gap between groups */
        .cf-nav-groups {
          display: flex;
          gap: 56px;
          flex-wrap: wrap;
        }
        .cf-nav-group {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .cf-nav-label {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
        }
        .cf-nav-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .cf-nav-link {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #09090b;
          text-decoration: none;
          transition: opacity 200ms ease;
        }
        .cf-nav-link:hover {
          opacity: 0.7;
        }

        /* Right: legal + copyright */
        .cf-legal {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .cf-legal-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .cf-legal-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cf-legal-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: #a1a1aa;
        }
        .cf-copyright {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
        }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .cf-heading {
            font-size: 40px;
            line-height: 43.33px;
            letter-spacing: -2px;
          }
          .cf-contact-link {
            font-size: 28px;
            line-height: 31.5px;
            letter-spacing: -0.56px;
          }
          .cf-lower-panel {
            padding: 32px;
            gap: 48px;
          }
          .cf-contact-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 18px;
          }
          .cf-contact-right {
            text-align: center;
          }
          .cf-nav-row {
            flex-direction: column;
            align-items: stretch;
            gap: 64px;
          }
          .cf-legal {
            align-items: flex-start;
          }
          .cf-legal-links {
            justify-content: flex-start;
          }
        }

        /* ── Mobile (<810px) ── */
        @media (max-width: 809px) {
          .cf-section {
            padding: 80px 24px;
          }
          .cf-cta-panel {
            border-radius: 48px;
          }
          .cf-form-panel {
            border-radius: 40px;
            padding: 32px 20px;
          }
          .cf-heading {
            font-size: 32px;
            line-height: 34.67px;
            letter-spacing: -1.6px;
          }
          .cf-contact-link {
            font-size: 24px;
            line-height: 27px;
            letter-spacing: -0.48px;
          }
          .cf-contact-row {
            gap: 8px;
          }
          .cf-lower-panel {
            padding: 32px;
          }
          .cf-nav-groups {
            gap: 24px;
          }
          .cf-nav-row {
            align-items: stretch;
          }
          .cf-legal {
            align-items: center;
            text-align: center;
          }
          .cf-legal-links {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
