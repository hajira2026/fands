import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const Invitation = () => (
  <section className="relative py-[100px] md:py-[140px] px-5 flex justify-center">
    {/* 🌟 SOFT BACKGROUND GLOW */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.08),transparent_70%)]" />

    <div className="reveal max-w-[520px] w-full relative">
      <FloralCorners size={120} />

      <div className="glass-card rounded-sm px-6 py-10 md:px-12 md:py-14 text-center light-sweep relative">

        {/* 🔥 TITLE */}
        <p className="font-display text-[9px] md:text-xs tracking-[0.4em] text-gold/90 uppercase mb-6">
          The Honour of Your Presence
        </p>

        <GoldDivider className="mb-8" />

        {/* 💬 TEXT */}
        <p className="italic text-white/85 text-sm md:text-lg leading-relaxed">
          Together with their families,
          <br />
          they request the honour of your presence
          <br />
          to witness the sacred
        </p>

        {/* 💎 MAIN HEADING (FIXED GOLD) */}
        <h2 className="mt-6 font-display text-2xl sm:text-3xl md:text-5xl text-gold-gradient text-3d-gold text-glow-gold">
          Nikah Ceremony
        </h2>

        <GoldDivider className="mt-8" />

        {/* 📍 LOCATION */}
        <p className="mt-6 font-display text-[9px] tracking-[0.35em] text-white/60 uppercase">
          Mysore · Virajpet
        </p>

      </div>
    </div>
  </section>
);

export default Invitation;