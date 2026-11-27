import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { portfolioConfig } from "@/lib/portfolio-config";
import { User, Briefcase, Paintbrush, BookOpen, GraduationCap, X, Menu } from "lucide-react";
import { KSLogo } from "@/components/ks-logo";

/*
 * Tablet & Mobile Header (< 1024px): compact black header + wide #151515 expandable menu.
 * Identity: Khuram Shahzad, GHL Specialist. Yellow accent on the booking button.
 * Portrait uses the uploaded image when available, else a KS monogram fallback.
 */

export function MobileHeaderAndMenu() {
  const [isOpen, setIsOpen] = useState(false);
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
  const { person, assets, navigation, socials } = portfolioConfig;
  const hasPortrait = Boolean(assets.avatar);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderNavIcon = (iconName: string, active: boolean) => {
    const cls = `w-4 h-4 transition-colors ${
      active ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
    }`;
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

  const Avatar = ({ size }: { size: number }) =>
    hasPortrait ? (
      <div
        className="rounded-full overflow-hidden border border-white/15 bg-neutral-900 shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src={assets.avatar}
          alt={assets.portraitAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 25%" }}
        />
      </div>
    ) : (
      <div
        className="rounded-full border border-white/15 bg-[#09090B] flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <KSLogo variant="brand" style={{ width: size * 0.5, height: size * 0.5 }} />
      </div>
    );

  return (
    <div className="lg:hidden sticky top-0 z-30 bg-white w-full px-2 sm:px-3 pt-2 sm:pt-3 pb-1">
      {/* Compact black header pill — pinned to the top while the main content scrolls */}
      <div className="flex items-center justify-between p-1.5 sm:p-2 bg-[#151515] text-white rounded-[20px] sm:rounded-[24px]">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 px-1">
          <Avatar size={36} />
          <div className="flex items-center gap-2 truncate min-w-0">
            <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-[-0.28px] truncate">
              {person.name}
            </span>
            <div
              className="hidden min-[400px]:inline-flex items-center bg-white/10 shrink-0"
              style={{ height: "22px", padding: "3px 9px", borderRadius: "100px" }}
            >
              <span
                className="text-[11px] font-normal text-white whitespace-nowrap"
                style={{ letterSpacing: "-0.22px" }}
              >
                {person.role}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)] shrink-0"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Expanded black rounded panel overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* click-outside backdrop */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />

          {/* Wide #151515 rounded panel near the top with 12px side margins */}
          <div
            className="absolute left-3 right-3 top-3 bg-[#151515] text-white rounded-[24px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            style={{ maxHeight: "calc(100dvh - 24px)" }}
          >
            {/* Upper header: profile + close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar size={36} />
                <div className="min-w-0">
                  <span className="text-[14px] font-medium text-white block leading-tight tracking-[-0.28px] truncate">
                    {person.name}
                  </span>
                  <span className="text-[12px] text-[#A1A1AA] font-normal">{person.role}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-white shrink-0"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable body: tagline + navigation */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
              <p className="text-[13px] leading-[20px] tracking-[-0.26px] text-[#A1A1AA] font-normal mb-6">
                {person.tagline}
              </p>

              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navigation.map((item) => {
                  const active = activeNav === item.label;
                  const isRoute = item.href.startsWith("/") && !item.href.startsWith("#");
                  const rowClasses =
                    "group relative flex items-center transition-colors duration-200";
                  const rowStyle = {
                    height: "44px",
                    padding: "10px 14px",
                    borderRadius: "16px",
                    gap: "10px",
                    background: "transparent",
                  };
                  const inner = (
                    <>
                      {renderNavIcon(item.icon, false)}
                      <span className="text-white font-medium text-[15px] leading-[20px] tracking-[-0.3px]">
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
                      onClick={() => setIsOpen(false)}
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
                        setActiveNav(active ? "" : item.label);
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

              {/* Socials */}
              <div className="mt-6 pt-4 border-t border-dashed border-white/15">
                <div className="grid grid-cols-4 gap-1.5">
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
                          height: "44px",
                          borderRadius: "14px",
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
                          height: "44px",
                          borderRadius: "14px",
                          background: "#27272A",
                          boxShadow: "inset 0 3px 1px rgba(255,255,255,0.1)",
                        }}
                      >
                        {renderSocialIcon(social.icon)}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Bottom full-width brand-yellow booking button, black text */}
            <div className="p-4 border-t border-white/10 bg-[#151515]">
              <Link
                to={person.bookingUrl}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center text-black font-medium transition-all duration-200 hover:-translate-y-0.5 outline-hidden focus-visible:ring-2 focus-visible:ring-[var(--color-brand-yellow)]"
                style={{
                  height: "44px",
                  borderRadius: "16px",
                  background: "var(--color-brand-yellow)",
                }}
              >
                {person.bookingCta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
