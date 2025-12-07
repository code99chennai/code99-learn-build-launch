import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Placement from "@/components/Placement";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <CustomCursor />
      
      <Navbar />
      
      {/* Floating Social Media Sidebar */}
      <SocialLinks variant="floating" className="hidden lg:block" />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      <main id="home">
        <Hero />
        <Courses />
        <About />
        <Placement />
        <Gallery />
        <FeaturedPosts />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
