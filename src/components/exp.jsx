import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 0,
      role: "Software Developer Intern (Backend)",
      company: "Manaverse",
      type: "Backend / Infrastructure",
      duration: "Jun 2026 — Present",
      location: "Remote",
      description:
        "Built CI/CD pipelines, provisioned DigitalOcean infra, and containerized services to enable zero-downtime releases and dev/prod parity.",
      achievements: [
        "Built CI/CD pipelines for automated production deploys.",
        "Provisioned DigitalOcean infra (SSL, Nginx reverse proxy, DNS) for zero-downtime releases.",
        "Containerized services with Docker for dev/prod parity.",
        "Integrated API-layer content moderation for platform safety compliance."
      ],
      tags: ["CI/CD", "Docker", "DigitalOcean", "Nginx"],
      highlight: "Infra · Deploys"
    },
    {
      id: 1,
      role: "Backend Developer Intern",
      company: "LeXi AI",
      type: "AI / Legal Tech",
      duration: "2026",
      location: "Bengaluru, India",
      description:
        "Built REST APIs and mobile features for an AI legal platform — litigation workspace, contract review, and team management.",
      achievements: [
        "Designed and implemented REST endpoints consumed by React Native clients.",
        "Integrated AI chat features and contract-review pipelines.",
        "Worked on authentication and team management features for mobile apps."
      ],
      tags: ["React Native", "Django", "APIs"],
      highlight: "AI · Legal"
    },
    {
      id: 2,
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
      id: 3,
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
    <section className="px-6 py-32 text-[#E7E9EA] sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-linear-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              experience
            </span>
          </div>

          <h2 className="font-mono text-[32px] font-semibold tracking-tight sm:text-[44px]">
            Selected roles
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[18px]">
            A recruiter-friendly chronology with the essentials up front: role,
            company, dates, scope, and a short list of outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 hidden w-px bg-[#262B31] lg:block" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.duration}`}
                className="relative rounded-3xl border border-[#262B31] bg-[#14171B] p-6 transition-all duration-300 hover:border-[#4FD1A5] sm:p-8"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 hidden h-6 w-6 items-center justify-center rounded-full border border-[#262B31] bg-[#0B0D10] lg:flex">
                      <span className="h-2 w-2 rounded-full bg-[#4FD1A5]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[#8A9099]">
                        <Calendar size={13} />
                        <span>{exp.duration}</span>
                      </div>
                      <h3 className="mt-3 font-mono text-[22px] font-semibold text-[#E7E9EA] sm:text-[26px]">
                        {exp.company}
                      </h3>
                      <p className="mt-2 text-[16px] text-[#8A9099] sm:text-[17px]">
                        <span className="font-mono text-[#E7E9EA]">
                          {exp.role}
                        </span>{" "}
                        <span className="mx-2 text-[#262B31]">·</span>
                        <span className="uppercase tracking-[0.04em]">
                          {exp.type}
                        </span>
                        <span className="mx-2 text-[#262B31]">·</span>
                        <span>{exp.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full border border-[#262B31] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#4FD1A5]">
                    {exp.highlight}
                  </div>
                </div>

                <p className="max-w-3xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[17px]">
                  {exp.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#262B31] bg-[#0F1216] px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4FD1A5]" />
                      <span className="text-[15px] leading-relaxed text-[#E7E9EA]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[#262B31] pt-6">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#262B31] px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A9099]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1PrnVpdg4d8i5lNjX5W72G_Qfm4UWcqLV/view?usp=sharing"
            className="mt-8 inline-flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.16em] text-[#8A9099] transition-colors hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            Download full resume <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;