import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { WorkProject } from "@/lib/works-config";

/*
 * Shared project card — used by the homepage Featured Projects grid,
 * the /works listing, and the related-works section on project detail pages.
 *
 * Behaviour:
 *  - Square aspect-ratio 1/1, rounded-rectangle corners (56px desktop, responsive).
 *  - Shape stays fixed on hover (no border-radius morph).
 *  - Image clipped inside the card; on hover scales 1 → 1.03 over 500ms ease-out.
 *  - Project-name badge: bottom-left pill, white 90% + backdrop blur, 13px/18px
 *    weight 500 #09090B, up-right arrow. Starts opacity 0 / translateY(4px),
 *    reveals at opacity 1 / translateY(0) over 300ms on hover or keyboard focus.
 *  - On touch devices the badge is always visible so each project is identifiable.
 *  - One accessible <Link> per card → /works/$slug.
 */

type ProjectCardProps = {
  project: WorkProject;
  /** Optional entrance-animation delay (ms) for staggered reveals. */
  revealDelay?: number;
  /** Smaller corners for related-works on mobile, etc. Defaults to false. */
  className?: string;
};

export function ProjectCard({ project, revealDelay, className }: ProjectCardProps) {
  return (
    <Link
      to="/works/$slug"
      params={{ slug: project.slug }}
      className={`pc-card${className ? ` ${className}` : ""}`}
      style={
        revealDelay != null
          ? ({ "--pc-delay": `${revealDelay}ms` } as React.CSSProperties)
          : undefined
      }
      aria-label={`${project.name} — view project`}
    >
      <div className="pc-card-media">
        <img src={project.image} alt={project.alt} loading="lazy" className="pc-card-img" />
      </div>
      <div className="pc-card-badge">
        <span className="pc-card-name">{project.name}</span>
        <ArrowUpRight className="pc-card-arrow" aria-hidden="true" />
      </div>
    </Link>
  );
}
