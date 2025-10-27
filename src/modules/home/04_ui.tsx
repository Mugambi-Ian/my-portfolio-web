'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { HomeSection } from '@/modules/shared/section';
import { analytics_log_event } from '@/utils/firebase/analytics';

import type { AppSliderInstance } from '../shared/slider';
import { AppSlider } from '../shared/slider';

interface SlideProps {
  title: string;
  embedSrc: string;
  aspectRatio?: number;
}

const slides: SlideProps[] = [
  {
    title: 'Vybes Africa',
    embedSrc: 'https://vybes.africa',
    aspectRatio: 16 / 10,
  },
  {
    title: 'Zamara',
    embedSrc: 'https://zamaragroup.com',
    aspectRatio: 16 / 10,
  }, {
    title: 'Prolox Ecosystem',
    embedSrc: 'https://prolox.co.ke',
    aspectRatio: 16 / 10,
  },
  {
    title: 'Portfolio platform system',
    embedSrc: 'https://mugambi-ian.vercel.app',
    aspectRatio: 16 / 10,
  },


];

function UISlide({ embedSrc, title, aspectRatio = 16 / 10 }: SlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (typeof document === 'undefined') return;
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (typeof document === 'undefined') return;
    const element = containerRef.current;

    if (!element) return;

    if (document.fullscreenElement === element) {
      const exit = document.exitFullscreen;
      if (exit) {
        exit.call(document).catch(() => undefined);
      }
    } else {
      const request = element.requestFullscreen;
      if (request) {
        request.call(element).catch(() => undefined);
      }
    }
  };

  const paddingBottom = `${(1 / aspectRatio) * 100}%`;

  return (
    <section className="flex w-full justify-center px-0.5 sm:px-3 lg:px-6">
      <div
        ref={containerRef}
        className="group relative w-full overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-gradient-to-b from-white via-white to-slate-50 shadow-[0_50px_200px_-120px_rgba(15,23,42,0.55)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-[0_70px_220px_-140px_rgba(16,185,129,0.55)] dark:border-slate-800/70 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950/95 sm:rounded-[2.25rem]"
      >
        <div className="pointer-events-none absolute inset-x-4 top-0 h-64 -translate-y-1/2 rounded-full bg-emerald-300/25 blur-3xl sm:inset-x-10 sm:h-72" />
        <div className="relative flex w-full flex-col gap-5">
          <div
            className="relative w-full min-h-[720px] overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_1px_rgba(16,185,129,0.35)] dark:border-slate-800/70 dark:bg-slate-900 sm:rounded-[1.65rem]"
            style={{ aspectRatio: `${aspectRatio}`, paddingBottom }}
          >
            <iframe
              src={embedSrc}
              title={title}
              allow="fullscreen"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              className="absolute inset-0 size-full border-0 bg-white"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-slate-500 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/75 dark:text-slate-300 sm:gap-4 sm:px-6 sm:py-4 sm:text-[0.62rem] sm:tracking-[0.4em]">
            <span className="flex items-center gap-2 text-[0.55rem] tracking-[0.2em] text-slate-600 dark:text-slate-200 sm:gap-3 sm:text-[0.6rem] sm:tracking-[0.35em]">
              <span className="inline-block size-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" />
              {title}
            </span>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-[0.5rem] uppercase tracking-[0.22em] text-slate-600 transition-colors duration-200 hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-300 sm:px-4 sm:text-[0.55rem] sm:tracking-[0.3em]"
              aria-pressed={isFullscreen}
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Open Fullscreen'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeUI() {
  const [current, setCurrent] = useState(0);
  const [instance, setInstance] = useState<AppSliderInstance>();
  const progress = ((current + 1) / slides.length) * 100;

  return (
    <HomeSection
      id="ui"
      parentClass="relative isolate bg-slate-100 text-slate-900 scroll-mt-28 md:scroll-mt-32"
      className="relative max-w-none flex flex-col gap-16 px-4 py-28 sm:px-6 md:py-36 lg:px-12 xl:px-16"
      background={
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_60%)]" />
          <span className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
          <span className="absolute -right-36 top-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        </div>
      }
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12">
        <header className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-5">
            <p className="text-[0.65rem] uppercase tracking-[0.45em] text-emerald-500">
              02 • Signature Interfaces
            </p>
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                {slides[current]?.title || 'Experience systems'}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Live builds, performance dashboards, and product ecosystems crafted to feel native on every device. Swipe through to see how each surface scales with almost edge-to-edge precision.
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-xl flex-col items-end gap-4 self-start md:self-end">
            <span className="text-[0.58rem] uppercase tracking-[0.4em] text-slate-400">
              Explore the live previews
            </span>
            <div className="flex w-full overflow-hidden">
              <div className="flex w-full snap-x items-center gap-2 overflow-x-auto rounded-full border border-slate-200/80 bg-white/70 px-2 py-2 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-900/70">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => instance?.current?.moveToIdx(index)}
                    className={clsx(
                      'flex min-w-[7.25rem] items-center gap-2 rounded-full px-3 py-2 text-[0.52rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-200 sm:min-w-[9rem] sm:gap-3 sm:px-4 sm:text-[0.58rem] sm:tracking-[0.3em]',
                      current === index
                        ? 'bg-slate-900 text-white shadow-[0_25px_80px_-50px_rgba(15,23,42,0.8)] dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-white/60 text-slate-500 hover:bg-slate-900/10 hover:text-slate-900 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-slate-800'
                    )}
                    aria-current={current === index ? 'true' : undefined}
                    aria-label={`View ${slide.title}`}
                  >
                    <span className="font-mono tracking-[0.18em] sm:tracking-[0.25em]">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="hidden truncate tracking-[0.2em] sm:inline sm:tracking-[0.25em]">
                      {slide.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="relative w-full">
          <AppSlider
            setInsatnceRef={setInstance}
            className={{
              parent: 'w-full',
              child: 'w-full px-1 sm:px-3 lg:px-6',
            }}
            keys={slides.map((_, i) => i.toString())}
            options={{
              slides: { perView: 1, spacing: 12 },
              rubberband: true,
              slideChanged: (x) => {
                setCurrent(x.track.details.rel);
                analytics_log_event('scroll', 'home_ui');
              },
              breakpoints: {
                '(min-width: 640px)': {
                  slides: { perView: 1, spacing: 20 },
                },
                '(min-width: 1024px)': {
                  slides: { perView: 1, spacing: 32 },
                },
              },
            }}
          >
            {slides.map((slide, index) => (
              <UISlide key={index} {...slide} />
            ))}
          </AppSlider>
        </div>

        <div className="flex items-center gap-3 px-1 sm:hidden">
          <span className="text-[0.58rem] uppercase tracking-[0.28em] text-slate-400">
            Swipe
          </span>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/60">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-emerald-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[0.58rem] tracking-[0.28em] text-slate-500">
            {current + 1}/{slides.length}
          </span>
        </div>
      </div>
    </HomeSection>
  );
}
