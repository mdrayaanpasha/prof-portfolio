import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quantiva",
      subtitle: "Distributed Stock Analysis Engine",
      year: "2025",
      category: "RabbitMQ · Redis · Microservices",
      summary:
        "RabbitMQ RPC fan-out architecture with an orchestrator dispatching concurrent analysis jobs to three independent microservices via dedicated queues, correlated by UUID.",
      details:
        "A Redis cache-aside layer cuts repeat Yahoo Finance fetches from roughly 750ms to sub-10ms, keeping repeated analysis paths fast under load.",
      impact: [
        "RPC fan-out across 3 services with UUID correlation",
        "Cache-aside layer for repeat requests",
        "Sub-10ms repeat fetches after warm cache"
      ],
      tags: ["RabbitMQ", "Redis", "Node.js", "Microservices"],
      links: {
        live: "#",
        github: "https://github.com/mdrayaanpasha/quantiva_2.0"
      }
    },
    {
      id: 2,
      title: "Arbit Finance",
      subtitle: "Real-Time Financial Data Pipeline",
      year: "2026",
      category: "Kafka · Node.js · Cron Workers",
      summary:
        "An event-driven pipeline ingesting OHLCV data on a one-minute cron through Kafka, processed by isolated Node.js microservices.",
      details:
        "Anomaly detection runs with a 5% price-delta threshold, while SMA, EMA, and RSI computations run as independent Kafka consumers. Yahoo Finance history seeding keeps the system resilient on cold start.",
      impact: [
        "One-minute cron ingestion into Kafka",
        "Independent consumers for anomaly detection and indicators",
        "History seeding for cold-start resilience"
      ],
      tags: ["Kafka", "Node.js", "OHLCV", "Indicators"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="work" className="px-6 py-32 text-[#E7E9EA] sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-linear-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              projects
            </span>
          </div>

          <h2 className="font-mono text-[32px] font-semibold tracking-tight sm:text-[44px]">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[18px]">
            Two production-style systems with a clear architecture story: what
            the pipeline does, how data moves, and what stays fast under load.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl border border-[#262B31] bg-[#14171B] p-6 transition-all duration-300 hover:border-[#4FD1A5] sm:p-8"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[#8A9099]">
                    <span>{project.year}</span>
                    <span className="text-[#262B31]">·</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="mt-3 font-mono text-[22px] font-semibold text-[#E7E9EA] sm:text-[26px]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[16px] uppercase tracking-[0.04em] text-[#8A9099] sm:text-[17px]">
                    {project.subtitle}
                  </p>
                </div>

                <div className="rounded-full border border-[#262B31] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#4FD1A5]">
                  production system
                </div>
              </div>

              <p className="max-w-3xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[17px]">
                {project.summary}
              </p>

              <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-[#E7E9EA] sm:text-[17px]">
                {project.details}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#262B31] bg-[#0F1216] px-4 py-3 text-[15px] leading-relaxed text-[#E7E9EA]"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#4FD1A5] align-middle" />
                    <span className="align-middle">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[#262B31] pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#262B31] px-3 py-1 font-mono text-[12px] uppercase tracking-[0.08em] text-[#8A9099]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={project.links.live}
                  className="inline-flex items-center gap-2 rounded-md border border-[#262B31] bg-[#0F1216] px-4 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#E7E9EA] transition-colors hover:border-[#4FD1A5] hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
                >
                  Live <ExternalLink size={16} />
                </a>
                <a
                  href={project.links.github}
                  className="inline-flex items-center gap-2 rounded-md border border-[#262B31] bg-[#0F1216] px-4 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#E7E9EA] transition-colors hover:border-[#4FD1A5] hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.16em] text-[#8A9099] transition-colors hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
        >
          Discuss a system <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default Projects;