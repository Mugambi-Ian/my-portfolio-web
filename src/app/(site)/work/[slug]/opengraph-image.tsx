import { ImageResponse } from 'next/og';

import { SITE } from '@/config/site';
import { CASE_STUDIES, getCaseStudy } from '@/data/case-studies';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

const { host } = new URL(SITE.url);

function trim(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

/** The three strings the card actually renders, shared by the image and its alt. */
function card(slug: string) {
  const study = getCaseStudy(slug);
  const metric = study?.metrics[0];
  return {
    name: study?.name ?? 'Case study',
    summary: trim(study?.summary ?? SITE.description, 120),
    footnote: metric ? `${metric.value} ${metric.label}` : SITE.title,
  };
}

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { name, summary, footnote } = card(params.slug);
  return [
    {
      id: 'cover',
      alt: `${name} case study by ${SITE.name} — ${summary} Highlight: ${footnote}.`,
      size,
      contentType,
    },
  ];
}

export default async function Image({ params }: { params: { slug: string } }) {
  const { name, summary, footnote } = card(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#0B0D10',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 140,
            left: 0,
            width: 1200,
            height: 1,
            backgroundColor: 'rgba(148,163,184,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 80,
            width: 1,
            height: 630,
            backgroundColor: 'rgba(148,163,184,0.12)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            left: 0,
            width: 1200,
            height: 1,
            backgroundColor: 'rgba(148,163,184,0.12)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: 80,
          }}
        >
          <div style={{ display: 'flex', color: '#A3ACB8', fontSize: 26 }}>
            {`$ open work/${params.slug}`}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              color: '#E8EAED',
              fontSize: 84,
              fontWeight: 600,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 16,
              maxWidth: 1000,
              color: '#A3ACB8',
              fontSize: 28,
              lineHeight: 1.4,
            }}
          >
            {summary}
          </div>
          <div style={{ display: 'flex', flexGrow: 1 }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', color: '#FCA311', fontSize: 30 }}>
              {footnote}
            </div>
            <div style={{ display: 'flex', color: '#737D89', fontSize: 22 }}>
              {host}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
