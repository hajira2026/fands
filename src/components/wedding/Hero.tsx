import { useEffect, useRef, useState } from "react";
import IslamicArch from "./IslamicArch";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

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

  const mosqueRise = -40 + progress * 80;
  const mosqueOpacity = 0.25 + progress * 0.55;
  const mosqueScale = 1 + progress * 0.08;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center perspective-stage"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 animate-slow-zoom"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, hsl(46 75% 55% / 0.18), transparent 55%), radial-gradient(ellipse at 50% 110%, hsl(173 50% 14% / 0.6), transparent 60%), linear-gradient(180deg, hsl(173 60% 8%), hsl(173 55% 5%))",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] -z-10 animate-bloom"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(48 82% 81% / 0.22), transparent 70%)",
        }}
      />

      {/* Mosque */}
      <div
        className="absolute inset-x-0 bottom-0 -z-[5] flex items-end justify-center pointer-events-none"
        style={{
          transform: `translateY(${mosqueRise}px) scale(${mosqueScale})`,
          opacity: mosqueOpacity,
          transition:
            "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
          transformOrigin: "center bottom",
        }}
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

          <circle cx="450" cy="80" r="70" fill="url(#moonGlow)" />
          <circle cx="450" cy="80" r="14" fill="hsl(48 82% 81%)" opacity="0.55" />

          <path
            d="M 360 360 L 360 200 Q 360 100 450 70 Q 540 100 540 200 L 540 360 Z"
            fill="url(#mosqueHero)"
          />

          <rect x="447" y="40" width="6" height="34" fill="url(#mosqueHero)" />
          <circle cx="450" cy="40" r="6" fill="url(#mosqueHero)" />

          <path d="M 200 360 L 200 220 Q 200 170 230 170 Q 260 170 260 220 L 260 360 Z" fill="url(#mosqueHero)" />
          <rect x="225" y="130" width="10" height="44" fill="url(#mosqueHero)" />
          <circle cx="230" cy="124" r="6" fill="url(#mosqueHero)" />

          <path d="M 640 360 L 640 220 Q 640 170 670 170 Q 700 170 700 220 L 700 360 Z" fill="url(#mosqueHero)" />
          <rect x="665" y="130" width="10" height="44" fill="url(#mosqueHero)" />
          <circle cx="670" cy="124" r="6" fill="url(#mosqueHero)" />

          <rect x="40" y="350" width="820" height="10" fill="url(#mosqueHero)" opacity="0.6" />
        </svg>
      </div>

      {/* Arch */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <IslamicArch className="w-[88vw] max-w-[540px] h-auto opacity-70" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[640px] mx-auto px-6 text-center flex flex-col items-center gap-8"
        style={{
          opacity: Math.max(0, 1 - progress * 1.2),
          transform: `translateY(${progress * -30}px)`,
        }}
      >
        <p className="font-arabic text-2xl md:text-3xl text-gold-glow text-glow-gold">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="font-display text-xs tracking-[0.5em] text-ivory/70 uppercase">
          With the blessings of Allah
        </p>

        <p className="italic text-base md:text-lg text-ivory/80 max-w-[480px]">
          Two souls are united in Nikah
        </p>

        {/* 🔥 PREMIUM NAMES */}
        <div className="light-sweep">
          <h1 className="font-display text-5xl md:text-7xl text-gold-gradient text-3d-gold text-glow-gold leading-tight">
            Farheen&nbsp;Taj
          </h1>

          <div className="my-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <span className="text-gold-glow text-2xl">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent via-gold/70 to-transparent" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-gold-gradient text-3d-gold text-glow-gold leading-tight">
            Mohammed&nbsp;Sabith
          </h1>
        </div>

        <p className="font-display text-xs tracking-[0.5em] text-ivory/50 uppercase mt-6">
          05 · April · 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;
