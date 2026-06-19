import React, { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, Github, Linkedin, Mail } from "lucide-react";

const MEDIUM_USERNAME = "mohdrayaanpasha";

export default function Writing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.items || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main id="top" className="min-h-screen bg-[#0B0D10] px-6 py-6 text-[#E7E9EA] sm:px-10">
      <nav className="sticky top-0 z-50 mb-10 flex items-center justify-between border-b border-[#262B31] bg-[#0B0D10]/90 py-4 backdrop-blur-sm">
        <a
          href="/"
          className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#E7E9EA] transition-colors hover:text-[#4FD1A5]"
        >
          RAYAAN.
        </a>

        <div className="hidden gap-8 text-[12px] uppercase tracking-[0.16em] text-[#8A9099] md:flex">
          <a href="/#work" className="transition-colors hover:text-[#4FD1A5]">
            Work
          </a>
          <a href="/#experience" className="transition-colors hover:text-[#4FD1A5]">
            Experience
          </a>
          <a href="/#contact" className="transition-colors hover:text-[#4FD1A5]">
            Contact
          </a>
        </div>

        <a
          href="/writing"
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#4FD1A5]"
        >
          Writing
        </a>
      </nav>

      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-linear-to-r from-[#4FD1A5] to-transparent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
              writing
            </span>
          </div>

          <h1 className="font-mono text-[32px] font-semibold tracking-tight sm:text-[44px]">
            Notes on distributed systems, backend architecture, and things I broke in production.
          </h1>

          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#8A9099] sm:text-[18px]">
            Short posts on systems thinking, tradeoffs, and the bugs that only
            show up after deploy.
          </p>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="rounded-3xl border border-[#262B31] bg-[#14171B] p-6 sm:p-8">
              <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-[#8A9099]">
                Loading posts...
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <article
                key={post.guid}
                className="rounded-3xl border border-[#262B31] bg-[#14171B] p-6 transition-all duration-300 hover:border-[#4FD1A5] sm:p-8"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="mb-3 flex items-center gap-3 text-[12px] uppercase tracking-[0.16em] text-[#8A9099]">
                      <BookOpen size={13} />
                      <span>Medium post</span>
                    </div>

                    <h2 className="font-mono text-[22px] font-semibold text-[#E7E9EA] sm:text-[26px]">
                      {post.title}
                    </h2>

                    <p
                      className="mt-3 text-[16px] leading-relaxed text-[#8A9099] sm:text-[17px]"
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    />
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[#262B31] bg-[#0F1216] px-4 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#E7E9EA] transition-colors hover:border-[#4FD1A5] hover:text-[#4FD1A5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0D10]"
                  >
                    Read post <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))
          )}
        </div>

        <footer id="contact" className="mt-16 border-t border-[#262B31] pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-linear-to-r from-[#4FD1A5] to-transparent" />
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4FD1A5]">
                  contact
                </span>
              </div>
              <h2 className="font-mono text-[24px] font-semibold tracking-tight sm:text-[32px]">
                If a post is useful, keep reading. If you want to talk systems, get in touch.
              </h2>
              <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-[#8A9099]">
                I usually write about backend architecture, distributed systems,
                and the mistakes that turned into reliable patterns.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[13px] uppercase tracking-[0.14em] text-[#8A9099]">
              <a
                href="mailto:mdrayaanpasha@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#4FD1A5]"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://github.com/mdrayaanpasha"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#4FD1A5]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/mdrayaanpasha"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[#4FD1A5]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#262B31] pt-6 text-[12px] uppercase tracking-[0.14em] text-[#8A9099] md:flex-row md:items-center md:justify-between">
            <p>Medium archive via RSS feed</p>
            <a href="/" className="transition-colors hover:text-[#4FD1A5]">
              Back to home
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}