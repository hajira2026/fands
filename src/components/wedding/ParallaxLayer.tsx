import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  depth?: number; // 0.3 bg, 0.6 mid, 1 fg
  className?: string;
  children: ReactNode;
}

/** Translates element on scroll based on depth — closer = faster. */
const ParallaxLayer = ({ depth = 0.6, className = "", children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(center * (depth - 1) * 0.5);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [depth]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}>
      {children}
    </div>
  );
};

export default ParallaxLayer;
