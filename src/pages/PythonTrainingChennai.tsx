import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, TrendingUp, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CSSParticles from '@/components/CSSParticles';

const PythonTrainingChennai = () => {
  return (
    <>
      <Helmet>
        <title>Python Training Institute in Chennai 2025 | Code99 IT Academy Velachery - Best Python Course</title>
        <meta name="description" content="Join Code99 IT Academy - Premier Python Training Institute in Chennai 2025. Master Python programming, Django, Flask, Data Science, Machine Learning with 100% practical training. Only ₹2,500/month. Expert mentors, mock interviews, live projects. 4.9⭐ rated. Call +91 6374510754" />
        <meta name="keywords" content="python training institute chennai 2025, python course chennai velachery, best python training chennai, python programming classes chennai, django training chennai, flask course chennai, python certification training chennai, python developer course chennai, data science python chennai, machine learning python chennai, python placement training chennai, python coaching center chennai, learn python programming chennai, python full stack training chennai, software training institute chennai, IT training velachery chennai, affordable python course chennai, practical python training chennai" />
        <link rel="canonical" href="https://code99itacademy.com/python-training-chennai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Python Training Institute in Chennai 2025 | Code99 IT Academy Velachery" />
        <meta property="og:description" content="Master Python at Chennai's top-rated training institute. 100% practical training, expert mentors, placement support. Only ₹2,500/month at Velachery." />
        <meta property="og:url" content="https://code99itacademy.com/python-training-chennai" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Python Training Institute in Chennai 2025" />
        <meta name="twitter:description" content="Top Python training in Chennai Velachery. 4-month practical course with placement support. Affordable fees at ₹2,500/month." />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Python Training Course in Chennai 2025",
            "description": "Comprehensive Python programming training covering Core Python, Django, Flask, Data Science, Machine Learning with 100% practical training and placement support in Chennai.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20" style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />
        <CSSParticles />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-base px-6 py-2" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              4.9 Rating • 150+ Students Placed • Chennai's #1 Python Institute
            </Badge>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  Python Training Institute
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
                in Chennai 2025 - Velachery
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full blur-sm" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master Python Programming, Django, Flask, Data Science & AI/ML with <span className="text-primary font-semibold">100% Practical Training</span> at Code99 IT Academy
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

      {/* Why Learn Python */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Chennai Python Industry Trends 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Learn Python Programming in Chennai?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Python is the #1 programming language in 2025. From <span className="text-primary font-semibold">AI/ML startups in OMR to automation teams at TCS, Infosys, Cognizant</span>, Python developers are in massive demand across Chennai. Learn Python at Code99 IT Academy Velachery and future-proof your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Laptop className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Versatile & Easy to Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Python's simple, readable syntax makes it perfect for beginners in Chennai. Build web apps with Django, automate tasks, analyze data, create AI models—all with one language. Code99 Velachery teaches Python from zero to hero with hands-on projects that Chennai employers value.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Database className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Data Science & AI/ML Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai's analytics teams at banks (ICICI, Axis), consulting firms (EY, Deloitte), and tech companies use Python for data analysis and machine learning. Python developers with pandas, NumPy, scikit-learn skills earn ₹5-10L as freshers. Master these tools at Code99 with real Chennai datasets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Code className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Web Development with Django</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Build powerful web applications using Django framework—Instagram, YouTube, Spotify use it. Chennai startups and agencies prefer Django for rapid development. Learn MVC architecture, ORM, authentication, REST APIs at Code99. Deploy production-ready apps to impress Chennai recruiters.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Automation & Scripting Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai IT service companies need Python for test automation (Selenium), DevOps scripts, data scraping, and task automation. Even non-developers use Python to automate Excel, generate reports, and process files. Code99's practical training covers real automation scenarios from Chennai companies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>Thriving Python Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai Python User Group, PyData meetups at IIT Madras, workshops across the city—join a vibrant community. Code99 students network with Chennai developers, attend tech events, and collaborate on open-source projects. Build connections that accelerate your career.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle>High Salaries & Career Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Python developers in Chennai start at ₹3.5-6L as freshers, reach ₹15L+ as seniors. Companies in OMR, Siruseri, Guindy actively hire. Code99's 100% placement support connects you to Chennai's top Python employers—from Zoho to global MNCs.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <GraduationCap className="w-4 h-4 mr-2" />
                Complete Python Syllabus 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                From Python Basics to Advanced Applications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-green-500 mb-3" />
                  <CardTitle className="text-2xl">Core Python Programming</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Python Fundamentals:</span> Variables, data types, operators, control flow, loops, functions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Data Structures:</span> Lists, tuples, dictionaries, sets, comprehensions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">OOP Concepts:</span> Classes, objects, inheritance, polymorphism, encapsulation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">File Handling & Exception Handling:</span> Read/write files, error management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-green-500 mb-3" />
                  <CardTitle className="text-2xl">Web Development - Django & Flask</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Django Framework:</span> MVC architecture, models, views, templates, ORM, forms</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Flask Microframework:</span> Routing, Jinja templates, REST API development</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Database Integration:</span> SQLite, PostgreSQL, MySQL with Python</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Authentication & Security:</span> User login, sessions, JWT, security best practices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-green-500 mb-3" />
                  <CardTitle className="text-2xl">Data Science & Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">NumPy & Pandas:</span> Array operations, data manipulation, data cleaning</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Data Visualization:</span> Matplotlib, Seaborn, Plotly for charts and graphs</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Machine Learning Basics:</span> scikit-learn, regression, classification, clustering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-green-500 mb-3" />
                  <CardTitle className="text-2xl">Automation & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Web Scraping:</span> BeautifulSoup, Scrapy for data extraction</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Test Automation:</span> Selenium WebDriver for browser automation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Version Control:</span> Git, GitHub for project collaboration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Python Developer Career in Chennai
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Code99 IT Academy Velachery and master Python programming in just 4 months
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

export default PythonTrainingChennai;
