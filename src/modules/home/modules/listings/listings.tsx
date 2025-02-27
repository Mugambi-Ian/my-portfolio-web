import type { FunctionComponent } from 'react';

import { AnalyticEvent } from '@/modules/shared/analytics';
import { ListingCard } from '@/modules/shared/listing';
import { HomeSection } from '@/modules/shared/section';
import { AppSlider } from '@/modules/shared/slider';
import { AppTitle } from '@/modules/shared/title';
import type { AppSvgProps } from '@/utils';

export interface IListings {
  title: string;
  description: string;
  Icon: FunctionComponent<AppSvgProps>;
}

interface IProps {
  number: string;
  title: string;
  data: IListings[];
  description: string;
}

export function HomeListing(p: IProps) {
  return (
    <HomeSection
      parentClass="bg-white dark:bg-black sticky -top-24 max-sm:top-0"
      className="flex gap-y-2.5 px-9 py-[120px] max-sm:px-2 max-sm:py-9"
    >
      <AppTitle title={p.title} number={p.number} />
      <p className="mb-24 flex-1 whitespace-pre-line leading-9 tracking-[0.05em] text-black dark:text-white max-lg:text-lg max-sm:mb-10 max-sm:px-3 max-sm:text-justify max-sm:text-sm  max-sm:leading-6">
        {p.description}
      </p>
      <div className="flex gap-8 max-sm:hidden max-sm:gap-2">
        {p.data.map((l) => (
          <ListingCard
            key={l.title}
            Icon={l.Icon}
            title={l.title}
            description={l.description}
          />
        ))}
      </div>
      <div className="md:hidden">
        <AppSlider
          lastEmpty={1}
          keys={p.data.map((l) => l.title)}
          className={{ parent: 'mx-4 gap-4' }}
          options={{
            slides: { perView: 1.25 },
          }}
        >
          {p.data.map((l) => (
            <ListingCard
              key={l.title}
              Icon={l.Icon}
              title={l.title}
              description={l.description}
            >
              {
                <AnalyticEvent
                  type="scroll"
                  title={`home_${p.title}_${l.title}`}
                />
              }
            </ListingCard>
          ))}
        </AppSlider>
      </div>
    </HomeSection>
  );
}
