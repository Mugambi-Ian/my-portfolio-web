import type { IWorkExperienceEntity } from '@/graphql/models/resume';

interface IExperienceProps {
  workExperience?: IWorkExperienceEntity[];
}

export function HomeExperience({ workExperience }: IExperienceProps) {
  return (
    <section
      id="experience"
      className="relative  z-10 w-full scroll-mt-28 overflow-hidden bg-white px-6 py-32 text-slate-900 md:scroll-mt-32 md:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            03 • Journey
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            7+ years trusted to own outcomes end-to-end
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            From seed-stage velocity to enterprise governance, I embed with
            teams, build empathy fast, and leave every org with processes that
            keep shipping after I’m gone.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {workExperience?.map((exp) => (
            <div
              key={exp.id}
              className="flex h-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white px-7 py-8 text-left shadow-[0_20px_70px_-40px_rgba(15,23,42,0.45)]"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {exp.title}
                </h3>
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">
                    {exp.company}
                  </span>{' '}
                  — {exp.start_date} to {exp.end_date || 'Present'}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {exp.location}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {exp.description}
              </p>

              {exp.roles?.map((role) => (
                <div key={role.id} className="mb-4">
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
                    {role.department}
                  </h4>
                  <a
                    href={role.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition hover:text-emerald-500"
                  >
                    {role.project_url}
                  </a>
                  <ul className="mb-4 space-y-2 text-sm text-slate-600">
                    {role.deparment_roles?.data?.map((r) => (
                      <li
                        key={r.id}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        {r.attributes.role}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {role.tech_stack?.data?.map((tech) => (
                      <span
                        key={tech.id}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600"
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
