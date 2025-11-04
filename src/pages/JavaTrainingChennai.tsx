import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, TrendingUp, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CSSParticles from '@/components/CSSParticles';

const JavaTrainingChennai = () => {
  return (
    <>
      <Helmet>
        <title>Java Training Institute in Chennai | Code99 IT Academy Velachery - 100% Placement Support</title>
        <meta name="description" content="Join Code99 IT Academy - Premier Java Training Institute in Chennai, Velachery. Learn Core Java, Advanced Java, Spring Boot, Hibernate with 100% practical training. Only ₹2,500/month. Expert mentors, mock interviews, live projects. 4.9⭐ rated. Call +91 6374510754" />
        <meta name="keywords" content="java training institute chennai, java course chennai velachery, best java training chennai, java programming classes chennai, core java advanced java chennai, java certification training chennai, java developer course chennai, spring boot training chennai, hibernate training chennai, java placement training chennai, java coaching center chennai, learn java programming chennai, java full stack training chennai, software training institute chennai, IT training velachery chennai, affordable java course chennai, practical java training chennai, java institute near me chennai" />
        <link rel="canonical" href="https://code99itacademy.com/java-training-chennai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Java Training Institute in Chennai | Code99 IT Academy Velachery" />
        <meta property="og:description" content="Master Java at Chennai's top-rated training institute. 100% practical training, expert mentors, placement support. Only ₹2,500/month at Velachery." />
        <meta property="og:url" content="https://code99itacademy.com/java-training-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Code99 IT Academy" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Java Training Institute in Chennai | Code99 IT Academy" />
        <meta name="twitter:description" content="Top Java training in Chennai Velachery. 4-month practical course with placement support. Affordable fees at ₹2,500/month." />

        {/* Schema Markup for Course */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Java Training Course in Chennai",
            "description": "Comprehensive Java programming training covering Core Java, Advanced Java, Spring Boot, Hibernate, JSP, Servlets with 100% practical training and placement support in Chennai.",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Code99 IT Academy",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Velachery",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600042",
                "addressCountry": "IN"
              },
              "telephone": "+91-6374510754",
              "email": "info@code99itacademy.com",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            },
            "offers": {
              "@type": "Offer",
              "price": "2500",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "2500",
                "priceCurrency": "INR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitText": "MONTH"
                }
              }
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "onsite",
              "duration": "P4M",
              "location": {
                "@type": "Place",
                "name": "Code99 IT Academy",
                "address": "Velachery, Chennai"
              }
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://code99itacademy.com/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Java Training Chennai",
              "item": "https://code99itacademy.com/java-training-chennai"
            }]
          })}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Animated Glossy Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }} />
        
        {/* Glossy overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />
        
        {/* Animated particles */}
        <CSSParticles />
        
        {/* Glossy shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='currentColor' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            {/* Top badge */}
            <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-base px-6 py-2" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              4.9 Rating • 150+ Students Placed • Chennai's #1 Java Institute
            </Badge>
            
            {/* Main heading with glossy effect */}
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  Java Training Institute
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
                in Chennai - Velachery
              </h2>
              {/* Glossy underline effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-sm" />
            </div>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master Core Java, Advanced Java, Spring Boot & Hibernate with <span className="text-primary font-semibold">100% Practical Training</span> at Code99 IT Academy
            </p>
            
            {/* Key highlights */}
            <div className="flex flex-wrap gap-6 justify-center items-center py-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <IndianRupee className="w-5 h-5 text-primary" />
                <span className="font-semibold">₹2,500/Month Only</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold">4 Months Duration</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold">100% Placement Support</span>
              </div>
            </div>
            
            {/* CTA buttons with glossy effect */}
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" asChild className="hover-scale shadow-lg shadow-primary/50 text-lg px-8 py-6">
                <a href="tel:+916374510754">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 6374510754
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-scale bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-lg px-8 py-6">
                <a href="https://wa.me/916374510754" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  WhatsApp Enquiry
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-scale bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-lg px-8 py-6">
                <Link to="/#contact">
                  <Target className="w-5 h-5 mr-2" />
                  Enroll Now
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap gap-8 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Founded April 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Near Phoenix Mall, Velachery</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Weekday Classes Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Java in Chennai - SEO Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Chennai IT Industry Insights
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Learn Java Programming in Chennai?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Java powers Chennai's booming IT ecosystem. From <span className="text-primary font-semibold">TCS, Infosys, Cognizant, and HCL</span> to fast-growing startups in <span className="text-primary font-semibold">OMR, Siruseri, and Tidel Park</span>, Java developers are always in demand. Master Java at Code99 IT Academy Velachery and unlock career opportunities across Chennai's tech landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>High Demand in Chennai IT Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai hosts 1000+ IT companies including TCS, Infosys, Cognizant, Wipro, HCL, LTI, Zoho, and Freshworks. Java developers earn ₹3.5L - ₹8L annually for freshers in Chennai. OMR and Siruseri IT parks alone employ 50,000+ Java professionals. Learn Java in Velachery and tap into this massive job market.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <Code className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Platform-Independent Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Java's "Write Once, Run Anywhere" principle makes it ideal for Chennai's diverse IT projects. From banking apps (ICICI, Axis Bank Chennai offices) to e-commerce platforms and Android development, Java powers critical applications. Our Chennai-based training ensures you master Java fundamentals and advanced concepts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Strong Career Growth Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Java developers in Chennai progress from Junior to Senior roles within 3-5 years. Companies in Anna Nagar, Porur, and Guindy tech hubs seek skilled Java programmers. Code99 IT Academy's placement support connects you directly with Chennai recruiters. Start as a Java trainee and grow into architect roles.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Vibrant Chennai Developer Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai's Java user groups, meetups at IIT Madras, and tech events create networking opportunities. Join Code99's Velachery campus and connect with Chennai's developer ecosystem. Our students collaborate, share knowledge, and build projects that impress Chennai employers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <Laptop className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Enterprise & Startup Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    From Fortune 500 giants in Tidel Park to bootstrapped startups in Nungambakkam, Java frameworks like Spring Boot and Hibernate dominate Chennai. Our practical Java training covers real Chennai company tech stacks. Build enterprise-grade applications during your 4-month course.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Comprehensive Learning Ecosystem</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Java's vast libraries, frameworks, and tools are taught hands-on at Code99 Velachery. From core concepts to Spring MVC, JSP, Servlets, JDBC, and Hibernate—gain skills Chennai employers demand. Our trainers have worked in Chennai IT firms and know exactly what recruiters look for.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Java Curriculum - SEO Optimized */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge variant="outline" className="mb-4">
                <Code className="w-4 h-4 mr-2" />
                Industry-Aligned Syllabus
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Java Training Curriculum in Chennai
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our <span className="text-primary font-semibold">4-month Java course</span> covers everything from <span className="text-primary font-semibold">Core Java basics to Advanced Java frameworks</span> used by Chennai IT companies. Learn Spring Boot, Hibernate, JSP, Servlets, JDBC, and build real-world projects that get you hired at top Chennai firms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    Core Java Fundamentals
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Build a rock-solid Java foundation with Chennai's best practical training
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Java Syntax & Data Types:</strong> Variables, operators, control structures, primitive and reference types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>OOP Concepts:</strong> Classes, objects, inheritance, polymorphism, encapsulation, abstraction with real Chennai project examples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Exception Handling:</strong> Try-catch blocks, custom exceptions, checked vs unchecked exceptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Collections Framework:</strong> ArrayList, HashMap, LinkedList, TreeSet—master data structures Chennai companies use</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Multithreading & Concurrency:</strong> Thread lifecycle, synchronization, executor framework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>File I/O & Streams:</strong> Reading/writing files, serialization, Java 8 Stream API</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    Advanced Java & Enterprise Frameworks
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Master enterprise Java technologies used in Chennai IT giants
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>JDBC & Database:</strong> MySQL, PostgreSQL connectivity, prepared statements, transactions used by Chennai banks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>JSP & Servlets:</strong> Web application development, session management, filters, listeners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Spring Framework:</strong> Dependency injection, Spring Boot, auto-configuration, Spring Security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Hibernate ORM:</strong> Object-relational mapping, HQL, caching strategies, relationships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>RESTful APIs:</strong> Build scalable APIs with Spring Boot—exactly what Zoho and Freshworks use</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Microservices Architecture:</strong> Design distributed systems for Chennai's modern tech stack</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Laptop className="w-6 h-6 text-primary" />
                    </div>
                    Web Technologies & Frontend Integration
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Become a full-stack Java developer in Chennai
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>HTML5, CSS3, JavaScript:</strong> Frontend essentials for full-stack Java developers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>MVC Architecture:</strong> Model-View-Controller pattern in Spring MVC applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Thymeleaf Templates:</strong> Server-side rendering with Spring Boot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>AJAX & JSON:</strong> Asynchronous web requests, REST API consumption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Bootstrap & Responsive Design:</strong> Create mobile-friendly Java web apps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    Tools, Testing & Deployment
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Industry tools every Chennai Java developer must know
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Git & GitHub:</strong> Version control, branching, pull requests—Chennai team collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Maven & Gradle:</strong> Build automation, dependency management, project structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Eclipse & IntelliJ IDEA:</strong> Professional IDEs used in Chennai software companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>JUnit & Mockito:</strong> Unit testing, test-driven development (TDD)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Apache Tomcat & Deployment:</strong> Deploy Java apps, understand server configuration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>AWS Basics:</strong> Cloud deployment for Chennai enterprise applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Code99 Unique Methodology */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Code99's Unique Approach
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Code99 is Best Java Training Institute in Chennai
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Founded in April 2024 by <span className="text-primary font-semibold">Mr. Sudhakar</span>, Code99 IT Academy revolutionizes Java training in Chennai with <span className="text-primary font-semibold">100% practical learning</span>, no online classes, and affordable ₹2,500/month fees. Located in Velachery near Phoenix Mall, we're easily accessible from Adyar, Guindy, Tambaram, and Chrompet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>100% Practical, No Theory-Only Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Every Java concept is taught through live coding sessions. Our Velachery campus provides dedicated workstations where Chennai students practice real-time coding. No PowerPoint slides—just pure hands-on Java programming from day one.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <IndianRupee className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Most Affordable Java Course - ₹2,500/Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    While other Chennai institutes charge ₹30,000-₹50,000, Code99 offers premium Java training at just ₹2,500/month. This covers only electricity, rent, and trainer salaries—making quality IT education accessible to every Chennai student.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Offline Classes Only - No Online Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Face-to-face mentorship ensures every Chennai student gets personalized attention. Doubt clarification happens instantly. Our Velachery center offers the best learning environment for mastering complex Java frameworks like Spring Boot and Hibernate.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <GraduationCap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Expert Trainers from Chennai IT Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Our Java trainers have worked at TCS, Cognizant, and Chennai startups. They teach real-world Java development practices, share interview tips, and guide students through Chennai's competitive IT job market with insider knowledge.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>100% Placement Assistance & Mock Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Resume building, mock technical interviews, HR round preparation—Code99 prepares Chennai students for every stage. We connect directly with recruiters in OMR, Siruseri, and Tidel Park for faster job placements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Fun Fridays & Student Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Learning Java shouldn't be boring! Every Friday includes games, quizzes, and team activities. Build friendships with fellow Chennai developers, collaborate on projects, and create a support network for your IT career journey.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities in Chennai */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge variant="outline" className="mb-4">
                <Briefcase className="w-4 h-4 mr-2" />
                Career Pathways
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Java Career Opportunities in Chennai IT Industry
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Chennai's IT sector offers diverse Java career paths. From backend developer roles at <span className="text-primary font-semibold">TCS and Infosys</span> to full-stack positions at <span className="text-primary font-semibold">Zoho and Freshworks</span>, Java skills open multiple doors. Our training prepares you for all these roles.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Top Java Job Roles in Chennai</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Java Backend Developer:</strong> Build server-side logic for Chennai fintech and e-commerce companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Full Stack Java Developer:</strong> Handle frontend and backend—high demand in Chennai startups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Spring Boot Developer:</strong> Microservices architecture roles at Zoho, Freshworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Java Software Engineer:</strong> Core programming roles at TCS, Cognizant, Infosys Chennai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Java Architect:</strong> Senior roles designing Chennai enterprise solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Top Hiring Companies in Chennai</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Service Giants:</strong> TCS, Infosys, Cognizant, Wipro, HCL, LTI in OMR and Siruseri</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Product Companies:</strong> Zoho (Estancia IT Park), Freshworks, PayPal Chennai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Banking & Finance:</strong> ICICI Tech, Axis Bank IT, HDFC Tech in Chennai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Startups:</strong> Nungambakkam, T-Nagar fintech and SaaS startups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>MNCs:</strong> Amazon Chennai, Oracle, Accenture in Tidel Park</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary/10 rounded-2xl border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Salary Expectations for Java Developers in Chennai</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">₹3.5-5L</div>
                    <div className="text-sm text-muted-foreground">Fresher Java Developer</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">₹6-10L</div>
                    <div className="text-sm text-muted-foreground">2-4 Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">₹12-20L+</div>
                    <div className="text-sm text-muted-foreground">Senior/Architect (5+ years)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section id="enroll" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
              <Star className="w-5 h-5 mr-2 fill-yellow-400 text-yellow-400" />
              Limited Seats - Enroll Today!
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Java Career in Chennai
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join Code99 IT Academy Velachery and become a job-ready Java developer in just 4 months. Small batches, personalized mentorship, and guaranteed placement support.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary mb-2">₹2,500</div>
                <div className="text-sm text-muted-foreground">Per Month</div>
              </div>
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary mb-2">4 Months</div>
                <div className="text-sm text-muted-foreground">Course Duration</div>
              </div>
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 min-w-[200px]">
                <div className="text-4xl font-bold text-primary mb-2">Weekdays</div>
                <div className="text-sm text-muted-foreground">Classes Only</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <a href="tel:+916374510754">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 6374510754
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6" asChild>
                <a href="tel:+918111078282">
                  <Phone className="w-5 h-5 mr-2" />
                  Alt: +91 8111078282
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@code99itacademy.com" className="hover:text-primary transition-colors">info@code99itacademy.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Velachery, Near Phoenix Mall, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JavaTrainingChennai;
