import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  homepageTestimonialSubset,
  testimonialsConfig,
  type Testimonial,
} from "@/lib/testimonials-config";
import { HlsVideoPlayer } from "@/components/hls-video-player";

/*
 * Testimonials section (homepage) — single switchable featured card.
 *
 * Shows the FULL collection of 10 genuine video testimonials. A horizontally
 * scrollable thumbnail row sits inside the card so the card width and the
 * featured video size stay constant. Videos play only when clicked
 * (no autoplay). The previous video is stopped/reset when switching.
 *
 * - Verified count near the heading: data-driven count of DISTINCT client
 *   reviews (de-duplicated by clientId). No invented round number.
 * - Prev/next arrows cycle through all ten with wraparound.
 * - Mouse, touch and keyboard accessible.
 *
 * Content visible by default; the hidden reveal state applies only once the
 * observer is initialised (the `vt-ready` class is added after mount).
 */

export function Testimonials() {
  const items = homepageTestimonialSubset;
  const count = items.length;
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  const sectionElRef = useRef<HTMLElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const section = useInViewLocal();

  // Scroll the selected thumbnail into view whenever it changes.
  useEffect(() => {
    const row = thumbsRef.current;
    if (!row) return;
    const btn = row.querySelector<HTMLElement>(`[data-thumb-index="${active}"]`);
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
    }
  }, [active]);

  const goPrev = () => setActive((i) => (i - 1 + count) % count);
  const goNext = () => setActive((i) => (i + 1) % count);

  // Keyboard: ← / → move between testimonials when the section is focused.
  useEffect(() => {
    const node = sectionElRef.current;
    if (!node) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => (i - 1 + count) % count);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((i) => (i + 1) % count);
      }
    };
    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [count]);

  return (
    <section
      id="testimonials"
      ref={sectionElRef}
      tabIndex={0}
      className={`vt-section w-full${section.ready ? " vt-ready" : ""}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="vt-inner">
        {/* ── Centred heading group + verified count ── */}
        <div className="vt-head">
          <div className="vt-head-text">
            <span className="section-label">{testimonialsConfig.label}</span>
            <h2 id="testimonials-heading" className="vt-heading">
              {testimonialsConfig.heading}
            </h2>
          </div>
        </div>

        {/* ── Switchable featured card (one restrained reveal) ── */}
        {current ? (
          <div
            ref={section.ref}
            className={`vt-compose vt-reveal${section.inView ? " is-visible" : ""}`}
          >
            <VideoCard
              key={current.id}
              item={current}
              onPrev={goPrev}
              onNext={goNext}
              count={count}
              active={active}
              onSelect={setActive}
              items={items}
              thumbsRef={thumbsRef}
            />
          </div>
        ) : null}
      </div>

      <style>{`
        .vt-section { padding: 80px 24px; background: #ffffff; }
        .vt-inner { width: 100%; max-width: 1000px; margin-inline: auto; min-width: 0; }

        /* ── Heading group ── */
        .vt-head {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: 24px; margin-bottom: 48px;
        }
        .vt-head-text {
          max-width: 560px; min-width: 0; display: flex; flex-direction: column;
          align-items: center;
        }
        .vt-heading {
          margin: 12px 0 0; font-family: "Satoshi",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
          font-size: 48px; line-height: 52px; font-weight: 500;
          letter-spacing: -2.4px; color: #09090b; text-align: center;
        }
        .vt-head-meta { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .vt-count {
          display: inline-flex; align-items: baseline; gap: 6px;
          font-family: "Satoshi",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
        }
        .vt-count-num {
          font-size: 18px; line-height: 23.4px; font-weight: 500; letter-spacing: -0.36px; color: #09090b;
        }
        .vt-count-label {
          font-size: 14px; line-height: 20px; font-weight: 400; letter-spacing: -0.28px; color: #52525b;
        }

        .vt-compose { width: 100%; min-width: 0; }

        /* ── Card surface ── */
        .vt-card {
          background: #fafafa; border-radius: 48px; padding: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15); width: 100%; min-width: 0; box-sizing: border-box;
        }

        /* ── Thumbnail row (10 items) ──
           Base = horizontally scrollable fixed thumbs (tablet + mobile).
           Desktop (min-width: 1200px) overrides to an equal-width flex row
           that fills the card with a natural landscape shape. */
        .vt-thumbs {
          display: flex; gap: 8px; margin-bottom: 24px; width: 100%;
          overflow-x: auto; overflow-y: hidden;
          scroll-behavior: smooth; -webkit-overflow-scrolling: touch;
          scrollbar-width: thin; scrollbar-color: #d4d4d8 transparent;
          padding-bottom: 4px; box-sizing: border-box;
        }
        .vt-thumbs::-webkit-scrollbar { height: 6px; }
        .vt-thumbs::-webkit-scrollbar-track { background: transparent; }
        .vt-thumbs::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 100px; }
        .vt-thumb {
          position: relative; width: 96px; aspect-ratio: 16 / 9; flex: 0 0 auto;
          border: 0; padding: 0; margin: 0; overflow: hidden; border-radius: 12px;
          cursor: pointer; background: #000; transition: box-shadow 200ms ease;
        }
        .vt-thumb-img { display: block; width: 100%; height: 100%; object-fit: cover; transition: filter 200ms ease; }

        /* Desktop: fill the card with ten equal flexible landscape thumbnails */
        @media (min-width: 1200px) {
          .vt-thumbs { overflow: visible; padding-bottom: 0; }
          .vt-thumb { flex: 1 1 0; width: auto; aspect-ratio: 16 / 9; min-width: 0; }
        }
        .vt-thumb-other .vt-thumb-img { filter: grayscale(1); }
        .vt-thumb:hover .vt-thumb-img { filter: grayscale(0); }
        .vt-thumb-selected { box-shadow: 0 0 0 2px #fff, 0 0 0 4px #09090b; }
        .vt-thumb-selected .vt-thumb-img { filter: grayscale(0); }
        .vt-thumb:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #27272a; }
        .vt-thumb-play {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          pointer-events: none; background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);
        }
        .vt-play-icon { width: 16px; height: 16px; color: #fff; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5)); }

        /* ── Video player ── */
        .vt-video {
          position: relative; width: 100%; aspect-ratio: 16 / 9;
          border-radius: 32px; background: #000; overflow: hidden;
        }
        .vt-video-el { display: block; width: 100%; height: 100%; object-fit: contain; }

        /* ── Meta row ── */
        .vt-meta {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 16px 8px 8px;
        }
        .vt-identity { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .vt-name {
          font-family: "Satoshi",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
          font-size: 16px; line-height: 20px; font-weight: 500; color: #09090b;
        }
        .vt-role {
          font-family: "Satoshi",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
          font-size: 14px; line-height: 20px; font-weight: 400; color: #71717a;
        }
        .vt-nav { display: flex; gap: 8px; flex-shrink: 0; }
        .vt-nav-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px; background: #fff;
          border: 1px solid #e4e4e7; color: #09090b; cursor: pointer;
          transition: background 200ms ease, border-color 200ms ease;
        }
        .vt-nav-btn:hover { background: #f4f4f5; }
        .vt-nav-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #09090b; }
        .vt-nav-arrow { width: 20px; height: 20px; }

        /* ── Tablet ── */
        @media (max-width: 1199px) {
          .vt-heading { font-size: 40px; line-height: 43.33px; letter-spacing: -2px; }
        }

        /* ── Mobile ── */
        @media (max-width: 809px) {
          .vt-section { padding: 48px 16px; }
          .vt-heading { font-size: 32px; line-height: 34.67px; letter-spacing: -1.6px; }
          .vt-head { margin-bottom: 32px; }
          .vt-card { padding: 12px; border-radius: 32px; }
          .vt-video { border-radius: 24px; }
          .vt-meta { flex-wrap: wrap; gap: 12px; }
          .vt-thumb { width: 48px; height: 48px; }
        }

        /* ── Reveal ── */
        .vt-ready .vt-reveal { opacity: 0; transform: translateY(16px); will-change: transform, opacity; }
        .vt-reveal.is-visible { animation: vt-fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes vt-fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .vt-reveal, .vt-ready .vt-reveal { opacity: 1; transform: none; animation: none; }
          .vt-thumbs { scroll-behavior: auto; }
        }
      `}</style>
    </section>
  );
}

/* ── Video card ── */
function VideoCard({
  item,
  onPrev,
  onNext,
  count,
  active,
  onSelect,
  items,
  thumbsRef,
}: {
  item: Testimonial;
  onPrev: () => void;
  onNext: () => void;
  count: number;
  active: number;
  onSelect: (i: number) => void;
  items: Testimonial[];
  thumbsRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="vt-card">
      {/* Scrollable thumbnail navigation — all 10 items */}
      <div ref={thumbsRef} className="vt-thumbs" role="list" aria-label="Testimonial reviews">
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="listitem"
            data-thumb-index={i}
            aria-pressed={i === active}
            aria-label={`Show ${it.authorName}'s review`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => onSelect(i)}
            className={`vt-thumb${i === active ? " vt-thumb-selected" : " vt-thumb-other"}`}
          >
            {it.poster ? (
              <img
                src={it.poster}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="vt-thumb-img"
              />
            ) : (
              <span className="vt-thumb-img" />
            )}
            <span aria-hidden="true" className="vt-thumb-play">
              <Play className="vt-play-icon" strokeWidth={1.5} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {/* Responsive 16/9 video — plays only when clicked; remounts per item */}
      <div className="vt-video">
        <HlsVideoPlayer
          key={item.id}
          src={item.videoSrc ?? ""}
          isHls={item.isHls}
          poster={item.poster}
          captionsSrc={item.captionsSrc}
          className="vt-video-el"
        />
      </div>

      <div className="vt-meta">
        <div className="vt-identity">
          <span className="vt-name">{item.authorName}</span>
          <span className="vt-role">{item.authorRole}</span>
        </div>
        <div className="vt-nav">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous testimonial"
            className="vt-nav-btn"
          >
            <ChevronLeft className="vt-nav-arrow" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next testimonial"
            className="vt-nav-btn"
          >
            <ChevronRight className="vt-nav-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Local in-view hook — content stays visible until the observer is wired up. */
function useInViewLocal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const node = ref.current;
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView, ready };
}
