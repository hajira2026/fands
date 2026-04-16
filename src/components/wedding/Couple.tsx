import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const Person = ({ name, role, parent, place }: any) => (
  <div className="reveal flex flex-col items-center text-center">

    <p className="text-[9px] tracking-[0.4em] text-gold/80 uppercase mb-3">
      {role}
    </p>

    {/* 💎 SOFT GOLD AVATAR (ROMANTIC) */}
    <div className="relative w-28 h-28 md:w-40 md:h-40 mb-5">

      {/* glow */}
      <div className="absolute inset-0 blur-2xl opacity-40 bg-[#F5E6A8]" />

      <div className="relative w-full h-full rounded-full flex items-center justify-center border border-[#F5E6A8]/40 bg-[radial-gradient(circle,#1a3d37,#081c19)]">
        <span className="text-3xl md:text-4xl text-gold-gradient font-display">
          {name.charAt(0)}
        </span>
      </div>
    </div>

    <h3 className="text-xl md:text-2xl text-gold-gradient font-display">
      {name}
    </h3>

    <p className="mt-2 text-white/70 italic text-sm">{parent}</p>

    <p className="mt-1 text-[9px] tracking-[0.3em] text-white/50 uppercase">
      {place}
    </p>
  </div>
);

const Couple = () => (
  <section className="relative py-[100px] px-6">

    {/* soft romantic bg */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.08),transparent_70%)]" />

    <div className="max-w-[700px] mx-auto">

      <div className="text-center mb-12 reveal">
        <p className="text-[10px] tracking-[0.4em] text-gold/90 uppercase">
          The Beloved
        </p>
        <GoldDivider className="mt-4" />
      </div>

      {/* 💎 STACKED MOBILE FRIENDLY */}
      <div className="glass-card rounded-md p-8 text-center space-y-10 relative">

        <FloralCorners size={100} />

        <Person name="Farheen Taj" role="The Bride" parent="D/o Shafi Khan" place="Mysore" />

        <div className="flex justify-center">
          <span className="text-gold-glow text-xl animate-pulse">✦</span>
        </div>

        <Person name="Mohammed Sabith PS" role="The Groom" parent="S/o Zainuddin" place="Virajpet" />

      </div>
    </div>
  </section>
);

export default Couple;