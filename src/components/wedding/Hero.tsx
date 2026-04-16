import IslamicArch from "./IslamicArch";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 💎 PREMIUM BACKGROUND (LESS DARK + RICH) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#14463f] via-[#0F2E2A] to-[#081c19]" />

      {/* ✨ CENTER GOLD GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.25),transparent_60%)]" />

      {/* 🌫️ DEPTH SHADOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.5),transparent_70%)]" />

      {/* ✨ FLOATING DUST */}
      <div className="absolute inset-0 -z-10">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-[#F5E6A8] rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-dust ${5 + Math.random() * 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* 🕌 MOSQUE (MORE SOFT + BLENDED) */}
      <div className="absolute bottom-0 w-full flex justify-center opacity-40 blur-[1px]">
        <IslamicArch className="w-[90%] max-w-[480px]" />
      </div>

      {/* 💎 CONTENT */}
      <div className="text-center px-6 z-10 max-w-[90%]">

        {/* Arabic */}
        <p className="font-arabic text-lg md:text-xl text-[#F5E6A8] mb-3 drop-shadow-[0_0_10px_rgba(245,230,168,0.3)]">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-[10px] tracking-[0.35em] text-white/70 uppercase mb-3">
          With the blessings of Allah
        </p>

        <p className="italic text-sm text-white/80 mb-6">
          Two souls are united in Nikah
        </p>

        {/* 💎 NAMES (FIXED VISIBILITY) */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#F5E6A8] leading-snug drop-shadow-[0_0_20px_rgba(245,230,168,0.35)]">
          Farheen Taj
        </h1>

        {/* divider */}
        <div className="my-4 flex justify-center items-center gap-3">
          <span className="w-10 h-px bg-gradient-to-r from-transparent via-[#F5E6A8]/60 to-transparent" />
          <span className="text-[#F5E6A8] text-lg animate-pulse">✦</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent via-[#F5E6A8]/60 to-transparent" />
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#F5E6A8] leading-snug drop-shadow-[0_0_20px_rgba(245,230,168,0.35)]">
          Mohammed Sabith
        </h1>

        {/* DATE (FIXED READABILITY) */}
        <p className="mt-6 text-[10px] tracking-[0.35em] text-white/60 uppercase">
          10 • May • 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;