'use client';

import { motion } from 'framer-motion';
import {
  FaCode,
  FaCogs,
  FaDesktop,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
} from 'react-icons/fa';

const services = [
  {
    title: 'UI/UX Designer',
    description:
      'Modern, intuitive interfaces that are scalable and responsive across devices.',
    icon: <FaPaintBrush className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'Fullstack Engineer',
    description:
      'Clean, efficient, and scalable code for both frontend and backend systems.',
    icon: <FaCode className="text-4xl text-sky-600 dark:text-white" />,
  },
  {
    title: 'System Design',
    description:
      'Designing scalable and resilient systems with minimal downtime.',
    icon: <FaCogs className="text-4xl text-sky-600 dark:text-white" />,
  },
];

export function HomePlatforms() {
  return (
    <section className="w-full bg-white px-6 pb-6 pt-24 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400">
            My Name is Ian
          </h2>
          <h1 className="mt-2 pb-20 text-center text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            Fullstack Dev (FE) <br />
            UI/UX Designer
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Actively seeking opportunities. Based in Nairobi, Kenya.
            <br />
            Here’s more about what I do 🚀💯
          </p>

          {/* Platforms */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-slate-800 dark:bg-slate-700 dark:text-white">
              <FaGlobe /> Web
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-slate-800 dark:bg-slate-700 dark:text-white">
              <FaMobileAlt /> Mobile
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2 text-slate-800 dark:bg-slate-700 dark:text-white">
              <FaDesktop /> Desktop
            </span>
          </div>
        </div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 p-6 text-slate-900 shadow-md transition duration-300 hover:from-sky-200 hover:to-sky-300 hover:shadow-2xl dark:from-indigo-500 dark:to-sky-500 dark:text-white dark:hover:from-sky-500 dark:hover:to-indigo-600"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="mb-2 text-center text-xl font-bold">
                {service.title}
              </h3>
              <p className="text-center text-sm text-slate-700 dark:text-slate-100/90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
