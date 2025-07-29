'use client';

import { motion } from 'framer-motion';

import type { IProjectsEntity } from '@/graphql/models/resume';

interface IProjectsProps {
  projects?: IProjectsEntity[];
}

export function HomeProjects({ projects }: IProjectsProps) {
  return (
    <section className="z-10 w-full bg-white px-6 py-24 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400">
            My Side Hustles
          </h2>
          <h1 className="mt-2 text-5xl font-extrabold text-slate-900 dark:text-white md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Some personal projects and experiments I’ve built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-10">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col border-t-2 border-sky-600 dark:border-sky-400 md:flex-row md:items-center"
            >
              <div className="flex-1 rounded-b-xl bg-sky-600 p-6 text-white dark:bg-sky-700 md:rounded-b-none md:rounded-r-xl">
                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                <p className="mb-6">{project.long_description}</p>
                {project.links?.length > 0 && (
                  <div>
                    <span className="mb-2 block text-xs uppercase tracking-widest">
                      Links
                    </span>
                    <ul className="flex flex-wrap gap-4">
                      {project.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-white hover:underline"
                          >
                            {link.name} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="p-6">
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-sky-700 hover:underline dark:text-sky-400"
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
