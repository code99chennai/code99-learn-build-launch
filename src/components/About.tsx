import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Heart, Sparkles } from "lucide-react";
import founderImage from "@/assets/founder.jpg";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class IT education",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning environment",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Results",
      description: "100% placement support for all students",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to transforming careers through coding",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            <Sparkles className="w-4 h-4 mr-1" />
            ABOUT US
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Code99 IT Academy?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded with a vision to make quality IT education accessible to everyone in Chennai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Founder Story */}
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-emerald-500 rounded-full" />
              Our Story
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by <span className="font-semibold text-foreground">Sudhakar</span> on{" "}
                <span className="font-semibold text-foreground">April 24, 2024</span>, Code99 IT Academy was born from 
                a simple yet powerful vision: to provide{" "}
                <span className="font-semibold text-primary">free, quality IT training</span> to students in Chennai.
              </p>
              <p>
                We believe that financial constraints should never be a barrier to learning. That's why we offer courses at just
                <span className="font-semibold text-primary"> ₹2,500 per month</span> – covering only our basic operational costs.
              </p>
              <p>
                With a <span className="font-semibold text-foreground">4.9 Google rating</span> and hundreds of successful 
                placements, we've built Chennai's most trusted IT training institute focused on
                <span className="font-semibold text-primary"> 100% practical learning</span>.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-emerald-500/5 rounded-2xl border-l-4 border-primary">
              <p className="text-lg font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
                Our Mission
              </p>
              <p className="text-muted-foreground">
                Empowering students with job-ready IT skills through hands-on training, personalized mentorship, 
                and unwavering placement support.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-emerald-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <img 
                src={founderImage} 
                alt="Sudhakar - Founder & CEO" 
                className="relative rounded-3xl shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <p className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-1">
                  Sudhakar
                </p>
                <p className="text-primary font-semibold">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mt-2">Est. April 24, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <Card 
                key={idx} 
                className={`group relative p-6 text-center bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Fun Fridays Highlight */}
        <div className={`mt-20 text-center max-w-4xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group bg-gradient-to-br from-primary/5 via-emerald-500/5 to-green-500/5 rounded-3xl p-10 border border-primary/20 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Fun Fridays & Games!
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learning shouldn't be boring! Every Friday, we organize fun activities, games, and team-building 
                events to keep the energy high and build lasting friendships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
