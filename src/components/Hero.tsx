import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Code2, Database, TrendingUp, Palette, Layers } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const techIcons = [
    { Icon: Code2, label: "Java", position: "top-20 left-[10%]", delay: "0s" },
    { Icon: Database, label: "Python", position: "top-40 right-[15%]", delay: "1s" },
    { Icon: TrendingUp, label: "Digital Marketing", position: "bottom-40 left-[20%]", delay: "2s" },
    { Icon: Layers, label: "Full Stack", position: "bottom-32 right-[10%]", delay: "3s" },
    { Icon: Palette, label: "UI/UX", position: "top-1/2 left-[8%]", delay: "4s" },
    { Icon: Code2, label: "Web Dev", position: "top-1/3 right-[12%]", delay: "5s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Green Gradient Background */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 25%, #047857 50%, #065f46 75%, #064e3b 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite',
        }}
      />
      
      {/* Glossy Blur Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
      
      {/* Floating Tech Icons with Glossy Effect */}
      {techIcons.map((tech, idx) => (
        <div
          key={idx}
          className={`absolute ${tech.position} hidden lg:block`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: tech.delay,
          }}
        >
          <div className="relative group">
            {/* Glossy blur background */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl transform group-hover:scale-110 transition-transform duration-300" />
            {/* Icon container */}
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-2xl">
              <tech.Icon className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            {/* Glossy shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-2xl opacity-50" />
          </div>
        </div>
      ))}
      
      {/* Additional glossy shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          {/* Fixed Logo - Stays in view */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={logo} 
                alt="Code99 IT Academy" 
                className="h-24 md:h-32 drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Free IT Training Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-primary font-semibold text-lg">FREE IT TRAINING</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Best Software Training
            <br />
            <span className="text-primary">Institute in Chennai</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
            100% Practical Training • 100% Placement Support
          </p>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Learn job-ready IT skills at just <span className="font-bold text-primary">₹2,500/month</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-hover transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#courses'}
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'tel:+916374510754'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Google Rating", value: "4.9⭐" },
              { label: "Course Duration", value: "4 Months" },
              { label: "Monthly Fee", value: "₹2,500" },
              { label: "Placement", value: "100%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:bg-white/80 hover:border-primary/40 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;