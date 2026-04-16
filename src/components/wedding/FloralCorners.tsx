/**
 * Subtle gold floral mehndi sprays for the 4 corners of any card.
 * Pure gold (matches emerald background) — no red/green colors.
 * Uses layered SVG vines + paisley + small flowers in gradient gold.
 */
const Spray = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <linearGradient id="sprayGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8C5E15" />
        <stop offset="50%" stopColor="#F5E6A8" />
        <stop offset="100%" stopColor="#B8862A" />
      </linearGradient>
    </defs>
    {/* main vine arc */}
    <g fill="none" stroke="url(#sprayGold)" strokeLinecap="round">
      <path d="M6 6 Q70 14 110 60 Q140 95 180 120" strokeWidth="1.4" opacity="0.95" />
      <path d="M14 24 Q44 36 70 70" strokeWidth="1" opacity="0.7" />
      <path d="M28 8 Q80 28 120 50" strokeWidth="1" opacity="0.7" />
      <path d="M40 50 Q60 70 50 96" strokeWidth="0.8" opacity="0.6" />
      <path d="M90 30 Q112 42 108 64" strokeWidth="0.8" opacity="0.6" />
      <path d="M120 80 Q140 92 132 116" strokeWidth="0.8" opacity="0.55" />
    </g>

    {/* paisley leaves */}
    <g fill="url(#sprayGold)" opacity="0.85">
      <path d="M28 56 q-12 4 -10 18 q14 0 16 -16 z" />
      <path d="M64 30 q4 -12 18 -10 q-2 14 -16 16 z" />
      <path d="M92 86 q-10 6 -8 18 q14 -2 14 -16 z" />
      <path d="M124 54 q8 -8 20 -2 q-4 12 -18 8 z" />
      <path d="M50 100 q-10 6 -8 18 q14 -2 14 -16 z" />
    </g>

    {/* tiny gold flowers (5-petal) */}
    <g fill="url(#sprayGold)">
      <g transform="translate(46 46)">
        <circle r="2.5" />
        <circle cx="0" cy="-6" r="2.2" />
        <circle cx="6" cy="-2" r="2.2" />
        <circle cx="4" cy="5" r="2.2" />
        <circle cx="-4" cy="5" r="2.2" />
        <circle cx="-6" cy="-2" r="2.2" />
      </g>
      <g transform="translate(102 22)">
        <circle r="2" />
        <circle cx="0" cy="-5" r="1.8" />
        <circle cx="5" cy="-1.5" r="1.8" />
        <circle cx="3" cy="4" r="1.8" />
        <circle cx="-3" cy="4" r="1.8" />
        <circle cx="-5" cy="-1.5" r="1.8" />
      </g>
      <g transform="translate(82 102)">
        <circle r="2.5" />
        <circle cx="0" cy="-6" r="2.2" />
        <circle cx="6" cy="-2" r="2.2" />
        <circle cx="4" cy="5" r="2.2" />
        <circle cx="-4" cy="5" r="2.2" />
        <circle cx="-6" cy="-2" r="2.2" />
      </g>
      <g transform="translate(140 76)">
        <circle r="2" />
        <circle cx="0" cy="-5" r="1.8" />
        <circle cx="5" cy="-1.5" r="1.8" />
        <circle cx="3" cy="4" r="1.8" />
        <circle cx="-3" cy="4" r="1.8" />
        <circle cx="-5" cy="-1.5" r="1.8" />
      </g>
    </g>

    {/* sparkle dots */}
    <g fill="#F5E6A8" opacity="0.9">
      <circle cx="14" cy="14" r="1.6" />
      <circle cx="32" cy="22" r="1" />
      <circle cx="22" cy="40" r="1" />
      <circle cx="78" cy="58" r="1" />
      <circle cx="120" cy="100" r="1.2" />
    </g>
  </svg>
);

const FloralCorners = ({ size = 130 }: { size?: number }) => {
  const offset = -Math.round(size * 0.3);
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    pointerEvents: "none",
    filter: "drop-shadow(0 0 6px hsl(46 70% 55% / 0.45))",
    opacity: 0.9,
  };
  return (
    <>
      <Spray style={{ ...base, top: offset, left: offset }} />
      <Spray style={{ ...base, top: offset, right: offset, transform: "scaleX(-1)" }} />
      <Spray style={{ ...base, bottom: offset, left: offset, transform: "scaleY(-1)" }} />
      <Spray style={{ ...base, bottom: offset, right: offset, transform: "scale(-1,-1)" }} />
    </>
  );
};

export default FloralCorners;
