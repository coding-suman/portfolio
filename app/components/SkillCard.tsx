import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="animate-on-scroll"
    >
      <Card className="h-full glass">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillCard;