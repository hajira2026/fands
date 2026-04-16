const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden>
    <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold/60 to-gold/80" />
    <span className="text-gold/80 text-xs">✦</span>
    <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold/60 to-gold/80" />
  </div>
);

export default GoldDivider;
