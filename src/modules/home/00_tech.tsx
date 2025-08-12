'use client';

import { motion } from 'framer-motion';
import { FaComments, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const technologies = [
  {
    title: 'Backend & APIs',
    icon: <FaServer className="text-6xl text-sky-600 dark:text-white" />,
    stack: [
      '.NET (C#)',
      'Node.js',
      'NestJS',
      'REST & GraphQL APIs',
      'Laravel',
      'Firebase Auth',
      'PostgresSQL',
    ],
  },
  {
    title: 'Frontend & UI',
    icon: <FaLaptopCode className="text-6xl text-sky-600 dark:text-white" />,
    stack: [
      'React',
      'React Native',
      'Next.js',
      'Vue.js',
      'Figma',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    title: 'DevOps & Tooling',
    icon: <FaTools className="text-6xl text-sky-600 dark:text-white" />,
    stack: [
      'Docker',
      'CI/CD (Jenkins, GitHub Actions)',
      'Bitbucket',
      'Jira',
      'SonarQube',
      'Nginx',
      'DigitalOcean',
    ],
  },
  {
    title: 'Support & Comms',
    icon: <FaComments className="text-6xl text-sky-600 dark:text-white" />,
    stack: [
      'HubSpot & Asana',
      'Browser DevTools',
      'Technical Support',
      'Video Call Support',
      'Ecommerce Platforms',
      'Knowledge Base Setup',
      'Onboarding & Training',
    ],
  },
];

export function HomeTech() {
  return (
    <section className="w-full bg-white px-6 py-16 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400">
            00. Technologies
          </h2>
          <h1 className="mt-2 text-4xl font-bold">Tools & Tech I Use</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            I’ve built scalable systems using a wide variety of tools—spanning
            web, mobile, desktop, and infrastructure. Here's a breakdown of the
            technologies I've used in production:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl justify-around bg-gradient-to-br p-6 text-slate-900 shadow-md transition duration-300 dark:text-white dark:hover:from-sky-500 "
            >
              <div className="mb-4 flex">{tech.icon}</div>
              <h3 className="my-2 text-xl font-bold">
                {tech.title}
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-700 dark:text-slate-100/90">
                {tech.stack.map((item, i) => (
                  <li key={i} className="py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
