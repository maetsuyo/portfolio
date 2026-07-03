"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  tailLength: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const stars: Star[] = Array.from({ length: 280 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 0.025 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    const shootingStars: ShootingStar[] = [];
    let frame = 0;
    let animId: number;

    const spawnShootingStar = () => {
      const angle = (Math.random() * 20 + 20) * (Math.PI / 180);
      const speed = 6 + Math.random() * 6;
      shootingStars.push({
        x: Math.random() * 0.8,
        y: Math.random() * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        tailLength: 100 + Math.random() * 80,
      });
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;

      stars.forEach((s) => {
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const opacity = s.opacity * (0.65 + 0.35 * twinkle);
        const r = Math.floor(200 + twinkle * 55);
        const g = Math.floor(210 + twinkle * 45);
        const b = 255;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${opacity})`;
        ctx.fill();
      });

      if (Math.random() < 0.004) spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx / w;
        s.y += s.vy / h;
        s.life -= 0.018;

        if (s.life <= 0 || s.x > 1.1 || s.y > 1.1) {
          shootingStars.splice(i, 1);
          continue;
        }

        const sx = s.x * w;
        const sy = s.y * h;
        const tailX = sx - (s.vx / w) * s.tailLength;
        const tailY = sy - (s.vy / h) * s.tailLength;

        const grad = ctx.createLinearGradient(tailX, tailY, sx, sy);
        grad.addColorStop(0, "rgba(200, 180, 255, 0)");
        grad.addColorStop(0.6, `rgba(220, 200, 255, ${s.life * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.life * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.life})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
