import { useEffect, useRef } from "react";

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
    const count = Math.min(90, Math.floor((w * h) / 22000));

    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.6,
      vy: -(Math.random() * 0.35 + 0.08),
      vx: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.7 + 0.3,
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

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        grad.addColorStop(0, `rgba(245,230,168,${p.o})`);
        grad.addColorStop(1, "rgba(245,230,168,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
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

      {/* 🌫️ SOFT GOLD FOG */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(245,230,168,0.12), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.4), transparent 60%)",
        }}
      />

      {/* ✨ LIGHT RAYS (SLOWER + CLEANER) */}
      <div
        className="absolute -inset-1/2 opacity-[0.08] animate-[ray-rotate_240s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(245,230,168,0.6) 12deg, transparent 40deg, transparent 180deg, rgba(245,230,168,0.3) 210deg, transparent 240deg)",
        }}
      />

      {/* 🌟 PARTICLES */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 animate-[light-flicker_10s_ease-in-out_infinite]"
      />

      {/* 🌑 VIGNETTE */}
      <div className="absolute inset-0 vignette-overlay" />

      {/* 🎞️ GRAIN */}
      <div className="absolute inset-0 grain-overlay mix-blend-overlay opacity-30" />
    </div>
  );
};

export default AtmosphereLayer;