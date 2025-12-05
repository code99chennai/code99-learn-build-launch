import { Helmet } from "react-helmet";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Youtube, Send } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Course Enquiry - ${formData.course || "General"}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACourse: ${formData.course}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:info@code99.in?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client...",
      description: "Your enquiry details have been pre-filled. Just click send!",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", content: "No.4/345, Second Floor, 200 Feet Rd, Eswaran Nagar, Velachery, Chennai - 600042", action: "Get Directions", link: "https://maps.google.com/?q=Code99+IT+Academy+Velachery+Chennai" },
    { icon: Phone, title: "Call Us", content: "+91 6374510754", action: "Call Now", link: "tel:+916374510754" },
    { icon: Mail, title: "Email Us", content: "info@code99.in", action: "Send Email", link: "mailto:info@code99.in" },
    { icon: Clock, title: "Class Timings", content: "Mon-Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 4:00 PM", action: null, link: null },
  ];

  const socialLinks = [
    { icon: MessageCircle, name: "WhatsApp", link: "https://wa.me/916374510754", color: "hover:text-green-500" },
    { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/code99.in/", color: "hover:text-pink-500" },
    { icon: Youtube, name: "YouTube", link: "https://www.youtube.com/@Code99IT", color: "hover:text-red-500" },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Code99 IT Academy",
    "image": "https://code99.in/logo.png",
    "description": "Premier IT training institute in Chennai offering Java, Python, Full Stack, Digital Marketing, and UI/UX courses with 100% placement support",
    "@id": "https://code99.in",
    "url": "https://code99.in/contact",
    "telephone": "+91-6374510754",
    "email": "info@code99.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.4/345, Second Floor, 200 Feet Rd, Eswaran Nagar, Velachery",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600042",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9815678,
      "longitude": 80.2209876
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "₹2,500/month"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the class timings at Code99 Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes run Monday to Saturday from 9:00 AM to 8:00 PM with multiple batch options. Sunday batches are available from 10:00 AM to 4:00 PM for working professionals."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reach Code99 IT Academy in Velachery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Code99 is located on 200 Feet Road, Velachery. It's a 5-minute walk from Vijayanagar Bus Stand and 10 minutes from Velachery Metro Station. The campus is easily accessible from OMR, Guindy, Tambaram, and Adyar."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit Code99 for a free demo class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free demo classes for all courses. You can call us at +91 6374510754 or fill the enquiry form to schedule your demo session."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Code99 IT Academy Chennai | IT Training Enquiry Velachery</title>
        <meta name="description" content="Contact Code99 IT Academy Chennai for IT course enquiries. Visit us at Velachery or call +91 6374510754. Free demo classes available for Java, Python, Full Stack courses." />
        <meta name="keywords" content="contact code99, IT training enquiry chennai, software course admission velachery, code99 phone number, code99 address chennai" />
        <link rel="canonical" href="https://code99.in/contact" />
        <meta property="og:title" content="Contact Code99 IT Academy Chennai" />
        <meta property="og:description" content="Get in touch for IT course enquiries. Free demo classes available." />
        <meta property="og:url" content="https://code99.in/contact" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BackToTop />

        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Code99 IT Academy Chennai
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to start your IT career? Have questions about our courses? 
                We're here to help! Reach out to us and take the first step towards your dream job.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">{info.content}</p>
                    {info.action && (
                      <a 
                        href={info.link!} 
                        target={info.link?.startsWith("http") ? "_blank" : undefined}
                        rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        {info.action} →
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <Badge className="mb-4 bg-secondary/50 text-foreground">Enquiry Form</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours. 
                  You can also book a free demo class!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                    <Input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Course Interested In</label>
                    <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Java Training">Java Training</SelectItem>
                        <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                        <SelectItem value="Python Training">Python Training</SelectItem>
                        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                        <SelectItem value="Other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your background, goals, or any questions you have..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Enquiry
                  </Button>
                </form>
              </div>

              {/* Map & Social */}
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Find Us</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campus</h2>
                <Card className="overflow-hidden mb-6">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.2209876!3d12.9815678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzUzLjYiTiA4MMKwMTMnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Code99 IT Academy Chennai Location Map"
                    ></iframe>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Quick Contact</h3>
                    <div className="space-y-3">
                      <a href="tel:+916374510754" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Phone className="w-5 h-5" />
                        <span>+91 6374510754</span>
                      </a>
                      <a href="https://wa.me/916374510754" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp Us</span>
                      </a>
                      <a href="mailto:info@code99.in" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Mail className="w-5 h-5" />
                        <span>info@code99.in</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground transition-colors ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-secondary/50 text-foreground">FAQs</Badge>
                <h2 className="text-3xl font-bold text-foreground">Common Questions</h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "What are the batch timings?", a: "We offer morning (9 AM - 12 PM), afternoon (2 PM - 5 PM), and evening (6 PM - 8 PM) batches on weekdays. Weekend batches are also available." },
                  { q: "Can I get a demo class before joining?", a: "Yes! We offer free demo classes for all courses. Call us or fill the enquiry form to schedule your demo." },
                  { q: "Is there any admission fee?", a: "No separate admission fee. Just pay the monthly course fee of ₹2,500 and start learning." },
                  { q: "Do you offer online classes?", a: "Currently, we focus on classroom training for the best learning experience. However, recordings are available for revision." },
                ].map((faq, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
