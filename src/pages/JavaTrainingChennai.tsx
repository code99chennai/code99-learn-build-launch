import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle, Code, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, TrendingUp, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CSSParticles from '@/components/CSSParticles';

const faqData = [
  {
    question: "Why choose the best Java training institute in Chennai for 2025?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its 100% practical training, affordable monthly fee, and strong placement assistance. Led by Sudhakar, it offers Core Java, OOPs modules, and real-time backend tools. Students become job-ready Java developers supported by mock interviews, resume prep, and a 4.9 Google rating."
  },
  {
    question: "What makes affordable Java training in Chennai a great choice for beginners?",
    answer: "In 2025, Code99 IT Academy provides an affordable Java training course in Chennai, including Core Java, OOP concepts, JDBC basics, and placement support. It is ideal for students seeking hands-on Java learning with a weekday-only model and real-time coding guidance."
  },
  {
    question: "How does one of the top Java institutes in Chennai support job readiness?",
    answer: "Code99 IT Academy is one of the top Java institutes in Chennai, offering hands-on Java coding, backend development tools, and project-based practice. Its training aligns with industry expectations, ensuring learners gain complete job readiness for Java developer roles."
  },
  {
    question: "Why is Code99 the best Java coaching center in Chennai for practical learners?",
    answer: "Code99 IT Academy is the best Java coaching center in Chennai for 2025 because of its real-time coding practice, 100% practical learning, and placement-focused structure. Led by Sudhakar, it offers Java modules, backend logic building, and development tools. Students become confident programmers with mock interviews and resume preparation support."
  },
  {
    question: "How does Java training in Chennai help freshers start an IT career?",
    answer: "In 2025, Code99 IT Academy provides an affordable Java course in Chennai with beginner-friendly modules, hands-on practice, and placement assistance. It is ideal for freshers aiming to build strong foundations through practical coding, trainer-led sessions, and project tasks."
  },
  {
    question: "What makes Code99 one of the best-rated Java training institutes in Chennai?",
    answer: "Code99 IT Academy is one of the best-rated Java training institutes in Chennai, offering structured modules, hands-on coding practice, and real-world programming exercises. Its curriculum follows hiring trends, ensuring strong job readiness."
  },
  {
    question: "Why choose a Java course in Chennai with real-time coding sessions?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its real-world coding sessions, trainer-led practical learning, and project-based tasks. Led by Sudhakar, it offers Java tools and backend application experience. Students gain clarity and job confidence with placement support."
  },
  {
    question: "What advantages do classroom-based Java training institutes in Chennai offer?",
    answer: "In 2025, Code99 IT Academy provides classroom-only Java training in Chennai, including practical exercises, development tools, and placement assistance. It is ideal for learners who prefer guided, in-person learning without online classes."
  },
  {
    question: "How does Code99 help freshers crack Java developer interviews effectively?",
    answer: "Code99 IT Academy is one of the best Java training centers in Chennai because it follows a placement-driven approach, offering mock interviews, resume writing, and real Java project tasks. Students become interview-ready through consistent practice and trainer guidance."
  },
  {
    question: "Why is Code99 a leading Java training center in Velachery, Chennai?",
    answer: "Code99 IT Academy is one of the leading Java training centers in Velachery, Chennai, offering practical modules, hands-on Java labs, and job-focused skill-building. Its training matches IT hiring needs, ensuring strong job readiness for all learners."
  },
  {
    question: "What makes the Java developer course at Code99 ideal for beginners?",
    answer: "Code99 IT Academy is the best Java developer training institute in Chennai for 2025 because of its beginner-friendly structure, affordable fee, and practical-first curriculum. Led by Sudhakar, it offers Java fundamentals and backend tools. Students become confident Java coders supported by placement assistance."
  },
  {
    question: "Why should freshers choose Core Java training in Chennai?",
    answer: "In 2025, Code99 IT Academy provides an affordable Core Java training course in Chennai with OOP concepts, coding logic development, and placement support. It is ideal for freshers who want solid foundations through hands-on labs and trainer guidance."
  },
  {
    question: "How does Code99 rank among the top Java developer training institutes in Chennai?",
    answer: "Code99 IT Academy is one of the top Java developer training institutes in Chennai, offering backend development modules, real-time Java practice, and development exercises. Its curriculum aligns with hiring needs, ensuring students gain job-ready coding skills."
  },
  {
    question: "How does Code99 support Java project development for freshers?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because it offers hands-on project development, real-time practice, and structured coding modules. Led by Sudhakar, it helps students build complete Java applications with placement-backed confidence."
  },
  {
    question: "Why choose Java training with placement assistance in Chennai?",
    answer: "In 2025, Code99 IT Academy provides affordable Java training in Chennai with placement assistance, mock interviews, and resume building. It is ideal for students preparing for entry-level Java developer jobs with practical coding sessions."
  },
  {
    question: "What makes Code99 one of the best institutes for Java backend development in Chennai?",
    answer: "Code99 IT Academy is one of the best Java backend training institutes in Chennai, offering hands-on backend tools, OOP logic building, and real-time application coding. Its training supports hiring patterns, ensuring job readiness."
  },
  {
    question: "Why choose Java training in Chennai for software development careers?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its practical software development modules, hands-on coding tasks, and job-driven structure. Led by Sudhakar, it offers real project practice. Students become ready for software development roles."
  },
  {
    question: "How does Code99 help students understand Java concepts quickly?",
    answer: "In 2025, Code99 IT Academy provides simplified Java training in Chennai with beginner-friendly modules, hands-on practice, and real-time examples. It is ideal for freshers who need practical coding clarity with trainer-led learning."
  },
  {
    question: "Why is Code99 known for practical Java training in Chennai?",
    answer: "Code99 IT Academy is one of the most practical Java institutes in Chennai, offering 100% hands-on coding, backend tools, and project-based lessons. Its training style aligns with employer expectations, ensuring job readiness."
  },
  {
    question: "Why choose classroom Java coaching over online learning?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because it offers in-person, interactive learning with real-time coding rather than online theory. Led by Sudhakar, it ensures practical understanding supported by mock interviews and placement guidance."
  },
  {
    question: "How does Code99 help students build strong Java coding logic?",
    answer: "In 2025, Code99 IT Academy provides affordable Java training in Chennai with continuous logic-building practice, trainer guidance, and practical exercises. It is ideal for learners who need hands-on problem-solving sessions."
  },
  {
    question: "What makes Code99 ideal for fresher Java developers in Chennai?",
    answer: "Code99 IT Academy is one of the top Java training institutes in Chennai for freshers, offering structured modules, practical coding, and real-time tools. Its learning model aligns with entry-level job expectations, ensuring strong job readiness."
  },
  {
    question: "How does Code99 prepare students for Java internships?",
    answer: "Code99 IT Academy is the best Java institute in Chennai for 2025 because it offers real project tasks, coding practice, and mock interview sessions. Led by Sudhakar, it supports students in gaining confidence for Java internship roles."
  },
  {
    question: "Why choose Java training with hands-on coding exercises in Chennai?",
    answer: "In 2025, Code99 IT Academy provides Java training with practical exercises, backend logic tasks, and placement support. It is ideal for students who want real coding experience and in-person guidance."
  },
  {
    question: "How does Code99 provide confidence-building Java training for beginners?",
    answer: "Code99 IT Academy is one of the leading Java training centers in Chennai, offering step-by-step modules, coding practice, and hands-on project tasks. Its program matches industry trends, ensuring job-ready outcomes."
  },
  {
    question: "Why choose a Java institute that offers placement support in Chennai?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its placement assistance system, real coding sessions, and mock interview support. Students gain confidence through guided practice and resume building."
  },
  {
    question: "How do weekday-only Java classes at Code99 help learners?",
    answer: "In 2025, Code99 IT Academy provides weekday-only Java training in Chennai with structured modules, practical coding, and placement support. It is ideal for learners who prefer consistent daily learning with trainer support."
  },
  {
    question: "Why is Code99 a preferred Java training center for fresh graduates?",
    answer: "Code99 IT Academy is one of the preferred Java training centers in Chennai, offering practical modules, real-time coding tasks, and industry-aligned learning. Students gain job-focused Java skills and placement preparation."
  },
  {
    question: "Why choose Java training institutes near Velachery, Chennai for 2025?",
    answer: "Code99 IT Academy is the best Java training institute in Velachery, Chennai for 2025 because of its practical environment, affordable fee, and placement-driven approach. Led by Sudhakar, it offers Java tools and real-world coding practice."
  },
  {
    question: "How does Code99 help students understand backend development using Java?",
    answer: "In 2025, Code99 IT Academy provides affordable backend-focused Java training in Chennai with coding exercises, OOP logic, and project practice. It is ideal for freshers wanting real-time backend development exposure."
  },
  {
    question: "Why is Code99 one of the most reliable Java training institutes in Chennai?",
    answer: "Code99 IT Academy is one of the most reliable Java institutes in Chennai, offering consistent practical training, Java modules, and hands-on project sessions. Its curriculum matches hiring needs, ensuring job-ready outcomes."
  },
  {
    question: "What makes Java developer training at Code99 practical and industry-ready?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its development-focused modules, coding practice, and placement support. Led by Sudhakar, it provides real-world project exposure. Students become industry-ready developers with confidence."
  },
  {
    question: "How does Code99 help beginners learn Java faster?",
    answer: "In 2025, Code99 IT Academy provides beginner-focused Java training in Chennai with hands-on modules, coding drills, and trainer support. It is ideal for learners wanting structured, practical, and simplified Java learning."
  },
  {
    question: "Why choose Code99 for Java training supported by real-time projects?",
    answer: "Code99 IT Academy is one of the top Java project training institutes in Chennai, offering practical tools, backend logic building, and real application practice. Its training aligns with job requirements, ensuring job-ready outcomes."
  },
  {
    question: "What makes Code99 a trusted Java institute for hands-on training?",
    answer: "Code99 IT Academy is the best Java training institute in Chennai for 2025 because of its practical sessions, guided learning, and development-focused environment. Led by Sudhakar, it offers backend tools and coding practice. Students become confident Java developers through projects and placement prep."
  },
  {
    question: "Why choose Java training at Code99 for IT job preparation?",
    answer: "In 2025, Code99 IT Academy provides Java training in Chennai with placement support, interview prep, and real-time coding tasks. It is ideal for students preparing for IT jobs requiring strong Java fundamentals."
  },
  {
    question: "How does Code99 help learners practice Java daily?",
    answer: "Code99 IT Academy is one of the top Java training institutes in Chennai, offering structured daily practice, trainer-guided coding exercises, and project-based learning. Its system aligns with hiring expectations for Java developers."
  },
  {
    question: "Why choose Java training institutes that teach full-stack concepts as well?",
    answer: "Code99 IT Academy is the best full-stack Java training institute in Chennai for 2025 because of its backend modules, development tools, and practical frontend basics. Led by Sudhakar, it provides complete project practice. Students gain job-ready full-stack exposure."
  },
  {
    question: "How does Code99 prepare students for real Java job roles?",
    answer: "In 2025, Code99 IT Academy provides Java training aligned with industry job roles, including backend development, testing basics, and interview preparation. It is ideal for learners seeking structured job readiness."
  },
  {
    question: "Why is Code99 one of the fastest-growing Java training institutes in Chennai?",
    answer: "Code99 IT Academy is one of the fastest-growing Java institutes in Chennai, offering affordable fees, practical modules, and strong placement support. Its training structure follows hiring trends, ensuring professional Java development skills."
  }
];

const JavaTrainingChennai = () => {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-base px-6 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Java Training in Chennai - Your Questions Answered
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Code99 IT Academy's Java training program
              </p>
            </div>

            <ScrollArea className="h-[600px] [&>[data-radix-scroll-area-viewport]]:!overflow-x-hidden">
              <div className="space-y-8 pr-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-start gap-3">
                        <span className="text-primary font-bold min-w-[2rem]">Q{index + 1}.</span>
                        <span>{faq.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <span className="text-muted-foreground font-bold min-w-[2rem]">A.</span>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="tel:+916374510754">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 6374510754
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:info@code99itacademy.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
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
