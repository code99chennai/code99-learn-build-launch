import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileText, Users, Trophy, Sparkles, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Placement = () => {
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

  const placementFeatures = [
    {
      icon: FileText,
      title: "Resume Preparation",
      description: "Professional resume building workshops to make you stand out",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Real-world interview practice with industry experts",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Direct connections with hiring companies in Chennai",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Career Guidance",
      description: "Personalized mentorship for your career growth",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const processSteps = [
    { step: "1", title: "Skills Assessment", description: "Evaluate your technical skills and identify areas for improvement" },
    { step: "2", title: "Resume Building", description: "Create a professional, ATS-friendly resume that highlights your strengths" },
    { step: "3", title: "Interview Training", description: "Practice mock interviews with real-time feedback from experts" },
    { step: "4", title: "Job Placement", description: "Get connected with our hiring partners and land your dream job" },
  ];

  return (
    <section ref={sectionRef} id="placement" className="py-24 bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            <Sparkles className="w-4 h-4 mr-1" />
            PLACEMENT SUPPORT
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            100%{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Placement Assistance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just teach you to code – we prepare you for your dream job
          </p>
        </div>

        {/* Placement Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {placementFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={idx} 
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                
                <CardContent className="p-6 text-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Placement Process */}
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-3xl font-bold text-center mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Placement Process
            </span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-emerald-500 to-green-600 hidden md:block rounded-full" />

            {/* Steps */}
            <div className="space-y-8">
              {processSteps.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + idx * 150}ms` }}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 group">
                      <div className="flex items-center gap-3 mb-2" style={{ flexDirection: idx % 2 === 0 ? 'row-reverse' : 'row' }}>
                        <CheckCircle className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl ring-4 ring-white">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stat */}
        <div className={`mt-20 flex justify-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative text-center p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-primary/20">
              <div className="text-6xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-muted-foreground font-medium text-lg">Placement Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
