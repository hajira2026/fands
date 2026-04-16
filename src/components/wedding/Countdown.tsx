import { useEffect, useState } from "react";
import GoldDivider from "./GoldDivider";

const TARGET = new Date("2026-04-10T13:30:00+05:30").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[60px] md:min-w-[90px]">
    <div className="glass-card rounded-sm px-3 py-4 md:px-6 md:py-6 light-sweep w-full">
      <div className="font-display text-3xl md:text-5xl text-gold-gradient text-glow-gold leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
    </div>
    <p className="mt-3 font-display text-[9px] md:text-[10px] tracking-[0.4em] text-ivory/60 uppercase">{label}</p>
  </div>
);

const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-[120px] md:py-[160px] px-6">
      <div className="reveal max-w-[700px] mx-auto text-center">
        <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase">Counting the Blessed Moments</p>
        <GoldDivider className="my-8" />
        <div className="flex items-start justify-center gap-3 md:gap-6">
          <Cell value={t.d} label="Days" />
          <span className="font-display text-2xl md:text-4xl text-gold/40 mt-3 md:mt-5">:</span>
          <Cell value={t.h} label="Hours" />
          <span className="font-display text-2xl md:text-4xl text-gold/40 mt-3 md:mt-5">:</span>
          <Cell value={t.m} label="Minutes" />
          <span className="font-display text-2xl md:text-4xl text-gold/40 mt-3 md:mt-5">:</span>
          <Cell value={t.s} label="Seconds" />
        </div>
        <p className="mt-10 font-serifalt italic text-ivory/60 text-sm">
          Until two souls become one — 10th April 2026, 1:30 PM
        </p>
      </div>
    </section>
  );
};

export default Countdown;
