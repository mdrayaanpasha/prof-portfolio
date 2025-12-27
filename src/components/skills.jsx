import React from 'react';
import { Terminal, Database, Layout, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      label: "Languages",
      icon: <Terminal size={20} className="text-[#FCD53F]" />,
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL (PostgreSQL)"]
    },
    {
      id: "backend",
      label: "Backend & Systems",
      icon: <Cpu size={20} className="text-[#FCD53F]" />,
      items: ["Node.js", "Express.js", "Apache Kafka", "RabbitMQ", "Redis"]
    },
    {
      id: "frameworks",
      label: "Frameworks & DB",
      icon: <Database size={20} className="text-[#FCD53F]" />,
      items: ["React.js", "Next.js", "Prisma", "MongoDB", "MySQL"]
    },
    {
      id: "tools",
      label: "DevOps & Tools",
      icon: <Layout size={20} className="text-[#FCD53F]" />,
      items: ["Docker", "Git", "Linux/Unix Shell", "Postman", "OpenAI API"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#121212] text-white border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">
            Technical<br/>Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="p-6 rounded-2xl bg-[#1E1E1E] border border-gray-800 hover:border-[#FCD53F] transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded bg-black/50 border border-gray-700 group-hover:border-[#FCD53F] transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg uppercase tracking-wider">{category.label}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm font-mono text-gray-300 bg-black/40 border border-gray-700 rounded hover:text-[#FCD53F] hover:border-[#FCD53F]/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;