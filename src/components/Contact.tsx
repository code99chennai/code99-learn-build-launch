import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `New Enrollment Inquiry - ${formData.course}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}
    `.trim();

    window.location.href = `mailto:info@code99itacademy.com,hr@code99itacademy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Velachery, Chennai",
      action: "Get Directions",
      link: "https://maps.app.goo.gl/XGADiDgaMFwbP5KQ7",
      gradient: "from-emerald-500 to-emerald-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6374510754",
      action: "Call Now",
      link: "tel:+916374510754",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@code99itacademy.com",
      action: "Send Email",
      link: "mailto:info@code99itacademy.com",
      gradient: "from-violet-500 to-violet-400",
    },
    {
      icon: Clock,
      title: "Class Timing",
      content: "Mon - Fri (Weekdays)",
      action: null,
      link: null,
      gradient: "from-amber-500 to-amber-400",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            CONTACT US
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started <span className="text-primary">Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of students who transformed their careers with Code99 IT Academy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <Card className="border-0 bg-gradient-to-br from-background via-background to-muted/50 shadow-2xl rounded-3xl overflow-hidden relative">
              {/* Form Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-50"></div>
              
              <CardContent className="p-8 relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg">
                    <Send className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Enrollment Form</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="group">
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14 bg-muted/50 border-0 rounded-xl focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14 bg-muted/50 border-0 rounded-xl focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-14 bg-muted/50 border-0 rounded-xl focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      required
                      className="w-full h-14 px-4 rounded-xl bg-muted/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    >
                      <option value="">Select Course *</option>
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Full Stack Java">Full Stack Java</option>
                      <option value="Full Stack Python">Full Stack Python</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message (Optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-muted/50 border-0 rounded-xl focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground text-lg rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                  >
                    Submit Enrollment
                    <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={idx} 
                    className="group border-0 bg-gradient-to-br from-background to-muted/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3 whitespace-pre-line">
                        {info.content}
                      </p>
                      {info.action && info.link && (
                        <a 
                          href={info.link}
                          target={info.icon === MapPin ? "_blank" : undefined}
                          rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                          className="text-sm text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          {info.action}
                          <span className="text-lg">→</span>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Google Map */}
            <Card className="border-0 overflow-hidden shadow-xl rounded-2xl">
              <CardContent className="p-0 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5688!2d80.2214!3d12.9794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzQ1LjgiTiA4MMKwMTMnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Code99 IT Academy Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;