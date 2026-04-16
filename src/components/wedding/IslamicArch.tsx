/** Decorative Mughal-style pointed arch SVG that draws in on mount. */
const IslamicArch = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#B8902E" />
        <stop offset="50%" stopColor="#F5E6A8" />
        <stop offset="100%" stopColor="#B8902E" />
      </linearGradient>
    </defs>
    <path
      d="M 40 480 L 40 240 C 40 130, 130 40, 200 20 C 270 40, 360 130, 360 240 L 360 480"
      stroke="url(#archGold)"
      strokeWidth="1.5"
      strokeDasharray="2000"
      style={{ animation: "draw-arch 4s cubic-bezier(0.4,0,0.2,1) forwards" }}
    />
    <path
      d="M 60 480 L 60 245 C 60 145, 140 60, 200 45 C 260 60, 340 145, 340 245 L 340 480"
      stroke="url(#archGold)"
      strokeWidth="0.6"
      opacity="0.5"
      strokeDasharray="2000"
      style={{ animation: "draw-arch 5s cubic-bezier(0.4,0,0.2,1) 0.4s forwards" }}
    />
    {/* small ornament at apex */}
    <circle cx="200" cy="22" r="3" fill="#F5E6A8" />
    <path d="M 200 12 L 203 22 L 200 32 L 197 22 Z" fill="#F5E6A8" opacity="0.8" />
  </svg>
);

export default IslamicArch;
