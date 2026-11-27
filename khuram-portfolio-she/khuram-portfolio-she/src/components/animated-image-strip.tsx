/* Client-logo trust strip.
 * Centered uppercase label with thin dotted rules extending to both sides,
 * followed by one clean horizontal row of scrolling logos.
 *
 * Six real client logo assets, consistent visual height, generous even
 * spacing, soft grayscale, subtle white edge fades. No per-logo boxes or
 * backgrounds. Slow seamless linear loop (140s), pauses on desktop hover.
 */

const CLIENT_LOGOS = [
  {
    id: "logo-1",
    name: "Client logo 1",
    src: "https://files.leadconnectorhq.com/file/6b088a335374a3433daec7b8/9.svg",
  },
  {
    id: "logo-2",
    name: "Client logo 2",
    src: "https://files.leadconnectorhq.com/file/6b088a3321cb268fe03cd9fb/10.svg",
  },
  {
    id: "logo-3",
    name: "Client logo 3",
    src: "https://files.leadconnectorhq.com/file/6b088a3366f2f87a81f1a6d7/7.svg",
  },
  {
    id: "logo-4",
    name: "Client logo 4",
    src: "https://files.leadconnectorhq.com/file/6b088a33c385e08cdab15c34/11.svg",
  },
  {
    id: "logo-5",
    name: "Client logo 5",
    src: "https://files.leadconnectorhq.com/file/6b088a336afbbd33f3513194/8.svg",
  },
  {
    id: "logo-6",
    name: "Client logo 6",
    src: "https://files.leadconnectorhq.com/file/6b088a333abd658855d056a7/6.svg",
  },
];

const REPEATS_PER_GROUP = 3;

export function AnimatedImageStrip() {
  const renderGroup = (groupId: string, ariaHidden: boolean) => (
    <div
      className="flex items-center shrink-0 gap-10 sm:gap-12 lg:gap-14 pr-10 sm:pr-12 lg:pr-14"
      aria-hidden={ariaHidden}
    >
      {Array.from({ length: REPEATS_PER_GROUP }).flatMap((_, rep) =>
        CLIENT_LOGOS.map((logo, index) => (
          <LogoItem
            key={`${logo.id}-${groupId}-${rep}-${index}`}
            src={logo.src}
            name={logo.name}
            ariaHidden={ariaHidden}
          />
        )),
      )}
    </div>
  );

  return (
    <section
      className="relative w-full mx-auto max-w-[640px] sm:max-w-[680px] lg:mt-[112px]"
      aria-label="Trusted by 100+ global companies"
    >
      {/* Centered uppercase label with thin dotted rules to both sides */}
      <div className="flex items-center gap-3 sm:gap-4 w-full mb-8 sm:mb-9 lg:mb-10">
        <span className="flex-1 border-t border-dotted border-[#E4E4E7]" />
        <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#71717A] whitespace-nowrap">
          Trusted by 100+ global companies
        </span>
        <span className="flex-1 border-t border-dotted border-[#E4E4E7]" />
      </div>

      {/* Marquee viewport — compact, centered. A horizontal mask fades the
          center logos to full visibility and gradually fades both edges. */}
      <div className="relative w-full overflow-hidden flex items-center h-[34px] sm:h-[42px] lg:h-[48px] trust-strip-mask">
        {/* Marquee track: two identical groups animating 0 -> -50% for seamless looping */}
        <div className="flex w-max animate-marquee-strip hover:[animation-play-state:paused]">
          {renderGroup("g1", false)}
          {renderGroup("g2", true)}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ src, name, ariaHidden }: { src: string; name: string; ariaHidden: boolean }) {
  return (
    <span
      className="shrink-0 flex items-center justify-center select-none"
      aria-hidden={ariaHidden}
    >
      <img
        src={src}
        alt={ariaHidden ? "" : name}
        className="block h-[26px] sm:h-[34px] lg:h-[40px] w-auto max-w-none object-contain pointer-events-none grayscale opacity-80"
        loading="lazy"
        draggable={false}
      />
    </span>
  );
}
