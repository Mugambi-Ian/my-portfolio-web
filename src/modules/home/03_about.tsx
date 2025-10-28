'use client';

import { motion } from 'framer-motion';

export function HomeAbout() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white px-6 pb-56 pt-32 text-slate-900 md:scroll-mt-32"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-slate-100 via-white to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            01 • Who I Am
          </p>
          <h2 className="text-4xl font-black text-slate-950 md:text-5xl">
            Product-minded engineer with 7+ years turning ideas into durable
            outcomes
          </h2>
          <p className="text-lg text-slate-600">
            I’m Ian Mugambi — a Nairobi-based senior fullstack engineer and
            designer. I thrive where ambitious UX and systems architecture meet.
            From fintech to SaaS, I’ve led cross-functional squads, shipped
            high-stakes launches, and kept the craft sharp while doing it.
          </p>
          <p className="text-lg text-slate-600">
            My path started in high school, prototyping a national award-winning
            digital police records system. Since then, I’ve architected
            platforms used daily by global operators and designed experiences
            that keep customers loyal.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative isolate h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-slate-950 p-1 shadow-[0_25px_90px_-45px_rgba(16,185,129,0.6)] lg:w-[420px]"
        >
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_60%)]" />
          <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.85))]" />
          <div className="relative z-20 flex h-full flex-col justify-between rounded-[2.2rem] border border-slate-800/80 bg-slate-950/80 p-10">
            <div className="space-y-4 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
                Operating System
              </p>
              <p className="text-2xl font-semibold">
                Pragmatic optimism, ruthless prioritisation, and craft that
                makes complex products feel effortless.
              </p>
            </div>
            <div className="space-y-4 text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Currently exploring
              </p>
              <p className="text-lg">
                Machine-assisted UX workflows, high-scale data pipelines, and
                ways to mentor the next wave of builders in Nairobi.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
