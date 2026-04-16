import IslamicArch from "./IslamicArch";

const Hero = () => {
  const dust = Array.from({ length: 14 }, (_, index) => ({
    id: index,
    top: `${8 + ((index * 7) % 80)}%`,
    left: `${6 + ((index * 9) % 88)}%`,
    delay: `${(index % 5) * 0.8}s`,
    duration: `${7 + (index % 4) * 1.8}s`,
  }));

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#173f39] via-[#102d29] to-[#091816]" />
      <div className="hero-veil absolute inset-0 -z-20" />
      <div className="hero-moonlight absolute left-1/2 top-[16%] -z-20 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full animate-[glow-pulse_8s_ease-in-out_infinite]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 flex justify-center">
        <div
          className="w-full max-w-[58rem] px-6 opacity-40 blur-[0.6px] sm:px-10"
          style={{ animation: "mosque-drift 13s ease-in-out infinite" }}
        >
          <IslamicArch className="w-full" />
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        {dust.map((item) => (
          <span
            key={item.id}
            className="absolute h-[3px] w-[3px] rounded-full bg-[#f5e5b8] opacity-75"
            style={{
              top: item.top,
              left: item.left,
              animation: `float-dust ${item.duration} linear ${item.delay} infinite`,
              boxShadow: "0 0 18px rgba(245, 229, 184, 0.55)",
            }}
          />
        ))}
      </div>

      <div className="reveal glass-card premium-frame light-sweep relative z-10 mx-auto w-full max-w-4xl rounded-[2rem] px-6 py-12 text-center sm:px-10 sm:py-14 md:px-16 md:py-16">
        <div className="section-glow absolute inset-0 rounded-[inherit] opacity-80" />

        <p className="font-arabic relative text-xl text-soft-gold text-glow-gold sm:text-2xl">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <p className="relative mt-5 text-[0.62rem] uppercase tracking-[0.45em] text-[#f0dec0]/80 sm:text-[0.7rem]">
          With the blessings of Allah
        </p>

        <p className="font-romantic relative mx-auto mt-5 max-w-2xl text-lg italic leading-relaxed text-[#f8efe1] sm:text-[1.45rem]">
          Two hearts, two families, and one sacred promise gathered in grace for a beautiful Nikah.
        </p>

        <div className="relative mt-10 flex items-center justify-center gap-4 sm:gap-5">
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#eacb83] to-transparent sm:w-24" />
          <span className="ornament-dot" />
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#eacb83] to-transparent sm:w-24" />
        </div>

        <div className="relative mt-10 space-y-5">
          <h1 className="font-display text-gold-gradient text-4xl leading-tight text-3d-gold sm:text-5xl md:text-6xl">
            Farheen Taj
          </h1>
          <p className="font-romantic text-base uppercase tracking-[0.45em] text-[#f1dfbf]/65 sm:text-lg">
            &
          </p>
          <h1 className="font-display text-gold-gradient text-4xl leading-tight text-3d-gold sm:text-5xl md:text-6xl">
            Mohammed Sabith
          </h1>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-[#e7ca87]/20 bg-white/5 px-5 py-3 backdrop-blur-sm sm:gap-4 sm:px-7">
          <span className="font-display text-xl text-soft-gold sm:text-3xl">10</span>
          <span className="text-sm uppercase tracking-[0.4em] text-[#f1dfbf]/75 sm:text-base">May</span>
          <span className="font-display text-xl text-soft-gold sm:text-3xl">2026</span>
        </div>

        <p className="relative mt-6 text-[0.68rem] uppercase tracking-[0.38em] text-[#f1dfbf]/65 sm:text-xs">
          A cinematic evening of dua, elegance, and celebration
        </p>
      </div>
    </section>
  );
};

export default Hero;
