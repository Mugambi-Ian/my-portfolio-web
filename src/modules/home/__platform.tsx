'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HomePlatforms() {
  return (
    <section
      id="intro"
      className="relative isolate overflow-hidden bg-slate-950 px-6 py-80 text-slate-100"
    >
      <div className="absolute -left-40 top-0 size-[620px] rounded-full bg-gradient-to-br from-teal-400/40 via-sky-500/20 to-transparent blur-3xl" />
      <div className="absolute -right-28 bottom-10 size-[460px] rounded-full bg-gradient-to-br from-emerald-400/30 via-indigo-500/10 to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >

          <div className="space-y-6">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Senior Fullstack & Product Engineer crafting confident digital
              experiences.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 md:text-xl">
              I ship resilient platforms end-to-end — aligning product strategy
              with pixel-level craft. Seven years in, I still obsess over the
              detail that makes users trust and teams move faster.
            </p>
          </div>


          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Résumé
            </Link>
            <Link
              href="mailto:linksian63@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              Let’s Talk Opportunities
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
