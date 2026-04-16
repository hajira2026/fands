import IslamicArch from "./IslamicArch";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 💎 SOFT GOLD BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#123c35] via-[#0F2E2A] to-[#081c19]" />

      {/* ✨ CENTER LIGHT */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.2),transparent_60%)]" />

      {/* 🕌 DARK MOSQUE EFFECT */}
      <div className="absolute bottom-0 w-full opacity-30 scale-110">
        <IslamicArch className="w-full max-w-[500px] mx-auto" />
      </div>

      {/* 💎 CONTENT */}
      <div className="text-center px-6 z-10">

        <p className="font-arabic text-lg text-[#F5E6A8] mb-2">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="text-[10px] tracking-[0.4em] text-white/70 uppercase mb-2">
          With the blessings of Allah
        </p>

        <p className="italic text-sm text-white/80 mb-5">
          Two souls are united in Nikah
        </p>

        {/* 💎 BIG NAMES */}
        <h1 className="text-4xl md:text-6xl text-gold-gradient text-glow-gold font-display">
          Farheen Taj
        </h1>

        <div className="my-3 text-gold-glow">✦</div>

        <h1 className="text-4xl md:text-6xl text-gold-gradient text-glow-gold font-display">
          Mohammed Sabith
        </h1>

        <p className="mt-5 text-[10px] tracking-[0.4em] text-white/50 uppercase">
          10 • May • 2026
        </p>
      </div>
    </section>
  );
};

export default Hero;