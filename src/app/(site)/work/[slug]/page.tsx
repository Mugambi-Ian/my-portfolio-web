import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SITE } from '@/config/site';
import { CASE_STUDIES } from '@/data/case-studies';
import { personRef } from '@/modules/shared/json-ld';
import { CaseStudyArticle } from '@/modules/work/case-study-article';

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) return {};
  const path = `/work/${study.slug}/`;
  return {
    title: { absolute: study.pageTitle },
    description: study.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: study.pageTitle,
      description: study.seoDescription,
      type: 'article',
      url: path,
      // `openGraph` replaces the root layout's block rather than merging
      // into it, so siteName and locale have to be restated here.
      siteName: SITE.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: study.pageTitle,
      description: study.seoDescription,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const i = CASE_STUDIES.findIndex((c) => c.slug === params.slug);
  if (i === -1) notFound();
  const study = CASE_STUDIES[i];
  if (!study) notFound();
  const prev = CASE_STUDIES[i - 1];
  const next = CASE_STUDIES[i + 1];

  const url = `${SITE.url}/work/${study.slug}/`;

  // The page is a case study *about* a piece of software, not the software
  // itself. SoftwareApplication is a rich-result type and errors without
  // offers/aggregateRating/review, none of which exist truthfully here, so
  // the top-level node is a CreativeWork and the product sits under `about`.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': url,
        name: study.pageTitle,
        headline: study.name,
        description: study.seoDescription,
        url,
        inLanguage: 'en',
        author: personRef,
        about: {
          '@type': 'SoftwareApplication',
          name: study.name,
          applicationCategory: 'BusinessApplication',
          operatingSystem:
            study.slug === 'prolox' ? 'Windows, Web' : 'iOS, Android',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { position: 1, name: 'Home', item: `${SITE.url}/` },
          { position: 2, name: study.name, item: url },
        ].map((x) => ({ '@type': 'ListItem', ...x })),
      },
    ],
  };

  return (
    <>
      <CaseStudyArticle study={study} prev={prev} next={next} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
