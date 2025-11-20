import type { IWorkExperienceEntity } from '@/graphql/models/resume';
import { getDuration } from '@/utils';

interface IProps {
  experience?: IWorkExperienceEntity[];
}

export function ResumeYears({ experience }: IProps) {
  if (!experience || experience.length === 0) return <></>;

  const totalExperience = experience.reduce(
    (c, n) =>
      c +
      (new Date(n?.end_date || new Date()).getTime() -
        new Date(n?.start_date!).getTime()),
    365 * 24 * 60 * 60 * 1000
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-7 text-center text-slate-900 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.5)] print:border-0 print:bg-transparent print:p-0 print:text-left print:shadow-none">
      <h2 className="mt-3 text-sm font-semibold tracking-[0.08em] text-slate-600">
        Total Experience
      </h2>
      <p className="mt-2 text-5xl font-black tracking-tight text-slate-900">
        {getDuration(totalExperience)}
      </p>
      <p className="mt-3 text-sm text-slate-600">
        Years crafting focused product engineering outcomes.
      </p>
    </section>
  );
}
