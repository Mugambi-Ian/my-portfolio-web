import Link from 'next/link';
import { Fragment } from 'react';

import { appHeaders } from '@/hooks/useAppHeaders';

import { IC_DocumentDownload } from '../icons';

export async function ResumeHeader() {
  const { hideHeader } = await appHeaders();
  return (
    <header className="mb-8 mt-12 flex w-full max-w-7xl gap-y-3 self-center px-8 max-sm:px-4">
      <h1 className="flex-1 text-2xl font-bold uppercase leading-8 tracking-widest text-slate-900 dark:text-white lg:text-2xl">
        Fullstack Developer (FE Heavy) <br /> UI/UX Designer
      </h1>
      <span className="flex flex-col items-end">
        <Link
          href="mailto:linksian63@gmail.com"
          className="my-1 whitespace-nowrap font-semibold leading-4 tracking-wider text-slate-900 dark:text-white"
        >
          linksian63@gmail.com
        </Link>
        {hideHeader && (
          <span className="my-1 flex items-center gap-x-2 font-semibold leading-4 text-slate-900 dark:text-white">
            <span className="tracking-wider">
              mugambi-ian.vercel.app | github.com/Mugambi-Ian
            </span>
          </span>
        )}
        {!hideHeader && (
          <Link
            target="_blank"
            href={hideHeader ? '' : `/resume/download`}
            className="my-1 flex items-center gap-x-2 font-semibold leading-4 text-slate-700 dark:text-white"
          >
            <Fragment>
              <span className="tracking-widest">{'Download'}</span>
              <IC_DocumentDownload className="inherit size-6 fill-slate-900 dark:fill-blue-600 max-sm:size-5" />
            </Fragment>
          </Link>
        )}
      </span>
    </header>
  );
}
