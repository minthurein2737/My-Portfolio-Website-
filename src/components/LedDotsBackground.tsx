import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const LedDotsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      { color: '#ff2244', glow: 'rgba(255, 34, 68, 0.6)' },
      { color: '#ff3b47', glow: 'rgba(255, 59, 71, 0.7)' },
      { color: '#C8FF00', glow: 'rgba(200, 255, 0, 0.7)' },
      { color: '#ffffff', glow: 'rgba(255, 255, 255, 0.8)' },
    ];

    let staticLeds: { x: number; y: number; color: string; glow: string; size: number; phase: number; speed: number }[] = [];
    let runningSparks: Particle[] = [];

    const initGridAndParticles = () => {
      staticLeds = [];
      runningSparks = [];

      const spacingX = Math.max(70, Math.floor(width / 18));
      const spacingY = Math.max(70, Math.floor(height / 14));

      // Network of static pulsing LED dots across entire screen
      for (let x = spacingX / 2; x < width; x += spacingX) {
        for (let y = spacingY / 2; y < height; y += spacingY) {
          const jx = x + (Math.random() - 0.5) * 24;
          const jy = y + (Math.random() - 0.5) * 24;

          const isLime = Math.random() < 0.25;
          const palette = isLime ? colors[2] : colors[Math.random() < 0.7 ? 0 : 1];

          staticLeds.push({
            x: jx,
            y: jy,
            color: palette.color,
            glow: palette.glow,
            size: Math.random() < 0.15 ? 2.8 : 1.8,
            phase: Math.random() * Math.PI * 2,
            speed: 0.02 + Math.random() * 0.04,
          });
        }
      }

      // Running electric sparks travelling across the website background
      const sparkCount = Math.min(50, Math.floor((width * height) / 28000));
      for (let i = 0; i < sparkCount; i++) {
        const isHorizontal = Math.random() > 0.5;
        const speed = (0.9 + Math.random() * 1.8) * (Math.random() > 0.5 ? 1 : -1);
        const isLime = Math.random() < 0.35;
        const palette = isLime ? colors[2] : colors[Math.random() < 0.6 ? 0 : 3];

        runningSparks.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: isHorizontal ? speed : 0,
          vy: !isHorizontal ? speed : 0,
          radius: 2 + Math.random() * 2,
          color: palette.color,
          glowColor: palette.glow,
          baseAlpha: 0.6 + Math.random() * 0.4,
          pulseSpeed: 0.03 + Math.random() * 0.05,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGridAndParticles();
    };

    window.addEventListener('resize', handleResize);
    initGridAndParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting circuit bus lines between nodes
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(255, 34, 68, 0.05)';
      ctx.beginPath();
      for (let i = 0; i < staticLeds.length; i += 3) {
        const led1 = staticLeds[i];
        const led2 = staticLeds[i + 1];
        if (led1 && led2) {
          ctx.moveTo(led1.x, led1.y);
          ctx.lineTo(led2.x, led1.y);
          ctx.lineTo(led2.x, led2.y);
        }
      }
      ctx.stroke();

      // Render Static Pulsing LED Dots
      for (let i = 0; i < staticLeds.length; i++) {
        const led = staticLeds[i];
        led.phase += led.speed;
        const alpha = 0.2 + 0.65 * ((Math.sin(led.phase) + 1) / 2);

        ctx.save();
        ctx.shadowBlur = led.size * 4;
        ctx.shadowColor = led.glow;
        ctx.fillStyle = led.color;
        ctx.globalAlpha = alpha;

        ctx.beginPath();
        ctx.arc(led.x, led.y, led.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render & Move Running Electric Sparks Across the Screen
      for (let i = 0; i < runningSparks.length; i++) {
        const spark = runningSparks[i];
        spark.pulsePhase += spark.pulseSpeed;

        spark.x += spark.vx;
        spark.y += spark.vy;

        if (spark.x < 0) spark.x = width;
        if (spark.x > width) spark.x = 0;
        if (spark.y < 0) spark.y = height;
        if (spark.y > height) spark.y = 0;

        // Occasional 90-degree circuit turning
        if (Math.random() < 0.006) {
          if (spark.vx !== 0) {
            spark.vy = (Math.random() > 0.5 ? 1 : -1) * Math.abs(spark.vx);
            spark.vx = 0;
          } else {
            spark.vx = (Math.random() > 0.5 ? 1 : -1) * Math.abs(spark.vy);
            spark.vy = 0;
          }
        }

        const currentAlpha = Math.max(0.25, spark.baseAlpha * ((Math.sin(spark.pulsePhase) + 1.2) / 2.2));

        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = spark.glowColor;
        ctx.fillStyle = spark.color;
        ctx.globalAlpha = Math.min(1, currentAlpha);

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
        ctx.fill();

        // Trailing light streak
        const tailLength = 16;
        const tailX = spark.x - Math.sign(spark.vx) * (spark.vx !== 0 ? tailLength : 0);
        const tailY = spark.y - Math.sign(spark.vy) * (spark.vy !== 0 ? tailLength : 0);

        const gradient = ctx.createLinearGradient(spark.x, spark.y, tailX, tailY);
        gradient.addColorStop(0, spark.glowColor);
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = spark.radius * 1.5;
        ctx.beginPath();
        ctx.moveTo(spark.x, spark.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
