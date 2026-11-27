import { useId, type CSSProperties } from "react";

/*
 * KS logo — reusable inline SVG.
 *
 * Original 72×72 viewBox preserved exactly; geometry never altered.
 *
 * Seam removal: the four source paths partition the KS silhouette. Rendering
 * them as separate <path> elements leaves thin anti-aliased seams where same-
 * coloured neighbours meet. To remove them, same-colour subpaths are merged
 * into a single <path> (fill-rule evenodd preserves the intentional internal
 * cutouts). The renderer then fills the union as one operation, so shared
 * edges no longer produce seams. The outer shape is unchanged.
 *
 * Two variants:
 *  - "brand": black regions (paths 1+2) and yellow regions (paths 3+4) kept
 *    separate. Black uses a gentle vertical shade #181818→#000000; yellow
 *    stays solid #FFDA57.
 *  - "white": all four paths merged into one continuous silhouette, filled
 *    with a gentle vertical shade #FFFFFF→#E4E4E7.
 *
 * Background stays transparent. display:block + flex-shrink:0 keep it aligned
 * and sized correctly inside tiles. The highlight/shadow belong to the tile,
 * not the logo paths; `withShadow` adds a restrained drop shadow for the
 * header symbol only. No bevels, glow, or animated sweeps.
 */

const PATHS = [
  // Path 1 (black)
  "M26 45.6235V46H52V72H26H0V71.9609L9 62.8442V63H10H26H42V56H26H16V55.7534L26 45.6235Z",
  // Path 2 (black)
  "M35.5127 37L44.3975 28H63V9.15576L72 0.0390625V37H35.5127Z",
  // Path 3 (yellow)
  "M44.3975 28L35.5127 37H35V0H72V0.0390625L63 9.15576V9H44V28H44.3975Z",
  // Path 4 (yellow)
  "M26 20V45.6235L16 55.7534V46V30H9V46V62V62.8442L0 71.9609V46V20H26Z",
] as const;

// Merged subpaths — same-colour neighbours combined to eliminate seams.
const BLACK_D = `${PATHS[0]} ${PATHS[1]}`;
const YELLOW_D = `${PATHS[2]} ${PATHS[3]}`;
const ALL_D = PATHS.join(" ");

export type KSLogoVariant = "brand" | "white";

export interface KSLogoProps {
  variant?: KSLogoVariant;
  className?: string;
  style?: CSSProperties;
  /** Header placement: add the small soft drop shadow to the symbol. */
  withShadow?: boolean;
}

export function KSLogo({ variant = "brand", className, style, withShadow = false }: KSLogoProps) {
  // Stable, collision-safe gradient ids (strip React's ":" characters).
  const rawId = useId();
  const uid = rawId.replace(/[:]/g, "");
  const whiteGradId = `ks-white-${uid}`;
  const blackGradId = `ks-black-${uid}`;

  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: "block",
        flexShrink: 0,
        filter: withShadow ? "drop-shadow(0 3px 3px rgba(0,0,0,0.20))" : undefined,
        ...style,
      }}
      role="img"
      aria-label="KS logo"
    >
      <defs>
        <linearGradient
          id={whiteGradId}
          x1="0"
          y1="0"
          x2="0"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E4E4E7" />
        </linearGradient>
        <linearGradient
          id={blackGradId}
          x1="0"
          y1="0"
          x2="0"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#181818" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
      </defs>

      {variant === "white" ? (
        // One continuous silhouette — no seams.
        <path d={ALL_D} fillRule="evenodd" clipRule="evenodd" fill={`url(#${whiteGradId})`} />
      ) : (
        <>
          {/* Black regions merged, gently shaded. */}
          <path d={BLACK_D} fillRule="evenodd" clipRule="evenodd" fill={`url(#${blackGradId})`} />
          {/* Yellow regions merged, solid. */}
          <path d={YELLOW_D} fillRule="evenodd" clipRule="evenodd" fill="#FFDA57" />
        </>
      )}
    </svg>
  );
}
