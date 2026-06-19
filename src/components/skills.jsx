import React from 'react';
import { Terminal, Database, Layout, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: "backend",
      label: "Backend",
      icon: <Terminal size={16} className="text-[#4FD1A5]" />,
      items: ["Node.js", "Express.js", "Django", "REST API design"]
    },
    {
      id: "messaging",
      label: "Data & Messaging",
      icon: <Database size={16} className="text-[#4FD1A5]" />,
      items: ["Kafka", "RabbitMQ", "Redis", "PostgreSQL", "Prisma"]
    },
    {
      id: "ai",
      label: "AI / LLM",
      icon: <Cpu size={16} className="text-[#4FD1A5]" />,
      items: ["LangChain", "LangGraph", "NL-to-SQL"]
    },
    {
      id: "tools",
      label: "Infra",
      icon: <Layout size={16} className="text-[#4FD1A5]" />,
      items: ["Docker", "Nginx", "DigitalOcean", "CI/CD", "GCP", "K8s", "ArgoCD", "GitHub Actions"]
    }
  ];

  return (
    <section className="px-6 py-32 text-[#E7E9EA] sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-linear-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              skills
            </span>
          </div>

          <h2 className="font-mono text-[32px] font-semibold tracking-tight sm:text-[44px]">
            Technical stack
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[18px]">
            Grouped by what recruiters scan for first: backend scope, data and
            messaging, AI/LLM work, and infrastructure.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-3xl border border-[#262B31] bg-[#14171B] p-6 transition-all duration-300 hover:border-[#4FD1A5] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#262B31] bg-[#0F1216]">
                  {category.icon}
                </div>
                <h3 className="font-mono text-[20px] font-semibold text-[#E7E9EA]">
                  {category.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#262B31] px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A9099]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;