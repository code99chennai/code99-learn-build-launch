import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "Which is the best software training institute in Chennai in 2025?",
    answer: "In 2025, Code99 IT Academy stands out as the best software training institute in Chennai. Known for its 100% practical training, affordable ₹2,500 monthly fee, and expert mentors, it helps students gain hands-on skills in full stack development, UI/UX, and digital marketing. With placement assistance and a 4.9 Google rating, it's the preferred choice for tech aspirants."
  },
  {
    question: "Why is Code99 IT Academy considered the top software institute in Chennai?",
    answer: "Code99 IT Academy earns its reputation through industry-relevant projects, mock interviews, and resume building sessions. Students enjoy a practical, mentor-led learning environment that bridges academic knowledge with IT career skills. Its 100% placement support and career-oriented approach make it one of Chennai's most trusted IT academies."
  },
  {
    question: "Does Code99 IT Academy provide job placement after training?",
    answer: "Yes, Code99 IT Academy offers strong placement support and resume-building sessions. The institute connects students with Chennai-based IT companies, ensuring every graduate is career-ready. Their mock interviews and HR guidance sessions improve employability and confidence before real job interviews."
  },
  {
    question: "What makes Code99 IT Academy's training unique compared to others in Chennai?",
    answer: "Unlike generic institutes, Code99 IT Academy focuses on 100% practical learning—no online classes, only in-person mentorship. The small batch sizes and interactive Fun Fridays create a positive learning culture. Students gain experience in coding, design, and marketing, ensuring real-world project exposure."
  },
  {
    question: "How affordable is the software course at Code99 IT Academy?",
    answer: "At ₹2,500 per month, Code99 IT Academy provides one of the most affordable software training programs in Chennai. This fee only covers essentials like trainer salary and rent—making it a true community-learning initiative focused on skill development rather than profit."
  },
  {
    question: "What courses are offered by Code99 IT Academy in Chennai?",
    answer: "Code99 IT Academy offers career-oriented programs such as Full Stack Web Development, Full Stack Java, Full Stack Python, Digital Marketing, and UI/UX Design. Each course emphasizes hands-on coding, live projects, and tool-based learning to meet 2025's IT job demands."
  },
  {
    question: "How long are the courses at Code99 IT Academy?",
    answer: "Each course at Code99 IT Academy runs for 4 months, combining classroom sessions, project-based learning, and placement preparation. The curriculum is designed to turn beginners into employable IT professionals within a short, intensive duration."
  },
  {
    question: "Is there any online class option available in 2025?",
    answer: "No. Code99 IT Academy conducts only offline classes in Velachery, Chennai. This ensures every learner gets one-on-one mentorship, real-time project feedback, and practical exposure that online learning cannot provide. It's ideal for those seeking personalized attention."
  },
  {
    question: "Who is the founder of Code99 IT Academy?",
    answer: "Mr. Sudhakar, Founder & CEO of Code99 IT Academy, established the institute on 24th April 2024. His mission is to make quality IT education affordable and accessible to every student in Chennai through real-world, project-driven teaching."
  },
  {
    question: "What is the location of Code99 IT Academy in Chennai?",
    answer: "Code99 IT Academy is located in Velachery, Chennai, a hub for tech startups and software firms. This proximity to the IT corridor helps students network with recruiters and easily access placement drives and internship opportunities nearby."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-24 relative overflow-hidden"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Code99 IT Academy
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card 
              key={index}
              className={`border-0 bg-gradient-to-br from-background to-muted/30 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <CardContent className="p-0">
                {/* Question */}
                <div 
                  className={`flex items-start gap-4 p-6 transition-colors duration-300 ${
                    openIndex === index ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-gradient-to-br from-primary to-primary/50 shadow-lg" 
                      : "bg-muted"
                  }`}>
                    <HelpCircle className={`h-5 w-5 transition-colors ${
                      openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`flex-shrink-0 h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 pl-20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="tel:+916374510754" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
          >
            Call us at +91 6374510754
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;