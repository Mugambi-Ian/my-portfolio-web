'use client';

import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';

import { HomeSection } from '@/modules/shared/section';
import { AppTitle } from '@/modules/shared/title';
import { analytics_log_event } from '@/utils/firebase/analytics';

import type { AppSliderInstance } from '../shared/slider';
import { AppSlider, SliderNav, ThumbnailPlugin } from '../shared/slider';

interface IProps {
  img: string;
  points: string;
  title: string;
}

function UISlide(p: IProps) {
  return (
    <section className="flex w-full justify-between">
      <div className="flex flex-col justify-center gap-12 px-6 text-3xl font-light tracking-widest text-white max-lg:text-xl max-md:text-2xl max-sm:px-3 max-sm:text-base">
        <p className="mb-36 font-black uppercase tracking-widest dark:text-white max-lg:text-primary max-md:mb-5">
          {p.title}
        </p>
        <p
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: p.points }}
        />
      </div>
      <Link href={p.img} target="_blank">
        <Image
          src={p.img}
          width={750}
          height={615}
          alt={`${p.title} ${p.points}`}
          className="self-start max-md:w-[380px] max-sm:w-[220px]"
        />
      </Link>
    </section>
  );
}

export function HomeUI() {
  const { t } = useTranslation('home');
  const [current, setCurrent] = useState(0);
  const [instance, setInstance] = useState<AppSliderInstance>();
  return (
    <HomeSection
      id="exp"
      parentClass="bg-white dark:bg-black sticky max-md:relative -top-28 max-md:top-0"
      className="relative flex gap-y-20 px-12 pt-[120px] max-lg:gap-y-8  max-lg:px-3 max-lg:py-9"
      background={
        <span className="absolute inset-x-0 bottom-0 top-4 h-full w-full bg-primary/70 dark:bg-primary-dark/50 max-lg:top-64 max-md:top-40" />
      }
    >
      <span className="flex w-full items-center gap-y-8  max-lg:items-start">
        <span className="flex max-lg:hidden">
          <AppTitle title={t('UI_title')} number={t('UI_number')} white />
        </span>
        <span className="hidden max-lg:flex">
          <AppTitle title={t('UI_title')} number={t('UI_number')} />
        </span>
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
            keys={['1', '2', '3']}
            plugins={[ThumbnailPlugin(instance)]}
            className={{
              parent: 'flex w-min justify-end gap-1',
              child: 'min-w-max max-w-max',
            }}
          >
            <SliderNav
              title="1"
              active={current === 0}
              setCurrent={() => instance?.current?.moveToIdx(0)}
            />
            <SliderNav
              title="2"
              active={current === 1}
              setCurrent={() => instance?.current?.moveToIdx(1)}
            />
            <SliderNav
              title="3"
              active={current === 2}
              setCurrent={() => instance?.current?.moveToIdx(2)}
            />
          </AppSlider>
        )}
      </span>
      <div className="flex w-full gap-x-9 gap-y-6 max-lg:flex-col max-lg:gap-x-4">
        <AppSlider
          setInsatnceRef={setInstance}
          className={{ child: 'w-[105%]' }}
          keys={['1', '2', '3']}
          options={{
            slides: { perView: 1 },
            slideChanged: (x) => {
              setCurrent(x.track.details.rel);
            },
          }}
        >
          <UISlide
            title="My Portfolio"
            img="/assets/images/ui/portfolio.png"
            points="-Web Design<br>-Mobile Design<br>-Dark | Light Mode"
          />
          <UISlide
            title="Zamara Kenya"
            img="/assets/images/ui/zamara.png"
            points="-Web Design<br>-Receipts & Reports<br>-Mobile Applications"
          />
          <UISlide
            title="Prolox Solutions"
            img="/assets/images/ui/prolox.png"
            points="-Web Design<br>-Mobile Design<br>-Receipts & Reports"
          />
        </AppSlider>
      </div>
    </HomeSection>
  );
}
