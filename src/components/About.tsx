import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Heart } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class IT education",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning environment",
    },
    {
      icon: Target,
      title: "Results",
      description: "100% placement support for all students",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to transforming careers through coding",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">ABOUT US</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Code99 IT Academy?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Founded with a vision to make quality IT education accessible to everyone in Chennai
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Founder Story */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by <span className="font-semibold text-foreground">Sudhakar</span> on <span className="font-semibold text-foreground">April 24, 2024</span>, 
              Code99 IT Academy was born from a simple yet powerful vision: to provide <span className="font-semibold text-primary">free, 
              quality IT training</span> to students in Chennai.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe that financial constraints should never be a barrier to learning. That's why we offer courses at just 
              <span className="font-semibold text-primary"> ₹2,500 per month</span> – covering only our basic operational costs like 
              electricity, rent, and trainer salaries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a <span className="font-semibold text-foreground">4.9 Google rating</span> and hundreds of successful placements, 
              we've built Chennai's most trusted offline IT training institute focused on 
              <span className="font-semibold text-primary"> 100% practical learning</span>.
            </p>

            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <p className="text-lg font-semibold text-primary mb-2">Our Mission</p>
              <p className="text-muted-foreground">
                Empowering students with job-ready IT skills through hands-on training, personalized mentorship, 
                and unwavering placement support.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
              <img 
                src={founderImage} 
                alt="Sudhakar - Founder & CEO" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <p className="text-2xl font-bold mb-1">Sudhakar</p>
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
              <Card key={idx} className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Fun Fridays Highlight */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-accent text-white rounded-3xl p-10 shadow-2xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold mb-4">Fun Fridays & Games!</h3>
            <p className="text-lg text-white/90">
              Learning shouldn't be boring! Every Friday, we organize fun activities, games, and team-building 
              events to keep the energy high and build lasting friendships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;