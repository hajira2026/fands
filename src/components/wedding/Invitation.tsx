import FloralCorners from "./FloralCorners";

/**
 * Traditional Mughal-style parchment invitation card.
 * Mirrors the aesthetic of premium printed Nikah invitations:
 * cream parchment, gold pointed-arch frame, floral mehndi corners,
 * embossed gold script names, twin minarets at base.
 */
const Invitation = () => (
  <section className="relative py-[140px] md:py-[180px] px-6 flex justify-center">
    <div className="reveal w-full max-w-[560px] floral-corners">
      <FloralCorners />

      <article
        className="parchment-card arch-minarets relative rounded-[6px] px-8 md:px-14 pt-12 md:pt-16 pb-24 md:pb-28 text-center overflow-hidden"
        style={{ aspectRatio: "3 / 4.4" }}
      >
        {/* Inner gold pointed arch */}
        <svg
          viewBox="0 0 400 560"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="invArchGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B8862A" />
              <stop offset="50%" stopColor="#E5C870" />
              <stop offset="100%" stopColor="#8C5E15" />
            </linearGradient>
            <pattern id="archFiligree" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="0.5" fill="#B8862A" opacity="0.5" />
            </pattern>
          </defs>
          {/* outer arch */}
          <path
            d="M 50 540 L 50 200 C 50 110, 130 50, 200 30 C 270 50, 350 110, 350 200 L 350 540 Z"
            stroke="url(#invArchGold)"
            strokeWidth="2.2"
            fill="url(#archFiligree)"
          />
          {/* inner arch */}
          <path
            d="M 70 540 L 70 210 C 70 130, 140 75, 200 58 C 260 75, 330 130, 330 210 L 330 540"
            stroke="url(#invArchGold)"
            strokeWidth="1"
            opacity="0.7"
          />
          {/* apex ornament */}
          <path
            d="M 200 18 L 204 30 L 200 42 L 196 30 Z"
            fill="#B8862A"
          />
          <circle cx="200" cy="30" r="2.2" fill="#E5C870" />
        </svg>

        {/* Content above arch */}
        <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
          <p className="font-arabic italic text-[11px] md:text-xs text-[#8C5E15] tracking-wide">
            Bismillah-ir-Rahman-ir-Rahim
          </p>

          <h2 className="font-script text-4xl md:text-6xl gold-emboss leading-tight">
            Nikah Ceremony
          </h2>

          <div className="mt-4 md:mt-6">
            <h3 className="font-script text-3xl md:text-5xl gold-emboss leading-none">
              Farheen Taj
            </h3>
            <p className="mt-2 font-cormorant text-[12px] md:text-sm text-[#3a2a1a]">
              D/O Mr. Shafi Khan
              <br />
              Residing in Mysore
            </p>
          </div>

          <div className="mt-3 font-cormorant italic text-lg md:text-xl text-[#8C5E15]">
            weds
          </div>

          <div>
            <h3 className="font-script text-3xl md:text-5xl gold-emboss leading-none">
              Mohammed Sabith PS
            </h3>
            <p className="mt-2 font-cormorant text-[12px] md:text-sm text-[#3a2a1a]">
              S/O Mr. Zainuddin
              <br />
              Residing in Virajpet
            </p>
          </div>

          {/* Date / Time block */}
          <div className="mt-6 md:mt-8 flex items-stretch justify-center gap-4 md:gap-6 text-[#3a2a1a]">
            <div className="text-center">
              <p className="font-cormorant font-medium text-sm md:text-base">Nikah On</p>
              <p className="font-cormorant text-base md:text-lg mt-1">10 April 2026</p>
            </div>
            <div className="w-px bg-[#B8862A]/50 self-stretch" />
            <div className="text-center">
              <p className="font-cormorant font-medium text-sm md:text-base">Time</p>
              <p className="font-cormorant text-base md:text-lg mt-1">1:30 PM</p>
            </div>
          </div>

          <p className="mt-4 font-cormorant text-[12px] md:text-sm text-[#3a2a1a]">
            Venue: <span className="italic">SK Blue Heaven, Mysore</span>
          </p>
        </div>
      </article>

      {/* Wax seal */}
      <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-4 wax-seal z-20">
        <span className="font-script text-2xl md:text-3xl text-[#3a1f08]">F&amp;S</span>
      </div>
    </div>
  </section>
);

export default Invitation;
