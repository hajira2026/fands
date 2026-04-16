import { Calendar, Clock, MapPin } from "lucide-react";
import GoldDivider from "./GoldDivider";
import FloralCorners from "./FloralCorners";

const EventDetails = () => (
  <section className="relative py-[100px] md:py-[150px] px-5 flex justify-center">

    {/* ✨ BACKGROUND GLOW */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(245,230,168,0.12),transparent_70%)]" />

    <div className="reveal max-w-[560px] w-full relative">

      {/* 🌿 FLORAL FRAME */}
      <FloralCorners size={120} />

      <div className="glass-card rounded-md px-6 py-10 md:px-12 md:py-14 text-center light-sweep">

        {/* TITLE */}
        <p className="font-display text-[9px] tracking-[0.4em] text-gold/90 uppercase mb-2">
          Save the Date
        </p>

        <h2 className="font-display text-xl md:text-3xl text-[#F5E6A8] mt-3">
          Nikah Ceremony
        </h2>

        <GoldDivider className="my-8" />

        {/* 🔥 FIXED DATE (MOBILE PERFECT) */}
        <div className="flex flex-col items-center gap-2">

          {/* main date row */}
          <div className="flex items-center justify-center gap-3">

            <span className="font-display text-4xl md:text-6xl text-[#F5E6A8] drop-shadow-[0_0_15px_rgba(245,230,168,0.4)]">
              10
            </span>

            <span className="text-[#F5E6A8]/60 text-lg">•</span>

            <span className="font-display text-lg md:text-2xl tracking-[0.3em] text-white/80">
              MAY
            </span>

            <span className="text-[#F5E6A8]/60 text-lg">•</span>

            <span className="font-display text-4xl md:text-6xl text-[#F5E6A8] drop-shadow-[0_0_15px_rgba(245,230,168,0.4)]">
              26
            </span>

          </div>

          {/* year */}
          <p className="font-display text-[10px] tracking-[0.4em] text-white/50">
            FRIDAY · 2026
          </p>

        </div>

        <GoldDivider className="my-8" />

        {/* DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">

          {/* TIME */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <Clock className="text-[#F5E6A8] h-5 w-5 mt-1" />
            <div>
              <p className="font-display text-[9px] tracking-[0.35em] text-white/60 uppercase">
                Time
              </p>
              <p className="italic text-white/90 text-base mt-1">
                1:30 PM onwards
              </p>
            </div>
          </div>

          {/* VENUE */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <MapPin className="text-[#F5E6A8] h-5 w-5 mt-1" />
            <div>
              <p className="font-display text-[9px] tracking-[0.35em] text-white/60 uppercase">
                Venue
              </p>
              <p className="italic text-white/90 text-base mt-1">
                SK Blue Heaven
              </p>
            </div>
          </div>

        </div>

        <GoldDivider className="mt-8" />

        {/* FOOT NOTE */}
        <div className="flex items-center justify-center gap-2 mt-6 text-[#F5E6A8]/70">
          <Calendar className="h-3.5 w-3.5" />
          <span className="font-display text-[9px] tracking-[0.35em] uppercase">
            Add to your blessings
          </span>
        </div>

      </div>
    </div>
  </section>
);

export default EventDetails;