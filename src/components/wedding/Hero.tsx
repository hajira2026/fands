import { useScrollCamera } from "@/hooks/useScrollCamera";
import IslamicArch from "./IslamicArch";

const Hero = () => {
  const scrollProgress = useScrollCamera();
  const dust = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    top: `${6 + ((index * 11) % 82)}%`,
    left: `${4 + ((index * 13) % 90)}%`,
    delay: `${(index % 6) * 0.7}s`,
    duration: `${8 + (index % 5) * 1.6}s`,
  }));

  const nameGlow = 0.2 + scrollProgress * 0.9;
  const subGlow = 0.12 + scrollProgress * 0.32;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6">
      <div className="absolute inset-0 -z-40 bg-gradient-to-b from-[#173f39] via-[#102d29] to-[#091816]" />
      <div className="hero-veil absolute inset-0 -z-30" />
      <div className="hero-moonlight absolute left-1/2 top-[12%] -z-20 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full animate-[glow-pulse_8s_ease-in-out_infinite]" />
      <div className="hero-ambient-ribbon absolute -left-[12%] top-[18%] -z-20 h-40 w-[40rem] rotate-[-10deg]" />
      <div className="hero-ambient-ribbon absolute -right-[18%] bottom-[18%] -z-20 h-44 w-[34rem] rotate-[8deg]" />

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-arch-breathe absolute inset-0 flex items-center justify-center">
          <div className="hero-arch-shell w-[94vw] max-w-[72rem] px-0 sm:px-4">
            <IslamicArch className="w-full" />
          </div>
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

      <div className="reveal relative z-10 mx-auto w-full max-w-5xl px-3 text-center sm:px-8">
        <div className="hero-open-layout relative mx-auto max-w-4xl rounded-[2rem] px-3 py-8 sm:px-8 sm:py-12 md:px-12">
          <p className="font-arabic text-xl text-soft-gold text-glow-gold sm:text-2xl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <p
            className="mt-4 text-[0.62rem] uppercase tracking-[0.42em] text-[#f0dec0]/80 sm:text-[0.7rem]"
            style={{ textShadow: `0 0 ${16 + scrollProgress * 18}px rgba(245, 229, 184, ${subGlow})` }}
          >
            With the blessings of Allah
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-5">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#eacb83] to-transparent sm:w-24" />
            <span className="ornament-dot" />
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-[#eacb83] to-transparent sm:w-24" />
          </div>

          <div className="mt-8 space-y-4">
            <h1
              className="font-display text-gold-gradient hero-name text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                textShadow: `0 0 ${28 + scrollProgress * 40}px rgba(245, 229, 184, ${nameGlow}), 0 0 ${52 + scrollProgress * 28}px rgba(203, 162, 84, ${0.14 + scrollProgress * 0.2})`,
              }}
            >
              Farheen Taj
            </h1>
            <p className="font-romantic text-base uppercase tracking-[0.5em] text-[#f1dfbf]/65 sm:text-xl">&amp;</p>
            <h1
              className="font-display text-gold-gradient hero-name text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                textShadow: `0 0 ${28 + scrollProgress * 40}px rgba(245, 229, 184, ${nameGlow}), 0 0 ${52 + scrollProgress * 28}px rgba(203, 162, 84, ${0.14 + scrollProgress * 0.2})`,
              }}
            >
              Mohammed Sabith
            </h1>
          </div>

          <div className="mx-auto mt-9 flex max-w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-[#e7ca87]/20 bg-white/5 px-5 py-3 backdrop-blur-sm sm:gap-4 sm:px-7">
            <span className="font-display text-xl text-soft-gold sm:text-3xl">10</span>
            <span className="text-sm uppercase tracking-[0.4em] text-[#f1dfbf]/75 sm:text-base">May</span>
            <span className="font-display text-xl text-soft-gold sm:text-3xl">2026</span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#invitation"
              className="hero-action-primary hero-button min-w-[12.5rem] rounded-full px-7 py-3 text-[0.66rem] uppercase tracking-[0.34em] text-[#0f2825]"
            >
              Open Invitation
            </a>
            <a
              href="#event-details"
              className="hero-action-secondary hero-button min-w-[12.5rem] rounded-full px-7 py-3 text-[0.66rem] uppercase tracking-[0.34em] text-[#f1dfbf]"
            >
              View Ceremony
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
