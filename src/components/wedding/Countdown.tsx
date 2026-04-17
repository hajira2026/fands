import { useEffect, useState } from "react";
import GoldDivider from "./GoldDivider";

const TARGET = new Date("2026-05-10T13:30:00+05:30").getTime();

const calc = () => {
  const diff = Math.max(0, TARGET - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="countdown-cell flex min-w-0 flex-1 flex-col items-center">
    <div className="glass-card light-sweep w-full rounded-[1.35rem] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6">
      <div className="font-display text-gold-gradient text-3xl leading-none tabular-nums sm:text-4xl md:text-5xl">
        {String(value).padStart(2, "0")}
      </div>
    </div>
    <p className="mt-3 text-[0.58rem] uppercase tracking-[0.34em] text-[#f1dfbf]/58 sm:text-[0.64rem]">
      {label}
    </p>
  </div>
);

const Countdown = () => {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-5 py-[96px] sm:px-6 md:py-[136px]">
      <div className="section-glow absolute inset-0 -z-10" />

      <div className="reveal mx-auto max-w-5xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.46em] text-[#ead4a2]/78 sm:text-[0.72rem]">
          Counting the Blessed Moments
        </p>

        <h2 className="font-romantic mx-auto mt-5 max-w-2xl text-3xl italic text-[#f8efe1] sm:text-4xl">
          Until the day written in love, prayer, and barakah
        </h2>

        <GoldDivider className="my-8" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-5">
          <Cell value={t.d} label="Days" />
          <Cell value={t.h} label="Hours" />
          <Cell value={t.m} label="Minutes" />
          <Cell value={t.s} label="Seconds" />
        </div>

        <p className="font-romantic mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-[#f8efe1]/70 sm:text-xl">
          Until two souls become one on 10 May 2026 at 1:30 PM
        </p>
      </div>
    </section>
  );
};

export default Countdown;
