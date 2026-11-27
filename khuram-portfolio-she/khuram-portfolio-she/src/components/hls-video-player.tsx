import { useEffect, useRef, useState } from "react";

/*
 * HlsVideoPlayer — shared video player that plays both direct MP4 sources and
 * HLS master playlists (.m3u8). Uses hls.js when the browser does not support
 * HLS natively (Chrome/Firefox); falls back to native HLS on Safari.
 *
 * Videos play only when the visitor presses Play (no autoplay). The previous
 * video is stopped/paused when the `key` changes (caller swaps the element
 * via `key={item.id}` so this component remounts cleanly).
 *
 * Content stays visible by default — the poster frame shows before playback.
 */

export function HlsVideoPlayer({
  src,
  isHls,
  poster,
  captionsSrc,
  className,
}: {
  src: string;
  isHls?: boolean | undefined;
  poster?: string | undefined;
  captionsSrc?: string | undefined;
  className?: string | undefined;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isHls || !src) {
      // Direct MP4.
      video.src = src;
      return;
    }

    // Native HLS (Safari/iOS) — just set the source.
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    // hls.js for browsers without native HLS support (Chrome/Firefox/etc.).
    let disposed = false;
    let hls: import("hls.js").default | null = null;

    import("hls.js")
      .then(({ default: HlsCtor }) => {
        if (disposed || !videoRef.current) return;
        if (!HlsCtor.isSupported()) {
          setError("HLS playback is not supported in this browser.");
          return;
        }
        hls = new HlsCtor({ enableWorker: true });
        hls.attachMedia(videoRef.current);
        hls.on(HlsCtor.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            setError("This video could not be loaded. Please try again.");
          }
        });
      })
      .catch(() => {
        if (!disposed) setError("This video could not be loaded.");
      });

    return () => {
      disposed = true;
      hls?.destroy();
    };
  }, [src, isHls]);

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        controls
        controlsList="nodownload"
        playsInline
        poster={poster}
        preload="metadata"
      >
        {!isHls && src ? <source src={src} type="video/mp4" /> : null}
        {captionsSrc ? (
          <track kind="captions" src={captionsSrc} srcLang="en" label="English" />
        ) : null}
        Your browser does not support embedded video.
      </video>
      {error ? (
        <div
          role="alert"
          style={{
            padding: "12px 16px",
            fontSize: 14,
            color: "#71717a",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      ) : null}
    </>
  );
}
