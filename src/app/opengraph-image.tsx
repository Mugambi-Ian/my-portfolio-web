import { ImageResponse } from 'next/og';

import { SITE } from '@/config/site';

export const alt = 'Ian Mugambi — Senior Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const { host } = new URL(SITE.url);

export default async function Image() {
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
          <div style={{ display: 'flex', color: '#A3ACB8', fontSize: 28 }}>
            $ whoami
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 32,
              color: '#E8EAED',
              fontSize: 84,
              fontWeight: 600,
            }}
          >
            Ian Mugambi
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 12,
              color: '#A3ACB8',
              fontSize: 40,
            }}
          >
            Senior Full-Stack Engineer
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
            <div style={{ display: 'flex', color: '#FCA311', fontSize: 26 }}>
              writing software since 2016 — before machines could.
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
