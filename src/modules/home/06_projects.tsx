'use client';

import { motion } from 'framer-motion';

import type { IProjectsEntity } from '@/graphql/models/resume';

interface IProjectsProps {
  projects?: IProjectsEntity[];
}

export function HomeProjects({ projects }: IProjectsProps) {
  return (
    <section
      id="projects"
      className="relative  z-10 w-full scroll-mt-28 overflow-hidden bg-slate-950 px-6 py-32 text-slate-100 md:scroll-mt-32 md:px-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.15),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
            04 • Experiments & Impact
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            From zero to resonance
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Side hustles, prototypes, and lab work that sharpen my instincts.
            Each project taught me something about scale, usability, or how to
            guide teams toward evidence-backed decisions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-10 shadow-[0_25px_80px_-40px_rgba(16,185,129,0.45)] transition hover:border-emerald-300/40 md:flex-row md:items-start"
            >
              <div className="flex-1 space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    Concept Lab
                  </span>
                  <h3 className="text-3xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-base text-slate-300">
                  {project.long_description}
                </p>
                {project.links?.length > 0 && (
                  <div className="space-y-3">
                    <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
                      Featured Links
                    </span>
                    <ul className="flex flex-wrap gap-4 text-sm text-emerald-200">
                      {project.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 transition hover:border-emerald-200 hover:text-white"
                          >
                            {link.name} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="md:w-48">
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200 transition hover:border-emerald-200"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
