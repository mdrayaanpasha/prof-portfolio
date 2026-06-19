import { useEffect, useState } from "react";

// Fonts expected in your project (e.g. via next/font or a <link> in index.html):
// - "JetBrains Mono" — headings, labels, data
// - "Inter" — body copy
// Tailwind config should extend: fontFamily.mono -> ['JetBrains Mono', 'monospace']
//                                 fontFamily.sans -> ['Inter', 'sans-serif']

export default function Cover() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#0B0D10] text-[#E7E9EA] min-h-screen px-6 sm:px-10 flex items-center justify-center flex-col">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,209,165,0.12),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1),_transparent_28%),linear-gradient(to_bottom,_rgba(255,255,255,0.03),_transparent_22%)]" />
        <div className="absolute left-1/2 top-[-6rem] h-72 w-72 -translate-x-1/2 rounded-full bg-[#4FD1A5]/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-[#6366F1]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(231,233,234,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(231,233,234,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="mx-auto w-full max-w-4xl pt-16 pb-24 relative">
        <div className="absolute right-0 top-24 h-px w-24 bg-gradient-to-r from-transparent via-[#4FD1A5]/60 to-transparent" />

        {/* status bar */}
        <div
          className={` mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-[0.04em] text-[#8A9099] transition-all duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          
          <span>bengaluru, india</span>
          <span className="text-[#262B31]">·</span>
          <a
            href="/resume.pdf"
            className="text-[#8A9099] underline decoration-[#262B31] underline-offset-4 transition-colors hover:text-[#4FD1A5]"
          >
            resume ↓
          </a>
        </div>

        {/* name / role */}
        <div
          className={`mt-10 transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              backend / systems
            </span>
          </div>
          <h1 className="font-mono text-[32px] sm:text-[44px] font-semibold leading-tight tracking-tight">
            Rayaan Pasha
          </h1>
          <p className="mt-3 max-w-140 font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#8A9099]">
            Backend engineer building event-driven systems with{" "}
            <span className="text-[#E7E9EA]">Node.js</span>,{" "}
            <span className="text-[#E7E9EA]">Kafka</span>,{" "}
            <span className="text-[#E7E9EA]">Redis</span> and{" "}
            <span className="text-[#E7E9EA]">PostgreSQL</span>.
          </p>
        </div>

        {/* current role line */}
        <div
          className={`mt-8 flex items-center gap-3 font-mono text-[13px] text-[#8A9099] transition-all delay-200 duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[#4FD1A5]">$</span>
          <span>
            currently — software developer intern{" "}
            <span className="text-[#E7E9EA]">@ manaverse</span>
          </span>
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-[#262B31]" />

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-[#8A9099]">
          {[
            "distributed systems",
            "event-driven",
            "observability",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#262B31] bg-[#111419]/70 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>

        {/* actions */}
        <div
          className={`mt-8 flex flex-wrap items-center gap-4 transition-opacity delay-300 duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-[#262B31] bg-[#14171B] px-4 py-2 font-mono text-[13px] text-[#E7E9EA] transition-colors hover:border-[#4FD1A5] hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            view projects →
          </a>
          <a
            href="https://www.linkedin.com/in/rayaanpasha"
            className="font-mono text-[13px] text-[#8A9099] underline decoration-[#262B31] underline-offset-4 transition-colors hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            linkedin
          </a>
          <a
            href="https://leetcode.com/u/mdrayaanpasha"
            className="font-mono text-[13px] text-[#8A9099] underline decoration-[#262B31] underline-offset-4 transition-colors hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            leetcode
          </a>
          <a
            href="https://github.com/mdrayaanpasha"
            className="font-mono text-[13px] text-[#8A9099] underline decoration-[#262B31] underline-offset-4 transition-colors hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}