import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, TrendingUp, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CSSParticles from '@/components/CSSParticles';

const FullStackWebDevelopmentChennai = () => {
  return (
    <>
      <Helmet>
        <title>Full Stack Web Development Training Institute in Chennai 2025 | Code99 IT Academy Velachery</title>
        <meta name="description" content="Join Code99 IT Academy - Premier Full Stack Web Development Training Institute in Chennai 2025. Master HTML, CSS, JavaScript, React, Node.js, MongoDB with 100% practical training. Only ₹2,500/month. Expert mentors, mock interviews, live projects. 4.9⭐ rated. Call +91 6374510754" />
        <meta name="keywords" content="full stack web development training chennai 2025, full stack developer course chennai, mern stack training chennai, react nodejs training chennai, web development institute chennai, javascript course chennai velachery, frontend backend training chennai, web developer certification chennai, html css javascript chennai, mongodb training chennai, full stack placement training chennai, web development coaching center chennai, learn web development chennai, software training institute chennai, IT training velachery chennai, affordable web development course chennai, practical coding training chennai" />
        <link rel="canonical" href="https://code99itacademy.com/full-stack-web-development-chennai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Full Stack Web Development Training Institute in Chennai 2025 | Code99 IT Academy" />
        <meta property="og:description" content="Master Full Stack Web Development at Chennai's top-rated training institute. 100% practical training, expert mentors, placement support. Only ₹2,500/month at Velachery." />
        <meta property="og:url" content="https://code99itacademy.com/full-stack-web-development-chennai" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Code99 IT Academy" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full Stack Web Development Training in Chennai 2025" />
        <meta name="twitter:description" content="Top Full Stack Web Development training in Chennai Velachery. 4-month practical course with placement support. Affordable fees at ₹2,500/month." />

        {/* Schema Markup for Course */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Full Stack Web Development Training Course in Chennai 2025",
            "description": "Comprehensive Full Stack Web Development training covering HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB with 100% practical training and placement support in Chennai.",
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
              "availability": "https://schema.org/InStock"
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
      </Helmet>

      <Navbar />
      
      {/* Animated Glossy Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20" style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />
        <CSSParticles />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-base px-6 py-2" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              4.9 Rating • 150+ Students Placed • Chennai's #1 Full Stack Institute
            </Badge>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  Full Stack Web Development
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
                Training Institute in Chennai 2025
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full blur-sm" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master MERN Stack (MongoDB, Express, React, Node.js) with <span className="text-primary font-semibold">100% Practical Training</span> at Code99 IT Academy Velachery
            </p>
            
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
            
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" asChild className="hover-scale shadow-lg shadow-primary/50 text-lg px-8 py-6">
                <a href="tel:+916374510754">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 6374510754
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-scale bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-lg px-8 py-6">
                <Link to="/#contact">
                  <Target className="w-5 h-5 mr-2" />
                  Enroll Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Full Stack Web Development - SEO Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Chennai Web Development Industry 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Learn Full Stack Web Development in Chennai?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Web development powers Chennai's digital transformation. From <span className="text-primary font-semibold">Zoho, Freshworks, Chargebee</span> to e-commerce giants and startups in <span className="text-primary font-semibold">OMR, Sholinganallur, and Guindy</span>, Full Stack developers are the most sought-after professionals in 2025. Master MERN Stack at Code99 IT Academy Velachery and become job-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Code className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>Massive Demand in Chennai Tech Hubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai's IT corridor—OMR, Siruseri, Tidel Park—hosts 500+ product companies and service giants hiring Full Stack developers. Zoho, Freshworks, Kissflow pay ₹4-9L to freshers skilled in React and Node.js. Code99's Velachery location connects you directly to these opportunities. Companies prefer candidates with hands-on MERN Stack experience.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Laptop className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>One Skill, Full Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Build complete web applications from database to user interface. Learn MongoDB for data, Express & Node.js for backend APIs, and React for modern frontends. Chennai startups value developers who can handle both frontend and backend. Code99 trains you in the exact tech stack used by Chennai companies in 2025.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Award className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>Freelance & Remote Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Full Stack developers in Chennai earn ₹500-2000/hour freelancing for global clients. Build e-commerce sites, SaaS platforms, and web apps while working from Velachery or Anna Nagar. Our practical training includes real client projects and portfolio building—essential for Chennai's growing freelance market.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>Startup & Product Culture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai's thriving startup ecosystem—especially in OMR and Nungambakkam—relies on Full Stack developers to build MVPs and scale products. Companies like Zoho, Freshworks, PayTM Chennai office actively recruit MERN Stack developers. Join Code99 and tap into this network through our placement cell.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>Modern JavaScript Ecosystem</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    JavaScript dominates web development in 2025. Learn ES6+, async programming, RESTful APIs, and modern frameworks at Code99 Velachery. Chennai companies switching from legacy tech to modern stacks need developers who know React hooks, Redux, JWT authentication, and microservices architecture.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle>Career Flexibility & Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Start as Junior Full Stack Developer in Chennai (₹4L), grow to Senior role (₹12L+) within 3 years. Companies in Porur, Guindy, and OMR offer rapid career progression for skilled developers. Code99's 100% placement support ensures you start your career immediately after completion.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                Industry-Aligned Syllabus 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete MERN Stack Curriculum
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Master the most in-demand tech stack in Chennai's IT industry. Our 4-month curriculum covers everything from HTML basics to deploying production-ready React applications—exactly what Chennai companies need in 2025.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-blue-500 mb-3" />
                  <CardTitle className="text-2xl">Frontend Development Mastery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground mb-4">Build stunning, responsive user interfaces that Chennai companies love.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">HTML5 & CSS3:</span> Semantic markup, Flexbox, Grid, animations, mobile-first design principles used by Chennai agencies</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">JavaScript ES6+:</span> Variables, functions, arrays, objects, DOM manipulation, async/await, promises, fetch API</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">React.js:</span> Components, props, state, hooks (useState, useEffect, useContext), React Router, Redux, context API</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Tailwind CSS & Bootstrap:</span> Utility-first CSS frameworks preferred by Chennai startups and product companies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-blue-500 mb-3" />
                  <CardTitle className="text-2xl">Backend Development Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground mb-4">Build secure, scalable server-side applications and RESTful APIs.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Node.js:</span> Event loop, modules, npm packages, file system operations, building servers</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Express.js:</span> Routing, middleware, error handling, authentication (JWT), authorization, session management</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">MongoDB:</span> NoSQL database design, CRUD operations, aggregation, indexing, Mongoose ODM</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">REST APIs:</span> Design patterns, HTTP methods, status codes, API security, testing with Postman</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-blue-500 mb-3" />
                  <CardTitle className="text-2xl">Version Control & Deployment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground mb-4">Master professional development workflows used in Chennai IT companies.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Git & GitHub:</span> Version control, branching, merging, pull requests, collaboration workflows</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Deployment:</span> Deploy React apps on Vercel/Netlify, Node.js backends on Heroku/Railway, database on MongoDB Atlas</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">DevOps Basics:</span> Environment variables, CI/CD concepts, Docker basics, cloud platforms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-blue-500 mb-3" />
                  <CardTitle className="text-2xl">Real Projects & Portfolio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground mb-4">Build production-ready applications that impress Chennai employers.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">E-commerce Platform:</span> Shopping cart, payment integration, user authentication, admin panel</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Social Media App:</span> User profiles, posts, comments, likes, real-time notifications</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Portfolio Website:</span> Showcase your skills and projects to Chennai recruiters with a stunning portfolio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <Target className="w-4 h-4 mr-2" />
                100% Practical Approach
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How Code99 Makes You Job-Ready
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Laptop, title: "Live Coding Sessions", desc: "Write code from day one. No boring theory—build real applications in every class at our Velachery center." },
                { icon: Users, title: "Mentorship by Experts", desc: "Learn from developers working in Chennai IT companies. Get insider tips and industry best practices." },
                { icon: Briefcase, title: "Mock Interviews", desc: "Practice with Chennai company interview questions. Get feedback, improve, and crack interviews confidently." },
                { icon: Award, title: "100% Placement Support", desc: "Resume building, portfolio review, company referrals. We connect you directly with hiring managers in Chennai." },
                { icon: Clock, title: "Flexible Timings", desc: "Weekday batches designed for students and working professionals in Chennai. Learn without disrupting your schedule." },
                { icon: Building2, title: "Offline Training Only", desc: "Face-to-face guidance at Velachery campus near Phoenix Mall. No distractions—pure focused learning." },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="text-center hover-scale">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.desc}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Full Stack Developer Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Code99 IT Academy Velachery and become a job-ready Full Stack Web Developer in just 4 months
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <a href="tel:+916374510754">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 6374510754
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 border-white/30 hover:bg-white/20">
              <Link to="/#contact">
                Enroll Now • ₹2,500/Month
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-75">
            📍 Near Phoenix Mall, Velachery • Vijayanagar Bus Stand, Chennai
          </p>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </>
  );
};

export default FullStackWebDevelopmentChennai;
