import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Briefcase, Award, CheckCircle, Building2, TrendingUp, Target, Handshake, GraduationCap } from "lucide-react";

const PlacementPage = () => {
  const placementProcess = [
    { icon: Target, title: "Skills Assessment", description: "Evaluate your current skills and identify areas for improvement through technical assessments." },
    { icon: FileText, title: "Resume Building", description: "Create ATS-friendly resumes highlighting your projects and skills for Chennai's IT job market." },
    { icon: Users, title: "Interview Training", description: "Mock interviews with HR professionals and technical rounds simulating real company processes." },
    { icon: Briefcase, title: "Job Placement", description: "Direct referrals to our partner companies and continuous support until you get placed." },
  ];

  const hiringPartners = [
    { name: "TCS", type: "IT Services" },
    { name: "Infosys", type: "IT Services" },
    { name: "Cognizant", type: "IT Services" },
    { name: "Wipro", type: "IT Services" },
    { name: "Zoho", type: "Product" },
    { name: "Freshworks", type: "Product" },
    { name: "HCL", type: "IT Services" },
    { name: "Accenture", type: "Consulting" },
    { name: "Tech Mahindra", type: "IT Services" },
    { name: "Capgemini", type: "IT Services" },
    { name: "IBM", type: "IT Services" },
    { name: "Infosys BPM", type: "IT Services" },
  ];

  const stats = [
    { value: "1000+", label: "Students Placed" },
    { value: "100%", label: "Placement Support" },
    { value: "50+", label: "Hiring Partners" },
    { value: "₹4.5 LPA", label: "Average Package" },
  ];

  const testimonials = [
    { name: "Priya Krishnan", role: "Java Developer at TCS", quote: "Code99's placement support was incredible. From resume building to mock interviews, they prepared me for everything.", batch: "2023" },
    { name: "Arun Venkatesh", role: "Full Stack Developer at Zoho", quote: "The practical training helped me crack Zoho's technical rounds. Got placed within 2 months of completing the course.", batch: "2023" },
    { name: "Meera Shankar", role: "Python Developer at Infosys", quote: "As a non-IT graduate, I was worried about placement. Code99 team's support helped me land my dream job.", batch: "2024" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Code99 provide 100% job placement guarantee in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 provides 100% placement support including resume building, mock interviews, and job referrals. While we cannot guarantee placement, our support continues until you secure a job in Chennai's IT sector."
        }
      },
      {
        "@type": "Question",
        "name": "Which companies hire from Code99 IT Academy Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hiring partners include TCS, Infosys, Cognizant, Wipro, Zoho, Freshworks, HCL, Accenture, Tech Mahindra, Capgemini, and many Chennai-based startups and mid-size companies."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average salary package for Code99 graduates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our graduates typically receive packages ranging from ₹3 LPA to ₹8 LPA, with an average of ₹4.5 LPA. Top performers in Full Stack and Java courses often receive higher packages."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I get placed after completing the course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most students get placed within 1-3 months after course completion. Students who actively participate in placement drives and maintain good attendance typically get placed faster."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>100% Placement Support in Chennai | IT Job Assistance - Code99 Academy</title>
        <meta name="description" content="Get 100% placement support at Code99 Chennai. Resume building, mock interviews, and direct job referrals to TCS, Infosys, Zoho & 50+ companies. Start your IT career today." />
        <meta name="keywords" content="IT placement chennai, job placement support chennai, software job assistance chennai, IT job training chennai, placement guarantee chennai, IT jobs velachery" />
        <link rel="canonical" href="https://code99.in/placement" />
        <meta property="og:title" content="100% Placement Support | Code99 IT Academy Chennai" />
        <meta property="og:description" content="Launch your IT career with Code99's comprehensive placement support. Join 1000+ placed students in Chennai." />
        <meta property="og:url" content="https://code99.in/placement" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BackToTop />

        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Placement Support</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                100% Placement Support for IT Jobs in Chennai
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your dream IT job is just a few months away. With our comprehensive placement assistance program, 
                we prepare you for success in Chennai's competitive job market and connect you with top employers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/50 text-foreground">Our Process</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Help You Get Placed</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our structured 4-step placement process has helped 1000+ students land jobs at top companies in Chennai.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementProcess.map((step, index) => (
                <Card key={index} className="relative border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Placement Services</Badge>
                <h2 className="text-3xl font-bold text-foreground">Complete Career Support</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: FileText, title: "Professional Resume Building", desc: "ATS-optimized resumes tailored for IT jobs in Chennai. We highlight your projects and skills effectively." },
                  { icon: Users, title: "Mock Interview Sessions", desc: "Practice with HR and technical interviews simulating TCS, Infosys, Zoho interview processes." },
                  { icon: Handshake, title: "Soft Skills Training", desc: "Communication, presentation, and workplace etiquette training for corporate readiness." },
                  { icon: Building2, title: "Company-Specific Preparation", desc: "Targeted preparation for specific companies based on their hiring patterns and requirements." },
                  { icon: TrendingUp, title: "LinkedIn Profile Optimization", desc: "Build a professional online presence to attract recruiters and hiring managers." },
                  { icon: GraduationCap, title: "Aptitude Training", desc: "Preparation for aptitude tests conducted by companies like TCS, Infosys, and Cognizant." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
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

        {/* Hiring Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/50 text-foreground">Our Network</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Hiring Partners in Chennai</h2>
              <p className="text-muted-foreground">Companies that actively hire our graduates</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {hiringPartners.map((partner, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground">{partner.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Success Stories</Badge>
              <h2 className="text-3xl font-bold text-foreground">Our Students, Their Success</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-border/50 pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">Batch of {testimonial.batch}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Expectations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/50 text-foreground">Salary Guide</Badge>
                <h2 className="text-3xl font-bold text-foreground">Expected Salary Packages in Chennai</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { course: "Java Developer", fresher: "₹3-4 LPA", experienced: "₹6-12 LPA" },
                  { course: "Full Stack Developer", fresher: "₹3.5-5 LPA", experienced: "₹8-15 LPA" },
                  { course: "Python Developer", fresher: "₹3-4.5 LPA", experienced: "₹7-14 LPA" },
                  { course: "Digital Marketing", fresher: "₹2.5-4 LPA", experienced: "₹5-10 LPA" },
                ].map((item, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground mb-4">{item.course}</h3>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Fresher</p>
                          <p className="text-lg font-semibold text-primary">{item.fresher}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">2-3 Years Exp</p>
                          <p className="text-lg font-semibold text-foreground">{item.experienced}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Code99 and get comprehensive training plus placement support. 
              Your dream job at TCS, Infosys, Zoho, or your favorite company awaits!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PlacementPage;
