import React from 'react';
import { Mail, Github, Linkedin, Terminal, ArrowDown } from 'lucide-react';
import Experience from '../components/exp';
import Projects from '../components/projects';
import Skills from '../components/skills';

const Portfolio = () => {

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] font-sans selection:bg-[#FCD53F] selection:text-black">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference text-white flex justify-between items-center backdrop-blur-sm">
        <h2 className="text-xl font-bold tracking-tighter">RAYAAN.</h2>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#work" className="hover:text-[#FCD53F] transition-colors">Work</a>
          <a href="#experience" className="hover:text-[#FCD53F] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#FCD53F] transition-colors">Contact</a>
        </div>
        <button onClick={() => window.location = 'mailto:mdrayaanpasha@gmail.com'} className="md:hidden">
          <Mail />
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-[10vw] leading-[0.9] font-black tracking-tighter uppercase mb-8">
            I'm <span className="text-[#FCD53F]">Rayaan</span>.<br />
            I <span className="inline-block border-4 border-[#FCD53F] rounded-full px-4 italic text-[8vw] hover:bg-[#FCD53F] hover:text-black transition-colors duration-300">Architect</span> <br/>
            Distributed Systems
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between mt-12 border-t border-gray-800 pt-8">
            <p className="max-w-md text-xl opacity-70">
              Full Stack Developer & System Design Enthusiast based in Bengaluru. 
              Building fault-tolerant, event-driven architectures that scale.
            </p>
            <div className="animate-bounce">
              <p className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#FCD53F]">
                Scroll for Impact <ArrowDown size={16} />
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* --- Infinite Marquee --- */}
      <div className="bg-[#FCD53F] text-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-black rotate-1 scale-105 transform origin-left z-10 relative">
        <div className="inline-flex animate-scroll">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-black uppercase mx-8">
              Microservices • Kafka • Docker • System Design •
            </span>
          ))}
        </div>
      </div>

      {/* --- Main Content Components --- */}
      <div id="experience">
        <Experience/>
      </div>

      <Projects/>

      <Skills/>

      {/* --- Philosophy / Lemon Section --- */}
      <section className="py-32 bg-[#FCD53F] text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 inline-block p-4 border-4 border-black rounded-full bg-white">
            <span className="text-4xl">🍋</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8">
            "When life gives you lemons,<br/>
            write a <span className="underline decoration-wavy decoration-black/30">script</span> to extract the seeds."
          </h2>
          <p className="text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            I don't just build web apps; I engineer resilient systems. Whether it's 
            <span className="font-bold"> cutting infrastructure costs by 23%</span> or 
            <span className="font-bold"> reducing latency to sub-50ms</span>, 
            I believe in code that performs under pressure.
          </p>
        </div>
      </section>

      {/* --- Footer / Contact --- */}
      <footer id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase mb-8">Let's Talk<br/>Scale.</h2>
            <div className="flex flex-col gap-4">
              <a href="mailto:mdrayaanpasha@gmail.com" className="flex items-center gap-4 text-2xl hover:text-[#FCD53F] transition-colors group">
                <Mail className="group-hover:scale-110 transition-transform"/> mdrayaanpasha@gmail.com
              </a>
              <div className="flex gap-6 mt-4">
                <a href="https://github.com/mdrayaanpasha" target="_blank" rel="noreferrer" className="p-4 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/mdrayaanpasha" target="_blank" rel="noreferrer" className="p-4 border border-gray-700 rounded-full hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

         
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm opacity-50">
          <p>&copy; 2025 Mohammed Rayaan Pasha.</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;