import { useEffect, useState } from "react";

export default function Backend() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent text-[#E7E9EA] px-6 sm:px-10">
      <div className="mx-auto w-full max-w-4xl pt-10 pb-16">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          {/* <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              About Me.
            </span>
          </div> */}

          <h2 className="font-mono text-[28px] sm:text-[32px] font-semibold leading-tight tracking-tight">
            Quick Summary
          </h2>

          <p className="mt-4 max-w-140 font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#8A9099]">
            I work on the backend.. APIs, message queues, databases, and the
            infrastructure that keeps them running. Over the past two years I've
            built production systems across 5 startups: AI-powered platforms,
            real-time financial pipelines, and event-driven microservices using
            <span className="text-[#E7E9EA]"> Node.js</span>,{' '}
            <span className="text-[#E7E9EA]">Kafka</span>,{' '}
            <span className="text-[#E7E9EA]">RabbitMQ</span>,{' '}
            <span className="text-[#E7E9EA]">Redis</span>, and{' '}
            <span className="text-[#E7E9EA]">PostgreSQL</span>.
          </p>

    

          <p className="mt-4 max-w-140 font-sans text-[16px] sm:text-[18px] leading-relaxed text-[#8A9099]">
            Outside of work: 25+ podium finishes in algorithmic and development
            competitions, and I lead IT for two student organizations running
            community events for 200+ participant events.
          </p>

      
        </div>

        <div className="mt-8 h-px w-full bg-[#262B31]" />
      </div>
    </section>
  );
}
