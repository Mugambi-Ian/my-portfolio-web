import type { Metadata } from 'next';
import Link from 'next/link';

import { ResumeDocument } from '@/modules/resume/document';

// Browsers derive the default "Save as PDF" filename from the printed
// document's <title>, so this string is the downloaded filename. `absolute`
// opts out of the root layout's `%s | Ian Mugambi` template; nothing between
// here and the root sets a title, so this value reaches the tab verbatim.
export const metadata: Metadata = {
  title: { absolute: 'Ian-Mugambi-Resume' },
  robots: { index: false, follow: false },
};

// Auto-print only when opened directly (the fallback tab); the download
// button's hidden iframe drives printing itself, so the top-frame check
// prevents a double print dialog.
const AUTO_PRINT = `(function(){if(window.self!==window.top)return;if(new URLSearchParams(location.search).get('print')!=='1')return;var go=function(){setTimeout(function(){window.print();},150);};if(document.fonts&&document.fonts.ready){document.fonts.ready.then(go);}else{go();}})();`;

export default function ResumePrintPage() {
  return (
    <>
      <p className="bg-ink px-4 py-2 text-center font-mono text-xs text-fg-muted print:hidden">
        print view — press ⌘P / Ctrl+P, or return to{' '}
        <Link
          href="/resume/"
          className="underline transition-colors hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
        >
          /resume
        </Link>
      </p>
      <ResumeDocument />
      <script dangerouslySetInnerHTML={{ __html: AUTO_PRINT }} />
    </>
  );
}
