import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import CSSParticles from "./CSSParticles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* CSS Particles Background */}
      <CSSParticles />
      
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
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-white font-semibold text-lg">FREE IT TRAINING</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Best Software Training
            <br />
            <span className="text-secondary">Institute in Chennai</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            100% Practical Training • 100% Placement Support
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Learn job-ready IT skills at just <span className="font-bold text-secondary">₹2,500/month</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full shadow-hover transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '#courses'}
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
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
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;