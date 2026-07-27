import { SITE } from '@/config/site';
import { Section } from '@/modules/shared/section';

const FACTS: { term: string; detail: string }[] = [
  { term: 'Location', detail: SITE.location },
  {
    term: 'Education',
    detail: 'BSc Computer Science, Kabarak University (2021)',
  },
  { term: 'Award', detail: 'KNSEF national finalist, 2016' },
  { term: 'Professional roles since', detail: 'Dec 2020' },
  {
    term: 'Languages in production',
    detail: 'TypeScript · Dart · Java · C# · PHP',
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="05"
      title="About"
      kicker="Where I started, what I have shipped, and what I reach for first."
    >
      <div className="grid grid-cols-12 gap-x-8 gap-y-12">
        <div className="col-span-12 space-y-5 text-[15px] leading-relaxed text-fg-muted sm:text-base lg:col-span-6">
          <p className="max-w-[62ch]">
            In high school I built a police-records system — role-based portals,
            shift management, automated next-of-kin notifications — and took it
            to the finals of the Kenya National Science and Engineering Fair.
            That was 2016, and I have not stopped since.
          </p>
          <p className="max-w-[62ch]">
            I studied Computer Science at Kabarak University, and along the way
            built the university&apos;s election system: five-plus live
            elections, five thousand voters each. Since then the work has been
            production systems people rely on — a remittance platform moving
            real money, a retail platform that has processed over a million
            transactions, a pensions group&apos;s mobile and API layer.
          </p>
          <p className="max-w-[62ch]">
            I work across the stack by default — Flutter and Next.js in front,
            Spring Boot, .NET, or Node behind, plus the pipelines that ship them
            — and I design in Figma when the work needs it.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted sm:text-xs">
            {'// on the record'}
          </p>
          {/*
            The term/detail pair used to sit on one baseline, which left the
            monospace detail roughly half of an already-narrow column and broke
            every value onto two or three lines. Stacking the term over the
            detail hands the value the full column width, so each one sits on
            a single line from the lg split up.
          */}
          <div className="mt-4 border border-line bg-ink-raised p-5 sm:p-6">
            <dl>
              {FACTS.map((fact) => (
                <div
                  key={fact.term}
                  className="border-b border-line py-2.5 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                    {fact.term}
                  </dt>
                  <dd className="mt-1.5 font-mono text-sm text-fg">
                    {fact.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
