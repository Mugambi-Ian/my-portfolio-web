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
      'React-based framework powering fast server-side rendering and static generation.',
    icon: <SiNextdotjs className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid, responsive UI design.',
    icon: <SiTailwindcss className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'Framer Motion',
    description:
      'Smooth animations and page transitions for an engaging user experience.',
    icon: <SiFramer className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'Strapi CMS',
    description: 'Headless CMS powering the content for this portfolio.',
    icon: <SiStrapi className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'GraphQL + Apollo',
    description:
      'Flexible API queries with GraphQL, consumed using Apollo Client.',
    icon: <SiGraphql className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'Node.js & PostgreSQL',
    description:
      'Backend runtime with a robust relational database for structured data.',
    icon: <FaDatabase className="text-4xl text-sky-600 dark:text-white" />,
  },
];

export function HomePortfolioStack() {
  return (
    <section className="w-full bg-white px-6 pb-6 pt-24 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Portfolio Stack
          </h2>
          <h1 className="mt-2 pb-10 text-center text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            How This Portfolio Was Built
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            This site is crafted with modern tools for speed, scalability, and a
            great developer experience. Here’s the stack that powers it.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-xl  p-6 text-slate-900 shadow-md transition duration-300 dark:text-white  "
            >
              <div className="mb-4 flex justify-center">{tech.icon}</div>
              <h3 className="mb-2 text-center text-xl font-bold">
                {tech.title}
              </h3>
              <p className="text-center text-sm text-slate-700 dark:text-slate-100/90">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
