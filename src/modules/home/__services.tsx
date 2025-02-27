import usePageTranslation from '@/hooks/usePageTranslation';
import {
  IC_Architecture,
  IC_Designer,
  IC_Engineer,
} from '@/modules/home/icons/services';

import { ListingCard } from '../shared/listing';
import { HomeSection } from '../shared/section';
import { AppSlider } from '../shared/slider';

function ServicesDesktop() {
  const { t } = usePageTranslation('home', 'Service');
  return (
    <>
      <section className="flex gap-x-9 px-9 pb-8 max-lg:gap-x-5 max-sm:hidden">
        <ListingCard
          Icon={IC_Designer}
          title={t('designer')}
          description={t('designerDesc')}
        />
        <ListingCard
          Icon={IC_Engineer}
          title={t('engineer')}
          description={t('engineerDesc')}
        />
        <ListingCard
          Icon={IC_Architecture}
          title={t('architecture')}
          description={t('architectureDesc')}
        />
      </section>
      <div className="ml-2 sm:px-2 md:hidden">
        <AppSlider
          lastEmpty={1}
          keys={['1', '2', '3']}
          options={{ slides: { perView: 1.25 } }}
          className={{ parent: 'mx-4 gap-4', child: 'w-full' }}
        >
          <ListingCard
            Icon={IC_Designer}
            title={t('designer')}
            description={t('designerDesc')}
          />
          <ListingCard
            Icon={IC_Engineer}
            title={t('engineer')}
            description={t('engineerDesc')}
          />
          <ListingCard
            Icon={IC_Architecture}
            title={t('architecture')}
            description={t('architectureDesc')}
          />
        </AppSlider>
      </div>
    </>
  );
}

export function HomeServices() {
  return (
    <HomeSection parentClass="sticky top-0">
      <ServicesDesktop />
    </HomeSection>
  );
}
