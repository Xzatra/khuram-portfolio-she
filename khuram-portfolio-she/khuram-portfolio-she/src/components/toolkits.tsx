import { useEffect, useRef, useState } from "react";

/*
 * Toolkits section (Section 8).
 *
 * Compact card layout matching the original template:
 *  - White background, 80px 24px desktop/tablet padding, 48px 16px mobile.
 *  - Centred inner container: width 100%, max-width 1000px, margin-inline auto.
 *  - Label: "Toolkits" dark gradient pill.
 *  - Introduction: max-width 624px, 32px/36px weight 500, -0.64px, #09090B.
 *  - 48px gap from introduction to card grid.
 *  - Two equal columns (minmax(0,1fr)) with 16px gaps (one column on mobile).
 *  - Six compact cards (min-height 80px, #F4F4F5, radius 32px, padding 12px, 1px inset outline).
 *  - 56x56px #27272A logo tile with 24px radius, 32x32px monochrome white SVG brand marks,
 *    and measured shadows: 0 4px 4px -2px rgba(0,0,0,0.33), 0 8px 8px -3px rgba(0,0,0,0.30).
 *  - Name (18px/23.4px, weight 500, #09090B) and Description (14px/20px, weight 400, #52525B).
 *  - Percentage pill (40px height, radius 50px, rgba(21,21,21,0.05), backdrop-filter blur(5px)).
 *  - Informational only — no fake links, hover scaling, dark hover states, progress tracks.
 *  - Restrained 600ms entrance: label, intro, and grid reveal. Content visible by default.
 */

type Tool = {
  id: string;
  name: string;
  description: string;
  // Concise category label (no proficiency percentages).
  category: string;
  icon: "GoHighLevel" | "GoogleAds" | "MetaAds" | "AIAgents" | "Zapier" | "Figma";
};

const toolkitsConfig = {
  label: "Toolkits",
  intro:
    "I use a focused set of tools to connect lead generation, customer conversations, and the systems your team uses every day.",
  // Row order:
  // Row 1: GoHighLevel | Google Ads
  // Row 2: Meta Ads | AI Agents
  // Row 3: Zapier | Figma
  tools: [
    {
      id: "gohighlevel",
      name: "GoHighLevel",
      description: "CRM, pipelines and automations",
      category: "CRM",
      icon: "GoHighLevel",
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Search campaigns and tracking",
      category: "Ads",
      icon: "GoogleAds",
    },
    {
      id: "meta-ads",
      name: "Meta Ads",
      description: "Lead generation campaigns",
      category: "Ads",
      icon: "MetaAds",
    },
    {
      id: "ai-agents",
      name: "AI Agents",
      description: "Conversation and lead handling",
      category: "AI",
      icon: "AIAgents",
    },
    {
      id: "zapier",
      name: "Zapier",
      description: "System connections",
      category: "Automation",
      icon: "Zapier",
    },
    {
      id: "figma",
      name: "Figma",
      description: "Page planning and handoff",
      category: "Design",
      icon: "Figma",
    },
  ] as Tool[],
};

/*
 * Brand marks (32px artwork centred inside the 56px tile).
 * Official vector paths are sourced from the Simple Icons brand set
 * (Google Ads, Meta, Zapier, Figma) rendered on the dark tile.
 * "AI Agents" is a capability, not a company — a simple neutral mark is used.
 * GoHighLevel uses its official three-arrow mark with true brand colours.
 */
function ToolLogo({ icon }: { icon: Tool["icon"] }) {
  switch (icon) {
    case "GoHighLevel":
      // Three-arrow mark: all white, positioned closer together
      // Arrow heights: left (tallest), middle (shortest), right (medium).
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          <path d="M5.5 1 L9 6 L7 6 L7 23 L4 23 L4 6 L2 6 Z" fill="#FFFFFF" />
          <path d="M12 7 L15.5 12 L13.5 12 L13.5 23 L10.5 23 L10.5 12 L8.5 12 Z" fill="#FFFFFF" />
          <path d="M18.5 4 L22 9 L20 9 L20 23 L17 23 L17 9 L15 9 Z" fill="#FFFFFF" />
        </svg>
      );
    case "GoogleAds":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          {/* Official Google Ads mark (Simple Icons) */}
          <path
            d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "MetaAds":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          {/* Official Meta mark (Simple Icons) */}
          <path
            d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "AIAgents":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          {/* Neutral spark / agent mark (AI Agents is a capability, not a brand) */}
          <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" fill="#FFFFFF" />
          <circle cx="18" cy="18" r="2.4" fill="#FFFFFF" />
        </svg>
      );
    case "Zapier":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          {/* Official Zapier mark (Simple Icons) */}
          <path
            d="M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "Figma":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="tk-logo-svg"
        >
          {/* Official Figma mark (Simple Icons) */}
          <path
            d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
            fill="#FFFFFF"
          />
        </svg>
      );
  }
}

export function Toolkits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setReady(true);
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="toolkits"
      ref={sectionRef}
      className={`tk-section w-full${ready ? " tk-ready" : ""}`}
      aria-labelledby="toolkits-heading"
    >
      <div className="tk-inner">
        {/* ── Introduction (max-width 624px, left-aligned) ── */}
        <div className="tk-head">
          <p
            id="toolkits-heading"
            className={`tk-intro tk-reveal-intro${inView ? " is-visible" : ""}`}
          >
            {toolkitsConfig.intro}
          </p>
        </div>

        {/* ── 48px gap to card grid: 2 equal columns, 16px gaps (1 col mobile) ── */}
        <div
          className={`tk-grid tk-reveal-grid${inView ? " is-visible" : ""}`}
          role="list"
          aria-label="Design and development tools"
        >
          {toolkitsConfig.tools.map((tool) => (
            <div key={tool.id} role="listitem" className="tk-card">
              {/* Left group: logo tile + text (name/desc), 16px gap, flex 1, min-width 0 */}
              <div className="tk-card-left">
                {/* Logo tile: 56x56px, #27272A, radius 24px, padding 8px, measured shadows */}
                <div className="tk-logo-tile" aria-hidden="true">
                  <ToolLogo icon={tool.icon} />
                </div>

                <div className="tk-text-group">
                  <span className="tk-tool-name">{tool.name}</span>
                  <p className="tk-tool-desc">{tool.description}</p>
                </div>
              </div>

              {/* Right group: category pill (40px, radius 50px, blur 5px) */}
              <span className="tk-pill" aria-label={`Category: ${tool.category}`}>
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Component-scoped styles ── */}
      <style>{`
        /* Outer section: white background, 80px 24px desktop/tablet; 48px 16px mobile */
        .tk-section {
          padding: 80px 24px;
          background: #ffffff;
          box-sizing: border-box;
        }

        /* Centred inner container — max-width 1000px */
        .tk-inner {
          width: 100%;
          max-width: 1000px;
          margin-inline: auto;
          min-width: 0;
          box-sizing: border-box;
        }

        /* ── Header: label + introduction ── */
        .tk-head {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        /* Introduction: 12px below label, max-width 624px, 32px/36px weight 500, -0.64px, #09090B */
        .tk-intro {
          margin: 0;
          max-width: 624px;
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 32px;
          line-height: 36px;
          font-weight: 500;
          letter-spacing: -0.64px;
          color: #09090b;
          text-align: left;
        }

        /* ── Card grid: 48px gap from intro, 2 equal columns, 16px horizontal and vertical gaps ── */
        .tk-grid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ── Card structure ──
         * Width: 100% (492px at 1000px container width).
         * Min-height: 80px; allow growth if text wraps.
         * Padding: 12px.
         * Background: #F4F4F5.
         * Radius: 32px.
         * Subtle 1px #E4E4E7 inset outline via pseudo-element (does not reduce content width).
         * Gap: 24px between left group and pill.
         * No outer shadow. No fake links, hover scaling, or dark hover states.
         */
        .tk-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          min-height: 80px;
          padding: 12px;
          background: #f4f4f5;
          border-radius: 32px;
          box-sizing: border-box;
        }
        .tk-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          border: 1px solid #e4e4e7;
          pointer-events: none;
        }

        /* Left group: logo + text, gap 16px, flex 1, min-width 0 */
        .tk-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1 1 auto;
          min-width: 0;
        }

        /* Logo tile: 56x56px, #27272A, radius 24px, padding 8px, measured shadows */
        .tk-logo-tile {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          background: #27272a;
          border-radius: 24px;
          padding: 8px;
          box-sizing: border-box;
          box-shadow:
            0 4px 4px -2px rgba(0, 0, 0, 0.33),
            0 8px 8px -3px rgba(0, 0, 0, 0.3);
        }
        .tk-logo-svg {
          display: block;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }

        /* Text group: name and description with 2px gap, reset margins, allow wrapping */
        .tk-text-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1 1 auto;
        }
        .tk-tool-name {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 18px;
          line-height: 23.4px;
          font-weight: 500;
          letter-spacing: -0.36px;
          color: #09090b;
          margin: 0;
          overflow-wrap: break-word;
          word-break: normal;
        }
        .tk-tool-desc {
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          letter-spacing: -0.28px;
          color: #52525b;
          margin: 0;
          overflow-wrap: break-word;
          word-break: normal;
        }

        /* Percentage pill:
         * Height: 40px, padding 10px 14px, radius 50px, background rgba(21,21,21,0.05).
         * Backdrop-filter: blur(5px).
         * Text: #09090B, 14px/20px, weight 500, letter-spacing -0.28px.
         * Keep from shrinking; width fit-content; nowrap.
         */
        .tk-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 14px;
          border-radius: 50px;
          background: rgba(21, 21, 21, 0.05);
          backdrop-filter: blur(5px);
          font-family: "Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          letter-spacing: -0.28px;
          color: #09090b;
          flex-shrink: 0;
          white-space: nowrap;
          width: fit-content;
          box-sizing: border-box;
        }

        /* ── Restrained 600ms entrance reveal (content visible by default) ── */
        .tk-ready .tk-reveal-label {
          opacity: 0;
          transform: translateY(20px);
          will-change: transform, opacity;
        }
        .tk-ready .tk-reveal-intro {
          opacity: 0;
          transform: translateY(20px);
          will-change: transform, opacity;
        }
        .tk-ready .tk-reveal-grid {
          opacity: 0;
          transform: translateY(40px);
          will-change: transform, opacity;
        }

        .tk-reveal-label.is-visible {
          animation: tk-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .tk-reveal-intro.is-visible {
          animation: tk-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 80ms;
        }
        .tk-reveal-grid.is-visible {
          animation: tk-fade-up-lg 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 160ms;
        }

        @keyframes tk-fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tk-fade-up-lg {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tk-ready .tk-reveal-label,
          .tk-ready .tk-reveal-intro,
          .tk-ready .tk-reveal-grid {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        /* ── Responsive behaviour ── */
        /* Tablet: 810px to 1199px */
        @media (min-width: 810px) and (max-width: 1199px) {
          .tk-intro {
            font-size: 28px;
            line-height: 31.5px;
            letter-spacing: -0.56px;
          }
        }

        /* Mobile: below 810px */
        @media (max-width: 809px) {
          .tk-section {
            padding: 48px 16px;
          }
          .tk-intro {
            font-size: 24px;
            line-height: 27px;
            letter-spacing: -0.48px;
          }
          .tk-grid {
            margin-top: 48px;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .tk-card {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
