import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const Person = ({ name, role, parent, place }: { name: string; role: string; parent: string; place: string }) => (
  <div className="reveal flex flex-col items-center text-center max-w-[260px] mx-auto">

    <p className="font-display text-[9px] tracking-[0.4em] text-gold/80 uppercase mb-3">
      {role}
    </p>

    {/* 🔥 PREMIUM AVATAR */}
    <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full mb-5">

      {/* glow */}
      <div className="absolute inset-0 rounded-full blur-xl opacity-40 bg-[radial-gradient(circle,#F5E6A8,transparent)]" />

      {/* circle */}
      <div className="relative w-full h-full rounded-full overflow-hidden gold-border-double">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, hsl(173 30% 25%), hsl(173 60% 8%))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl md:text-5xl text-gold-gradient text-glow-gold">
            {name.charAt(0)}
          </span>
        </div>
      </div>
    </div>

    <h3 className="font-display text-xl md:text-3xl text-gold-gradient text-3d-gold leading-tight">
      {name}
    </h3>

    <p className="mt-2 italic text-white/70 text-sm">{parent}</p>

    <p className="mt-1 font-display text-[9px] tracking-[0.35em] text-white/50 uppercase">
      {place}
    </p>
  </div>
);

const Couple = () => (
  <section className="relative py-[100px] md:py-[140px] px-5">

    {/* 🌟 BACKGROUND GLOW */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.08),transparent_70%)]" />

    <div className="max-w-[950px] mx-auto">

      {/* 🔥 TITLE */}
      <div className="reveal text-center mb-12">
        <p className="font-display text-[9px] md:text-xs tracking-[0.4em] text-gold/90 uppercase">
          The Beloved
        </p>
        <GoldDivider className="mt-5" />
      </div>

      {/* 💎 MAIN CARD (FIXED LOOK) */}
      <div className="relative glass-card rounded-md px-6 py-10 md:px-10 md:py-14 text-center">

        {/* 🌿 FLORAL */}
        <FloralCorners size={120} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-center">

          <Person
            name="Farheen Taj"
            role="The Bride"
            parent="D/o Shafi Khan"
            place="Mysore"
          />

          {/* ✨ CENTER */}
          <div className="flex flex-col items-center justify-center gap-3">

            <div className="relative">
              <span className="text-2xl text-gold-glow text-glow-gold animate-pulse">
                ✦
              </span>

              {/* glow */}
              <div className="absolute inset-0 blur-lg opacity-40 bg-[#F5E6A8]" />
            </div>

            <span className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
            <span className="md:hidden h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>

          <Person
            name="Mohammed Sabith PS"
            role="The Groom"
            parent="S/o Zainuddin"
            place="Virajpet"
          />

        </div>
      </div>

    </div>
  </section>
);

export default Couple;