const CSSParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated particles using pure CSS */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="shapes-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-shape"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .shapes-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .floating-shape {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          animation: floatShape ease-in-out infinite;
          backdrop-filter: blur(2px);
        }

        @keyframes floatShape {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .particle {
            width: 3px;
            height: 3px;
          }
          .floating-shape {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default CSSParticles;
