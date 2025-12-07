import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Palette, TrendingUp, Laptop, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Courses = () => {
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

  const courseLinks: Record<string, string> = {
    "Full Stack Web Development": "/full-stack-web-development-chennai",
    "Full Stack Java": "/java-training-chennai",
    "Full Stack Python": "/python-training-chennai",
    "Digital Marketing": "/digital-marketing-chennai",
    "UI/UX Design": "/ui-ux-training-chennai",
  };

  const courses = [
    {
      title: "Full Stack Web Development",
      icon: Code,
      description: "Master frontend and backend web development with modern frameworks",
      skills: ["HTML, CSS, JavaScript", "React.js", "Node.js", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
    },
    {
      title: "Full Stack Java",
      icon: Coffee,
      description: "Build enterprise applications with Java and Spring framework",
      skills: ["Core Java", "Spring Boot", "Hibernate", "MySQL"],
      gradient: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/20",
    },
    {
      title: "Full Stack Python",
      icon: Laptop,
      description: "Develop scalable applications with Python and Django",
      skills: ["Python", "Django", "Flask", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      description: "Master SEO, social media marketing, and digital advertising",
      skills: ["SEO/SEM", "Social Media", "Google Ads", "Analytics"],
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Create beautiful and user-friendly digital experiences",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
      gradient: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/20",
    },
  ];

  return (
    <section ref={sectionRef} id="courses" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            <Sparkles className="w-4 h-4 mr-1" />
            OUR COURSES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Dream Career
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-ready courses designed for practical learning and guaranteed placement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <Card 
                key={idx} 
                className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 ${course.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl`} />
                
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${course.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <CardHeader className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">4 Months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Mode:</span>
                      <span className="font-semibold">Offline Only</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Fee:</span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                        ₹2,500
                      </span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white group/btn`}
                    onClick={() => window.location.href = courseLinks[course.title]}
                  >
                    View Course Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Course Highlights */}
        <div className={`mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: "100% Practical Training", emoji: "💻", gradient: "from-blue-500 to-cyan-500" },
            { label: "Mock Interviews", emoji: "🎯", gradient: "from-purple-500 to-pink-500" },
            { label: "Resume Preparation", emoji: "📄", gradient: "from-green-500 to-emerald-500" },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group relative text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.emoji}</div>
              <p className="font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
