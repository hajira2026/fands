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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🌟 LIGHT BACKGROUND (FIXED) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0F2E2A] via-[#123c35] to-[#081c19]" />

      {/* ✨ GLOW CENTER */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.15),transparent_60%)]" />

      {/* 🌫️ SOFT DEPTH LAYER */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.4),transparent_70%)]" />

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#F5E6A8] rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-dust ${6 + Math.random() * 6}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* 🏛️ ARCH */}
      <IslamicArch className="absolute bottom-0 opacity-60 w-[90%] max-w-[500px]" />

      {/* 💎 CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-[90%]">
        <p className="font-arabic text-xl text-[#F5E6A8] mb-3">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-[10px] tracking-[0.4em] text-white/70 uppercase mb-3">
          With the blessings of Allah
        </p>

        <p className="italic text-sm text-white/80 mb-6">
          Two souls are united in Nikah
        </p>

        {/* 💎 NAMES (FIXED MOBILE) */}
        <h1 className="font-display text-3xl sm:text-5xl text-gold-gradient text-3d-gold text-glow-gold leading-snug">
          Farheen Taj
        </h1>

        <div className="my-4 flex justify-center items-center gap-3">
          <span className="w-10 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <span className="text-gold-glow text-lg">✦</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent via-gold/70 to-transparent" />
        </div>

        <h1 className="font-display text-3xl sm:text-5xl text-gold-gradient text-3d-gold text-glow-gold leading-snug">
          Mohammed Sabith
        </h1>

        <p className="mt-6 text-[10px] tracking-[0.4em] text-white/50 uppercase">
          10 • May • 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;
