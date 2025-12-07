import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  color?: string;
}

const ParticleField = ({ className = "", particleCount = 50, color = "16, 185, 129" }: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));
  }, [particleCount]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    particlesRef.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.pulse += 0.02;

      // Mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        particle.vx -= (dx / distance) * force * 0.02;
        particle.vy -= (dy / distance) * force * 0.02;
      }

      // Boundary wrap
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Draw particle with pulse effect
      const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
      const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${pulseOpacity})`;
      ctx.fill();

      // Draw connections
      particlesRef.current.slice(i + 1).forEach((other) => {
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(${color}, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default ParticleField;
