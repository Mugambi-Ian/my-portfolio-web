'use client';

import { motion } from 'framer-motion';
import { FaComments, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const technologies = [
  {
    title: 'Backend & Domain APIs',
    tagline: 'Scalable patterns with clean contracts',
    icon: <FaServer className="text-5xl text-slate-900" />,
    stack: [
      'C#/.NET • Node.js • NestJS',
      'GraphQL + REST gateway orchestration',
      'Auth flows → JWT, Firebase, OAuth',
      'Relational data at scale with PostgreSQL',
    ],
  },
  {
    title: 'Experience Engineering',
    tagline: 'Pixel-perfect frontends that can evolve',
    icon: <FaLaptopCode className="text-5xl text-slate-900" />,
    stack: [
      'React, Next.js, Vue, React Native',
      'Design systems, token-driven theming',
      'Accessibility baked into every flow',
      'UX research handoff → Figma to prod',
    ],
  },
  {
    title: 'Delivery & Ops',
    tagline: 'Confidence through automation',
    icon: <FaTools className="text-5xl text-slate-900" />,
    stack: [
      'CI/CD → GitHub Actions, Jenkins, Bitbucket',
      'Containerization with Docker, orchestration ready',
      'SLA monitoring, feature flags, observability',
      'Cloud: DigitalOcean, Vercel, Firebase',
    ],
  },
  {
    title: 'Support & Alignment',
    tagline: 'People-first systems thinking',
    icon: <FaComments className="text-5xl text-slate-900" />,
    stack: [
      'Stakeholder comms, roadmap facilitation',
      'Product discovery, user interviews, usability loops',
      'Knowledge base + onboarding playbooks',
    ],
  },
];

export function HomeTech() {
  return (
    <section
      id="tech"
      className="relative isolate scroll-mt-28 overflow-hidden bg-slate-100 px-6 py-56 text-slate-900 md:scroll-mt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.08),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,3fr)] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-600">
              00 • Range
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Technical fluency that keeps momentum high
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              I bridge design intent and engineering delivery. These are the
              arenas where I’m repeatedly trusted to unblock teams and ship with
              confidence.
            </p>
          </div>
          <p className="max-w-md text-sm text-slate-500">
            Need a different stack? No problem. I map fundamentals quickly and
            adapt patterns without breaking what already works.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {technologies.map((tech, index) => (
            <motion.article
              key={tech.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ delay: index * 0.1 }}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.55)] backdrop-blur"
            >
              <div className="flex items-center gap-5">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-200/70">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-500">{tech.tagline}</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                {tech.stack.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
