import GoldDivider from "./GoldDivider";

const Invitation = () => (
  <section className="relative py-[120px] md:py-[160px] px-6 flex justify-center">
    <div className="reveal max-w-[600px] w-full">
      <div className="glass-card mehndi-frame mehndi-vines rounded-sm p-8 md:p-14 text-center light-sweep">
        <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase mb-8">
          The Honour of Your Presence
        </p>
        <GoldDivider className="mb-10" />

        <p className="font-serifalt italic text-ivory/90 text-lg md:text-xl leading-relaxed">
          Together with their families,
          <br />
          they request the honour of your presence
          <br />
          to witness the sacred
        </p>

        <h2 className="mt-6 font-display text-3xl md:text-5xl text-gold-gradient text-glow-gold">
          Nikah Ceremony
        </h2>

        <GoldDivider className="mt-10" />
        <p className="mt-8 font-display text-[10px] tracking-[0.4em] text-ivory/60 uppercase">
          Mysore · Virajpet
        </p>
      </div>
    </div>
  </section>
);

export default Invitation;
