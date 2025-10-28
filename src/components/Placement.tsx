import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileText, Users, Trophy } from "lucide-react";

const Placement = () => {
  const placementFeatures = [
    {
      icon: FileText,
      title: "Resume Preparation",
      description: "Professional resume building workshops to make you stand out",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Real-world interview practice with industry experts",
      color: "bg-green-500",
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Direct connections with hiring companies in Chennai",
      color: "bg-purple-500",
    },
    {
      icon: Trophy,
      title: "Career Guidance",
      description: "Personalized mentorship for your career growth",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="placement" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">PLACEMENT SUPPORT</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            100% <span className="text-primary">Placement Assistance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just teach you to code – we prepare you for your dream job
          </p>
        </div>

        {/* Placement Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {placementFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Placement Process */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Placement Process</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Skills Assessment",
                  description: "Evaluate your technical skills and identify areas for improvement",
                },
                {
                  step: "2",
                  title: "Resume Building",
                  description: "Create a professional, ATS-friendly resume that highlights your strengths",
                },
                {
                  step: "3",
                  title: "Interview Training",
                  description: "Practice mock interviews with real-time feedback from experts",
                },
                {
                  step: "4",
                  title: "Job Placement",
                  description: "Get connected with our hiring partners and land your dream job",
                },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="p-6 hover:shadow-card transition-shadow">
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "100%", label: "Placement Support" },
            { value: "500+", label: "Students Trained" },
            { value: "4.9", label: "Google Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-8 bg-white rounded-3xl shadow-card hover:shadow-hover transition-shadow">
              <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;