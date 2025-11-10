import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Users, Award, Briefcase, Calendar, MapPin, Phone, Mail, Star, Clock, IndianRupee, Target, BookOpen, Laptop, Building2, GraduationCap, Sparkles, Search, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CSSParticles from '@/components/CSSParticles';

const DigitalMarketingChennai = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Training Institute in Chennai 2025 | Code99 IT Academy Velachery</title>
        <meta name="description" content="Join Code99 IT Academy - Premier Digital Marketing Training Institute in Chennai 2025. Master SEO, SEM, Social Media Marketing, Google Ads, Analytics with 100% practical training. Only ₹2,500/month. Expert mentors, mock interviews, live campaigns. 4.9⭐ rated. Call +91 6374510754" />
        <meta name="keywords" content="digital marketing training chennai 2025, digital marketing course chennai, SEO training chennai, google ads course chennai velachery, social media marketing chennai, digital marketing institute chennai, content marketing training chennai, digital marketing certification chennai, email marketing chennai, analytics training chennai, digital marketing placement training chennai, digital marketing coaching center chennai, learn digital marketing chennai, affordable digital marketing course chennai, practical digital marketing training chennai" />
        <link rel="canonical" href="https://code99itacademy.com/digital-marketing-chennai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Training Institute in Chennai 2025 | Code99 IT Academy" />
        <meta property="og:description" content="Master Digital Marketing at Chennai's top-rated training institute. 100% practical training, expert mentors, placement support. Only ₹2,500/month at Velachery." />
        <meta property="og:url" content="https://code99itacademy.com/digital-marketing-chennai" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Training in Chennai 2025" />
        <meta name="twitter:description" content="Top Digital Marketing training in Chennai Velachery. 4-month practical course with placement support. Affordable fees at ₹2,500/month." />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Digital Marketing Training Course in Chennai 2025",
            "description": "Comprehensive Digital Marketing training covering SEO, SEM, Social Media Marketing, Google Ads, Email Marketing, Content Marketing, Analytics with 100% practical training and placement support in Chennai.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-600/20" style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite'
        }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />
        <CSSParticles />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
            <Badge className="mb-4 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all text-base px-6 py-2" variant="outline">
              <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
              4.9 Rating • 150+ Students Placed • Chennai's #1 Digital Marketing Institute
            </Badge>
            
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent" style={{
                  backgroundSize: '200% auto',
                  animation: 'gradient-shift 8s ease infinite'
                }}>
                  Digital Marketing
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/90">
                Training Institute in Chennai 2025
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full blur-sm" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master SEO, SEM, Social Media, Google Ads & Analytics with <span className="text-primary font-semibold">100% Practical Training</span> at Code99 IT Academy Velachery
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

      {/* Why Learn Digital Marketing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Chennai Digital Economy 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Learn Digital Marketing in Chennai?
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Chennai businesses are going digital—from <span className="text-primary font-semibold">retail brands to healthcare, real estate, and education</span>. Every company in <span className="text-primary font-semibold">T. Nagar, Anna Nagar, and OMR</span> needs digital marketers to reach customers online. Master Digital Marketing at Code99 IT Academy Velachery and unlock unlimited career opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Search className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Explosive Growth in Chennai</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai's e-commerce, ed-tech, health-tech sectors are booming. Companies pay ₹3-6L to freshers skilled in SEO and Google Ads. From Zoho Marketing to small agencies in Velachery and Anna Nagar—everyone needs digital marketers. Code99 connects you directly to this market with 100% placement support.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Briefcase className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Freelance & Agency Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Run Google Ads campaigns for Chennai restaurants, manage social media for salons in Adyar, or do SEO for real estate firms in OMR. Freelancers earn ₹15,000-50,000/month from home. Code99's practical training includes managing real client campaigns—build your portfolio while learning.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Award className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>No Coding Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Perfect for non-tech students, graduates, housewives, and career changers in Chennai. Learn strategy, creativity, and analytics—no programming needed. Code99 Velachery makes Digital Marketing accessible to everyone with simple, practical teaching methods.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <BarChart className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Data-Driven Decision Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Chennai companies love marketers who understand Google Analytics, conversion tracking, and ROI optimization. Learn to read data, optimize campaigns, and prove results. Code99 teaches tools used by top Chennai agencies—Google Analytics, Search Console, Facebook Ads Manager, SEMrush.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Build Your Own Brand</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Grow Instagram pages, YouTube channels, start blogs, sell products online. Chennai's influencer economy is massive—creators earn lakhs through brand partnerships. Our training includes personal branding strategies, content creation, and monetization tactics.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Building2 className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle>Future-Proof Career</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    As Chennai businesses shift online, demand for digital marketers will only grow. From entry-level executive to Marketing Manager in 3 years—career growth is rapid. Code99's industry connections in Chennai ensure you always stay ahead.
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
                Complete Digital Marketing Syllabus 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Master Every Digital Marketing Channel
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-purple-500 mb-3" />
                  <CardTitle className="text-2xl">SEO & Content Marketing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">On-Page SEO:</span> Keyword research, meta tags, content optimization, internal linking used by Chennai websites</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Off-Page SEO:</span> Link building, guest posting, local SEO for Chennai businesses</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Technical SEO:</span> Site speed, mobile optimization, schema markup, XML sitemaps</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Content Strategy:</span> Blog writing, copywriting, storytelling for Chennai audiences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-purple-500 mb-3" />
                  <CardTitle className="text-2xl">Paid Advertising (SEM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Google Ads:</span> Search ads, display ads, shopping ads, campaign setup and optimization</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Facebook & Instagram Ads:</span> Audience targeting, ad creatives, A/B testing, retargeting</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">YouTube Ads:</span> Video marketing, TrueView ads, bumper ads</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">ROI Tracking:</span> Conversion tracking, attribution models, budget optimization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-purple-500 mb-3" />
                  <CardTitle className="text-2xl">Social Media Marketing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Platform Strategies:</span> Facebook, Instagram, LinkedIn, Twitter marketing for Chennai audiences</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Content Creation:</span> Graphics, videos, reels, stories, carousel posts using Canva</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Community Management:</span> Engagement, customer service, crisis management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <Sparkles className="w-10 h-10 text-purple-500 mb-3" />
                  <CardTitle className="text-2xl">Analytics & Email Marketing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Google Analytics 4:</span> Traffic analysis, user behavior, conversion funnels</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Email Campaigns:</span> List building, templates, automation, Mailchimp/SendGrid</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <p><span className="font-semibold">Reporting:</span> Create professional reports for Chennai clients and employers</p>
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
            Become a Certified Digital Marketer in Chennai
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Code99 IT Academy Velachery and master Digital Marketing in just 4 months
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

      <Footer />
    </>
  );
};

export default DigitalMarketingChennai;
