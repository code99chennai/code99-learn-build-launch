import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Placement", href: "/placement" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "h-16 bg-background/80 backdrop-blur-xl shadow-lg border-b border-primary/10" 
          : "h-20 bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="Code99 IT Academy" 
              className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-12"}`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative px-4 py-2 text-foreground hover:text-primary font-medium transition-all duration-300 group ${
                  isScrolled ? "text-sm" : "text-base"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 ${
                isScrolled ? "px-4 py-2 text-sm" : "px-6 py-2.5"
              }`}
              onClick={() => window.location.href = 'tel:+916374510754'}
            >
              <Phone className={`mr-2 transition-all ${isScrolled ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-b border-primary/10 shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-foreground hover:text-primary hover:bg-primary/5 font-medium py-3 px-4 rounded-xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full w-full mt-4 shadow-lg"
                onClick={() => window.location.href = 'tel:+916374510754'}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;