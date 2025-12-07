import { useEffect, useRef } from "react";

const AnimatedLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll(".animated-line");
    
    lines.forEach((line, index) => {
      const element = line as HTMLElement;
      element.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal scanning lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="animated-line absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: 0,
            right: 0,
            animation: "scan-line 4s ease-in-out infinite",
          }}
        />
      ))}

      {/* Vertical pulse lines */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{
            left: `${25 + i * 25}%`,
            top: 0,
            bottom: 0,
            animation: `pulse-line 3s ease-in-out infinite ${i * 0.8}s`,
          }}
        />
      ))}

      {/* Corner accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 animate-pulse" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-green-400/5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </div>
  );
};

export default AnimatedLines;
