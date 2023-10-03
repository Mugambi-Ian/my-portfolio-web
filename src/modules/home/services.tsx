import type { FunctionComponent, HtmlHTMLAttributes } from 'react';

import usePageTranslation from '@/hooks/usePageTranslation';
import {
  ICArchitecture,
  ICDesigner,
  ICEngineer,
} from '@/modules/icons/services';
import { withHtmlProps } from '@/utils';

import { HomeSection } from '../shared/section';

interface IServiceCardProp {
  icon: FunctionComponent;
  title: string;
  description: string;
}

function ServiceCard({ description, icon, title }: IServiceCardProp) {
  function ServiceIcon(props: HtmlHTMLAttributes<HTMLOrSVGElement>) {
    return withHtmlProps(icon, props);
  }
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-primary px-4 pb-6 dark:bg-[#030F09]">
      <div className="my-8 flex h-48 w-48 items-center justify-center rounded-full bg-white/80 dark:bg-primary-dark/[0.13]">
        <ServiceIcon className="inherit my-8 h-28 w-28 fill-primary dark:fill-primary-dark" />
      </div>
      <span className="h-[2px] w-36 bg-white" />
      <h1 className="whitespace-nowrap text-xl font-medium tracking-[0.05em] text-white max-lg:text-base">
        {title}
      </h1>
      <span className="h-[2px] w-36 bg-white" />
      <p className="w-full text-center text-xs font-light tracking-[0.025em] text-white">
        {description}
      </p>
    </div>
  );
}

function ServicesDesktop() {
  const { t } = usePageTranslation('home', 'Service');
  return (
    <section className="flex gap-x-9 px-9 pb-8 max-lg:gap-x-5 max-md:hidden">
      <ServiceCard
        icon={ICDesigner}
        title={t('designer')}
        description={t('designerDesc')}
      />
      <ServiceCard
        icon={ICEngineer}
        title={t('engineer')}
        description={t('engineerDesc')}
      />
      <ServiceCard
        icon={ICArchitecture}
        title={t('architecture')}
        description={t('architectureDesc')}
      />
    </section>
  );
}

export function HomeServices() {
  return (
    <HomeSection parentClass="sticky top-0">
      <ServicesDesktop />
    </HomeSection>
  );
}
