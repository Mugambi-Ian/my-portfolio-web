import Link from 'next/link';

import type { IReferencesEntity } from '@/graphql/models/resume';

import { IC_References } from '../icons/resume';
import { ResumeField } from '../shared/section';

interface IResumeAwardProps {
  e: IReferencesEntity;
}
function ResumeAward({ e }: IResumeAwardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-slate-800 print:border-0 print:bg-transparent print:p-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{e.name}</h3>
        {e.email && (
          <Link
            href={`mailto:${e.email}`}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 underline"
          >
            Email
          </Link>
        )}
      </div>
      <p className="text-sm text-slate-600">{e.title}</p>
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
      id="references"
    >
      {references.map((e) => (
        <ResumeAward key={e.id} e={e!} />
      ))}
    </ResumeField>
  );
}
