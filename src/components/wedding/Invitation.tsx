import FloralCorners from "./FloralCorners";
import GoldDivider from "./GoldDivider";

const Invitation = () => (
  <section className="relative flex justify-center px-5 py-[88px] sm:px-6 md:py-[124px]">
    <div className="section-glow absolute inset-0 -z-10" />

    <div className="reveal relative w-full max-w-3xl">
      <FloralCorners size={112} />

      <div className="glass-card premium-frame light-sweep rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14">
        <p className="text-[0.64rem] uppercase tracking-[0.46em] text-[#ead4a2]/78 sm:text-[0.68rem]">
          The Honour of Your Presence
        </p>

        <GoldDivider className="my-7" />

        <p className="font-romantic mx-auto max-w-2xl text-xl italic leading-relaxed text-[#f8efe1]/84 sm:text-[1.45rem]">
          Together with their families, they request the honour of your presence to witness the sacred Nikah and share in an evening of love, dua, and celebration.
        </p>

        <h2 className="font-display text-gold-gradient mt-7 text-3xl text-3d-gold sm:text-4xl md:text-5xl">
          Nikah Ceremony
        </h2>

        <GoldDivider className="mt-7" />

        <p className="mt-6 text-[0.64rem] uppercase tracking-[0.4em] text-[#f1dfbf]/64 sm:text-[0.7rem]">
          Mysore and Virajpet united in joy
        </p>
      </div>
    </div>
  </section>
);

export default Invitation;
