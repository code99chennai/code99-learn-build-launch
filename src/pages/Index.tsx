import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Placement from "@/components/Placement";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Floating Social Media Sidebar */}
      <SocialLinks variant="floating" className="hidden lg:block" />
      
      <main id="home">
        <Hero />
        <Courses />
        <About />
        <Placement />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
