import { useEffect, useRef, useState } from "react";
import IslamicArch from "./IslamicArch";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0); // 0 → 1 as user scrolls past the hero

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const h = el.offsetHeight;
      const y = Math.min(Math.max(window.scrollY, 0), h);
      setProgress(y / h);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mosque rises from bottom + becomes more opaque as you scroll
  const mosqueRise = -40 + progress * 80; // px from baseline (rises up)
  const mosqueOpacity = 0.25 + progress * 0.55;
  const mosqueScale = 1 + progress * 0.08;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center perspective-stage"
    >
      {/* Cinematic background — pure emerald to match site bg (no maroon) */}
      <div
        className="absolute inset-0 -z-10 animate-slow-zoom"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, hsl(46 75% 55% / 0.18), transparent 55%), radial-gradient(ellipse at 50% 110%, hsl(173 50% 14% / 0.6), transparent 60%), linear-gradient(180deg, hsl(173 60% 8%), hsl(173 55% 5%))",
        }}
      />

      {/* Top chandelier glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] -z-10 animate-bloom"
        style={{ background: "radial-gradient(ellipse at top, hsl(48 82% 81% / 0.22), transparent 70%)" }}
      />

      {/* Scroll-animated mosque silhouette behind the hero */}
      <div
        className="absolute inset-x-0 bottom-0 -z-[5] flex items-end justify-center pointer-events-none"
        style={{
          transform: `translateY(${mosqueRise}px) scale(${mosqueScale})`,
          opacity: mosqueOpacity,
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
          transformOrigin: "center bottom",
        }}
        aria-hidden
      >
        <svg viewBox="0 0 900 360" className="w-full h-auto max-w-[1100px]" fill="none">
          <defs>
            <linearGradient id="mosqueHero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(46 65% 52%)" stopOpacity="0.65" />
              <stop offset="100%" stopColor="hsl(173 60% 6%)" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="moonGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="hsl(48 82% 81%)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(48 82% 81%)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* moon halo behind dome */}
          <circle cx="450" cy="80" r="70" fill="url(#moonGlow)" />
          <circle cx="450" cy="80" r="14" fill="hsl(48 82% 81%)" opacity="0.55" />

          {/* central dome */}
          <path
            d="M 360 360 L 360 200 Q 360 100 450 70 Q 540 100 540 200 L 540 360 Z"
            fill="url(#mosqueHero)"
          />
          {/* central spire */}
          <rect x="447" y="40" width="6" height="34" fill="url(#mosqueHero)" />
          <circle cx="450" cy="40" r="6" fill="url(#mosqueHero)" />

          {/* side minarets */}
          <path d="M 200 360 L 200 220 Q 200 170 230 170 Q 260 170 260 220 L 260 360 Z" fill="url(#mosqueHero)" />
          <rect x="225" y="130" width="10" height="44" fill="url(#mosqueHero)" />
          <circle cx="230" cy="124" r="6" fill="url(#mosqueHero)" />

          <path d="M 640 360 L 640 220 Q 640 170 670 170 Q 700 170 700 220 L 700 360 Z" fill="url(#mosqueHero)" />
          <rect x="665" y="130" width="10" height="44" fill="url(#mosqueHero)" />
          <circle cx="670" cy="124" r="6" fill="url(#mosqueHero)" />

          {/* outer minarets */}
          <path d="M 90 360 L 90 250 Q 90 215 110 215 Q 130 215 130 250 L 130 360 Z" fill="url(#mosqueHero)" />
          <path d="M 770 360 L 770 250 Q 770 215 790 215 Q 810 215 810 250 L 810 360 Z" fill="url(#mosqueHero)" />

          {/* baseline */}
          <rect x="40" y="350" width="820" height="10" fill="url(#mosqueHero)" opacity="0.6" />

          {/* small arches at base */}
          <path d="M 320 360 L 320 320 Q 340 295 360 320 L 360 360 Z" fill="hsl(173 60% 4%)" opacity="0.7" />
          <path d="M 540 360 L 540 320 Q 560 295 580 320 L 580 360 Z" fill="hsl(173 60% 4%)" opacity="0.7" />
          <path d="M 420 360 L 420 305 Q 450 270 480 305 L 480 360 Z" fill="hsl(173 60% 4%)" opacity="0.75" />
        </svg>
      </div>

      {/* Animated decorative arch */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <IslamicArch className="w-[88vw] max-w-[540px] h-auto opacity-70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[640px] mx-auto px-6 text-center flex flex-col items-center gap-7 md:gap-9"
        style={{
          // Gentle fade as user scrolls past
          opacity: Math.max(0, 1 - progress * 1.2),
          transform: `translateY(${progress * -30}px)`,
        }}
      >
        <p
          className="font-arabic text-2xl md:text-3xl text-gold-glow text-glow-gold opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 0.6s forwards" }}
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p
          className="font-display text-[10px] md:text-xs tracking-[0.5em] text-ivory/70 uppercase opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 1.6s forwards" }}
        >
          With the blessings of Allah
        </p>

        <p
          className="font-serifalt italic text-base md:text-lg text-ivory/80 max-w-[480px] opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 2.4s forwards" }}
        >
          Two souls are united in Nikah
        </p>

        {/* 3D names block */}
        <div
          className="opacity-0"
          style={{
            animation: "fade-up-slow 2.4s cubic-bezier(0.4,0,0.2,1) 3.2s forwards",
            transformStyle: "preserve-3d",
          }}
        >
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl text-3d-gold leading-[1.15]"
            style={{ color: "#E5C870", transform: "translateZ(40px)" }}
          >
            Farheen&nbsp;Taj
          </h1>
          <div className="my-3 md:my-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="text-gold-glow text-xl md:text-2xl">✦</span>
            <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-7xl text-3d-gold leading-[1.15]"
            style={{ color: "#E5C870", transform: "translateZ(40px)" }}
          >
            Mohammed&nbsp;Sabith
          </h1>
        </div>

        <p
          className="font-display text-[10px] tracking-[0.5em] text-ivory/50 uppercase mt-6 opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 4.4s forwards" }}
        >
          10 · April · 2026
        </p>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0"
        style={{ animation: "fade-up-slow 2s 5.2s forwards" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 animate-[light-flicker_4s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default Hero;
