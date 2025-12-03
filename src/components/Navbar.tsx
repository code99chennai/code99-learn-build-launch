import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: isHomePage ? "#home" : "/#home" },
    { label: "Courses", href: isHomePage ? "#courses" : "/#courses" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Placement", href: isHomePage ? "#placement" : "/#placement" },
    { label: "Gallery", href: isHomePage ? "#gallery" : "/#gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Code99 IT Academy" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
              onClick={() => window.location.href = 'tel:+916374510754'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t animate-slide-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
                onClick={() => window.location.href = 'tel:+916374510754'}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;