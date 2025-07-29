'use client';

import { motion } from 'framer-motion';

export function HomeAbout() {
  return (
    <section className="w-full bg-white px-6 py-12 text-slate-800  transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 text-sm uppercase tracking-widest text-amber-500">
            01. About Me
          </h2>
          <h1 className="mb-6 text-4xl font-extrabold">
            Driven by Passion, Powered by Code
          </h1>

          <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
            Hello! I’m Ian Mugambi — a Fullstack Developer and UI/UX Designer
            based in Nairobi, Kenya. I’m passionate about solving problems with
            technology and building scalable tools that improve efficiency,
            security, and user experience across industries.
          </p>

          <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
            My journey began in high school, where I became a national finalist
            in the Kenya National Science and Engineering Fair for a digital
            police records system. That experience ignited a lifelong commitment
            to software engineering, and I’ve been building ever since.
          </p>

          <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">
            With over 5 years of professional experience across fintech,
            insurtech, and logistics, I’ve led cross-platform app development,
            architected resilient systems, and designed intuitive interfaces
            used in production environments.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            I thrive in collaborative teams, embrace agile workflows, and am
            constantly exploring better ways to ship reliable software. If
            you're looking for a versatile engineer who delivers polished
            results with a strong product mindset, I’d love to connect.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative h-80 w-full rounded-3xl border border-amber-500 bg-amber-400/60 shadow-xl md:w-80"
        >
          <div className="absolute left-3 top-3 -z-10 size-full rounded-3xl bg-amber-400" />
        </motion.div>
      </div>
    </section>
  );
}
