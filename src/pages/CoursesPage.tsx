import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, TrendingUp, Palette, Coffee, Clock, Users, Award, CheckCircle, ArrowRight } from "lucide-react";

const CoursesPage = () => {
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

        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Courses</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                IT Training Courses in Chennai
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Launch your IT career with industry-relevant courses designed for Chennai's job market. 
                From Java to Full Stack, Python to UI/UX – master the skills top companies are hiring for.
              </p>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-12 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Career Path</h2>
              <p className="text-muted-foreground">Industry-aligned courses with hands-on training and placement support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <course.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{course.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{course.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">KEY SKILLS</p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">CAREER OPTIONS</p>
                      <p className="text-sm text-muted-foreground">{course.careers.join(" • ")}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">HIRING COMPANIES</p>
                      <p className="text-sm text-muted-foreground">{course.companies.join(", ")}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">₹2,500</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                      <Button asChild className="group/btn">
                        <Link to={course.slug}>
                          View Details <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Courses */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/50 text-foreground">Why Code99</Badge>
                <h2 className="text-3xl font-bold text-foreground">What Makes Our Courses Different</h2>
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
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your IT Career Today</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 1000+ students who transformed their careers with Code99. 
              Free demo class available – experience our training before enrolling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Book Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+916374510754">Call: +91 6374510754</a>
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
