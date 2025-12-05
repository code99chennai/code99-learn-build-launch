import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Users, Coffee, Award, Laptop, Presentation } from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import studentsImage from "@/assets/students.jpg";

const GalleryPage = () => {
  const galleryItems = [
    { image: classroomImage, title: "Modern Classroom", description: "Air-conditioned classrooms with latest equipment" },
    { image: studentsImage, title: "Hands-on Training", description: "Students working on live projects" },
    { image: classroomImage, title: "Lab Facilities", description: "High-performance computers for practical sessions" },
    { image: studentsImage, title: "Placement Drive", description: "Campus recruitment sessions with top companies" },
    { image: classroomImage, title: "Fun Friday", description: "Weekly recreational activities for students" },
    { image: studentsImage, title: "Certificate Distribution", description: "Celebrating student achievements" },
  ];

  const facilities = [
    { icon: Monitor, title: "High-End Workstations", description: "Latest i5/i7 computers with dual monitors for each student" },
    { icon: Laptop, title: "Free WiFi", description: "High-speed internet for research and practice" },
    { icon: Coffee, title: "Refreshment Area", description: "Tea, coffee, and snacks available for students" },
    { icon: Presentation, title: "Projector Setup", description: "HD projectors for clear demonstrations" },
    { icon: Users, title: "Small Batch Size", description: "Maximum 15 students for personalized attention" },
    { icon: Award, title: "AC Classrooms", description: "Comfortable learning environment year-round" },
  ];

  const virtualTourPoints = [
    "Reception area with friendly staff",
    "2 fully equipped training rooms",
    "Computer lab with 20+ workstations",
    "Discussion and break room",
    "Placement cell office",
    "Library with technical resources",
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Code99 IT Academy Chennai - Campus & Facilities</title>
        <meta name="description" content="Explore Code99 IT Academy Chennai's modern facilities - AC classrooms, computer lab, placement cell. See our campus in Velachery with photos of training sessions and events." />
        <meta name="keywords" content="code99 campus, IT training center chennai, computer lab velachery, software training facilities chennai, code99 classroom photos" />
        <link rel="canonical" href="https://code99.in/gallery" />
        <meta property="og:title" content="Gallery | Code99 IT Academy Chennai Campus" />
        <meta property="og:description" content="Take a virtual tour of Code99's modern training facilities in Velachery, Chennai." />
        <meta property="og:url" content="https://code99.in/gallery" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BackToTop />

        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Campus</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Code99 IT Academy Chennai Gallery
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take a virtual tour of our modern training facilities in Velachery. 
                See where Chennai's future IT professionals learn and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Campus Life at Code99</h2>
              <p className="text-muted-foreground">Glimpses of learning, fun, and success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card key={index} className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-0 relative">
                    <img 
                      src={item.image} 
                      alt={`${item.title} at Code99 IT Academy Chennai`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary/50 text-foreground">Our Facilities</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">World-Class Learning Infrastructure</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our Velachery campus is designed to provide the best learning experience with modern amenities
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Virtual Tour</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Experience Our Campus
                </h2>
                <p className="text-muted-foreground mb-6">
                  Located in Velachery, Chennai, our campus is easily accessible from OMR, Guindy, 
                  Tambaram, and Adyar. We're just a 5-minute walk from Vijayanagar Bus Stand and 
                  well-connected by metro.
                </p>
                <div className="space-y-3">
                  {virtualTourPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.2209876!3d12.9815678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzUzLjYiTiA4MMKwMTMnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Code99 IT Academy Chennai Location"
                      className="rounded-lg"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Fridays */}
        <section className="py-16 bg-gradient-to-r from-secondary/30 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Fun Fridays</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every Friday at Code99 is special! We believe in work-life balance and ensure our students 
                enjoy their learning journey. From tech quizzes to gaming sessions, birthday celebrations 
                to coding hackathons – we make learning enjoyable.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { emoji: "🎮", activity: "Gaming Sessions" },
                  { emoji: "🧩", activity: "Tech Quizzes" },
                  { emoji: "🎂", activity: "Celebrations" },
                  { emoji: "💻", activity: "Hackathons" },
                ].map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur border-border/30">
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">{item.emoji}</div>
                      <p className="font-medium text-foreground">{item.activity}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/50 text-foreground">Location</Badge>
                <h2 className="text-3xl font-bold text-foreground">Visit Our Campus</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4">Address</h3>
                    <p className="text-muted-foreground">
                      No.4/345, Second Floor<br />
                      200 Feet Road, Eswaran Nagar<br />
                      Velachery, Chennai - 600042<br />
                      Tamil Nadu, India
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4">How to Reach</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 5 min walk from Vijayanagar Bus Stand</li>
                      <li>• 10 min from Velachery Metro Station</li>
                      <li>• Near 200 Feet Road junction</li>
                      <li>• Ample parking available nearby</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
