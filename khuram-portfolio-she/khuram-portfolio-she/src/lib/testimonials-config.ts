// Shared testimonials configuration — used by the homepage Testimonials
// section.
//
// Ten genuine video testimonials sourced from khuramshahzad.com. Each pair
// (thumbnail + video) is an exact match from the source site. Videos that are
// HLS master playlists (.m3u8) are marked with isHls: true and played via the
// shared HLS player component; the remainder use direct MP4 sources.
//
// No written testimonials are fabricated. The written collection stays empty
// until genuine written reviews are supplied.
//
// VERIFIED TOTAL: data-driven count of DISTINCT client reviews (de-duplicated
// by clientId). Currently 10 video testimonials.

export type TestimonialFormat = "video" | "written";

export interface Testimonial {
  id: string;
  /** Stable client identifier used to de-duplicate across formats. */
  clientId: string;
  format: TestimonialFormat;
  authorName: string;
  authorRole: string;
  company?: string;
  /** Landscape 16:9 thumbnail used as the poster frame. */
  poster: string;
  // Video-only fields
  videoSrc?: string;
  /** True when videoSrc is an HLS master playlist (.m3u8). */
  isHls?: boolean;
  captionsSrc?: string;
  // Written-only fields
  quote?: string;
  rating?: number;
}

// ── Video testimonials (genuine sources from khuramshahzad.com) ──
export const videoTestimonials: Testimonial[] = [
  {
    id: "vt1",
    clientId: "quintin-ford",
    format: "video",
    authorName: "Quintin Ford",
    authorRole: "Co-founder at Knw Media",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/692892dd3a7ce9411de45150.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/66ee909e3b00e21824ed3a2b_,182,53,32,16,00k.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
  {
    id: "vt2",
    clientId: "tony-ibironke",
    format: "video",
    authorName: "Tony Ibironke",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/69289547571896c8da686b7d.jpg",
    videoSrc:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/66ee909eacfd660ffa773097.mp4",
    isHls: false,
    captionsSrc: "",
  },
  {
    id: "vt3",
    clientId: "wassim-dabboussi",
    format: "video",
    authorName: "Wassim DaBboussi",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/692898b9354d2bc5588d8f53.jpg",
    videoSrc:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/66ee909e367c8eda3a917ca2.mp4",
    isHls: false,
    captionsSrc: "",
  },
  {
    id: "vt4",
    clientId: "frida-engstrom",
    format: "video",
    authorName: "Frida Engstrom",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/6928a08c9637ed606630b431.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/cts-c3f1e72830cb94fa_,360,480,720,1080,p.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
  {
    id: "vt5",
    clientId: "joe-martin",
    format: "video",
    authorName: "Joe Martin",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/69289029114790625e57bf8c.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/cts-e5b954e10a7c53d7_,360,480,720,1080,p.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
  {
    id: "vt6",
    clientId: "mike-scully",
    format: "video",
    authorName: "Mike Scully",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/69289c968f87977e12a07241.jpg",
    videoSrc:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/66ee909e4f4cfe224f11a55f.mp4",
    isHls: false,
    captionsSrc: "",
  },
  {
    id: "vt7",
    clientId: "razwana-yousaf",
    format: "video",
    authorName: "Razwana Yousaf",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/69289e609637edfb9d306b73.jpg",
    videoSrc:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/66ee909eacfd668f0e773098.mp4",
    isHls: false,
    captionsSrc: "",
  },
  {
    id: "vt8",
    clientId: "dean-edelson",
    format: "video",
    authorName: "Dean Edelson",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/6a883c5735566147963e82da.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/cts-adc7a340dc98702b_,360,p.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
  {
    id: "vt9",
    clientId: "kristen-palana",
    format: "video",
    authorName: "Kristen Palana",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/69289ad7354d2b43d68dd0da.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/66ee909e3b00e27b4eed3a2a_,53,32,16,00k.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
  {
    id: "vt10",
    clientId: "client-10",
    format: "video",
    authorName: "Client testimonial",
    authorRole: "Client testimonial",
    poster:
      "https://assets.cdn.filesafe.space/uomcNloGOfcYjZJxU5fg/media/6a883d3ccdd4b797a3d1ac62.jpg",
    videoSrc:
      "https://content.apisystem.tech/hls/medias/uomcNloGOfcYjZJxU5fg/media/transcoded_videos/cts-88b350317b746818_,360,480,720,1080,p.mp4.urlset/master.m3u8",
    isHls: true,
    captionsSrc: "",
  },
];

// ── Written testimonials (PENDING — no fabricated content) ──
export const writtenTestimonials: Testimonial[] = [];

// All approved reviews, video first then written.
export const allTestimonials: Testimonial[] = [...videoTestimonials, ...writtenTestimonials];

// The homepage featured card now shows the FULL collection of 10 videos.
export const homepageTestimonialSubset: Testimonial[] = videoTestimonials;

/**
 * Distinct client review count — de-duplicated by `clientId` across both
 * video and written formats. Returns the verified total of currently-approved
 * reviews.
 */
export function getVerifiedTestimonialTotal(): number {
  const distinct = new Set(allTestimonials.map((t) => t.clientId));
  return distinct.size;
}

export const testimonialsConfig = {
  label: "Testimonials",
  heading: "What people say about my work",
};
