const IslamicArch = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 480 560" className={className} fill="none" aria-hidden>
    <defs>
      <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFF4CE" />
        <stop offset="45%" stopColor="#E8CB82" />
        <stop offset="100%" stopColor="#B88E48" />
      </linearGradient>

      <filter id="archGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="softBlur" />
        <feMerge>
          <feMergeNode in="softBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <path
      d="M 54 520 L 54 262 C 54 142, 160 52, 240 24 C 320 52, 426 142, 426 262 L 426 520"
      stroke="url(#archGold)"
      strokeWidth="2.4"
      strokeLinecap="round"
      filter="url(#archGlow)"
      opacity="0.95"
    />

    <path
      d="M 86 520 L 86 272 C 86 164, 176 84, 240 58 C 304 84, 394 164, 394 272 L 394 520"
      stroke="url(#archGold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.3"
    />

    <path
      d="M 116 520 L 116 284 C 116 188, 191 121, 240 102 C 289 121, 364 188, 364 284 L 364 520"
      stroke="url(#archGold)"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.14"
    />

    <circle cx="240" cy="24" r="6" fill="#F5E6A8" opacity="0.9" />
    <circle cx="240" cy="24" r="14" fill="#F5E6A8" opacity="0.1" />
  </svg>
);

export default IslamicArch;
