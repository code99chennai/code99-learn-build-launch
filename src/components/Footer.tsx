import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <img src={logo} alt="Code99 IT Academy" className="h-16 mb-4" />
            <p className="text-white/70 mb-4">
              Best Software Training Institute in Chennai. 100% Practical Training with Placement Support.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-lg">4.9 Google Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Courses", "About", "Placement", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {[
                "Full Stack Web Development",
                "Full Stack Java",
                "Full Stack Python",
                "Digital Marketing",
                "UI/UX Design",
              ].map((course) => (
                <li key={course}>
                  <a 
                    href="#courses"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-white/70">Velachery, Chennai</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <a href="tel:+916374510754" className="hover:text-primary transition-colors block">
                    +91 6374510754
                  </a>
                  <a href="tel:+918111078282" className="hover:text-primary transition-colors block">
                    +91 8111078282
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70">
                  <a href="mailto:info@code99itacademy.com" className="hover:text-primary transition-colors block">
                    info@code99itacademy.com
                  </a>
                  <a href="mailto:hr@code99itacademy.com" className="hover:text-primary transition-colors block">
                    hr@code99itacademy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Code99 IT Academy. All rights reserved. Founded by Sudhakar on April 24, 2024.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;