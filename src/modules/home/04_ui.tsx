'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { HomeSection } from '@/modules/shared/section';
import { analytics_log_event } from '@/utils/firebase/analytics';

import type { AppSliderInstance } from '../shared/slider';
import { AppSlider, SliderNav, ThumbnailPlugin } from '../shared/slider';

interface SlideProps {
  img: string;
  title: string;
}

const slides: SlideProps[] = [
  {
    title: 'My Portfolio',
    img: '/assets/images/ui/portfolio.png',
  },
  {
    title: 'Zamara Kenya',
    img: '/assets/images/ui/zamara.png',
  },
  {
    title: 'Prolox Solutions',
    img: '/assets/images/ui/prolox.png',
  },
];

function UISlide({ img, title }: SlideProps) {
  return (
    <section className="flex w-full justify-between">
      <Link href={img} target="_blank" className="mx-auto">
        <Image
          src={img}
          width={720}
          height={615}
          alt={title}
          className="self-start object-contain px-5 max-sm:w-[220px]"
        />
      </Link>
    </section>
  );
}

export function HomeUI() {
  const [current, setCurrent] = useState(0);
  const [instance, setInstance] = useState<AppSliderInstance>();

  return (
    <HomeSection
      id="exp"
      parentClass="bg-white text-slate-800 dark:bg-slate-950 dark:text-white z-0 sticky max-sm:relative -top-28 max-sm:top-0"
      className="relative flex flex-col"
      background={
        <span className="absolute inset-x-0 bottom-0 top-4 size-full max-lg:top-64 max-sm:top-40" />
      }
    >
      <span className="my-10 flex w-full items-center px-10 max-lg:items-start">
        <div>
          <h2 className="mb-2 text-sm uppercase tracking-widest ">02. UI</h2>
          <h1 className="mb-6 text-nowrap text-4xl font-extrabold">
            {slides[current]?.title}
          </h1>
        </div>
        <span className="flex-1" />
        {instance && (
          <AppSlider
            options={{
              rtl: false,
              loop: false,
              mode: 'snap',
              slides: { perView: 'auto' },
              slideChanged: () => analytics_log_event('scroll', 'home_ui'),
            }}
            lastEmpty={1}
            keys={slides.map((_, i) => i.toString())}
            plugins={[ThumbnailPlugin(instance)]}
            className={{
              parent: '-mt-5 flex w-min justify-end gap-1',
              child: 'min-w-max max-w-max',
            }}
          >
            {slides.map((_, index) => (
              <SliderNav
                key={index}
                title={(index + 1).toString()}
                active={current === index}
                setCurrent={() => instance?.current?.moveToIdx(index)}
              />
            ))}
          </AppSlider>
        )}
      </span>

      <div className="flex w-full flex-col items-center">
        <AppSlider
          setInsatnceRef={setInstance}
          className={{ child: 'mx-auto w-[105%]' }}
          keys={slides.map((_, i) => i.toString())}
          options={{
            slides: { perView: 1 },
            slideChanged: (x) => setCurrent(x.track.details.rel),
          }}
        >
          {slides.map((slide, index) => (
            <UISlide key={index} {...slide} />
          ))}
        </AppSlider>
      </div>

      <div className="h-96" />
    </HomeSection>
  );
}
