import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const chapters = [
  {
    title: "Families Introduced",
    body: "Two families, bound by faith, came together with prayer and intention — the first whisper of a sacred union.",
  },
  {
    title: "A Beautiful Understanding",
    body: "Conversations grew into trust, hearts found a quiet rhythm, and what was written began to unfold.",
  },
  {
    title: "A Blessed Union",
    body: "By the mercy of Allah, two souls now step forward — to honour one another in love, faith, and barakah.",
  },
];

const Story = () => (
  <section className="relative py-[100px] px-6">

    {/* 🌟 SOFT GOLD BG */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.08),transparent_70%)]" />

    <div className="max-w-[650px] mx-auto text-center">

      <div className="mb-12 reveal">
        <p className="text-[10px] tracking-[0.4em] text-gold/90 uppercase">
          Our Story
        </p>
        <GoldDivider className="mt-4" />
      </div>

      {/* 💎 STACKED (NO MORE LINE / PLANETS) */}
      <div className="space-y-12">

        {chapters.map((c, i) => (
          <div key={i} className="reveal glass-card p-6 rounded-md relative">

            <FloralCorners size={70} />

            <h3 className="text-lg md:text-xl text-[#F5E6A8] font-display mb-3">
              {c.title}
            </h3>

            <p className="italic text-white/80 text-sm md:text-base leading-relaxed">
              {c.body}
            </p>

          </div>
        ))}

      </div>
    </div>
  </section>
);

export default Story;