import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Palette, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, TrendingUp, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CSSParticles from '@/components/CSSParticles';

const UiUxTrainingChennai = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design Training Institute in Chennai 2025 | Code99 IT Academy Velachery</title>
        <meta name="description" content="Join Code99 IT Academy - Premier UI/UX Design Training Institute in Chennai 2025. Master Figma, Adobe XD, Wireframing, Prototyping, User Research with 100% practical training. Only ₹2,500/month. Expert mentors, mock interviews, portfolio building. 4.9⭐ rated. Call +91 6374510754" />
        <meta name="keywords" content="ui ux design training chennai 2025, ui ux course chennai velachery, best ui ux training chennai, figma training chennai, adobe xd course chennai, user experience design chennai, ui ux certification training chennai, ui ux designer course chennai, product design chennai, interaction design chennai, ui ux placement training chennai, ui ux coaching center chennai, learn ui ux design chennai, design training institute chennai, IT training velachery chennai, affordable ui ux course chennai, practical design training chennai" />
        <link rel="canonical" href="https://code99itacademy.com/ui-ux-training-chennai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="UI/UX Design Training Institute in Chennai 2025 | Code99 IT Academy" />
        <meta property="og:description" content="Master UI/UX Design at Chennai's top-rated training institute. 100% practical training, expert mentors, placement support. Only ₹2,500/month at Velachery." />
        <meta property="og:url" content="https://code99itacademy.com/ui-ux-training-chennai" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design Training in Chennai 2025" />
        <meta name="twitter:description" content="Top UI/UX Design training in Chennai Velachery. 4-month practical course with placement support. Affordable fees at ₹2,500/month." />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "UI/UX Design Training Course in Chennai 2025",
            "description": "Comprehensive UI/UX Design training covering Figma, Adobe XD, Wireframing, Prototyping, User Research, Design Systems with 100% practical training and placement support in Chennai.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-fuchsia-500/20" style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />
        <CSSParticles />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-base px-6 py-2" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              4.9 Rating • 150+ Students Placed • Chennai's #1 UI/UX Institute
            </Badge>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  UI/UX Design Training
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
                Institute in Chennai 2025
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full blur-sm" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master Figma, Adobe XD, User Research, Wireframing & Prototyping with <span className="text-primary font-semibold">100% Practical Training</span> at Code99 IT Academy Velachery
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

      {/* Why Learn UI/UX Design */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Chennai Design Industry 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Learn UI/UX Design in Chennai?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Every digital product needs great design. From <span className="text-primary font-semibold">Zoho, Freshworks, product startups</span> to e-commerce, fintech, and SaaS companies in <span className="text-primary font-semibold">OMR, Guindy, and Nungambakkam</span>, UI/UX Designers shape user experiences. Master design at Code99 IT Academy Velachery and create products users love.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Palette className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Creativity Meets Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    UI/UX Design is perfect for creative minds who love solving problems. No heavy coding—just visual thinking, user empathy, and design tools. Chennai's product companies need designers who understand both aesthetics and usability. Code99 trains you in industry-standard tools like Figma and Adobe XD used by Chennai teams.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>High Demand, Great Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    UI/UX Designers in Chennai earn ₹4-8L as freshers, ₹15L+ as seniors. Zoho, Freshworks, Chargebee, and startups across OMR actively hire. Freelance designers charge ₹500-2000/hour for app redesigns and website projects. Code99's placement cell connects you to Chennai's top design opportunities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Lightbulb className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Shape User Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Design mobile apps, websites, SaaS products that millions use. Understand user psychology, conduct research, create wireframes, test prototypes. Chennai companies value designers who think beyond pixels—learn user-centered design principles at Code99 Velachery with hands-on projects.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Work With Product Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Collaborate with developers, product managers, and stakeholders. UI/UX designers bridge the gap between business goals and user needs. Chennai's agile teams seek designers skilled in communication and teamwork. Code99 teaches collaboration through group projects mirroring real Chennai work environments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Laptop className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Remote & Freelance Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Design from anywhere—Velachery, Anna Nagar, or home. Many Chennai designers work remotely for global clients. Build a strong portfolio at Code99, showcase on Behance/Dribbble, and attract international projects. Freelance opportunities in Chennai are limitless for skilled UI/UX designers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-pink-500 mb-4" />
                  <CardTitle>Future-Proof Career Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    As Chennai's digital economy grows, every business needs UI/UX designers. From startup MVPs to enterprise app redesigns—design skills stay relevant. Grow from Junior Designer to Lead Designer to Creative Director. Code99 prepares you for long-term success in Chennai's design industry.
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
                Industry-Aligned Design Syllabus 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete UI/UX Design Curriculum
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-pink-500 mb-3" />
                  <CardTitle className="text-2xl">Design Fundamentals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Design Principles:</span> Color theory, typography, layout, visual hierarchy, spacing</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">User Research:</span> User personas, journey mapping, empathy maps, interviews</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Information Architecture:</span> Sitemaps, user flows, navigation design</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Usability Testing:</span> A/B testing, user feedback, iteration strategies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-pink-500 mb-3" />
                  <CardTitle className="text-2xl">Design Tools Mastery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Figma:</span> Interface design, components, auto-layout, design systems, collaboration</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Adobe XD:</span> Prototyping, transitions, animations, design specs</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Adobe Photoshop:</span> Image editing, mockups, visual assets creation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Adobe Illustrator:</span> Vector graphics, icons, logos, illustrations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-pink-500 mb-3" />
                  <CardTitle className="text-2xl">UI Design & Prototyping</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Wireframing:</span> Low-fidelity to high-fidelity wireframes for mobile and web</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Interactive Prototypes:</span> Clickable prototypes, micro-interactions, animations</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Responsive Design:</span> Mobile-first design, tablet, desktop layouts</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Design Systems:</span> Component libraries, style guides, documentation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-pink-500 mb-3" />
                  <CardTitle className="text-2xl">Portfolio & Career</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Portfolio Building:</span> Case studies, design process documentation, Behance/Dribbble</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Real Projects:</span> Mobile app design, e-commerce website, SaaS dashboard</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Design Handoff:</span> Developer collaboration, design specs, asset export</p>
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
            Become a Professional UI/UX Designer in Chennai
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Code99 IT Academy Velachery and create stunning user experiences in just 4 months
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

export default UiUxTrainingChennai;
