import { Badge } from "@/components/ui/badge";
import studentsImage from "@/assets/students.jpg";
import classroomImage from "@/assets/classroom.jpg";
import founderImage from "@/assets/founder.jpg";

const Gallery = () => {
  const images = [
    {
      src: studentsImage,
      alt: "Students learning in practical sessions",
      title: "Hands-on Learning",
    },
    {
      src: classroomImage,
      alt: "Modern classroom with individual workstations",
      title: "Modern Facilities",
    },
    {
      src: founderImage,
      alt: "Founder Sudhakar guiding students",
      title: "Expert Mentorship",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">GALLERY</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Our <span className="text-primary">Learning Environment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real photos from our Velachery campus – where learning meets excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { emoji: "🖥️", text: "Individual Workstations" },
              { emoji: "🌿", text: "Green, Inspiring Spaces" },
              { emoji: "🎮", text: "Fun Friday Activities" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted/50 rounded-2xl">
                <div className="text-5xl mb-3">{item.emoji}</div>
                <p className="font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;