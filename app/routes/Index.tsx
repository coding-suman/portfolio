import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Award, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import ContactForm from "@/components/ContactForm";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import { projects } from "@/data/projects";
import { MainNav } from "@/components/MainNav";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      items: ["PHP", "Node.js", "Python", "RESTful APIs"]
    },
    {
      title: "Frameworks",
      items: ["Laravel", "CodeIgniter", "Express.js"]
    },
    {
      title: "Database & Tools",
      items: ["MySQL", "MongoDB", "AWS", "Kubernetes"]
    }
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 flex items-center justify-center relative section-padding">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="container mx-auto text-center relative">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          > */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Suman Mandal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Senior Software Developer with 6+ years of experience in PHP, React, Node.js, and Python
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="glass" asChild>
                <a href="mailto:iamsumandal@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass" asChild>
                <a href="tel:+917222954442">
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass" asChild>
                <a href="https://linkedin.com/in/link-suman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass" asChild>
                <a href="https://github.com/coding-suman" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          {/* </motion.div> */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Education Section */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Globe className="h-6 w-6" />
            <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
            Get in Touch
          </h2>
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
