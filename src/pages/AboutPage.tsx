import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Target, Heart, Sparkles, CheckCircle, GraduationCap } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const AboutPage = () => {
  const coreValues = [
    { icon: Star, title: "Excellence", description: "We strive for excellence in every aspect of training, ensuring our students receive world-class education." },
    { icon: Users, title: "Community", description: "Building a supportive community of learners and professionals who help each other grow in Chennai's IT sector." },
    { icon: Target, title: "Results", description: "Our focus is on delivering measurable results through 100% placement support and career advancement." },
    { icon: Heart, title: "Passion", description: "We're passionate about transforming lives through quality education and career opportunities." },
  ];

  const milestones = [
    { year: "2020", event: "Code99 IT Academy founded in Chennai" },
    { year: "2021", event: "First batch achieves 100% placement" },
    { year: "2022", event: "Expanded to 5 course programs" },
    { year: "2023", event: "500+ students placed in top MNCs" },
    { year: "2024", event: "Recognized as top training institute in Velachery" },
  ];

  const achievements = [
    "1000+ Students Trained",
    "100% Placement Support",
    "50+ Hiring Partners",
    "4.9/5 Student Rating",
    "Industry Expert Faculty",
    "Real-Time Project Experience",
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Code99 IT Academy located in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 IT Academy is located in Velachery, Chennai, easily accessible from areas like OMR, Guindy, Adyar, and Tambaram. We are near Vijayanagar Bus Stand with excellent public transport connectivity."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Code99 different from other training institutes in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 offers 100% practical training with real-time projects, industry expert faculty, affordable fees at ₹2,500/month, and dedicated placement support with connections to top companies like TCS, Infosys, Cognizant, and Zoho."
        }
      },
      {
        "@type": "Question",
        "name": "Who founded Code99 IT Academy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 IT Academy was founded by Mr. Karthik Selvam, a passionate educator with extensive IT industry experience who envisioned providing quality, affordable IT training to students in Chennai."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Code99 IT Academy",
    "description": "Premier IT training institute in Chennai offering Java, Python, Full Stack, Digital Marketing, and UI/UX courses with 100% placement support",
    "url": "https://code99.in/about",
    "logo": "https://code99.in/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.4/345, Second Floor, 200 Feet Rd, Eswaran Nagar, Velachery",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600042",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6374510754",
      "contactType": "admissions"
    },
    "sameAs": [
      "https://www.instagram.com/code99.in/",
      "https://www.youtube.com/@Code99IT"
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Code99 IT Academy Chennai | Best IT Training Institute in Velachery</title>
        <meta name="description" content="Learn about Code99 IT Academy Chennai - the premier IT training institute in Velachery offering Java, Python, Full Stack, Digital Marketing & UI/UX courses with 100% placement support." />
        <meta name="keywords" content="about code99, IT training institute chennai, software training center velachery, best coaching center chennai, IT academy velachery, computer training institute chennai" />
        <link rel="canonical" href="https://code99-it-academy.42web.io/about" />
        <meta property="og:title" content="About Code99 IT Academy Chennai | Best IT Training Institute" />
        <meta property="og:description" content="Discover Code99 IT Academy - Chennai's trusted IT training institute with 100% placement support, industry expert faculty, and affordable courses." />
        <meta property="og:url" content="https://code99-it-academy.42web.io/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://code99-it-academy.42web.io/logo.png" />
        <meta property="og:site_name" content="Code99 IT Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Code99 IT Academy Chennai" />
        <meta name="twitter:description" content="Chennai's trusted IT training institute with 100% placement support." />
        <meta name="twitter:image" content="https://code99-it-academy.42web.io/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Code99 IT Academy" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BackToTop />
        <PageBreadcrumb items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Code99 IT Academy Chennai
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering students and professionals in Chennai with industry-ready IT skills since 2020. 
                Your journey to a successful IT career starts here at Velachery's most trusted training institute.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-secondary/50 text-foreground">Our Story</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Building Chennai's Future IT Professionals
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Code99 IT Academy was founded with a simple yet powerful vision: to make quality IT education 
                    accessible to every aspiring professional in Chennai. Located in the heart of Velachery, 
                    we have grown from a small training center to one of Chennai's most trusted IT academies.
                  </p>
                  <p>
                    Our founder, Mr. Karthik Selvam, recognized the gap between academic education and industry 
                    requirements in Chennai's competitive IT job market. With experience working with leading 
                    technology companies, he established Code99 to bridge this gap through practical, 
                    hands-on training.
                  </p>
                  <p>
                    Today, we proudly serve students from across Chennai – from Anna Nagar to OMR, Tambaram to 
                    Porur. Our alumni work at prestigious companies including TCS, Infosys, Cognizant, Wipro, 
                    Zoho, Freshworks, and many Chennai-based startups.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={founderImage} 
                      alt="Mr. Karthik Selvam - Founder of Code99 IT Academy Chennai" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6 bg-gradient-to-t from-background to-transparent">
                      <h3 className="text-xl font-bold text-foreground">Mr. Karthik Selvam</h3>
                      <p className="text-muted-foreground">Founder & Lead Instructor</p>
                      <p className="text-sm text-muted-foreground mt-2">Established 2020 | Velachery, Chennai</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide affordable, industry-aligned IT training to students and professionals in Chennai, 
                    equipping them with practical skills that directly translate to successful careers in 
                    technology companies across Tamil Nadu and beyond.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-secondary/20 bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become Chennai's leading IT training institute, recognized for producing job-ready 
                    professionals who contribute to the growth of India's technology sector. We envision 
                    every student achieving their career dreams through quality education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Values</Badge>
              <h2 className="text-3xl font-bold text-foreground">What Drives Us Every Day</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border/50">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-primary-foreground/80">Milestones that define our journey in Chennai</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-primary-foreground/10 backdrop-blur">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary-foreground" />
                  <p className="text-sm font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/50 text-foreground">Our Journey</Badge>
              <h2 className="text-3xl font-bold text-foreground">Milestones in Chennai</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 mb-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="w-px bg-primary/30 relative">
                    <div className="absolute top-1 -left-1.5 w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex-1 pb-6">
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Fridays */}
        <section className="py-16 bg-gradient-to-r from-secondary/30 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Fun Fridays at Code99</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every Friday, we take a break from intense learning to refresh and recharge! From tech quizzes 
                and coding challenges to team activities and celebrations, Fun Fridays help our students build 
                connections and maintain work-life balance – an essential skill for Chennai's IT professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-base py-2 px-4">🎮 Gaming Sessions</Badge>
                <Badge variant="outline" className="text-base py-2 px-4">🧩 Tech Quizzes</Badge>
                <Badge variant="outline" className="text-base py-2 px-4">🎂 Birthday Celebrations</Badge>
                <Badge variant="outline" className="text-base py-2 px-4">💻 Hackathons</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Code99</Badge>
              <h2 className="text-3xl font-bold text-foreground">Why Chennai Students Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Prime Location in Velachery", desc: "Easily accessible from OMR, Guindy, Tambaram, and Adyar with excellent metro and bus connectivity." },
                { title: "Affordable Fees", desc: "Quality training at just ₹2,500/month – the most competitive rates in Chennai without compromising quality." },
                { title: "Industry Expert Faculty", desc: "Learn from professionals with real experience at top companies like TCS, Infosys, and Zoho." },
                { title: "100% Practical Training", desc: "Hands-on projects and real-world assignments prepare you for actual job requirements." },
                { title: "Placement Support", desc: "Dedicated placement cell with connections to 50+ hiring companies in Chennai and across India." },
                { title: "Flexible Timings", desc: "Weekend and evening batches for working professionals and college students." },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <GraduationCap className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
