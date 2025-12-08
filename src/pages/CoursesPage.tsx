import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import CSSParticles from "@/components/CSSParticles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, TrendingUp, Palette, Coffee, Clock, Users, Award, CheckCircle, ArrowRight, Star, Sparkles, Phone } from "lucide-react";

const CoursesPage = () => {
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

  const courses = [
    {
      icon: Coffee,
      title: "Java Training",
      slug: "/java-training-chennai",
      description: "Master Core Java, Advanced Java, Spring Boot, Hibernate, and enterprise application development. Perfect for Chennai's booming IT sector.",
      duration: "4-6 months",
      skills: ["Core Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"],
      careers: ["Java Developer", "Backend Developer", "Software Engineer"],
      companies: ["TCS", "Infosys", "Cognizant", "Wipro"],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      slug: "/full-stack-web-development-chennai",
      description: "Become a complete developer with MERN stack, React, Node.js, and modern web technologies. High demand in Chennai startups.",
      duration: "5-6 months",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      careers: ["Full Stack Developer", "Frontend Developer", "MERN Developer"],
      companies: ["Zoho", "Freshworks", "Chargebee", "Kissflow"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Python Training",
      slug: "/python-training-chennai",
      description: "Learn Python programming, Django, Flask, Data Science basics, and automation. Essential for AI/ML roles in Chennai.",
      duration: "3-5 months",
      skills: ["Python", "Django", "Flask", "Pandas", "NumPy"],
      careers: ["Python Developer", "Data Analyst", "Automation Engineer"],
      companies: ["Amazon", "PayPal", "Intel", "Nvidia"],
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      slug: "/digital-marketing-chennai",
      description: "Master SEO, SEM, Social Media Marketing, and Analytics. Growing demand in Chennai's e-commerce and startup ecosystem.",
      duration: "3-4 months",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
      careers: ["Digital Marketer", "SEO Specialist", "Social Media Manager"],
      companies: ["Amazon", "Flipkart", "Swiggy", "Agencies"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      slug: "/ui-ux-training-chennai",
      description: "Create stunning user interfaces and seamless experiences using Figma, Adobe XD, and design thinking methodologies.",
      duration: "3-4 months",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      careers: ["UI Designer", "UX Designer", "Product Designer"],
      companies: ["Zoho", "Freshworks", "Startups", "Design Agencies"],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const features = [
    { icon: Clock, title: "Flexible Timings", desc: "Weekday, weekend & evening batches available" },
    { icon: Users, title: "Small Batch Size", desc: "Maximum 15 students for personalized attention" },
    { icon: Award, title: "Certification", desc: "Industry-recognized course completion certificate" },
    { icon: CheckCircle, title: "100% Practical", desc: "Hands-on projects with real-world scenarios" },
  ];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.title + " in Chennai",
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "Code99 IT Academy",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu"
        }
      },
      "courseMode": "offline",
      "educationalLevel": "Beginner to Advanced",
      "timeRequired": course.duration
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What courses are offered at Code99 IT Academy Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 offers Java Training, Full Stack Web Development, Python Training, Digital Marketing, and UI/UX Design courses in Chennai. All courses include practical training and placement support."
        }
      },
      {
        "@type": "Question",
        "name": "What is the course fee at Code99 Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All courses at Code99 IT Academy Chennai are priced at ₹2,500 per month, making quality IT education affordable for students and professionals."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide job placement after course completion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Code99 provides 100% placement support including resume building, mock interviews, and job referrals to top companies in Chennai like TCS, Infosys, Zoho, and more."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>IT Courses in Chennai | Java, Python, Full Stack Training - Code99 Academy</title>
        <meta name="description" content="Explore IT courses at Code99 Chennai - Java, Python, Full Stack, Digital Marketing & UI/UX training. Affordable fees ₹2,500/month with 100% placement support." />
        <meta name="keywords" content="IT courses chennai, software training chennai, java course chennai, python training chennai, full stack course chennai, digital marketing course chennai, UI UX course chennai" />
        <link rel="canonical" href="https://code99-it-academy.42web.io/courses" />
        <meta property="og:title" content="IT Courses in Chennai | Code99 IT Academy" />
        <meta property="og:description" content="Best IT courses in Chennai with 100% placement support. Java, Python, Full Stack, Digital Marketing & UI/UX training." />
        <meta property="og:url" content="https://code99-it-academy.42web.io/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://code99-it-academy.42web.io/logo.png" />
        <meta property="og:site_name" content="Code99 IT Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Courses in Chennai | Code99 IT Academy" />
        <meta name="twitter:description" content="Java, Python, Full Stack, Digital Marketing & UI/UX courses in Chennai." />
        <meta name="twitter:image" content="https://code99-it-academy.42web.io/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Code99 IT Academy" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BackToTop />
        <PageBreadcrumb items={[{ label: "Courses" }]} />

        {/* Animated Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" style={{
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 15s ease infinite'
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/50 backdrop-blur-3xl" />
          <CSSParticles />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-up">
              <Badge className="mb-6 bg-primary/10 backdrop-blur-md text-primary border-primary/20 px-6 py-2 text-base">
                <Star className="w-4 h-4 mr-2 fill-primary text-primary" />
                Chennai's Top-Rated IT Academy
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  IT Training Courses
                </span>
                <br />
                <span className="text-foreground">in Chennai 2025</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Launch your IT career with industry-relevant courses designed for Chennai's job market. 
                From <span className="text-primary font-semibold">Java to Full Stack</span>, <span className="text-primary font-semibold">Python to UI/UX</span> – master the skills top companies are hiring for.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  <a href="tel:+916374510754">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 6374510754
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-background/50 backdrop-blur-sm">
                  <Link to="/contact">Book Free Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section ref={sectionRef} className="py-20 relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                <Sparkles className="w-4 h-4 mr-2" />
                Choose Your Path
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Career-Oriented <span className="text-primary">IT Courses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry-aligned courses with hands-on training and 100% placement support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => (
                <Card 
                  key={index} 
                  className={`group border-0 bg-gradient-to-br from-background via-background to-muted/30 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden rounded-3xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${course.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          <course.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
                          <Badge variant="outline" className="mt-1 border-primary/30">{course.duration}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Key Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.slice(0, 4).map((skill, i) => (
                            <Badge key={i} className="bg-muted/80 text-foreground hover:bg-primary/10 transition-colors text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Career Options</p>
                        <p className="text-sm text-muted-foreground">{course.careers.join(" • ")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Hiring Companies</p>
                        <p className="text-sm text-muted-foreground">{course.companies.join(", ")}</p>
                      </div>
                      <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-primary">₹2,500</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                        <Button asChild className={`bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white shadow-lg group/btn`}>
                          <Link to={course.slug}>
                            View Details 
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Courses */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">Why Code99</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  What Makes Our Courses <span className="text-primary">Different</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Industry-Relevant Curriculum", desc: "Courses designed with input from hiring managers at Chennai's top tech companies." },
                  { title: "Real-Time Projects", desc: "Work on 5+ live projects that you can showcase in your portfolio and interviews." },
                  { title: "Expert Instructors", desc: "Learn from professionals with 8+ years of industry experience at companies like TCS, Zoho." },
                  { title: "Interview Preparation", desc: "Mock interviews, resume building, and soft skills training included in every course." },
                  { title: "Job Assistance", desc: "Direct connections to HR teams at 50+ companies hiring in Chennai." },
                  { title: "Lifetime Access", desc: "Free access to updated course materials and alumni network support." },
                ].map((item, index) => (
                  <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Start Your IT Career Today
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-2xl mx-auto text-lg">
              Join 1000+ students who transformed their careers with Code99. 
              Free demo class available – experience our training before enrolling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="shadow-xl hover:shadow-2xl transition-all">
                <Link to="/contact">Book Free Demo</Link>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20">
                <a href="tel:+916374510754">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 6374510754
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CoursesPage;