import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at TCS",
    content: "Code99 IT Academy transformed my career! The practical training and placement support helped me land my dream job at TCS within 2 months of completing the course.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=22c55e&color=fff",
  },
  {
    name: "Rahul Kumar",
    role: "Python Developer at Infosys",
    content: "Best decision I ever made! The mentors are industry experts who focus on real-world projects. The affordable fee structure made quality education accessible.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=22c55e&color=fff",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Designer at Zoho",
    content: "The hands-on approach at Code99 is unmatched. I learned Figma, prototyping, and design thinking through live projects. Now I'm designing products at Zoho!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=22c55e&color=fff",
  },
  {
    name: "Arun Vijay",
    role: "Digital Marketer at Freshworks",
    content: "From zero knowledge to running campaigns for a unicorn startup! Code99's digital marketing course covers everything from SEO to paid ads with practical assignments.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Arun+Vijay&background=22c55e&color=fff",
  },
  {
    name: "Kavitha Mohan",
    role: "Java Developer at Cognizant",
    content: "The Java training here is comprehensive. From basics to Spring Boot, everything was taught with industry-relevant examples. Placement happened within 3 weeks!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Kavitha+Mohan&background=22c55e&color=fff",
  },
];

const companyLogos = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Zoho-logo.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cognizant_logo.svg" },
  { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            TESTIMONIALS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with Code99 IT Academy
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Testimonial Card */}
          <Card className="border-0 bg-gradient-to-br from-background via-background to-muted/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />
              
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Verified
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Our students work at top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;