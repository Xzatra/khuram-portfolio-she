import { portfolioConfig } from "@/lib/portfolio-config";
import { ArrowUpRight } from "lucide-react";
import { KSLogo } from "@/components/ks-logo";
import { Link } from "@tanstack/react-router";

/* Top status bar (left capsule + right certification badges) and central hero headline. */

export function TopStatusBar() {
  const { person } = portfolioConfig;

  return (
    <header className="w-full flex flex-wrap items-center justify-between gap-3 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 min-h-[64px] sm:min-h-[88px] lg:h-[112px]">
      {/* Left Rounded Capsule: Monogram + Handle + Availability in #F4F4F5 */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#F4F4F5] rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] max-w-full">
        {/* Monogram / brand logo — KS brand variant on its own white tile */}
        <a
          href="/"
          className="flex items-center justify-center w-9 h-9 sm:w-[44px] sm:h-[44px] lg:w-[48px] lg:h-[48px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] overflow-hidden bg-white shrink-0 outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)]"
          aria-label="Khuram Shahzad Home"
        >
          <KSLogo variant="brand" withShadow style={{ width: 24, height: 24 }} />
        </a>

        {/* Social handle pill — links to the real Instagram URL */}
        <a
          href={person.socialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-9 sm:h-[44px] lg:h-[48px] px-3 sm:px-4 rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] bg-[rgba(21,21,21,0.05)] text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] tracking-[-0.32px] font-medium text-neutral-900 whitespace-nowrap transition-colors duration-200 hover:bg-[rgba(21,21,21,0.08)]"
        >
          {person.handle}
        </a>

        {/* Availability pill: "New work" • green dot • "Available" */}
        <div className="flex items-center gap-2 sm:gap-3 h-9 sm:h-[44px] lg:h-[48px] px-3 sm:px-4 rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] bg-[rgba(21,21,21,0.05)] text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] tracking-[-0.32px] whitespace-nowrap">
          <span className="font-medium text-neutral-900">{person.statusAnnouncement}</span>
          {/* Green dot: 6px core inside 12px circle */}
          <span className="relative flex h-3 w-3 items-center justify-center shrink-0">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-[rgba(9,176,1,0.2)]" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-availability-green)] animate-soft-pulse" />
          </span>
          <span className="font-medium text-neutral-900">{person.availability}</span>
        </div>
      </div>

      {/* Right Certification Badges — side by side, 20px gap, optically centered.
          GoHighLevel (Certified Admin) ~72px tall, Google Partner ~56px tall on desktop.
          Heights scale down on tablet/mobile to stay readable without crowding. */}
      <div className="flex items-center gap-5 shrink-0 ml-auto pr-1 sm:pr-2">
        {person.certifications.map((badge, i) => {
          // Per-badge visible-artwork heights. Index 0 = GoHighLevel, 1 = Google Partner.
          const isGhl = i === 0;
          const heightClass = isGhl
            ? "h-[44px] sm:h-[56px] lg:h-[72px]"
            : "h-[34px] sm:h-[44px] lg:h-[56px]";

          const content = (
            <img
              src={badge.imageUrl}
              alt={badge.name}
              className={`${heightClass} w-auto max-w-none object-contain shrink-0 transition-transform duration-200 hover:scale-105`}
              loading="lazy"
            />
          );

          if (badge.verificationUrl && badge.verificationUrl !== "#") {
            return (
              <a
                key={badge.name}
                href={badge.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)] rounded-md"
                aria-label={`Verify ${badge.name} credential`}
              >
                {content}
              </a>
            );
          }

          return (
            <span key={badge.name} className="inline-flex items-center shrink-0" title={badge.name}>
              {content}
            </span>
          );
        })}
      </div>
    </header>
  );
}

export function CentralHero() {
  const { person } = portfolioConfig;

  return (
    <div className="w-full flex flex-col items-center text-center animate-rise-in">
      {/* Hero headline: one semantic H1 with spans for visual styling */}
      <h1
        className="font-medium text-neutral-950 mx-auto"
        style={{
          fontSize: "clamp(30px, 7vw, 64px)",
          lineHeight: "clamp(34px, 7vw, 64px)",
          letterSpacing: "-0.052em",
        }}
      >
        {/* Main two-line heading */}
        <span className="block" style={{ marginBottom: "10px" }}>
          <span className="inline-block">{person.heroHeadingLine1}</span>
        </span>
        <span className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          {/* KS logo tile within the headline composition */}
          <span
            className="relative inline-flex items-center justify-center w-9 h-9 sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px] rounded-[8px] sm:rounded-[9px] lg:rounded-[10px] bg-[#27272A] align-middle shrink-0 overflow-hidden"
            style={{
              boxShadow: "0 4px 10px -4px rgba(0,0,0,0.5), 0 8px 14px -2px rgba(0,0,0,0.25)",
            }}
          >
            {/* Decorative highlight overlay — same radius, pointer-events none */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                borderRadius: "inherit",
                backgroundImage:
                  "radial-gradient(75% 50% at 27.7% 7.9%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
            {/* Logo sits above the overlay so its white stays clean — 28px for legible geometry */}
            <KSLogo variant="white" className="relative z-10" style={{ width: 28, height: 28 }} />
          </span>
          <span>{person.heroHeadingLine2}</span>
        </span>
      </h1>

      {/* Supporting paragraph — centered, max ~620px, readable gray */}
      <p
        className="mt-6 sm:mt-8 text-center text-[#52525B]"
        style={{
          maxWidth: "620px",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          lineHeight: "1.6",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        {person.heroParagraph}
      </p>

      {/* Booking CTA pill — below the subheadline, centered, no logo/avatar */}
      <Link
        to={person.featuredProject.url}
        className="group mt-5 sm:mt-6 lg:mt-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[18px] sm:rounded-[22px] lg:rounded-[24px] bg-[#09090B] text-white transition-all duration-200 hover:-translate-y-0.5"
      >
        <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium tracking-tight text-white whitespace-nowrap">
          {person.featuredProject.text}
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </Link>
    </div>
  );
}
