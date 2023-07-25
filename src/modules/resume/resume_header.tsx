import Link from 'next/link';
import { Fragment } from 'react';

import { useAppHeaders } from '@/hooks/useAppHeaders';
import usePageTranslation from '@/hooks/usePageTranslation';

import { ICDocumentDownload } from '../icons';

export function ResumeHeader() {
  const { lang, t } = usePageTranslation('resume', 'Header');
  const { hideHeader } = useAppHeaders();
  return (
    <header className="mb-8 mt-12 flex w-full max-w-7xl gap-y-3 self-center px-8 max-md:px-4">
      <h1 className="flex-1 text-2xl font-bold uppercase leading-8 tracking-widest text-gray-800 dark:text-white lg:text-2xl">
        {t('h1')} <br /> {t('h2')}
      </h1>
      <span className="flex flex-col items-end">
        <Link
          href="mailto:linksian63@gmail.com"
          className="my-1 whitespace-nowrap font-semibold leading-4 tracking-wider text-gray-600 dark:text-white"
        >
          linksian63@gmail.com
        </Link>
        <Link
          target="_blank"
          href={
            hideHeader
              ? 'https://mugambi-ian.vercel.app'
              : `/resume/download?lang=${lang}`
          }
          className="my-1 flex items-center gap-x-2 font-semibold leading-4 text-gray-600 dark:text-white"
        >
          {hideHeader ? (
            <span className="tracking-wider">mugambi-ian.vercel.app</span>
          ) : (
            <Fragment>
              <span className="tracking-widest">{t('download')}</span>
              <ICDocumentDownload className="inherit h-6 w-6 fill-primary dark:fill-primary-dark max-md:h-5 max-md:w-5" />
            </Fragment>
          )}
        </Link>
      </span>
    </header>
  );
}
