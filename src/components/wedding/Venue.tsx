import { MapPin } from "lucide-react";
import GoldDivider from "./GoldDivider";
import ParallaxLayer from "./ParallaxLayer";

const Venue = () => (
  <section className="relative py-[120px] md:py-[160px] px-6 overflow-hidden">
    {/* Parallax mosque silhouette */}
    <ParallaxLayer depth={0.3} className="absolute inset-0 -z-10 flex items-end justify-center opacity-30">
      <svg viewBox="0 0 800 400" className="w-full h-auto" fill="none" aria-hidden>
        <defs>
          <linearGradient id="mosque" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(46 65% 52%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(173 60% 6%)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Domes */}
        <path d="M 100 400 L 100 280 Q 100 220 150 220 Q 200 220 200 280 L 200 400 Z" fill="url(#mosque)" />
        <path d="M 600 400 L 600 280 Q 600 220 650 220 Q 700 220 700 280 L 700 400 Z" fill="url(#mosque)" />
        <path d="M 320 400 L 320 200 Q 320 100 400 80 Q 480 100 480 200 L 480 400 Z" fill="url(#mosque)" />
        {/* Minarets */}
        <rect x="60" y="180" width="14" height="220" fill="url(#mosque)" />
        <rect x="726" y="180" width="14" height="220" fill="url(#mosque)" />
        {/* Crescents */}
        <circle cx="400" cy="60" r="6" fill="hsl(48 82% 81%)" opacity="0.7" />
      </svg>
    </ParallaxLayer>

    {/* Light ray across dome */}
    <div className="absolute top-0 left-1/4 w-1/2 h-full -z-10 opacity-30 animate-[light-flicker_8s_ease-in-out_infinite]"
      style={{ background: "linear-gradient(160deg, transparent 30%, hsl(48 82% 81% / 0.4) 50%, transparent 70%)" }} />

    <div className="reveal max-w-[600px] mx-auto text-center">
      <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase">The Venue</p>
      <GoldDivider className="my-8" />

      <h2 className="font-display text-3xl md:text-5xl text-gold-gradient text-glow-gold">SK Blue Heaven</h2>
      <p className="mt-6 font-serifalt italic text-ivory/75 leading-relaxed">
        A serene gathering place where families and loved ones will witness the sacred union — under one sky, one prayer.
      </p>

      <a
        href="https://www.google.com/maps/search/?api=1&query=SK+Blue+Heaven"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border border-gold/60 text-gold font-display text-xs tracking-[0.35em] uppercase transition-all duration-700 hover:scale-[1.02] hover:bg-gold/10 light-sweep"
        style={{ boxShadow: "0 0 30px hsl(46 65% 52% / 0.2)" }}
      >
        <MapPin className="h-4 w-4" />
        View Location
      </a>
    </div>
  </section>
);

export default Venue;
