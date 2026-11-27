/*
 * Reusable rolling-letter link button.
 *
 * Each character sits in a column with two stacked copies; on hover the column
 * rolls up to reveal the second copy, staggered per character. Reduced motion
 * disables the roll. Self-contained scoped styles (rlb- prefix) so it can be
 * reused across sections without colliding with other rolling-letter instances.
 */
export function RollingLink({
  label,
  href,
  ariaLabel,
}: {
  label: string;
  href: string;
  ariaLabel?: string;
}) {
  const chars = Array.from(label);
  return (
    <a href={href} className="rlb-btn" aria-label={ariaLabel ?? label}>
      <span className="rlb-text" aria-hidden="true">
        {chars.map((ch, i) => (
          <span key={i} className="rlb-char" style={{ transitionDelay: `${i * 22}ms` }}>
            <span className="rlb-face">{ch === " " ? "\u00A0" : ch}</span>
            <span className="rlb-face">{ch === " " ? "\u00A0" : ch}</span>
          </span>
        ))}
      </span>
      <style>{`
        .rlb-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 24px;
          border-radius: 10px;
          background-color: #27272a;
          color: #fff;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 19.6px;
          font-weight: 500;
          letter-spacing: -0.42px;
          box-shadow: inset 0 3px 1px rgba(255, 255, 255, 0.1);
          text-decoration: none;
          transition: background-color 200ms ease;
          outline: none;
        }
        .rlb-btn:hover {
          background-color: #1f1f22;
        }
        .rlb-btn:focus-visible {
          box-shadow:
            inset 0 3px 1px rgba(255, 255, 255, 0.1),
            0 0 0 2px #fff,
            0 0 0 4px #27272a;
        }
        .rlb-text {
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          line-height: 19.6px;
        }
        .rlb-char {
          display: inline-flex;
          flex-direction: column;
          height: 19.6px;
          overflow: hidden;
          transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .rlb-face {
          display: block;
          height: 19.6px;
          line-height: 19.6px;
        }
        @media (hover: hover) {
          .rlb-btn:hover .rlb-char {
            transform: translateY(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .rlb-char {
            transition: none;
          }
        }
      `}</style>
    </a>
  );
}
