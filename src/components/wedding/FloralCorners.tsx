/**
 * Mughal floral corner sprays (red rose + green leaves + gold filigree)
 * positioned at all 4 corners of a card. Inspired by traditional Indian
 * Muslim wedding invitations.
 */
const Spray = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg" aria-hidden>
    {/* gold vines */}
    <g fill="none" stroke="#B8862A" strokeWidth="1.4" strokeLinecap="round">
      <path d="M10 10 Q60 14 100 60 Q130 95 170 110" opacity="0.9" />
      <path d="M14 24 Q44 36 70 70" opacity="0.7" />
      <path d="M28 8 Q80 28 120 50" opacity="0.7" />
      <path d="M40 50 Q60 70 50 90" opacity="0.6" />
      <path d="M90 30 Q110 40 105 60" opacity="0.6" />
    </g>
    {/* small gold dots */}
    <g fill="#E5C870">
      <circle cx="14" cy="14" r="2.4" />
      <circle cx="40" cy="20" r="1.6" />
      <circle cx="22" cy="38" r="1.6" />
      <circle cx="78" cy="44" r="1.6" />
    </g>
    {/* leaves (green) */}
    <g fill="#3F6B3A" opacity="0.9">
      <path d="M30 60 q-12 6 -8 18 q12 -2 14 -16 z" />
      <path d="M60 30 q6 -10 18 -8 q-2 12 -16 14 z" />
      <path d="M88 80 q-10 4 -10 16 q12 0 14 -14 z" />
      <path d="M120 50 q8 -6 18 0 q-6 12 -18 8 z" />
    </g>
    <g fill="#5A8A52" opacity="0.85">
      <path d="M20 80 q-8 8 -2 18 q12 -4 8 -18 z" />
      <path d="M100 30 q10 -4 16 4 q-8 10 -18 4 z" />
    </g>
    {/* roses (deep red with darker center) */}
    <g>
      <circle cx="46" cy="44" r="11" fill="#A8332E" />
      <circle cx="46" cy="44" r="7" fill="#7A1F1C" />
      <circle cx="46" cy="44" r="3" fill="#E5C870" />

      <circle cx="100" cy="20" r="9" fill="#A8332E" />
      <circle cx="100" cy="20" r="6" fill="#7A1F1C" />
      <circle cx="100" cy="20" r="2.4" fill="#E5C870" />

      <circle cx="80" cy="100" r="10" fill="#A8332E" />
      <circle cx="80" cy="100" r="6.5" fill="#7A1F1C" />
      <circle cx="80" cy="100" r="2.6" fill="#E5C870" />

      <circle cx="140" cy="70" r="8" fill="#A8332E" />
      <circle cx="140" cy="70" r="5" fill="#7A1F1C" />
      <circle cx="140" cy="70" r="2" fill="#E5C870" />
    </g>
  </svg>
);

const FloralCorners = () => (
  <>
    <Spray className="corner" style={{ top: -40, left: -40 }} />
    <Spray className="corner" style={{ top: -40, right: -40, transform: "scaleX(-1)" }} />
    <Spray className="corner" style={{ bottom: -40, left: -40, transform: "scaleY(-1)" }} />
    <Spray className="corner" style={{ bottom: -40, right: -40, transform: "scale(-1,-1)" }} />
  </>
);

export default FloralCorners;
