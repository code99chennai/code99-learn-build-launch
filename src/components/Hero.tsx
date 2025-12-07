import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Code2, Database, TrendingUp, Palette, Layers, Sparkles, Zap } from "lucide-react";
import logo from "@/assets/logo.png";
import ParticleField from "./ParticleField";
import AnimatedLines from "./AnimatedLines";

const Hero = () => {
  const techIcons = [
    { Icon: Code2, label: "Java", position: "top-32 left-[8%]", delay: "0s", gradient: "from-orange-400 to-red-500" },
    { Icon: Database, label: "Python", position: "top-48 right-[12%]", delay: "1s", gradient: "from-blue-400 to-indigo-500" },
    { Icon: TrendingUp, label: "Digital Marketing", position: "bottom-48 left-[15%]", delay: "2s", gradient: "from-purple-400 to-pink-500" },
    { Icon: Layers, label: "Full Stack", position: "bottom-40 right-[8%]", delay: "3s", gradient: "from-cyan-400 to-blue-500" },
    { Icon: Palette, label: "UI/UX", position: "top-1/2 left-[5%]", delay: "4s", gradient: "from-pink-400 to-rose-500" },
    { Icon: Zap, label: "AI/ML", position: "top-1/3 right-[8%]", delay: "5s", gradient: "from-yellow-400 to-orange-500" },
  ];

  const stats = [
    { label: "Google Rating", value: "4.9", suffix: "⭐", color: "from-yellow-400 to-orange-500" },
    { label: "Course Duration", value: "4", suffix: " Months", color: "from-blue-400 to-cyan-500" },
    { label: "Monthly Fee", value: "₹2,500", suffix: "", color: "from-green-400 to-emerald-500" },
    { label: "Placement", value: "100", suffix: "%", color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Particle Background */}
      <ParticleField className="z-0" particleCount={60} />
      
      {/* Animated Lines */}
      <AnimatedLines />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating Tech Icons */}
      {techIcons.map((tech, idx) => (
        <div
          key={idx}
          className={`absolute ${tech.position} hidden lg:block z-10`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: tech.delay,
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity scale-110`} />
            
            {/* Icon container */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-2xl group-hover:scale-110 transition-all duration-300">
              <tech.Icon className="w-8 h-8 text-primary drop-shadow-lg" />
            </div>
            
            {/* Label tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-medium bg-foreground text-background px-2 py-1 rounded whitespace-nowrap">
                {tech.label}
              </span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with glow */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all scale-150" />
              <img 
                src={logo} 
                alt="Code99 IT Academy" 
                className="relative h-24 md:h-32 drop-shadow-2xl transition-transform duration-300 hover:scale-105" 
              />
            </div>
          </div>

          {/* Free Training Badge */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-primary/30 px-6 py-3 rounded-full mb-8 shadow-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold text-lg tracking-wide">FREE IT TRAINING</span>
          </div>

          {/* Main Heading with gradient text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Best Software Training</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent animate-gradient-x">
              Institute in Chennai
            </span>
          </h1>

          {/* Subheading with typing effect style */}
          <div className="space-y-2 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                100% Practical Training
              </span>
              <span className="mx-3 text-primary">•</span>
              <span className="inline-flex items-center gap-2">
                100% Placement Support
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              </span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Learn job-ready IT skills at just{" "}
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                ₹2,500/month
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#courses'}
            >
              <span className="relative z-10 flex items-center">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-primary/50 text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50"
              onClick={() => window.location.href = 'tel:+916374510754'}
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
              Call Now
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <span className="text-foreground">{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
