import type { IWorkExperienceEntity } from '@/graphql/models/resume';

interface IExperienceProps {
  workExperience?: IWorkExperienceEntity[];
}

export function HomeExperience({ workExperience }: IExperienceProps) {
  return (
    <section className="z-10 w-full bg-white px-6 py-24 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-sky-600 dark:text-sky-400">
            My Professional Journey
          </h2>
          <h1 className="mt-2 text-5xl font-extrabold text-slate-900 dark:text-white md:text-6xl">
            Work Experience
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Here’s what I’ve been building and designing recently.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {workExperience?.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl bg-gradient-to-br p-6 text-slate-900 shadow-md transition duration-300 dark:text-white"
            >
              <h3 className="mb-1 text-xl font-bold">{exp.title}</h3>
              <p className="mb-2 text-sm">
                <span className="font-semibold">{exp.company}</span> —{' '}
                {exp.start_date} to {exp.end_date || 'Present'}
              </p>
              <p className="mb-4 text-xs italic">{exp.location}</p>

              <p className="mb-4 text-sm text-slate-700 dark:text-slate-100/90">
                {exp.description}
              </p>

              {exp.roles?.map((role) => (
                <div key={role.id} className="mb-4">
                  <h4 className="mb-1 font-semibold">{role.department}</h4>
                  <a
                    href={role.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-block text-xs text-sky-600 underline dark:text-white"
                  >
                    {role.project_url}
                  </a>
                  <ul className="mb-2 list-disc py-4 pl-5 text-sm">
                    {role.deparment_roles?.data?.map((r) => (
                      <li key={r.id}>{r.attributes.role}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.tech_stack?.data?.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-full px-2  py-1 text-xs text-blue-700 ring-1 ring-blue-700 dark:text-white dark:ring-white"
                      >
                        {tech.attributes.techStack}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
