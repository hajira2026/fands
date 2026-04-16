import { Calendar, Clock, MapPin } from "lucide-react";
import FloralCorners from "./FloralCorners";
import GoldDivider from "./GoldDivider";

const EventDetails = () => (
  <section className="relative flex justify-center px-5 py-[96px] sm:px-6 md:py-[130px]">
    <div className="section-glow absolute inset-0 -z-10" />

    <div className="reveal relative w-full max-w-3xl">
      <FloralCorners size={116} />

      <div className="glass-card premium-frame light-sweep rounded-[2rem] px-6 py-10 text-center sm:px-8 sm:py-12 md:px-12">
        <p className="text-[0.64rem] uppercase tracking-[0.45em] text-[#ead4a2]/78 sm:text-[0.68rem]">
          Save the Date
        </p>

        <h2 className="font-display mt-4 text-2xl text-soft-gold sm:text-3xl md:text-4xl">Nikah Ceremony</h2>

        <p className="font-romantic mx-auto mt-4 max-w-xl text-lg italic leading-relaxed text-[#f8efe1]/82 sm:text-[1.35rem]">
          A graceful gathering to witness their sacred vows in faith and joy.
        </p>

        <GoldDivider className="my-8" />

        <div className="mx-auto grid max-w-xl items-center gap-4 rounded-[1.6rem] border border-[#ead18e]/18 bg-white/[0.03] px-5 py-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:px-8">
          <div className="text-center sm:text-right">
            <p className="font-display text-5xl text-soft-gold text-glow-gold sm:text-6xl">10</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.4em] text-[#f1dfbf]/60">Day</p>
          </div>

          <div className="mx-auto flex w-full max-w-[9rem] flex-col items-center justify-center rounded-full border border-[#ead18e]/20 bg-[#f7ebc7]/[0.06] px-4 py-4">
            <p className="font-display text-lg tracking-[0.34em] text-[#f5e5b8] sm:text-xl">MAY</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.35em] text-[#f1dfbf]/60">Friday</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="font-display text-5xl text-soft-gold text-glow-gold sm:text-6xl">2026</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.4em] text-[#f1dfbf]/60">Year</p>
          </div>
        </div>

        <GoldDivider className="my-8" />

        <div className="grid gap-5 text-center sm:grid-cols-2 sm:text-left">
          <div className="rounded-[1.3rem] border border-[#ead18e]/12 bg-black/10 px-5 py-5">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <Clock className="mt-1 h-5 w-5 text-[#f0d694]" />
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.35em] text-[#f1dfbf]/60">Time</p>
                <p className="font-romantic mt-2 text-xl italic text-[#f8efe1]">1:30 PM onwards</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.3rem] border border-[#ead18e]/12 bg-black/10 px-5 py-5">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <MapPin className="mt-1 h-5 w-5 text-[#f0d694]" />
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.35em] text-[#f1dfbf]/60">Venue</p>
                <p className="font-romantic mt-2 text-xl italic text-[#f8efe1]">SK Blue Heaven</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[#f0d694]/75">
          <Calendar className="h-4 w-4" />
          <span className="text-[0.64rem] uppercase tracking-[0.34em]">Keep this evening in your duas</span>
        </div>
      </div>
    </div>
  </section>
);

export default EventDetails;
