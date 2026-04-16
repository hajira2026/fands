import { Calendar, Clock, MapPin } from "lucide-react";
import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const EventDetails = () => (
  <section className="relative py-[120px] md:py-[160px] px-6 flex justify-center">
    <div className="reveal max-w-[600px] w-full perspective-stage relative">
      <FloralCorners size={140} />
      <div
        className="glass-card rounded-sm p-8 md:p-14 text-center light-sweep transition-transform duration-700 hover:scale-[1.02] relative"
        style={{ boxShadow: "0 0 80px hsl(46 65% 52% / 0.18), 0 30px 80px -20px hsl(173 60% 4% / 0.7)" }}
      >
        <p className="font-display text-[10px] md:text-xs tracking-[0.5em] text-gold/90 uppercase mb-2">
          Save the Date
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-ivory/90 mt-4">Nikah Ceremony</h2>

        <GoldDivider className="my-10" />

        {/* Date hero */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <span className="font-display text-5xl md:text-7xl text-3d-gold" style={{ color: "#E5C870" }}>10</span>
          <span className="text-gold/70 text-2xl">•</span>
          <span className="font-display text-2xl md:text-3xl text-ivory tracking-[0.3em]">APRIL</span>
          <span className="text-gold/70 text-2xl">•</span>
          <span className="font-display text-5xl md:text-7xl text-3d-gold" style={{ color: "#E5C870" }}>26</span>
        </div>
        <p className="mt-2 font-display text-[10px] tracking-[0.4em] text-ivory/50">FRIDAY · 2026</p>

        <GoldDivider className="my-10" />

        <div className="grid sm:grid-cols-2 gap-8 text-center sm:text-left">
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-3">
            <Clock className="text-gold h-5 w-5 mt-1" />
            <div>
              <p className="font-display text-[10px] tracking-[0.4em] text-ivory/60 uppercase">Time</p>
              <p className="font-serifalt italic text-ivory/90 text-lg mt-1">1:30 PM onwards</p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center sm:items-start gap-3">
            <MapPin className="text-gold h-5 w-5 mt-1" />
            <div>
              <p className="font-display text-[10px] tracking-[0.4em] text-ivory/60 uppercase">Venue</p>
              <p className="font-serifalt italic text-ivory/90 text-lg mt-1">SK Blue Heaven</p>
            </div>
          </div>
        </div>

        <GoldDivider className="mt-10" />
        <div className="flex items-center justify-center gap-2 mt-8 text-gold/70">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase">Add to your blessings</span>
        </div>
      </div>
    </div>
  </section>
);

export default EventDetails;
