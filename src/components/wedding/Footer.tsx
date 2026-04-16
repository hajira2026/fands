import GoldDivider from "./GoldDivider";

const Footer = () => (
  <footer className="relative py-20 px-6 text-center">
    <GoldDivider className="mb-12" />
    <div className="font-display text-3xl text-gold-gradient text-glow-gold tracking-[0.3em]">
      F&nbsp;✦&nbsp;S
    </div>
    <p className="mt-6 font-arabic text-base text-gold-glow/80">
      وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
    </p>
    <p className="mt-2 font-serifalt italic text-ivory/50 text-xs max-w-[420px] mx-auto">
      “And He placed between you affection and mercy.” — Qur’an 30:21
    </p>
    <p className="mt-10 font-display text-[10px] tracking-[0.5em] text-ivory/30 uppercase">
      Farheen &amp; Sabith · 2026
    </p>
  </footer>
);

export default Footer;
