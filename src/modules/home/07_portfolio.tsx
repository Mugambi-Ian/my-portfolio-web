'use client';

import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa';
import {
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiStrapi,
  SiTailwindcss,
} from 'react-icons/si';

const portfolioStack = [
  {
    title: 'Next.js',
    description:
      'Hybrid rendering, routing, and performance budgets tuned for production-grade launches.',
    icon: <SiNextdotjs className="text-4xl text-emerald-300" />,
  },
  {
    title: 'Tailwind CSS',
    description:
      'Utility-first theming with design tokens that keep multi-brand experiences consistent.',
    icon: <SiTailwindcss className="text-4xl text-emerald-300" />,
  },
  {
    title: 'Framer Motion',
    description:
      'Micro-interactions and page choreography that give teams a living design system.',
    icon: <SiFramer className="text-4xl text-emerald-300" />,
  },
  {
    title: 'Strapi CMS',
    description:
      'Structured content layer enabling non-dev teams to ship updates without blockers.',
    icon: <SiStrapi className="text-4xl text-emerald-300" />,
  },
  {
    title: 'GraphQL + Apollo',
    description:
      'Typed contracts between platforms and services, reducing integration churn.',
    icon: <SiGraphql className="text-4xl text-emerald-300" />,
  },
  {
    title: 'Node.js + PostgreSQL',
    description:
      'Battle-tested runtime and storage tuned for observability, resilience, and speed.',
    icon: <FaDatabase className="text-4xl text-emerald-300" />,
  },
];

export function HomePortfolioStack() {
  return (
    <section
      id="stack"
      className="relative  isolate scroll-mt-28 overflow-hidden bg-slate-950 px-6 py-56 text-slate-100 md:scroll-mt-32 md:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
              Build Stack
            </p>
            <h2 className="text-4xl font-black text-white md:text-5xl">
              Mordern-grade tech tuned for velocity and thoughtful polish
            </h2>
            <p className="text-lg text-slate-300">
              Every tool here supports rapid iteration with guardrails. It’s how
              I help teams deliver confidently, even when roadmaps shift
              mid-sprint.
            </p>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            I adapt to existing ecosystems fast. This stack is my launchpad, but
            I’m at home plugging into established pipelines and modernizing as
            we go.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-[0_25px_80px_-40px_rgba(16,185,129,0.45)]"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-slate-900/70">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {tech.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
