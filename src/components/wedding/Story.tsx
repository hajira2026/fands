import GoldDivider from "./GoldDivider";

const chapters = [
  { num: "I",   title: "Families Introduced",     body: "Two families, bound by faith, came together with prayer and intention — the first whisper of a sacred union." },
  { num: "II",  title: "A Beautiful Understanding", body: "Conversations grew into trust, hearts found a quiet rhythm, and what was written began to unfold." },
  { num: "III", title: "A Blessed Union",          body: "By the mercy of Allah, two souls now step forward — to honour one another in love, faith, and barakah." },
];

const Story = () => (
  <section className="relative py-[120px] md:py-[160px] px-6">
    <div className="max-w-[600px] mx-auto">
      <div className="reveal text-center mb-16">
        <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase">Our Story</p>
        <GoldDivider className="mt-6" />
      </div>

      <div className="relative space-y-16 text-center">
        {/* spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

        {chapters.map((c) => (
          <div key={c.num} className="reveal relative text-center">
            <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full glass-card mb-6"
              style={{ boxShadow: "0 0 30px hsl(46 65% 52% / 0.4)" }}>
              <span className="font-display text-gold-gradient text-sm">{c.num}</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-gold-gradient mb-4">{c.title}</h3>
            <p className="font-serifalt italic text-ivory/75 leading-relaxed text-base md:text-lg">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Story;
