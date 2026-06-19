import React from 'react';
import { Mail, Github, Linkedin, Terminal, ArrowDown } from 'lucide-react';
import Experience from '../components/exp';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Cover from "../components/cover";
import Backend from '../components/backend';

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
      <Cover />

      <Backend />


      {/* --- Main Content Components --- */}
      <div id="experience">
        <Experience/>
      </div>

      <Projects/>

      <Skills/>



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