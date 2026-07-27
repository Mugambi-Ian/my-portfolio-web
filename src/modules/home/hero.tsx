import Link from 'next/link';

import { SITE } from '@/config/site';
import { IconMail } from '@/modules/icons';
import { GridBackdrop } from '@/modules/shared/grid-backdrop';
import { TerminalPanel } from '@/modules/shared/terminal-panel';
import { TypedLine } from '@/modules/shared/typed-line';

const SHIPPING = ['fintech', 'retail', 'mobile'];
const LANGUAGES = ['TypeScript', 'Dart', 'Java', 'C#', 'PHP'];

const INDENT = '  ';

function JsonKey({ name }: { name: string }) {
  return (
    <>
      <span className="text-fg-muted">&quot;{name}&quot;</span>
      <span className="text-fg-faint">: </span>
    </>
  );
}

function JsonString({ value }: { value: string }) {
  return <span className="text-amber">&quot;{value}&quot;</span>;
}

function JsonArray({ items }: { items: string[] }) {
  return (
    <>
      <span className="text-fg-faint">[</span>
      {items.map((item, i) => (
        <span key={item}>
          <JsonString value={item} />
          {i < items.length - 1 ? (
            <span className="text-fg-faint">, </span>
          ) : null}
        </span>
      ))}
      <span className="text-fg-faint">]</span>
    </>
  );
}

const CTA_FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

export function Hero() {
  return (
    <section
      id="intro"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-line"
    >
      <GridBackdrop />
      <div className="relative mx-auto w-full max-w-wrap px-5 py-20 sm:px-8">
        <div className="grid grid-cols-12 items-center gap-x-10 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-sm">
              <TypedLine command="whoami" />
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl">
              {SITE.name}
              <span className="mt-2 block text-2xl text-fg-muted sm:text-4xl lg:text-5xl">
                {SITE.title}
              </span>
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-line" />
              <p className="font-mono text-sm text-amber">
                Writing software since 2016 — before machines could.
              </p>
            </div>

            <p className="mt-6 max-w-[56ch] leading-relaxed text-fg-muted">
              I build things end to end. On a normal day that is a mobile
              client, the API it calls, and the pipeline that ships them both.
              The current work is cross-border payments. I also still maintain a
              retail platform in Nairobi.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/#work"
                className={`border border-amber px-5 py-3 font-mono text-sm text-amber transition-colors hover:bg-amber hover:text-ink ${CTA_FOCUS}`}
              >
                view selected work
              </Link>
              <Link
                href="/resume/"
                className={`border border-line-strong px-5 py-3 font-mono text-sm text-fg-muted transition-colors hover:border-fg hover:text-fg ${CTA_FOCUS}`}
              >
                download résumé
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className={`inline-flex items-center gap-2 px-2 py-3 font-mono text-sm text-fg-muted transition-colors hover:text-fg ${CTA_FOCUS}`}
              >
                <IconMail width={16} height={16} />
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <TerminalPanel title="~/ian — profile.json">
              {/* pre-wrap, not pre: the array lines must fold at narrow
                  panel widths instead of clipping under overflow-x. */}
              <div className="whitespace-pre-wrap break-words">
                <div className="text-fg-faint">{'{'}</div>
                <div>
                  {INDENT}
                  <JsonKey name="role" />
                  <JsonString value={SITE.title} />
                  <span className="text-fg-faint">,</span>
                </div>
                <div>
                  {INDENT}
                  <JsonKey name="based" />
                  <JsonString value="Kenya · remote-friendly" />
                  <span className="text-fg-faint">,</span>
                </div>
                <div>
                  {INDENT}
                  <JsonKey name="shipping" />
                  <JsonArray items={SHIPPING} />
                  <span className="text-fg-faint">,</span>
                </div>
                <div>
                  {INDENT}
                  <JsonKey name="languages" />
                  <JsonArray items={LANGUAGES} />
                  <span className="text-fg-faint">,</span>
                </div>
                <div>
                  {INDENT}
                  <JsonKey name="live" />
                  <JsonString value="App Store · Google Play" />
                </div>
                <div className="text-fg-faint">{'}'}</div>
              </div>
              <div aria-hidden className="my-4 h-px w-full bg-line" />
              <p className="flex items-center gap-2 font-mono text-xs text-fg-muted">
                <span
                  aria-hidden
                  className="size-2 shrink-0 rounded-full bg-term-green"
                />
                open to senior full-stack roles
              </p>
            </TerminalPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
