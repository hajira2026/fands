import { useEffect, useState } from "react";

/**
 * Cinematic intro overlay.
 * Plays once on first load: fade-in Bismillah on a dark veil with a gold light burst,
 * then dissolves away revealing the Hero. ~3.6s total.
 */
const CinematicIntro = () => {
  const [stage, setStage] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("out"), 3000);
    const t2 = setTimeout(() => setStage("done"), 4400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, hsl(173 55% 8%) 0%, hsl(173 60% 4%) 100%)",
        opacity: stage === "out" ? 0 : 1,
        transition: "opacity 1.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* expanding gold burst */}
      <div
        className="absolute"
        style={{
          width: "60vmin",
          height: "60vmin",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(48 82% 81% / 0.55) 0%, hsl(46 65% 52% / 0.25) 35%, transparent 70%)",
          filter: "blur(20px)",
          animation: "intro-bloom 3.4s cubic-bezier(0.4,0,0.2,1) forwards",
        }}
      />

      <div className="relative text-center px-6">
        <p
          className="font-arabic text-3xl md:text-5xl text-gold-glow text-glow-gold"
          style={{
            opacity: 0,
            animation: "intro-text 3s cubic-bezier(0.4,0,0.2,1) 0.4s forwards",
          }}
        >
          بِسْمِ ٱللَّٰهِ
        </p>
        <p
          className="mt-6 font-display text-[10px] md:text-xs tracking-[0.55em] text-ivory/70 uppercase"
          style={{
            opacity: 0,
            animation: "intro-text 2.4s cubic-bezier(0.4,0,0.2,1) 1.4s forwards",
          }}
        >
          In the name of Allah
        </p>
      </div>

      <style>{`
        @keyframes intro-bloom {
          0%   { opacity: 0; transform: scale(0.4); }
          40%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0.7; transform: scale(1.4); }
        }
        @keyframes intro-text {
          0%   { opacity: 0; transform: translateY(12px); letter-spacing: 0.1em; }
          60%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CinematicIntro;
