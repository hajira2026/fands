import GoldDivider from "./GoldDivider";

const Person = ({ name, role, parent, place }: { name: string; role: string; parent: string; place: string }) => (
  <div className="reveal flex flex-col items-center text-center max-w-[280px] mx-auto">
    <p className="font-display text-[10px] tracking-[0.5em] text-gold/80 uppercase mb-4">{role}</p>
    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 gold-border-double">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 30% 30%, hsl(173 30% 25%), hsl(173 60% 8%))" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl text-gold-gradient">{name.charAt(0)}</span>
      </div>
    </div>
    <h3 className="font-display text-2xl md:text-3xl text-gold-gradient leading-tight">{name}</h3>
    <p className="mt-3 font-serifalt italic text-ivory/70 text-sm">{parent}</p>
    <p className="mt-1 font-display text-[10px] tracking-[0.4em] text-ivory/50 uppercase">{place}</p>
  </div>
);

const Couple = () => (
  <section className="relative py-[120px] md:py-[160px] px-6">
    <div className="max-w-[1000px] mx-auto">
      <div className="reveal text-center mb-16">
        <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase">The Beloved</p>
        <GoldDivider className="mt-6" />
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 items-center">
        <Person name="Farheem Taj" role="The Bride" parent="D/o Shafi Khan" place="Mysore" />
        <div className="reveal flex flex-col items-center justify-center gap-3">
          <span className="text-gold-glow text-3xl text-glow-gold">✦</span>
          <span className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          <span className="md:hidden h-px w-32 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>
        <Person name="Mohammed Sabith PS" role="The Groom" parent="S/o Zainuddin" place="Virajpet" />
      </div>
    </div>
  </section>
);

export default Couple;
