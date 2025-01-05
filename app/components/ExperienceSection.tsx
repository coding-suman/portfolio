import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Acadecraft Pvt. Ltd.",
    role: "Sr. Web Developer",
    period: "July 2022 - Present",
    achievements: [
      "Led front-end development using React.js",
      "Enhanced backend scalability with Node.js, improving system performance by 30%",
      "Implemented Kubernetes for container orchestration",
      "Leveraged AWS infrastructure for application scaling"
    ]
  },
  {
    company: "eBizTrait Technolabs Pvt. Ltd.",
    role: "Sr. Software Engineer",
    period: "Aug 2021 - Jun 2022",
    achievements: [
      "Developed React.js components",
      "Built backend APIs with Node.js",
      "Designed cloud solutions on DigitalOcean"
    ]
  },
  {
    company: "Prudent Systems Pvt. Ltd.",
    role: "Sr. Software Developer",
    period: "Jul 2019 - Jul 2021",
    achievements: [
      "Implemented PHP-Codeigniter services",
      "Optimized front-end and React.js integration"
    ]
  },
  {
    company: "ResilienceSoft",
    role: "Web Developer",
    period: "Feb 2018 - Jul 2019",
    achievements: [
      "Built web applications using React.js",
      "Deployed projects on AWS"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <Tabs defaultValue={experiences[0].company} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {experiences.map((exp) => (
              <TabsTrigger
                key={exp.company}
                value={exp.company}
                className="px-4 py-2"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {experiences.map((exp) => (
            <TabsContent
              key={exp.company}
              value={exp.company}
              className="mt-8 animate-fade-up"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;