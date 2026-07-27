import Link from 'next/link';
import type { ReactNode } from 'react';

import { SITE } from '@/config/site';
import { REFERENCES_NOTE } from '@/data/projects';
import { IconDownload, IconGitHub, IconLinkedIn } from '@/modules/icons';
import { GridBackdrop } from '@/modules/shared/grid-backdrop';
import { Section } from '@/modules/shared/section';
import { TerminalPanel } from '@/modules/shared/terminal-panel';

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber';

const GITHUB_HANDLE = SITE.github.replace('https://github.com/', '');
const LINKEDIN_HANDLE = 'in/ian-mugambi';

const BUTTON = `inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 font-mono text-sm text-fg-muted transition-colors hover:border-fg hover:text-fg ${FOCUS}`;

const COMMAND_LINK = `text-amber underline-offset-4 hover:underline ${FOCUS}`;

function CommandLine({
  command,
  children,
}: {
  command: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-3 first:mt-0">
      <div>
        <span className="text-term-green">$</span>{' '}
        <span className="text-fg">{command}</span>
      </div>
      <div className="pl-4">
        <span aria-hidden className="text-fg-faint">
          #{' '}
        </span>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <Section id="contact" index="06" title="Contact" band>
      <div className="relative overflow-hidden">
        <GridBackdrop cell={48} />
        <div className="relative grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Hiring for a senior full-stack role?
            </h3>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-fg-muted sm:text-base">
              I&apos;m interviewing now. Email me and I&apos;ll reply with
              specifics — code, references, and timelines.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className={`mt-6 block break-all font-mono text-2xl text-amber underline-offset-4 hover:underline sm:text-4xl ${FOCUS}`}
            >
              {SITE.email}
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className={BUTTON}
              >
                <IconGitHub width={16} height={16} />
                GitHub
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className={BUTTON}
              >
                <IconLinkedIn width={16} height={16} />
                LinkedIn
              </a>
              <Link href="/resume/" className={BUTTON}>
                <IconDownload width={16} height={16} />
                Download résumé
              </Link>
            </div>
            <p className="mt-8 text-sm text-fg-faint">{REFERENCES_NOTE}</p>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <TerminalPanel title="~/ian — contact.sh">
              <CommandLine command="mail ian">
                <a
                  href={`mailto:${SITE.email}`}
                  className={`break-all ${COMMAND_LINK}`}
                >
                  {SITE.email}
                </a>
              </CommandLine>
              <CommandLine command="open github">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className={COMMAND_LINK}
                >
                  {GITHUB_HANDLE}
                </a>
              </CommandLine>
              <CommandLine command="open linkedin">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={COMMAND_LINK}
                >
                  {LINKEDIN_HANDLE}
                </a>
              </CommandLine>
              <CommandLine command="cat resume.pdf">
                <Link href="/resume/" className={COMMAND_LINK}>
                  /resume
                </Link>
              </CommandLine>
            </TerminalPanel>
          </div>
        </div>
      </div>
    </Section>
  );
}
