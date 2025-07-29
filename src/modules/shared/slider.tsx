/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import 'keen-slider/keen-slider.min.css';

import clsx from 'clsx';
import type { KeenSliderInstance } from 'keen-slider';
import type { KeenSliderOptions, KeenSliderPlugin } from 'keen-slider/react';
import { useKeenSlider } from 'keen-slider/react';
import { type MutableRefObject, type ReactNode, useEffect } from 'react';

export type AppSliderInstance = MutableRefObject<KeenSliderInstance | null>;

interface IProps<O, P> {
  keys: string[];
  lastEmpty?: number;
  children: ReactNode[];
  options?: KeenSliderOptions<O, P>;
  plugins?: KeenSliderPlugin<O, P>[];
  className?: { parent?: string; child?: string };
  setInsatnceRef?: (x: AppSliderInstance) => void;
}

export function AppSlider(p: IProps<{}, {}>) {
  const [sliderRef, instanceRef] = useKeenSlider(p.options, p.plugins);
  useEffect(() => {
    if (instanceRef && p.setInsatnceRef) p.setInsatnceRef(instanceRef);
  }, [instanceRef]);
  return (
    <div ref={sliderRef} className={clsx('keen-slider', p.className?.parent)}>
      {p.children.map((child, i) => (
        <div
          className={clsx('keen-slider__slide', p.className?.child)}
          key={p.keys[i]}
        >
          {child}
        </div>
      ))}
      {p.lastEmpty &&
        new Array(p.lastEmpty)
          .fill(Math.random() * 100)
          .map((k) => (
            <div
              className={clsx('keen-slider__slide', p.className?.child)}
              key={k}
            />
          ))}
    </div>
  );
}
export function ThumbnailPlugin(mainRef: AppSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx]?.classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

interface ISliderNavProps {
  title: string;
  active: boolean;
  setCurrent: () => void;
}

export function SliderNav({ active, setCurrent, title }: ISliderNavProps) {
  return (
    <button
      onClick={setCurrent}
      className={clsx(
        'min-w-full whitespace-nowrap px-2 py-3 text-start text-xs uppercase',
        !active && 'font-light text-blue-300 dark:text-white ',
        active && 'rounded-md font-bold text-blue-600  ring-1  ring-blue-600'
      )}
    >
      <p>{title}</p>
    </button>
  );
}
