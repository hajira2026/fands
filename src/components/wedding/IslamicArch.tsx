const IslamicArch = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 500" className={className} fill="none">
    <defs>
      <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF2C2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B8962E" />
      </linearGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <path
      d="M 40 480 L 40 240 C 40 130, 130 40, 200 20 C 270 40, 360 130, 360 240 L 360 480"
      stroke="url(#archGold)"
      strokeWidth="2"
      filter="url(#glow)"
      strokeDasharray="2000"
      style={{ animation: "draw-arch 4s ease forwards" }}
    />

    <path
      d="M 60 480 L 60 245 C 60 145, 140 60, 200 45 C 260 60, 340 145, 340 245 L 340 480"
      stroke="url(#archGold)"
      strokeWidth="1"
      opacity="0.4"
    />

    <circle cx="200" cy="22" r="4" fill="#F5E6A8" />
  </svg>
);

export default IslamicArch;
