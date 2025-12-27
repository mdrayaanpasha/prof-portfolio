import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Gauge RO",
      type: "WaterTech Startup",
      duration: "Apr 2025 — Nov 2025",
      location: "Bengaluru, India",
      description: "Built AI-powered modules and optimized backend infrastructure for a high-growth WaterTech startup.",
      achievements: [
        "Built Generative AI marketing module (OpenAI API), saving 5+ marketing hours/week.",
        "Migrated Strapi CMS to custom Express.js, reducing infrastructure costs by 23%.",
        "Developed automated CRM workflows, cutting manual data entry by 35%."
      ],
      tags: ["Express.js", "OpenAI API", "CRM Automation"],
      highlight: "-23% Infra Costs" // Key metric for the 'badge'
    },
    {
      id: 2,
      role: "Full Stack Developer Intern",
      company: "Royal & Co",
      type: "Software Solutions",
      duration: "Dec 2024 — Feb 2025",
      location: "Bengaluru, India",
      description: "Focused on database optimization and internal tooling for non-technical staff.",
      achievements: [
        "Implemented database table partitioning, improving average query read-time by 12%.",
        "Built Natural Language-to-SQL tool using LLMs for 8+ non-technical staff.",
        "Developed predictive billing system reducing processing time by 18%."
      ],
      tags: ["PostgreSQL", "LLM Integration", "System Design"],
      highlight: "+12% Query Speed"
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#121212] text-[#E0E0E0] border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- Left Column: Header (Sticky) --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-6xl font-black uppercase mb-6 tracking-tight">
                Career<br />History
              </h2>
              <p className="text-xl opacity-60 leading-relaxed">
                Engineering distinct solutions for startups and software firms. 
                Focusing on <span className="text-[#FCD53F]">measurable impact</span> and backend optimization.
              </p>
              
              <div className="mt-12 hidden lg:block">
                <Briefcase size={48} className="text-[#FCD53F] opacity-20" />
              </div>
            </div>
          </div>

          {/* --- Right Column: The Timeline --- */}
          <div className="lg:w-2/3 flex flex-col gap-12">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className="group relative bg-[#1E1E1E] p-8 md:p-12 rounded-3xl border border-gray-800 transition-all duration-300 hover:border-[#FCD53F] hover:-translate-y-1"
              >
                {/* Impact Badge (Absolute) */}
                <div className="absolute top-8 right-8 bg-[#FCD53F] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider hidden md:block">
                  {exp.highlight}
                </div>

                {/* Header Info */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 text-sm font-mono opacity-50 mb-2 uppercase tracking-widest">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-[#FCD53F] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-lg font-medium text-gray-400 flex flex-wrap gap-2 items-center">
                    {exp.role} 
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span> 
                    <span className="text-sm opacity-60">{exp.type}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 min-w-[6px] h-[6px] bg-[#FCD53F] rounded-full" />
                      <span className="leading-relaxed opacity-90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono border border-gray-700 rounded px-2 py-1 text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Resume Download CTA */}
            <a 
              href="https://drive.google.com/file/d/1PrnVpdg4d8i5lNjX5W72G_Qfm4UWcqLV/view?usp=sharing" 
              className="inline-flex items-center gap-4 text-[#FCD53F] font-bold uppercase tracking-widest hover:translate-x-2 transition-transform w-fit"
            >
              Download Full Resume <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;