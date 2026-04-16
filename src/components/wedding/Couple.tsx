import FloralCorners from "./FloralCorners";
import GoldDivider from "./GoldDivider";

type PersonProps = {
  name: string;
  role: string;
  parent: string;
  place: string;
};

const Person = ({ name, role, parent, place }: PersonProps) => (
  <article className="reveal flex h-full flex-col items-center justify-center text-center">
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#ecd296]/35 bg-[radial-gradient(circle_at_top,rgba(248,238,213,0.16),rgba(10,24,22,0.2)_55%,rgba(10,24,22,0.9)_100%)] shadow-[0_0_30px_rgba(245,229,184,0.08)] sm:h-32 sm:w-32">
      <div className="absolute inset-2 rounded-full border border-[#ecd296]/20" />
      <span className="font-display text-gold-gradient text-3xl sm:text-4xl">{name.charAt(0)}</span>
    </div>

    <p className="mt-6 text-[0.62rem] uppercase tracking-[0.45em] text-[#f0dec0]/70 sm:text-[0.68rem]">
      {role}
    </p>

    <h3 className="font-display mt-3 text-2xl leading-tight text-soft-gold sm:text-3xl">{name}</h3>

    <p className="font-romantic mt-3 text-lg italic leading-relaxed text-[#f8efe1]/82">{parent}</p>

    <p className="mt-3 text-[0.62rem] uppercase tracking-[0.35em] text-[#ead4a2]/55 sm:text-[0.68rem]">
      {place}
    </p>
  </article>
);

const Couple = () => (
  <section className="relative px-5 py-[96px] sm:px-6">
    <div className="section-glow absolute inset-0 -z-10" />

    <div className="mx-auto max-w-5xl">
      <div className="reveal mb-12 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-[#ead4a2]/78">The Couple</p>
        <h2 className="font-romantic mt-5 text-3xl italic text-[#f8efe1] sm:text-4xl">
          A union written with tenderness, prayer, and barakah
        </h2>
        <GoldDivider className="mt-6" />
      </div>

      <div className="glass-card premium-frame relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 md:px-12">
        <FloralCorners size={112} />
        <div className="absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#ead18e]/50 to-transparent" />
        <div className="absolute inset-x-[12%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#ead18e]/40 to-transparent" />

        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Person name="Farheen Taj" role="The Bride" parent="D/o Shafi Khan" place="Mysore" />

          <div className="reveal flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="ornament-dot" />
              <span className="font-romantic text-2xl italic text-[#f8efe1]/78">&amp;</span>
              <span className="ornament-dot" />
            </div>
          </div>

          <Person name="Mohammed Sabith PS" role="The Groom" parent="S/o Zainuddin" place="Virajpet" />
        </div>
      </div>
    </div>
  </section>
);

export default Couple;
