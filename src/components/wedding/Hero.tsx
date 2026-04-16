import IslamicArch from "./IslamicArch";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic background — warm bokeh + emerald depth */}
      <div
        className="absolute inset-0 -z-10 animate-slow-zoom"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, hsl(46 75% 55% / 0.22), transparent 55%), radial-gradient(ellipse at 50% 100%, hsl(351 60% 15% / 0.55), transparent 60%), linear-gradient(180deg, hsl(173 60% 8%), hsl(173 55% 5%))",
        }}
      />

      {/* Top chandelier glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] -z-10 animate-bloom"
        style={{ background: "radial-gradient(ellipse at top, hsl(48 82% 81% / 0.22), transparent 70%)" }}
      />

      {/* Animated arch behind name */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <IslamicArch className="w-[88vw] max-w-[540px] h-auto opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[640px] mx-auto px-6 text-center flex flex-col items-center gap-7 md:gap-9">
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
          className="font-cormorant italic text-lg md:text-2xl text-ivory/85 max-w-[480px] opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 2.4s forwards" }}
        >
          Two souls are united in the sacred bond of Nikah
        </p>

        <div
          className="opacity-0 light-sweep"
          style={{ animation: "fade-up-slow 2.4s cubic-bezier(0.4,0,0.2,1) 3.2s forwards" }}
        >
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl gold-emboss text-glow-gold leading-[1.05]">
            Farheen Taj
          </h1>
          <div className="my-4 md:my-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold/70" />
            <span className="font-cormorant italic text-gold-glow text-2xl md:text-3xl">&amp;</span>
            <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl gold-emboss text-glow-gold leading-[1.05]">
            Mohammed Sabith
          </h1>
        </div>

        <p
          className="font-display text-[10px] md:text-xs tracking-[0.55em] text-ivory/55 uppercase mt-4 opacity-0"
          style={{ animation: "fade-up-slow 2s cubic-bezier(0.4,0,0.2,1) 4.2s forwards" }}
        >
          10 · April · 2026 · Mysore
        </p>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0"
        style={{ animation: "fade-up-slow 2s 5s forwards" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0 animate-[light-flicker_4s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};

export default Hero;
