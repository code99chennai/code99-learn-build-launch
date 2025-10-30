import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  {
    question: "What is the student feedback and rating for Code99 IT Academy?",
    answer: "Students consistently rate Code99 IT Academy 4.9 stars on Google, highlighting its friendly trainers, practical teaching approach, and supportive placement team. Many graduates praise its community-driven culture, making it one of Chennai's most loved software training centers."
  },
  {
    question: "Does Code99 IT Academy provide resume and interview support?",
    answer: "Yes, Code99 IT Academy offers personalized resume building and mock interview sessions. Trainers simulate real HR and technical interviews, preparing students for Chennai's competitive IT job market. This ensures confidence and clarity during actual recruitment."
  },
  {
    question: "What are the class timings at Code99 IT Academy?",
    answer: "Code99 IT Academy operates weekday-only classes, ideal for students and job seekers focused on continuous learning. The flexible schedule ensures balanced progress through theoretical and project-based modules while maintaining consistent mentor interaction."
  },
  {
    question: "What kind of projects do students work on at Code99 IT Academy?",
    answer: "Students at Code99 IT Academy work on real-time software and web development projects, including app interfaces, e-commerce websites, and marketing campaigns. This hands-on experience gives them the portfolio needed to impress Chennai-based IT recruiters."
  },
  {
    question: "How does Code99 IT Academy help in skill development?",
    answer: "Code99 IT Academy nurtures both technical and soft skills through mentorship, peer collaboration, and fun learning methods. Its curriculum blends programming, communication, and design-thinking principles to make students job-ready for 2025's tech landscape."
  },
  {
    question: "What are the benefits of joining Code99 IT Academy for beginners?",
    answer: "For beginners, Code99 IT Academy provides a supportive, step-by-step approach to learning IT skills. Students start from the basics and gradually build advanced coding or design proficiency. With affordable fees and placement guidance, it's a perfect launchpad."
  },
  {
    question: "Is Code99 IT Academy suitable for working professionals?",
    answer: "Yes, many working professionals in Chennai join Code99 IT Academy to upskill in trending technologies like Full Stack Python or UI/UX Design. The flexible, mentor-led weekday classes make it easy to balance work and learning goals effectively."
  },
  {
    question: "Does Code99 IT Academy provide certification after course completion?",
    answer: "Upon completion, students receive a course completion certificate from Code99 IT Academy, recognized by local hiring companies. It adds credibility to their resumes and demonstrates practical expertise in software development or digital marketing."
  },
  {
    question: "How practical is the training at Code99 IT Academy?",
    answer: "Every session at Code99 IT Academy emphasizes 100% practical learning. Instead of theory-heavy modules, students practice coding, UI/UX prototyping, or campaign creation in real environments. This experiential approach ensures quick adaptation to industry workflows."
  },
  {
    question: "How can I enroll in Code99 IT Academy's courses?",
    answer: "Students can enroll by contacting Code99 IT Academy via +91 6374510754 or visiting its Velachery center. Admissions are open year-round, with limited batch sizes ensuring personal attention. Email support is available at info@code99itacademy.com."
  },
  {
    question: "What is Fun Friday at Code99 IT Academy?",
    answer: "Fun Friday is a unique feature at Code99 IT Academy that adds enjoyment to learning. Through games, quizzes, and group challenges, students refresh their minds and strengthen teamwork skills—making it a balanced and lively IT training experience."
  },
  {
    question: "How does Code99 IT Academy stay updated with 2025 IT trends?",
    answer: "In 2025, Code99 IT Academy integrates the latest industry tools and frameworks into its courses. From AI-based web automation to modern UI design systems, the curriculum evolves with Chennai's job market needs to keep students future-ready."
  },
  {
    question: "What kind of trainers teach at Code99 IT Academy?",
    answer: "All trainers at Code99 IT Academy are industry professionals with years of experience in software development and marketing. Their mentorship ensures students gain both technical know-how and professional discipline suitable for Chennai's fast-paced IT industry."
  },
  {
    question: "What makes Code99 IT Academy a trusted brand in Chennai?",
    answer: "Code99 IT Academy builds trust through transparency, affordability, and consistent placement results. Founded on the principle of community-driven education, it focuses on learning outcomes rather than profits—making it a reliable institute in Chennai's IT ecosystem."
  },
  {
    question: "Why should students choose Code99 IT Academy in 2025?",
    answer: "Students should choose Code99 IT Academy in 2025 for its affordable pricing, practical teaching model, and guaranteed placement support. It's not just a training institute but a launchpad for career transformation in Chennai's evolving software industry."
  }
];

const FAQ = () => {
  // Generate FAQ schema markup
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
    <section id="faq" className="py-20 px-4 bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about Code99 IT Academy
          </p>
        </div>

        <ScrollArea className="h-[600px] rounded-lg border bg-card p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {index + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div>
    </section>
  );
};

export default FAQ;
