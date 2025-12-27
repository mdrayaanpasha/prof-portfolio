import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // --- CONFIGURATION: Update these paths with your actual images ---
  const projects = [
    {
      id: 1,
      title: "Distributed Harry Potter Universe",
      category: "Apache Kafka · Docker · MERN",
      year: "'25",
      // Short description for the list view
      summary: "Real-time state synchronization across 5 core services.",
      // Detailed description showing the 'Story'
      details: "Architected a fault-tolerant Kafka pipeline achieving sub-50ms latency. Scaled to handle 5x throughput during stress testing without data loss.",
      links: { source: "https://github.com/mdrayaanpasha/distributed-harry-potter-universe", demo: "#" },
      image: "https://ik.imagekit.io/yylpuqff5/Portfolio/harry.jpg", // REPLACE THIS: e.g., require('./assets/harry-potter.png')
      color: "bg-amber-600" // Fallback color if image fails
    },
    {
      id: 2,
      title: "Sitcom Simulation (Friends Edition)",
      category: "RabbitMQ · LLM Agents · Event-Driven",
      year: "'25",
      summary: "Stateless AI agents mimicking Friends characters.",
      details: "Built a distributed system where LLM agents hold context-aware conversations (mimicking Ross, Rachel, etc.) via RabbitMQ. Uses a non-blocking event bus to handle complex agent interactions.",
      links: { source: "https://github.com/mdrayaanpasha/Friends_Distributed_Simulation", demo: "#" },
      image: "https://ik.imagekit.io/yylpuqff5/Portfolio/friends.jpg", // REPLACE THIS: e.g., require('./assets/friends-sim.png')
      color: "bg-blue-600"
    },
    {
      id: 3,
      title: "Distributed Portfolio Manager",
      category: "Redis · Algorithms · Microservices",
      year: "'25",
      summary: "Consensus Voting Engine for market prediction.",
      details: "Boosted efficiency by 56% using Redis caching. Features a 'Consensus Voting Engine' that aggregates signals from Regression and Sentiment Analysis models to outperform baseline forecasts.",
      links: { source: "https://github.com/mdrayaanpasha/quantiva_2.0", demo: "#" },
      image: "https://ik.imagekit.io/yylpuqff5/Portfolio/fin.jpg", // REPLACE THIS: e.g., require('./assets/portfolio.png')
      color: "bg-emerald-600"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto bg-[#121212] text-white">
      
      {/* --- Section Header --- */}
      <div className="flex items-end justify-between mb-20 border-b border-gray-800 pb-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            Selected<br/>Work
          </h2>
          <p className="text-gray-400 max-w-lg text-lg">
            Engineering distributed systems with a focus on fault tolerance and AI-driven logic.
          </p>
        </div>
        <span className="text-xs font-mono hidden md:block text-[#FCD53F] opacity-80 uppercase tracking-widest mb-2">
          [ Hover to Preview ]
        </span>
      </div>

      {/* --- Projects List --- */}
      <div className="flex flex-col">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative border-t border-gray-800 py-16 flex flex-col md:flex-row md:items-start justify-between transition-all hover:bg-[#1a1a1a] px-4 cursor-default"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Left Side: Text Content */}
            <div className="z-10 transition-transform duration-500 group-hover:translate-x-4 md:w-2/3">
              {/* Tech Stack Badge */}
              <div className="flex items-center gap-3 text-xs font-bold font-mono text-[#FCD53F] mb-4 uppercase tracking-widest">
                <span>{project.year}</span>
                <span className="w-8 h-[1px] bg-[#FCD53F]"></span>
                <span>{project.category}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl md:text-6xl font-black mb-6 text-white group-hover:text-[#FCD53F] transition-colors leading-tight">
                {project.title}
              </h3>
              
              {/* Description Block */}
              <div className="max-w-xl">
                <p className="text-xl font-medium text-white mb-3">
                  {project.summary}
                </p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {project.details}
                </p>
              </div>

              {/* Links (Visible on Hover/Mobile) */}
              <div className="flex gap-6 mt-8 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.links.source} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-[#FCD53F] border-b border-transparent hover:border-[#FCD53F]">
                  <Github size={16} /> Source Code
                </a>
              
              </div>
            </div>

            {/* Right Side: Arrow Icon */}
            <div className="hidden md:block mt-6 opacity-20 group-hover:opacity-100 group-hover:text-[#FCD53F] transition-all duration-300 transform group-hover:translate-x-2 z-10">
              <ArrowUpRight size={64} />
            </div>

            {/* --- FLOATING IMAGE REVEAL --- */}
            <div 
              className={`fixed z-50 pointer-events-none transition-all duration-500 ease-out hidden lg:block
                w-[500px] h-[320px] rounded-xl overflow-hidden shadow-2xl border border-white/10
                ${activeProject === project.id ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-90 rotate-0'}
              `}
              // Dynamic positioning style: tracks cursor roughly or fixed to right side
              style={{ 
                right: '10%', 
                top: '50%', 
                transform: `translateY(-50%) rotate(${activeProject === project.id ? '2deg' : '0deg'}) scale(${activeProject === project.id ? 1 : 0.9})`
              }}
            >
              {/* Actual Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay for text legibility if needed */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;