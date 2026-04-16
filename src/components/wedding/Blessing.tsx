const Blessing = () => (
  <section className="relative py-[140px] md:py-[200px] px-6 flex items-center justify-center overflow-hidden">
    {/* Bloom behind text */}
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      <div className="w-[80vw] max-w-[700px] h-[60vh] rounded-full animate-bloom"
        style={{ background: "radial-gradient(circle, hsl(48 82% 81% / 0.18), transparent 60%)" }} />
    </div>

    <div className="reveal max-w-[600px] text-center">
      <span className="text-gold-glow text-2xl text-glow-gold">✦</span>
      <p className="mt-8 font-serifalt italic text-2xl md:text-4xl leading-[1.5] text-ivory text-glow-gold">
        “May Allah bless this union with love, barakah, and endless happiness.”
      </p>
      <p className="mt-10 font-arabic text-xl md:text-2xl text-gold-glow">
        بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا
      </p>
      <p className="mt-3 font-display text-[10px] tracking-[0.5em] text-ivory/50 uppercase">
        Ameen
      </p>
    </div>
  </section>
);

export default Blessing;
