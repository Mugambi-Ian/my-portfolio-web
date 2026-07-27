import { SITE } from '@/config/site';
import { OPEN_SOURCE } from '@/data/projects';
import { IconExternal } from '@/modules/icons';
import { Section } from '@/modules/shared/section';
import { TerminalPanel } from '@/modules/shared/terminal-panel';

const HANDLE = SITE.github.replace(/^https?:\/\/github\.com\//, '');

export function OpenSource() {
  return (
    <Section id="open-source" index="04" title="Open Source" band>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="space-y-6 lg:col-span-7">
          {OPEN_SOURCE.map((p) => (
            <div key={p.name} className="border border-line bg-ink-overlay p-5">
              <p className="font-mono text-lg text-fg">{p.name}</p>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-fg-muted">
                {p.description}
              </p>
              {p.npmUrl ? (
                <a
                  href={p.npmUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`view on npm — ${p.name}, opens in a new tab`}
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  view on npm
                  <IconExternal className="size-3.5" />
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <div className="lg:col-span-5">
          <TerminalPanel title="~/ian — install">
            <p className="whitespace-pre">
              <span className="text-term-green">$ </span>
              <span className="text-fg">npm i -g terminal-tetris</span>
            </p>
            <p className="mt-1 text-fg-muted">
              <span aria-hidden className="text-fg-faint">
                →{' '}
              </span>
              play tetris in your terminal
            </p>
            <p className="mt-4 whitespace-pre">
              <span className="text-term-green">$ </span>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`gh repo list ${HANDLE} — opens GitHub in a new tab`}
                className="text-fg transition-colors hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {`gh repo list ${HANDLE}`}
              </a>
            </p>
          </TerminalPanel>
        </div>
      </div>
    </Section>
  );
}
