import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Coffee, Palette, TrendingUp, Laptop } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      icon: Code,
      description: "Master frontend and backend web development with modern frameworks",
      skills: ["HTML, CSS, JavaScript", "React.js", "Node.js", "MongoDB"],
      color: "bg-blue-500",
    },
    {
      title: "Full Stack Java",
      icon: Coffee,
      description: "Build enterprise applications with Java and Spring framework",
      skills: ["Core Java", "Spring Boot", "Hibernate", "MySQL"],
      color: "bg-orange-500",
    },
    {
      title: "Full Stack Python",
      icon: Laptop,
      description: "Develop scalable applications with Python and Django",
      skills: ["Python", "Django", "Flask", "PostgreSQL"],
      color: "bg-green-600",
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      description: "Master SEO, social media marketing, and digital advertising",
      skills: ["SEO/SEM", "Social Media", "Google Ads", "Analytics"],
      color: "bg-purple-500",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Create beautiful and user-friendly digital experiences",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
      color: "bg-pink-500",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">OUR COURSES</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Dream Career</span>
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
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">4 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mode:</span>
                      <span className="font-semibold">Offline Only</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly Fee:</span>
                      <span className="text-2xl font-bold text-primary">₹2,500</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => {
                      if (course.title === "Full Stack Java") {
                        window.location.href = '/java-training-chennai';
                      } else {
                        window.location.href = '#contact';
                      }
                    }}
                  >
                    {course.title === "Full Stack Java" ? "View Course Details" : "Enroll Now"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Course Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "100% Practical Training", emoji: "💻" },
            { label: "Mock Interviews", emoji: "🎯" },
            { label: "Resume Preparation", emoji: "📄" },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-card">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;