import IslamicArch from "./IslamicArch";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background: emerald with slow zoom + soft golden glow */}
      <div className="absolute inset-0 -z-10 animate-slow-zoom"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, hsl(46 65% 52% / 0.18), transparent 55%), radial-gradient(ellipse at 50% 100%, hsl(351 60% 15% / 0.5), transparent 60%), linear-gradient(180deg, hsl(173 60% 8%), hsl(173 55% 6%))",
        }}
      />

      {/* Top chandelier light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] -z-10 animate-bloom"
        style={{ background: "radial-gradient(ellipse at top, hsl(48 82% 81% / 0.18), transparent 70%)" }} />

      {/* Animated arch */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <IslamicArch className="w-[88vw] max-w-[520px] h-auto opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center flex flex-col items-center gap-8 md:gap-10">
        <p
          className="font-arabic text-2xl md:text-3xl text-gold-glow text-glow-gold opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 0.6s forwards" }}
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p
          className="font-display text-[10px] md:text-xs tracking-[0.45em] text-ivory/70 uppercase opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 1.8s forwards" }}
        >
          With the blessings of Allah
        </p>

        <p
          className="font-serifalt italic text-base md:text-lg text-ivory/80 max-w-[480px] opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 2.6s forwards" }}
        >
          Two souls are united in Nikah
        </p>

        <div
          className="opacity-0 light-sweep"
          style={{ animation: "fade-up-slow 2.4s cubic-bezier(0.4,0,0.2,1) 3.4s forwards" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-gold-gradient text-glow-gold leading-[1.15]">
            Farheen&nbsp;Taj
          </h1>
          <div className="my-3 md:my-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="text-gold-glow text-xl md:text-2xl">✦</span>
            <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-gold-gradient text-glow-gold leading-[1.15]">
            Mohammed&nbsp;Sabith
          </h1>
        </div>

        <p
          className="font-display text-[10px] tracking-[0.5em] text-ivory/50 uppercase mt-6 opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 4.4s forwards" }}
        >
          05 · April · 2026
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0"
        style={{ animation: "fade-up-slow 2s 5.2s forwards" }}>
        <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 animate-[light-flicker_4s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default Hero;
