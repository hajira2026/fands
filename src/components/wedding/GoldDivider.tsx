const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
    <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#e9cc82]/60 to-transparent sm:w-24" />
    <span className="ornament-dot" />
    <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#e9cc82]/60 to-transparent sm:w-24" />
  </div>
);

export default GoldDivider;
