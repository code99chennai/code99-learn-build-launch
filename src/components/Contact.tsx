import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Enrollment Inquiry - ${formData.course}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.course}
Message: ${formData.message}
    `.trim();

    // Open default email client
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
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6374510754\n+91 8111078282",
      action: "Call Now",
      link: "tel:+916374510754",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@code99itacademy.com",
      action: "Send Email",
      link: "mailto:info@code99itacademy.com",
    },
    {
      icon: Clock,
      title: "Class Timing",
      content: "Weekdays Only\nMon - Fri",
      action: null,
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">CONTACT US</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started <span className="text-primary">Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of students who transformed their careers with Code99 IT Academy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Enrollment Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                    className="w-full h-12 px-3 rounded-md border border-input bg-background"
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
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg">
                  Submit Enrollment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <Card key={idx} className="hover:shadow-card transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">
                        {info.content}
                      </p>
                      {info.action && info.link && (
                        <a 
                          href={info.link}
                          target={info.icon === MapPin ? "_blank" : undefined}
                          rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                          className="text-sm text-primary hover:underline font-medium"
                        >
                          {info.action} →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Google Map */}
            <Card className="overflow-hidden shadow-hover">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5688!2d80.2214!3d12.9794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzQ1LjgiTiA4MMKwMTMnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Code99 IT Academy Location"
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