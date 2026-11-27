import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { portfolioConfig } from "@/lib/portfolio-config";
import { User, Briefcase, Paintbrush, BookOpen, GraduationCap } from "lucide-react";
import { KSLogo } from "@/components/ks-logo";

/*
 * Profile sidebar — near-black #151515 panel, exact reference measurements.
 * Identity: Khuram Shahzad, GHL Specialist.
 * Yellow accent (#FFDA57): Book a Call button (black text) + small active-nav
 * indicator. Cover uses a black-to-charcoal gradient with a subtle yellow
 * accent when no real cover image is supplied. Portrait uses the uploaded
 * image when available, else a KS monogram fallback.
 */

export function ProfileSidebar() {
  const { person, assets, navigation, socials } = portfolioConfig;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [activeNav, setActiveNav] = useState<string>(
    pathname === "/services"
      ? "Services"
      : pathname === "/about"
        ? "About"
        : pathname === "/works" || pathname.startsWith("/works/")
          ? "Works"
          : pathname === "/blog" || pathname.startsWith("/blog/")
            ? "Blog"
            : pathname === "/academy"
              ? "Academy"
              : "",
  );

  const hasPortrait = Boolean(assets.avatar);

  const renderNavIcon = (iconName: string) => {
    const cls = "w-4 h-4 text-white";
    switch (iconName) {
      case "User":
        return <User className={cls} strokeWidth={1.75} />;
      case "Briefcase":
        return <Briefcase className={cls} strokeWidth={1.75} />;
      case "Paintbrush":
        return <Paintbrush className={cls} strokeWidth={1.75} />;
      case "BookOpen":
        return <BookOpen className={cls} strokeWidth={1.75} />;
      case "GraduationCap":
        return <GraduationCap className={cls} strokeWidth={1.75} />;
      default:
        return <User className={cls} strokeWidth={1.75} />;
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return (
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "Facebook":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        );
      case "LinkedIn":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "YouTube":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col w-[272px] h-full bg-[#151515] text-white rounded-[32px] p-2 overflow-hidden"
      style={{
        boxShadow: "0 12px 20px rgba(0,0,0,0.2), 0 5px 12px -4px rgba(0,0,0,0.5)",
      }}
      aria-label="Profile and Navigation Sidebar"
    >
      {/* Top profile region: cover + overlapping avatar/name (209px) */}
      <div className="relative shrink-0" style={{ height: "209px" }}>
        {/* Cover: real image if supplied, else black-to-charcoal gradient with subtle yellow accent */}
        <div className="relative w-full overflow-hidden rounded-[24px]" style={{ height: "157px" }}>
          {assets.bannerCover ? (
            <img
              src={assets.bannerCover}
              alt="Khuram Shahzad cover"
              className="w-full h-full object-cover select-none"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full sidebar-cover" aria-hidden="true" />
          )}
          {/* Linear gradient fading the cover bottom into #151515 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 55%, #151515 100%)" }}
          />
        </div>

        {/* Profile row: positioned 127px from cover top, 82px tall, px-4, gap-4 */}
        <div
          className="absolute left-0 right-0 flex items-center"
          style={{
            top: "127px",
            height: "82px",
            paddingLeft: "16px",
            paddingRight: "16px",
            gap: "16px",
          }}
        >
          {/* Avatar frame: 82x82, circular, padding 3px, bg rgba(255,255,255,.05) */}
          <div
            className="rounded-full bg-white/5 shrink-0 overflow-hidden flex items-center justify-center"
            style={{ width: "82px", height: "82px", padding: hasPortrait ? "3px" : "0" }}
          >
            {hasPortrait ? (
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={assets.avatar}
                  alt={assets.portraitAlt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
            ) : (
              // KS monogram fallback until the uploaded portrait is supplied
              <div className="w-full h-full rounded-full bg-[#09090B] flex items-center justify-center">
                <KSLogo variant="brand" style={{ width: 40, height: 40 }} />
              </div>
            )}
          </div>

          {/* Name + role badge */}
          <div className="min-w-0 flex flex-col" style={{ gap: "4px" }}>
            <h2
              className="text-white font-medium truncate"
              style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.28px" }}
            >
              {person.name}
            </h2>
            <div
              className="inline-flex items-center bg-white/10"
              style={{ height: "24px", padding: "4px 10px", borderRadius: "100px" }}
            >
              <span
                className="text-white font-normal whitespace-nowrap"
                style={{ fontSize: "12px", lineHeight: "16px", letterSpacing: "-0.24px" }}
              >
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 24px gap below profile region, then body content with 16px horizontal padding */}
      <div
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden scrollbar-thin flex flex-col"
        style={{ marginTop: "24px", paddingLeft: "16px", paddingRight: "16px" }}
      >
        {/* Dashed divider */}
        <div className="w-full" style={{ borderTop: "1px dashed rgba(255,255,255,0.2)" }} />

        {/* Introduction: 24px below divider */}
        <p
          className="text-[#A1A1AA] font-normal"
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "-0.28px",
            marginTop: "24px",
          }}
        >
          {person.tagline}
        </p>

        {/* Navigation: 24px below introduction, 8px gap between rows */}
        <nav
          className="flex flex-col"
          style={{ marginTop: "24px", gap: "8px" }}
          aria-label="Main Navigation"
        >
          {navigation.map((item) => {
            const isActive = activeNav === item.label;
            const isRoute = item.href.startsWith("/") && !item.href.startsWith("#");
            const rowClasses =
              "group relative flex items-center transition-colors duration-200 outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)]";
            const rowStyle = {
              width: "224px",
              height: "40px",
              padding: "8px 12px",
              borderRadius: "16px",
              gap: "8px",
              background: "transparent",
            };
            const inner = (
              <>
                {renderNavIcon(item.icon)}
                <span
                  className="text-white font-medium"
                  style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.28px" }}
                >
                  {item.label}
                </span>
              </>
            );
            const hoverHandlers = {
              onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.background = "#202020";
              },
              onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.background = "transparent";
              },
            };
            return isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className={rowClasses}
                style={rowStyle}
                {...hoverHandlers}
              >
                {inner}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(isActive ? "" : item.label);
                }}
                className={rowClasses}
                style={rowStyle}
                {...hoverHandlers}
              >
                {inner}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom group: socials + booking, 24px from panel bottom */}
      <div
        style={{
          paddingBottom: "24px",
          marginTop: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div className="flex flex-col" style={{ width: "224px", gap: "8px" }}>
          {/* Social row: three buttons, gap 4px, bg #27272A, radius 16px, inset shadow */}
          <div className="grid grid-cols-4" style={{ gap: "4px" }}>
            {socials.map((social) =>
              social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    height: "40px",
                    borderRadius: "16px",
                    background: "#27272A",
                    boxShadow: "inset 0 3px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ) : (
                <span
                  key={social.name}
                  aria-disabled="true"
                  aria-label={`${social.name} (link coming soon)`}
                  className="flex items-center justify-center text-white cursor-default"
                  style={{
                    height: "40px",
                    borderRadius: "16px",
                    background: "#27272A",
                    boxShadow: "inset 0 3px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  {renderSocialIcon(social.icon)}
                </span>
              ),
            )}
          </div>

          {/* Booking button: 224x40, radius 16px, brand-yellow background, black text */}
          <Link
            to={person.bookingUrl}
            className="flex items-center justify-center text-black font-medium transition-all duration-200 hover:-translate-y-0.5 outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)]"
            style={{
              width: "224px",
              height: "40px",
              borderRadius: "16px",
              background: "var(--color-brand-yellow)",
            }}
          >
            {person.bookingCta}
          </Link>
        </div>
      </div>
    </div>
  );
}
