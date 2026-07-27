import { SKILLS } from '@/data/skills';
import { Section } from '@/modules/shared/section';
import { TerminalPanel } from '@/modules/shared/terminal-panel';

interface TreeLine {
  connector: string;
  path: string;
  value: string;
  gap?: boolean;
}

/** A hand-written view of the same stack the groups on the left list. */
// Budget: 30 rendered characters per line (connector + path + two spaces +
// value). The panel is at its narrowest at exactly lg, where its text column
// is ~257px; the tree also steps down to 12px from lg up, so 30 characters
// land around 216px and keep real slack at lg, xl, and 2xl. It must never
// fold or need the panel's horizontal scroller.
const TREE: TreeLine[] = [
  {
    connector: '',
    path: 'client/',
    value: 'Flutter · Next.js',
  },
  {
    connector: ' └─ ',
    path: 'api/',
    value: 'Spring Boot · .NET',
  },
  {
    connector: '    ├─ ',
    path: 'contracts/',
    value: 'GraphQL',
  },
  {
    connector: '    └─ ',
    path: 'data/',
    value: 'Postgres · Mongo',
  },
  {
    connector: '',
    path: 'infra/',
    value: 'Docker · Caddy · AWS',
    gap: true,
  },
  {
    connector: '',
    path: 'design/',
    value: 'Figma',
  },
];

export function Range() {
  return (
    <Section
      id="range"
      index="02"
      title="Range"
      band
      kicker="What I work with, in four groups: frontend and mobile, backend and APIs, infrastructure and delivery, and design."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
          {SKILLS.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg sm:text-xs">
                  {group.title}
                </h3>
                <span aria-hidden className="h-px flex-1 bg-line" />
              </div>
              <ul className="mt-4 text-sm leading-7 text-fg-muted">
                {group.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden className="font-mono text-amber/60">
                      ▸{' '}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <TerminalPanel title="~/ian — stack.txt">
            {/* lg is the panel's narrowest column; step the tree down a size
                there so the 30-character lines keep real slack. */}
            <div className="lg:text-xs">
              <p className="text-fg-faint">{'# how the layers connect'}</p>
              <div className="mt-2">
                {TREE.map((line) => (
                  <p
                    key={line.path}
                    className={
                      line.gap ? 'mt-3 whitespace-pre' : 'whitespace-pre'
                    }
                  >
                    {line.connector ? (
                      <span className="text-fg-faint">{line.connector}</span>
                    ) : null}
                    <span className="text-amber">{line.path}</span>
                    <span className="text-fg">{`  ${line.value}`}</span>
                  </p>
                ))}
              </div>
            </div>
          </TerminalPanel>
        </div>
      </div>
    </Section>
  );
}
