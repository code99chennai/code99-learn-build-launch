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
                  Master Enterprise Java Development with Spring Boot, Hibernate & MySQL at Chennai's Premier Software Training Institute
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
                    Java remains one of the most in-demand programming languages for enterprise application development, web services, Android apps, and cloud computing solutions across Chennai's thriving IT sector.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Briefcase,
                      title: "High Demand Career",
                      description: "Java developers are among the highest-paid professionals in Chennai's IT industry with abundant job opportunities in leading software companies, startups, and multinational corporations."
                    },
                    {
                      icon: Server,
                      title: "Enterprise Standard",
                      description: "Java powers mission-critical enterprise applications, banking systems, e-commerce platforms, and large-scale web applications making it essential for backend development careers."
                    },
                    {
                      icon: Code,
                      title: "Platform Independent",
                      description: "Write once, run anywhere - Java's platform independence and robust framework ecosystem including Spring Boot and Hibernate make it ideal for scalable application development."
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
                    Our comprehensive Java programming course covers everything from fundamental concepts to advanced enterprise frameworks, ensuring you become a job-ready Java full stack developer.
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
                    At Code99 IT Academy, we believe in practical, hands-on Java training that prepares students for real-world software development challenges in Chennai's competitive IT job market.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Laptop,
                      title: "100% Practical Training",
                      description: "Every Java concept is taught through live coding sessions, real-world projects, and hands-on exercises. Our offline classroom environment in Velachery ensures personalized attention from expert Java trainers."
                    },
                    {
                      icon: BookOpen,
                      title: "Project-Based Learning",
                      description: "Build enterprise-grade applications including e-commerce platforms, banking systems, and RESTful microservices using Spring Boot and Hibernate. Gain portfolio-ready projects for job interviews."
                    },
                    {
                      icon: Users,
                      title: "Expert Mentorship",
                      description: "Learn from experienced Java developers working in Chennai's top IT companies. Get personalized career guidance, code reviews, and industry insights throughout your 4-month Java training journey."
                    },
                    {
                      icon: Award,
                      title: "Placement Preparation",
                      description: "Comprehensive placement support including resume building, mock technical interviews, data structures and algorithms practice, and direct connections with Java hiring companies in Chennai."
                    },
                    {
                      icon: Code,
                      title: "Industry-Standard Tools",
                      description: "Master professional development tools including IntelliJ IDEA, Eclipse, Maven, Git, Jenkins, Docker, and cloud deployment platforms used by Java development teams worldwide."
                    },
                    {
                      icon: CheckCircle,
                      title: "Certification & Support",
                      description: "Receive course completion certificate recognized by Chennai recruiters. Lifetime access to study materials, doubt-clearing sessions, and alumni network for continuous learning support."
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
                    <h3 className="text-2xl font-bold">Best Java Training Institute in Velachery, Chennai</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Code99 IT Academy has established itself as Chennai's most trusted Java training center since its founding in April 2024. Located in Velachery, we're easily accessible from all parts of Chennai including Adyar, Guindy, Tambaram, and Chrompet.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Our Java course is designed specifically for students, fresh graduates, and working professionals looking to transition into Java development careers. Whether you're a complete beginner or have basic programming knowledge, our structured curriculum helps you master Java programming from fundamentals to advanced enterprise frameworks.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      What sets Code99 apart is our commitment to affordable, quality education. At just ₹2,500 per month, we offer the most cost-effective Java training in Chennai without compromising on course quality, trainer expertise, or placement support. This non-profit approach makes professional Java training accessible to every aspiring software developer.
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
                            "4-month intensive Full Stack Java training program",
                            "Offline classroom sessions with live coding demonstrations",
                            "Small batch sizes ensuring personalized attention",
                            "Real-time project development on enterprise applications",
                            "Coverage of Core Java, Spring Boot, Hibernate, MySQL",
                            "Mock interviews and technical round preparations",
                            "Resume building and LinkedIn profile optimization",
                            "Direct placement assistance with Chennai IT companies",
                            "Weekend doubt-clearing and additional practice sessions",
                            "Industry-recognized course completion certificate"
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
                      Start Your Java Development Career Today
                    </h3>
                    <p className="text-xl mb-8 opacity-90">
                      Join hundreds of successful Java developers trained at Code99 IT Academy. Get hands-on experience with industry-standard frameworks and land your dream job in Chennai's thriving IT sector.
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
                    After completing our Full Stack Java training, you'll be qualified for numerous high-paying positions in Chennai's booming software industry.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { role: "Java Developer", salary: "₹3.5L - ₹6L/year" },
                    { role: "Spring Boot Developer", salary: "₹4L - ₹8L/year" },
                    { role: "Full Stack Java Developer", salary: "₹5L - ₹10L/year" },
                    { role: "Backend Java Engineer", salary: "₹4L - ₹7L/year" },
                    { role: "Java Microservices Developer", salary: "₹6L - ₹12L/year" },
                    { role: "Senior Java Architect", salary: "₹10L - ₹20L/year" }
                  ].map((career, idx) => (
                    <Card key={idx} className="border-2 hover:border-primary/50 hover:shadow-hover transition-all text-center">
                      <CardHeader>
                        <CardTitle className="text-xl">{career.role}</CardTitle>
                        <CardDescription className="text-2xl font-bold text-primary">{career.salary}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 prose max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chennai's IT corridor is home to thousands of companies actively hiring Java developers - from tech giants like TCS, Infosys, Wipro, and Cognizant to innovative startups and product companies. The demand for skilled Java full stack developers continues to grow as businesses digitalize their operations and build scalable web applications.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Code99 IT Academy's placement support team maintains strong relationships with HR departments and technical recruiters across Chennai. We conduct regular placement drives, organize campus recruitment events, and provide direct referrals to our hiring partners ensuring maximum job opportunities for our Java training graduates.
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
                      Join Chennai's Best <span className="text-primary">Java Training Program</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Limited seats available - Small batch sizes ensure quality mentorship
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-1">Location</h4>
                            <p className="text-muted-foreground">Code99 IT Academy, Velachery, Chennai</p>
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
                          Ready to become a professional Java developer? Contact us today to reserve your seat in our next batch.
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
                
                <h3 className="text-2xl font-bold mt-8 mb-4">What is Full Stack Java Development?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Java Development encompasses both frontend and backend programming using Java technologies. As a comprehensive Java developer, you'll work with Core Java fundamentals, Spring Framework for backend services, Hibernate for database management, and integrate with modern frontend frameworks to build complete web applications. This versatile skill set makes Java full stack developers highly sought after in Chennai's software industry.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Java Training Course Structure at Code99 IT Academy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Java programming course is structured as a 4-month intensive training program divided into practical modules. The first month covers Core Java fundamentals including object-oriented programming, collections framework, exception handling, and multithreading concepts. Month two focuses on Spring Framework and Spring Boot application development with hands-on REST API projects. The third month delves into Hibernate ORM, MySQL database integration, and advanced backend optimization techniques. The final month combines all skills through full stack project development, deployment training, and comprehensive placement preparation including mock interviews and technical assessments.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Who Should Join Java Training in Chennai?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This Java course is ideal for computer science students, engineering graduates, IT professionals seeking upskilling, career switchers from non-technical backgrounds, and anyone passionate about software development. Whether you're a fresher looking to start your IT career or an experienced developer wanting to master enterprise Java frameworks, Code99's curriculum accommodates all skill levels. Our trainers adjust the pace based on batch composition ensuring everyone from beginners to intermediate programmers benefits equally from the Java training program.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Java Developer Job Market in Chennai 2025</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chennai's IT ecosystem offers tremendous opportunities for qualified Java developers. Major IT parks in Siruseri, Taramani, and Guindy host thousands of companies using Java for enterprise application development. Banks, fintech startups, e-commerce platforms, and SaaS companies actively recruit Java Spring Boot developers. The average starting salary for fresh Java developers in Chennai ranges from ₹3.5 lakhs to ₹6 lakhs annually, with experienced professionals earning ₹10 lakhs and above. Microservices architecture adoption has further increased demand for skilled Java backend engineers making this the perfect time to learn Java programming.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Why Code99 IT Academy for Java Training?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Code99 IT Academy stands out among Chennai's Java training institutes through our unique community-driven approach. Founded by Mr. Sudhakar in April 2024, our academy charges only ₹2,500 monthly - covering essential operational costs without profit margins. This makes quality Java education accessible to students from all economic backgrounds. Our small batch sizes ensure each student receives personalized attention from expert trainers. The offline classroom environment in Velachery facilitates better learning through live coding demonstrations, instant doubt clarification, and peer collaboration. With a 4.9 Google rating and strong placement track record, Code99 has quickly become Chennai's trusted Java training destination.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Placement Assistance for Java Developers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Code99 IT Academy provides comprehensive placement support ensuring students transition smoothly from training to employment. Our placement cell conducts weekly resume building workshops helping students highlight their Java project experience effectively. Mock interview sessions simulate real technical rounds covering data structures, algorithms, Core Java concepts, Spring Boot scenarios, and system design questions. We maintain partnerships with over 50 Chennai-based IT companies actively hiring Java developers. Regular placement drives are organized where students interact directly with hiring managers and technical leads. Our alumni network provides referrals and industry insights further enhancing job search effectiveness. This holistic approach results in successful placements across Chennai's leading software companies.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Learning Resources and Study Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students enrolled in our Java training program receive comprehensive study materials including detailed module-wise documentation, coding practice assignments, project templates, and reference guides. Our trainers share curated resources covering Java best practices, Spring Boot tutorials, Hibernate optimization techniques, and MySQL query patterns. Access to recorded session notes helps students revise concepts post-class. We provide GitHub repositories containing complete project source code allowing students to practice independently. Additional resources include links to official Java documentation, Stack Overflow discussions, technical blogs, and YouTube channels recommended by our expert instructors for continuous learning beyond classroom hours.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Real-Time Projects in Java Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical project experience forms the core of Code99's Java training methodology. Students build multiple real-time applications throughout the course including an e-commerce platform using Spring Boot and React, a banking application with transaction management and security features, a RESTful microservices architecture project demonstrating service communication, and a complete CRUD application integrated with MySQL database. Each project follows industry-standard development practices including Git version control, API documentation, unit testing, and cloud deployment. This hands-on experience not only reinforces Java concepts but also creates an impressive portfolio showcasing your capabilities to potential employers during Chennai job interviews.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Affordable Java Training - ₹2,500 Per Month</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality IT education shouldn't be expensive. Code99 IT Academy's revolutionary pricing model charges only ₹2,500 monthly for complete Full Stack Java training - the most affordable rate among Chennai's reputable institutes. This fee structure covers trainer salaries, classroom rent, and basic infrastructure without any profit markup. Many institutes charge ₹40,000 to ₹60,000 for similar Java courses making IT education inaccessible for talented students from middle-class families. Our mission is democratizing Java training ensuring financial constraints don't prevent deserving candidates from pursuing software development careers. Despite the low fees, we maintain high educational standards through experienced trainers, updated curriculum, practical projects, and dedicated placement support.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Java vs Other Programming Languages</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Python, JavaScript, and .NET have their strengths, Java remains unmatched for enterprise application development. Its robust architecture, strong typing system, excellent memory management, and mature ecosystem make it ideal for building scalable, secure, and high-performance applications. Major banks, financial institutions, and large corporations prefer Java for mission-critical systems due to its stability and backward compatibility. The Spring Boot framework has modernized Java development making it as productive as newer languages while retaining enterprise-grade capabilities. Chennai's IT sector particularly values Java skills as many established companies and government projects use Java extensively, ensuring long-term career stability for Java developers compared to trendy but unstable technologies.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">How to Get Started with Java Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Starting your Java learning journey at Code99 IT Academy is simple. First, call us at +91 6374510754 or visit our Velachery center to understand the course structure and batch timings. Our counselors will assess your current programming knowledge and suggest the appropriate starting point. Complete the enrollment formalities and pay the first month's fee of ₹2,500. Receive your welcome kit containing course syllabus, study materials, and access credentials. Attend the orientation session where trainers introduce Java fundamentals and set up your development environment. Join the student WhatsApp group for announcements and peer discussions. Begin your exciting 4-month journey mastering Java programming with Code99's expert guidance, practical projects, and unwavering placement support leading to your dream software developer job in Chennai.
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