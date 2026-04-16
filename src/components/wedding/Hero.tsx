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
      {/* 🌌 CINEMATIC BACKGROUND (UPGRADED) */}
      <div
        className="absolute inset-0 -z-20 animate-slow-zoom"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(245,230,168,0.18), transparent 55%), radial-gradient(circle at 50% 120%, rgba(15,46,42,0.8), transparent 60%), linear-gradient(180deg, #081c19, #04110f)",
        }}
      />

      {/* ✨ LIGHT RAYS (NEW) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(245,230,168,0.12), transparent 60%)",
          animation: "bloom 6s ease-in-out infinite",
        }}
      />

      {/* 🌫️ ATMOSPHERE FOG (NEW DEPTH) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(0,0,0,0.6), transparent 70%)",
        }}
      />

      {/* 🕌 MOSQUE */}
      <div
        className="absolute inset-x-0 bottom-0 -z-[5] flex items-end justify-center pointer-events-none"
        style={{
          transform: `translateY(${mosqueRise}px) scale(${mosqueScale})`,
          opacity: mosqueOpacity,
          transition:
            "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <svg viewBox="0 0 900 360" className="w-full h-auto max-w-[1100px]" fill="none">
          <defs>
            <linearGradient id="mosqueHero" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#04110f" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path
            d="M 360 360 L 360 200 Q 360 100 450 70 Q 540 100 540 200 L 540 360 Z"
            fill="url(#mosqueHero)"
          />

          <rect x="447" y="40" width="6" height="34" fill="#D4AF37" />
          <circle cx="450" cy="40" r="6" fill="#D4AF37" />
        </svg>
      </div>

      {/* 🏛️ ARCH */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <IslamicArch className="w-[90vw] max-w-[560px] opacity-80" />
      </div>

      {/* ✨ CONTENT */}
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

        {/* 💎 PREMIUM NAMES */}
        <div className="light-sweep">
          <h1 className="font-display text-5xl md:text-7xl text-gold-gradient text-3d-gold text-glow-gold">
            Farheen&nbsp;Taj
          </h1>

          <div className="my-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <span className="text-gold-glow text-2xl">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent via-gold/70 to-transparent" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-gold-gradient text-3d-gold text-glow-gold">
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
