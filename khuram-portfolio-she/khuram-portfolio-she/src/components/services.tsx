import { Link } from "@tanstack/react-router";
import {
  services,
  servicesIntro,
  servicesHeadingLines,
  ServiceIcon,
  DeliverablePill,
} from "@/lib/services-config";

/*
 * Services section (homepage Section 3).
 * Two-column desktop card grid. No prices, no per-card CTAs.
 * Complete dark hover effect lives in the shared `.svc-card` utility.
 */

export function Services() {
  return (
    <section
      id="services"
      className="w-full border-t border-[var(--color-divider)] bg-white px-4 sm:px-6"
      style={{ paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}
      aria-labelledby="services-heading"
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1000px",
        }}
      >
        {/* ── Header: heading + supporting paragraph centred ── */}
        <div className="flex flex-col items-center text-center gap-3 max-w-[640px] mx-auto animate-section-rise">
          <h2
            id="services-heading"
            className="svc-title text-center"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "clamp(32px, 4.4vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-2.4px",
              margin: 0,
            }}
          >
            {servicesHeadingLines[0]}
            <br />
            {servicesHeadingLines[1]}
          </h2>
          <p
            className="svc-desc font-normal text-center"
            style={{
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "-0.32px",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            {servicesIntro}
          </p>
        </div>

        {/* 48px gap to card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ marginTop: "48px", gap: "16px" }}>
          {services.map((service, index) => (
            <Link
              key={service.id}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="svc-card flex flex-col animate-section-rise no-underline"
              style={{ "--rise-delay": `${index * 60}ms` } as React.CSSProperties}
            >
              {/* A. Service icon */}
              <div
                className="svc-icon-circle flex items-center justify-center shrink-0"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "100px",
                }}
              >
                <ServiceIcon name={service.icon} />
              </div>

              {/* B. 40px gap, C. Title + description */}
              <div className="flex flex-col" style={{ marginTop: "40px", gap: "8px" }}>
                <h3
                  className="svc-title"
                  style={{
                    fontSize: "clamp(22px, 2.6vw, 32px)",
                    lineHeight: "clamp(26px, 3vw, 36px)",
                    fontWeight: 500,
                    letterSpacing: "-0.64px",
                    margin: 0,
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="svc-desc font-normal"
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "-0.32px",
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* D. 24px gap, E. Deliverable pills */}
              <div className="flex flex-wrap" style={{ marginTop: "24px", gap: "8px" }}>
                {service.deliverables.map((d) => (
                  <DeliverablePill key={d} label={d} />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
