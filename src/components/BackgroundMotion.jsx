import { useEffect, useRef } from "react";

export default function BackgroundMotion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = 0, h = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
    let particles = [];
    let raf = 0;
    let visible = !document.hidden;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    function resize() {
      // Read window size; DO NOT write to clientWidth/clientHeight
      w = window.innerWidth;
      h = window.innerHeight;

      // Set the actual drawing buffer size for crisp rendering
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      // Match CSS size (the Tailwind classes already stretch it full screen)
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Scale context for DPR
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((w * h) / 25000);
      const N = prefersReduced ? Math.min(25, count) : count;
      particles = Array.from({ length: N }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * (prefersReduced ? 0.25 : 0.6),
        vy: (Math.random() - 0.5) * (prefersReduced ? 0.25 : 0.6),
        r: 1 + Math.random() * 2
      }));
    }

    function step() {
      if (!visible) {
        raf = requestAnimationFrame(step);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96,165,250,0.7)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          const max = prefersReduced ? 90 : 120;
          if (dist < max) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147,197,253,${1 - dist / max})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onVisibility() {
      visible = !document.hidden;
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-slate-950 to-slate-900"
      aria-hidden="true"
    />
  );
}
