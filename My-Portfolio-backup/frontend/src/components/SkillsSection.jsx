import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "Python", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "React", category: "Frameworks/Library" },
  { name: "Tailwind CSS", category: "Frameworks/Library" },

  { name: "C++", category: "Languages" },
  { name: "Java", category: "Languages" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "Frameworks/Library" },
  { name: "Flask", category: "Frameworks/Library" },
  { name: "FastAPI", category: "Frameworks/Library" },
  { name: "Spring Boot", category: "Frameworks/Library" },
  { name: "AWS", category: "Frameworks/Library" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Lovable", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "Languages", "Frameworks/Library", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
