import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import studentsImage from "@/assets/students.jpg";
import classroomImage from "@/assets/classroom.jpg";
import founderImage from "@/assets/founder.jpg";
import { Monitor, Leaf, Gamepad2, Users, Sparkles, Award } from "lucide-react";

const Gallery = () => {
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

  const images = [
    {
      src: studentsImage,
      alt: "Students learning in practical sessions",
      title: "Hands-on Learning",
      description: "Real coding sessions with expert mentors",
    },
    {
      src: classroomImage,
      alt: "Modern classroom with individual workstations",
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure",
    },
    {
      src: founderImage,
      alt: "Founder Sudhakar guiding students",
      title: "Expert Mentorship",
      description: "Learn from industry professionals",
    },
  ];

  const features = [
    { icon: Monitor, text: "Individual Workstations", color: "from-primary to-primary/50" },
    { icon: Leaf, text: "Green, Inspiring Spaces", color: "from-emerald-500 to-emerald-400" },
    { icon: Gamepad2, text: "Fun Friday Activities", color: "from-violet-500 to-violet-400" },
    { icon: Users, text: "Small Batch Sizes", color: "from-blue-500 to-blue-400" },
    { icon: Sparkles, text: "Creative Environment", color: "from-amber-500 to-amber-400" },
    { icon: Award, text: "Industry Recognition", color: "from-rose-500 to-rose-400" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            GALLERY
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Our <span className="text-primary">Learning Environment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real photos from our Velachery campus – where learning meets excellence
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <Card className="relative border-0 bg-background/50 backdrop-blur-sm shadow-xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-foreground text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={idx} 
                  className="group border-0 bg-gradient-to-br from-background to-muted/50 hover:from-primary/10 hover:to-primary/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="font-semibold text-sm text-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;