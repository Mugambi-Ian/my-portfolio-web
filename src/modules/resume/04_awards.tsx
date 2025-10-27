import type { FC } from 'react';

import type { IAwardsEntity } from '@/graphql/models/resume';

import { IC_Award } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeAward {
  e: IAwardsEntity;
}
const ResumeAward: FC<IResumeAward> = ({ e }) => {
  const parseDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });

  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 dark:border-slate-700/60 dark:bg-slate-900/40">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {e.title}
          </h3>
          <p className="text-sm font-medium text-emerald-400">{e.award}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          {parseDate(e.date!)}
        </p>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {e.description}
      </p>
    </article>
  );
};
interface IProps {
  awards?: IAwardsEntity[];
}

export function ResumeAwards({ awards }: IProps) {
  if (!awards || awards.length === 0) return <></>;
  return (
    <ResumeField
      Icon={IC_Award}
      title="Awards"
      eyebrow="Recognition"
      description="Highlights from competitions and organisations that have trusted my craft."
      showMargin
      id="awards"
    >
      {awards.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
