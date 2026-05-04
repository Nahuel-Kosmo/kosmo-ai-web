"use client";
import { useEffect, useRef } from "react";

export default function VortexCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = 0, H = 0, cx = 0, cy = 0, dpr = 1;
    let stars: {x:number;y:number;z:number;r:number;tw:number;twS:number;hue:number}[] = [];
    let particles: {angle:number;radius:number;baseRadius:number;speed:number;size:number;life:number;wobble:number}[] = [];
    let mouseX = 0, mouseY = 0, targetMX = 0, targetMY = 0;
    let t = 0;
    let rafId: number;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.parentElement!.clientWidth;
      H = canvas!.parentElement!.clientHeight;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      initStars();
      initParticles();
    }

    function initStars() {
      stars = [];
      const count = Math.floor((W * H) / 4500);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          z: Math.random() * 0.8 + 0.2,
          r: Math.random() * 1.2 + 0.2,
          tw: Math.random() * Math.PI * 2,
          twS: Math.random() * 0.02 + 0.005,
          hue: Math.random() < 0.15 ? 1 : 0,
        });
      }
    }

    function initParticles() {
      particles = [];
      const count = 280;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 100 + Math.random() * 280;
        particles.push({
          angle,
          radius,
          baseRadius: radius,
          speed: (1 / Math.sqrt(radius)) * 1.4,
          size: Math.random() * 1.6 + 0.4,
          life: Math.random(),
          wobble: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      t += 0.005;
      mouseX += (targetMX - mouseX) * 0.05;
      mouseY += (targetMY - mouseY) * 0.05;

      ctx.fillStyle = "rgba(5, 5, 7, 1)";
      ctx.fillRect(0, 0, W, H);

      const nebGrad = ctx.createRadialGradient(
        cx + Math.sin(t * 0.4) * 80, cy + Math.cos(t * 0.3) * 50, 0,
        cx, cy, Math.max(W, H) * 0.7
      );
      nebGrad.addColorStop(0, "rgba(232, 197, 102, 0.06)");
      nebGrad.addColorStop(0.3, "rgba(80, 40, 100, 0.04)");
      nebGrad.addColorStop(0.6, "rgba(20, 20, 40, 0.02)");
      nebGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebGrad;
      ctx.fillRect(0, 0, W, H);

      for (const s of stars) {
        const dx = s.x - cx, dy = s.y - cy;
        const d = Math.sqrt(dx * dx + dy * dy);
        const rot = 0.0003 / Math.max(0.05, d / 250);
        const ang = Math.atan2(dy, dx) + rot;
        s.x = cx + Math.cos(ang) * d;
        s.y = cy + Math.sin(ang) * d;
        s.tw += s.twS;
        const tw = (Math.sin(s.tw) + 1) / 2;
        const a = (0.3 + tw * 0.6) * s.z;
        ctx.fillStyle = s.hue === 1
          ? `rgba(255, 220, 130, ${a * 0.95})`
          : `rgba(245, 243, 238, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.6 + tw * 0.4), 0, Math.PI * 2);
        ctx.fill();
      }

      const offX = (mouseX - cx) * 0.04;
      const offY = (mouseY - cy) * 0.04;
      const hx = cx + offX;
      const hy = cy + offY;

      const haloGrad = ctx.createRadialGradient(hx, hy, 60, hx, hy, 380);
      haloGrad.addColorStop(0, "rgba(255, 220, 130, 0.0)");
      haloGrad.addColorStop(0.15, "rgba(232, 197, 102, 0.18)");
      haloGrad.addColorStop(0.4, "rgba(232, 197, 102, 0.07)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(hx, hy, 380, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(hx, hy);
      ctx.rotate(t * 0.15);
      const ringScaleY = 0.32;

      for (let i = 0; i < 5; i++) {
        const r = 120 + i * 14;
        ctx.strokeStyle = `rgba(255, 200, 110, ${0.08 - i * 0.012})`;
        ctx.lineWidth = 12 - i * 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * ringScaleY, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(255, 224, 138, 0.55)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(0, 0, 110, 110 * ringScaleY, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(hx, hy);
      for (const p of particles) {
        p.angle += p.speed * 0.012;
        p.wobble += 0.04;
        p.radius -= 0.12;
        if (p.radius < 80) {
          p.radius = 380;
          p.angle = Math.random() * Math.PI * 2;
        }
        const pr = p.radius + Math.sin(p.wobble) * 4;
        const px = Math.cos(p.angle) * pr;
        const py = Math.sin(p.angle) * pr * ringScaleY;
        const distFactor = (380 - p.radius) / 300;
        const alpha = 0.2 + distFactor * 0.65;
        let r: number, g: number, b: number;
        if (distFactor > 0.7) { r = 255; g = 240; b = 180; }
        else if (distFactor > 0.4) { r = 255; g = 210; b = 120; }
        else { r = 220; g = 170; b = 80; }
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size + distFactor * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      const eventR = 95;
      const horiz = ctx.createRadialGradient(hx, hy, eventR * 0.6, hx, hy, eventR + 18);
      horiz.addColorStop(0, "rgba(0, 0, 0, 1)");
      horiz.addColorStop(0.7, "rgba(0, 0, 0, 1)");
      horiz.addColorStop(0.92, "rgba(40, 25, 5, 0.85)");
      horiz.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = horiz;
      ctx.beginPath();
      ctx.arc(hx, hy, eventR + 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(hx, hy);
      const lensGrad = ctx.createRadialGradient(0, 0, eventR - 4, 0, 0, eventR + 6);
      lensGrad.addColorStop(0, "rgba(0,0,0,0)");
      lensGrad.addColorStop(0.5, "rgba(255, 220, 140, 0.35)");
      lensGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = lensGrad;
      ctx.beginPath();
      ctx.arc(0, 0, eventR + 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      rafId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => { targetMX = e.clientX; targetMY = e.clientY; };
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    resize();
    targetMX = mouseX = cx;
    targetMY = mouseY = cy;
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />;
}
