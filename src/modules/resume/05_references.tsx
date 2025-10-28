import Link from 'next/link';

import type { IReferencesEntity } from '@/graphql/models/resume';

import { IC_References } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeAwardProps {
  e: IReferencesEntity;
}
function ResumeAward({ e }: IResumeAwardProps) {
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 dark:border-slate-700/60 dark:bg-slate-900/40">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {e.name}
        </h3>
        {e.email && (
          <Link
            href={`mailto:${e.email}`}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300 transition hover:text-emerald-200"
          >
            Email
          </Link>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{e.title}</p>
    </article>
  );
}
interface IProps {
  references?: IReferencesEntity[];
}
export function ResumeReferences({ references }: IProps) {
  if (!references || references.length === 0) return <></>;
  return (
    <ResumeField
      Icon={IC_References}
      title="References"
      eyebrow="Trusted Voices"
      description="Leaders and collaborators who can speak to my delivery, communication, and problem-solving."
      showMargin
      id="references"
    >
      {references.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
