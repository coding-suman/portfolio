import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Application",
    institution: "MATS UNIVERSITY",
    year: "Dec 2018",
    percentage: "62%"
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "MATS UNIVERSITY",
    year: "Dec 2015",
    percentage: "56%"
  }
];

const EducationSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-lg animate-on-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-muted-foreground">{edu.year}</p>
              <p className="mt-2">Cumulative Percentage: {edu.percentage}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;