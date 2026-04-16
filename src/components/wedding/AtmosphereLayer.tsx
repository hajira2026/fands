import { useEffect, useRef } from "react";

/** Fixed full-screen layer: gold dust particles + light rays + fog + vignette + grain. */
const AtmosphereLayer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type P = { x: number; y: number; r: number; vy: number; vx: number; o: number };
    const count = Math.min(70, Math.floor((w * h) / 28000));
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vy: -(Math.random() * 0.25 + 0.05),
      vx: (Math.random() - 0.5) * 0.15,
      o: Math.random() * 0.6 + 0.2,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(245, 230, 168, ${p.o})`);
        grad.addColorStop(1, "rgba(245, 230, 168, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* Fog gradients */}
      <div className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse at 20% 10%, hsl(46 65% 52% / 0.10), transparent 50%), radial-gradient(ellipse at 80% 90%, hsl(351 60% 15% / 0.25), transparent 60%)" }} />

      {/* Slow rotating light rays */}
      <div className="absolute -inset-1/3 animate-[ray-rotate_180s_linear_infinite] opacity-[0.12]"
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, hsl(48 82% 81% / 0.6) 10deg, transparent 30deg, transparent 180deg, hsl(48 82% 81% / 0.4) 200deg, transparent 230deg)" }} />

      {/* Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 animate-[light-flicker_9s_ease-in-out_infinite]" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette-overlay" />
      {/* Grain */}
      <div className="absolute inset-0 grain-overlay mix-blend-overlay" />
    </div>
  );
};

export default AtmosphereLayer;
