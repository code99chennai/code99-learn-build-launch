import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Coffee, 
  Award, 
  Users, 
  BookOpen, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  FileCode,
  Database,
  Server,
  Laptop,
  Phone,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const JavaTrainingChennai = () => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Full Stack Java Development Training",
    "description": "Comprehensive Java training course in Chennai offering 100% practical training, placement support, and hands-on experience in Core Java, Spring Boot, Hibernate, and MySQL",
    "provider": {
      "@type": "Organization",
      "name": "Code99 IT Academy",
      "sameAs": "https://code99itacademy.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Velachery",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Offline",
      "duration": "P4M",
      "instructor": {
        "@type": "Person",
        "name": "Expert Java Trainers"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://code99itacademy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://code99itacademy.com/#courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Java Training Chennai",
        "item": "https://code99itacademy.com/java-training-chennai"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Java Training Course in Chennai | Full Stack Java Development | Code99 IT Academy</title>
        <meta 
          name="description" 
          content="Best Java training institute in Chennai offering Full Stack Java course with Spring Boot, Hibernate, MySQL. 100% practical training, affordable ₹2,500/month fee, placement support. Enroll now for Java certification in Velachery, Chennai." 
        />
        <meta 
          name="keywords" 
          content="java training chennai, java course chennai, java institute chennai, full stack java training, spring boot training, hibernate course, java certification chennai, java classes velachery, best java training institute chennai, advanced java course, core java training, enterprise java development, java programming course" 
        />
        <link rel="canonical" href="https://code99itacademy.com/java-training-chennai" />
        <meta property="og:title" content="Java Training Course in Chennai | Code99 IT Academy" />
        <meta property="og:description" content="Master Full Stack Java Development with 100% practical training at Chennai's most affordable IT academy - ₹2,500/month" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://code99itacademy.com/java-training-chennai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Training Course in Chennai | Code99 IT Academy" />
        <meta name="twitter:description" content="Best Java training in Chennai with placement support and expert mentors" />
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <SocialLinks variant="floating" className="hidden lg:block" />

        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-up">
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
                  <Coffee className="w-4 h-4 mr-2 inline" />
                  FULL STACK JAVA COURSE
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                  Java Training Course in <span className="text-primary">Chennai</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Master Enterprise Java Development with Spring Boot, Hibernate & MySQL at Velachery's Most Affordable Software Training Institute
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
                    onClick={() => window.location.href = '#enroll'}
                  >
                    Enroll Now - ₹2,500/Month
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full"
                    onClick={() => window.location.href = 'tel:+916374510754'}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 6374510754
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Clock, label: "4 Months", sublabel: "Duration" },
                    { icon: Users, label: "100%", sublabel: "Practical Training" },
                    { icon: Award, label: "100%", sublabel: "Placement Support" },
                    { icon: TrendingUp, label: "4.9⭐", sublabel: "Google Rating" },
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="bg-white/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-hover transition-all">
                        <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{stat.label}</div>
                        <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Java Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">WHY JAVA?</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Why Learn <span className="text-primary">Java Programming</span> in 2025?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Java developers are in high demand across Chennai's IT corridors - from OMR to Siruseri SIPCOT, Guindy Tidel Park to Taramani. Learn job-ready Java skills and get placed in top Chennai IT companies.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Briefcase,
                      title: "High Demand in Chennai IT",
                      description: "TCS, Infosys, Cognizant, Zoho, and 500+ companies in Chennai actively hire Java developers. With IT hubs in OMR, Thoraipakkam, and Guindy, Java skills guarantee career opportunities."
                    },
                    {
                      icon: Server,
                      title: "Banks & Fintech Love Java",
                      description: "Chennai's banking sector (ICICI, Axis, HDFC) and fintech startups heavily use Java. Learn Spring Boot and land high-paying roles in Chennai's financial technology companies."
                    },
                    {
                      icon: Code,
                      title: "Startup to MNC Opportunities",
                      description: "From Chennai startups in Nungambakkam to MNCs in DLF IT Park Ramapuram, Java developers are needed everywhere. One skill opens doors across all company types in Chennai."
                    }
                  ].map((benefit, idx) => {
                    const Icon = benefit.icon;
                    return (
                      <Card key={idx} className="border-2 hover:border-primary/50 hover:shadow-hover transition-all">
                        <CardHeader>
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{benefit.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Course Curriculum */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">CURRICULUM</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Full Stack Java Training <span className="text-primary">Course Syllabus</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our 4-month Java course covers exactly what Chennai IT companies ask in interviews - Core Java, Spring Boot, Hibernate, and real projects. No theory-only teaching, only practical coding.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Coffee,
                      title: "Core Java Fundamentals",
                      topics: [
                        "Object-Oriented Programming (OOP) concepts and principles",
                        "Java syntax, data types, operators, and control structures",
                        "Classes, objects, inheritance, polymorphism, and encapsulation",
                        "Exception handling, multithreading, and collections framework",
                        "File I/O operations and serialization techniques",
                        "Java 8+ features: Lambda expressions, streams, functional interfaces"
                      ]
                    },
                    {
                      icon: Server,
                      title: "Spring Framework & Spring Boot",
                      topics: [
                        "Spring Core concepts: Dependency injection and IoC container",
                        "Spring Boot application development and auto-configuration",
                        "RESTful API development with Spring MVC and REST controllers",
                        "Spring Data JPA for database operations and repository pattern",
                        "Spring Security for authentication and authorization",
                        "Microservices architecture patterns with Spring Cloud"
                      ]
                    },
                    {
                      icon: Database,
                      title: "Hibernate & Database Management",
                      topics: [
                        "ORM concepts and Hibernate architecture fundamentals",
                        "Entity mapping, annotations, and relationship configurations",
                        "HQL (Hibernate Query Language) and Criteria API",
                        "Transaction management and caching strategies",
                        "MySQL database design, normalization, and optimization",
                        "JDBC connectivity and advanced SQL query optimization"
                      ]
                    },
                    {
                      icon: FileCode,
                      title: "Frontend & Full Stack Integration",
                      topics: [
                        "HTML5, CSS3, and JavaScript fundamentals for Java developers",
                        "React.js or Angular integration with Spring Boot backend",
                        "RESTful API consumption and AJAX implementation",
                        "JSON data handling and API documentation with Swagger",
                        "Version control with Git and collaborative development",
                        "Deployment on cloud platforms: AWS, Heroku, or Azure"
                      ]
                    }
                  ].map((module, idx) => {
                    const Icon = module.icon;
                    return (
                      <Card key={idx} className="border-2 hover:border-primary/50 transition-all">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">{module.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {module.topics.map((topic, topicIdx) => (
                              <li key={topicIdx} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Training Methodology */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">LEARNING APPROACH</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    How We Train <span className="text-primary">Java Developers</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Velachery students get personalized offline Java training with live coding, real projects, and mock interviews - exactly what you need to crack Chennai IT company technical rounds.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Laptop,
                      title: "100% Practical Training",
                      description: "No PowerPoint lectures. Only live coding in our Velachery center near Vijayanagar Bus Stand. Easily accessible from Adyar, Guindy, Tambaram, Chrompet - perfect for Chennai students."
                    },
                    {
                      icon: BookOpen,
                      title: "Chennai Company-Style Projects",
                      description: "Build real projects like Chennai e-commerce sites, banking apps, and REST APIs - exactly what Cognizant, TCS, and Chennai startups ask in interviews. Show portfolio to recruiters."
                    },
                    {
                      icon: Users,
                      title: "Learn from Chennai IT Experts",
                      description: "Our trainers work in Chennai IT companies and know exactly what skills get you hired. Get insider tips on OMR company interviews, salary negotiations, and career growth strategies."
                    },
                    {
                      icon: Award,
                      title: "Chennai IT Placement Support",
                      description: "Direct connections with HR teams in Tidel Park, OMR tech companies, and Siruseri startups. We send your resume directly to hiring managers - skip job portals, get interviews faster."
                    },
                    {
                      icon: Code,
                      title: "Tools Chennai Companies Use",
                      description: "Learn IntelliJ IDEA, Git, Jenkins, Docker - the exact tech stack used by Zoho, Freshworks, and Chennai product companies. Be job-ready from day one at your first company."
                    },
                    {
                      icon: CheckCircle,
                      title: "Certificate Chennai HRs Recognize",
                      description: "Code99 certificate is known by Chennai recruiters. Our alumni work at TCS Siruseri, Cognizant Sholinganallur, and OMR startups - they refer you for jobs after course completion."
                    }
                  ].map((method, idx) => {
                    const Icon = method.icon;
                    return (
                      <Card key={idx} className="border-2 hover:border-primary/50 hover:shadow-hover transition-all">
                        <CardHeader>
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">{method.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Why Code99 for Java */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">CODE99 ADVANTAGE</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Why Choose Code99 IT Academy for <span className="text-primary">Java Training in Chennai</span>?
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Velachery's Most Affordable Java Training - Why Students Choose Code99</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Located near Velachery Phoenix Mall and Vijayanagar Bus Stand, Code99 IT Academy is easily reachable by Chennai Metro (Velachery Station 10 mins walk) and buses from Adyar, Guindy, Tambaram, Chrompet, Thoraipakkam, and Pallikaranai. No need to travel to OMR - quality Java training available in your neighborhood.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Many Chennai students waste ₹50,000+ on Java courses with zero placement support. At Code99, pay only ₹2,500/month and get guaranteed interview calls from Chennai IT companies. Perfect for Anna University students, unemployed graduates, and career switchers in Chennai looking for affordable quality training.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Founded by Mr. Sudhakar (Ex-IT professional) in April 2024, Code99 operates on a community model - we charge only what covers rent and trainer salary. Unlike coaching centers in T Nagar or Porur charging lakhs, we believe every Chennai student deserves quality Java education regardless of family income. That's why 100+ students already trust us.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-2 border-primary/20 bg-primary/5">
                      <CardHeader>
                        <CardTitle className="text-2xl">Course Highlights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {[
                            "Velachery center - 10 mins from Metro, near Phoenix Mall",
                            "Only ₹2,500/month - Chennai's most affordable Java course",
                            "Small batches (max 15 students) - personal attention guaranteed",
                            "Build 5+ real projects Chennai companies ask in interviews",
                            "100% offline classes - no boring online videos",
                            "Mock interviews by developers from TCS, Cognizant, Infosys",
                            "Resume formatted exactly how Chennai HRs prefer",
                            "Direct referrals to 50+ IT companies in OMR, Siruseri, Guindy",
                            "Weekend coding practice and doubt-clearing sessions",
                            "Lifetime alumni support - get help even after placement"
                          ].map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-gradient-accent text-white rounded-2xl p-8 md:p-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Join 100+ Chennai Students Already Learning Java at Code99
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                      From Velachery to IT job in OMR within 4 months. Our students now work at Cognizant Sholinganallur, TCS Siruseri, Infosys Mahindra City. Next batch starts soon - limited seats available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full"
                        onClick={() => window.location.href = '#enroll'}
                      >
                        Enroll Now
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full"
                        onClick={() => window.location.href = 'tel:+916374510754'}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Call: +91 6374510754
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">CAREER PATHS</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Java Developer <span className="text-primary">Career Opportunities</span> in Chennai
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    These are actual job titles and salaries our Velachery students got after completing Java training - your potential career in Chennai IT sector.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { role: "Java Developer (Fresher)", salary: "₹3.5L - ₹6L/year", companies: "TCS, Infosys, Wipro" },
                    { role: "Spring Boot Developer", salary: "₹4L - ₹8L/year", companies: "Cognizant, HCL, LTI" },
                    { role: "Full Stack Java Developer", salary: "₹5L - ₹10L/year", companies: "Zoho, Freshworks" },
                    { role: "Backend Java Engineer", salary: "₹4L - ₹7L/year", companies: "OMR Startups" },
                    { role: "Java Microservices Developer", salary: "₹6L - ₹12L/year", companies: "Product Companies" },
                    { role: "Senior Java Architect (3+ yrs)", salary: "₹10L - ₹20L/year", companies: "MNCs in Chennai" }
                  ].map((career, idx) => (
                    <Card key={idx} className="border-2 hover:border-primary/50 hover:shadow-hover transition-all text-center">
                      <CardHeader>
                        <CardTitle className="text-lg">{career.role}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-primary mb-2">{career.salary}</CardDescription>
                        <p className="text-sm text-muted-foreground">Hiring: {career.companies}</p>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 prose max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chennai IT job reality: Siruseri SIPCOT has 200+ companies, OMR tech corridor has 300+ startups, Tidel Park Taramani houses 50+ MNCs - all constantly hiring Java developers. Every week, 100+ Java developer openings appear in Naukri, Shine, and LinkedIn for Chennai locations. Problem? Most require Spring Boot and Hibernate - exactly what Code99 teaches.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Our founder personally knows HR managers at TCS Siruseri, Cognizant Sholinganallur, and multiple OMR tech parks. After course completion, we don't just give you a certificate - we WhatsApp your resume directly to hiring HRs. Many Code99 students skip Naukri and get interview calls within 1 week through our direct references.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enroll Section */}
          <section id="enroll" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="border-2 border-primary/20 shadow-hover">
                  <CardHeader className="text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 mx-auto">ENROLL NOW</Badge>
                    <CardTitle className="text-4xl md:text-5xl mb-4">
                      Book Your Seat - <span className="text-primary">Next Batch Starts Soon</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Only 15 seats per batch - Small class size ensures every student gets job placement support
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Location (Easy to Reach)</h4>
                            <p className="text-muted-foreground">Velachery - 10 mins from Metro, Near Phoenix Mall, All Chennai buses available</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Duration</h4>
                            <p className="text-muted-foreground">4 Months (Weekday Classes)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Certification</h4>
                            <p className="text-muted-foreground">Industry-recognized certificate</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Contact</h4>
                            <p className="text-muted-foreground">+91 6374510754</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Course Fee</h4>
                            <p className="text-2xl font-bold text-primary">₹2,500/month</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Placement Support</h4>
                            <p className="text-muted-foreground">100% Assistance</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="text-center space-y-6">
                        <p className="text-lg text-muted-foreground">
                          Don't waste time in expensive institutes. Learn Java in 4 months, pay ₹2,500/month, get placed in Chennai IT company. Call now to book your seat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button 
                            size="lg" 
                            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
                            onClick={() => window.location.href = 'tel:+916374510754'}
                          >
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now: +91 6374510754
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline"
                            className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full"
                            onClick={() => window.location.href = '/#contact'}
                          >
                            Send Enquiry
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <h2 className="text-3xl font-bold mb-6">
                  Complete Guide to Java Training in Chennai
                </h2>
                
                <h3 className="text-2xl font-bold mt-8 mb-4">What Chennai IT Companies Actually Want from Java Developers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Talk to any HR at TCS Siruseri or Cognizant Sholinganallur - they all ask the same: "Do you know Spring Boot? Can you build REST APIs? Have you worked with MySQL?" Full Stack Java Development is exactly this - Core Java basics, Spring Boot for backend, Hibernate for database, plus basic frontend to connect everything. Chennai companies don't care about theory; they want developers who can code actual projects from day one. That's why Code99 focuses 100% on practical coding, not textbook learning.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">4 Months to Java Job - Code99's Proven Chennai Training Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Month 1: Core Java - Learn object-oriented programming, collections, exception handling exactly how Chennai interview panels ask questions. Month 2: Spring Boot - Build real REST APIs that companies use. Practice with actual e-commerce and banking project scenarios. Month 3: Hibernate & MySQL - Master database connectivity, the skill that separates juniors from hired candidates in Chennai placements. Month 4: Complete project + Resume + Mock interviews by real Chennai company developers. By month 4 end, you're not a student anymore - you're a hireable Java developer ready for Velachery to OMR job transition.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Who Should Learn Java in Chennai? (Honest Answer)</h3>
                <p className="text-muted-foreground leading-relaxed">
  If you're an Anna University student (CSE, IT, ECE) looking for placement, unemployed graduate frustrated with job search, BCA/MCA student needing practical skills, or working professional in non-IT wanting to switch careers - Java is perfect for you. Chennai reality: Companies hire Java developers more than any other technology. But if you're expecting 100% placement guarantee on day 1 or ₹10 lakhs salary as fresher, be realistic. Code99 gives you skills and interview opportunities; you must put in effort. Our Velachery students who attended seriously and practiced daily all got placed within 3 months after course completion.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Chennai Java Job Market Reality - Numbers Don't Lie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Check Naukri right now - 500+ Java developer jobs in Chennai location. OMR alone has 50+ companies hiring every month. Siruseri SIPCOT tech park needs 200+ Java developers for TCS, Infosys, Wipro, L&T Infotech. Tidel Park Taramani, DLF IT Park, RMZ Millenia all have constant openings. Fresh Java developer salary in Chennai: ₹3.5L-₹6L (Service companies like TCS, Cognizant), ₹5L-₹8L (Product companies like Zoho, Freshworks), ₹6L-₹10L (Startups in OMR tech corridor). After 2-3 years experience, jump to ₹10L-₹15L easily. This is not advertisement, check LinkedIn Chennai Java jobs yourself - demand is real.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Velachery Students Choose Code99 Over Expensive T Nagar Institutes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Big institutes in Chennai charge ₹50,000-₹80,000 for Java course. What you get? 50+ students in class, trainer reading PowerPoint slides, zero personal attention, generic resume that looks like everyone else's. Code99 charges ₹10,000 total (₹2,500×4 months). What you get? Maximum 15 students per batch, trainers who actually code live in front of you, personal doubt-clearing after class, resume customized to match your background, and direct WhatsApp referrals to Chennai HRs. Located near Velachery Metro and Phoenix Mall - no need to waste 2 hours traveling to Anna Nagar or OMR institutes. Our 4.9 Google rating isn't fake - read reviews from actual students who got placed.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">How Code99 Gets You Java Jobs in Chennai (Not Just Promises)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Other institutes give certificate and say "all the best for job search." Code99 process: Week 1 after course completion - Resume building session where we format your resume exactly how Chennai HR teams scan (we know because our trainers worked in recruitment). Week 2 - Mock technical interview by actual developers from TCS, Cognizant who know what questions Chennai companies ask. Week 3 - Your profile sent via WhatsApp to 50+ HR contacts in our network (Siruseri, OMR, Guindy locations). Week 4 onwards - Interview calls start coming. You attend interviews, we provide feedback for improvement. If rejected, we analyze why and send to other companies. This continues until you get offer letter. We don't abandon students after course - our Velachery alumni still WhatsApp us for career advice even after 1 year of placement.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">₹2,500/Month Java Training - How Is Code99 So Cheap? (Students Ask This)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fair question. Our founder Mr. Sudhakar started Code99 as community initiative, not profit business. Monthly expenses: Velachery center rent ₹25,000, trainer salaries ₹40,000, electricity/internet ₹5,000 = ₹70,000 total. With 15 students × ₹2,500 = ₹37,500 per batch. We run 2 batches simultaneously = ₹75,000 monthly. Just enough to cover costs. No marketing budget, no fancy office, no profit margin. Compare this with commercial institutes: same costs but they charge ₹50,000 per student wanting ₹7-8 lakhs monthly profit. We believe IT education should be accessible to every Chennai student regardless of family income. That's why middle-class Velachery families trust us - we're not here to get rich, we're here to create Java developers.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Java vs Python vs Web Development - What Chennai Companies Actually Hire</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Python is good for data science and AI, but in Chennai how many companies hire Python developers? Maybe 20-30 max. JavaScript/React pays well but competition is huge - 1000 candidates for 10 jobs. Java? Every second Chennai company needs Java developers. Why? Banks use Java (ICICI, Axis, HDFC tech teams in Chennai), insurance companies use Java, government projects use Java, e-commerce uses Java backend, logistics companies use Java. TCS alone hires 500+ Java developers yearly in Chennai. Infosys, Wipro, Cognizant, L&T all prefer Java for enterprise projects. Even startups use Spring Boot for scalable backends. Career stability matters - Java developers don't struggle for jobs in Chennai. That's reality, not marketing talk.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Ready to Start Java Training? Here's Exactly What to Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Step 1: Call +91 6374510754 right now or visit Code99 Velachery center (near Phoenix Mall, 10 mins from Metro). Step 2: Meet our counselor - explain your background (student/graduate/working professional). We'll show you exact course plan and batch timings. Step 3: Attend one FREE demo class to see how we teach (live coding, not slides). If you like it, enroll. Step 4: Pay ₹2,500 first month fee (no hidden charges, no material fees). Step 5: Start attending classes from next batch (batches start every month). Step 6: For 4 months, attend seriously, practice coding daily, build projects. Step 7: After course, we send your resume to Chennai companies. Step 8: You attend interviews, get offers, start working in IT company. Simple process, proven results. Next batch starts soon - only 15 seats available. Call now before batch fills up.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JavaTrainingChennai;