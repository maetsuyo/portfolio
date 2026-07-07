"use client";

import { useEffect, useRef } from "react";

interface GridNode {
  col: number;
  row: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface DataPulse {
  axis: "h" | "v";
  line: number;
  pos: number;
  speed: number;
  length: number;
  reverse: boolean;
}

const CELL = 48;

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: GridNode[] = [];

    const buildNodes = () => {
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;
      const count = Math.min(70, Math.floor(cols * rows * 0.12));
      nodes = Array.from({ length: count }, () => ({
        col: Math.floor(Math.random() * cols),
        row: Math.floor(Math.random() * rows),
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildNodes();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const pulses: DataPulse[] = [];
    let frame = 0;
    let animId: number;

    const spawnPulse = () => {
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;
      const axis: "h" | "v" = Math.random() < 0.5 ? "h" : "v";
      pulses.push({
        axis,
        line: Math.floor(Math.random() * (axis === "h" ? rows : cols)),
        pos: 0,
        speed: 0.003 + Math.random() * 0.004,
        length: 0.12 + Math.random() * 0.1,
        reverse: Math.random() < 0.5,
      });
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      frame++;

      nodes.forEach((n) => {
        const twinkle = Math.sin(frame * n.twinkleSpeed + n.twinkleOffset);
        const x = n.col * CELL;
        const y = n.row * CELL;
        const opacity = 0.12 + 0.3 * Math.max(twinkle, 0);

        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(103, 232, 249, ${opacity})`;
        ctx.fill();

        if (twinkle > 0.6) {
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(103, 232, 249, ${(twinkle - 0.6) * 0.25})`;
          ctx.fill();
        }
      });

      if (Math.random() < 0.01 && pulses.length < 6) spawnPulse();

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.pos += p.speed;

        if (p.pos - p.length > 1) {
          pulses.splice(i, 1);
          continue;
        }

        const coord = p.line * CELL;
        const total = p.axis === "h" ? w : h;
        const from = Math.max(0, p.pos - p.length);
        const to = Math.min(1, p.pos);
        const a = p.reverse ? 1 - from : from;
        const b = p.reverse ? 1 - to : to;

        let x1, y1, x2, y2;
        if (p.axis === "h") {
          x1 = a * total;
          x2 = b * total;
          y1 = y2 = coord;
        } else {
          y1 = a * total;
          y2 = b * total;
          x1 = x2 = coord;
        }

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, "rgba(52, 211, 153, 0)");
        grad.addColorStop(0.7, "rgba(52, 211, 153, 0.35)");
        grad.addColorStop(1, "rgba(200, 255, 245, 0.9)");

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x2, y2, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220, 255, 250, 0.9)";
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
