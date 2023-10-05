import usePageTranslation from '@/hooks/usePageTranslation';

import { IC_AZURE, IC_DOCKER, IC_JIRA } from './icons/deploy';
import { HomeListing } from './modules/listings/listings';

export function HomeDeploy() {
  const { t } = usePageTranslation('home', 'Deployment');
  return (
    <HomeListing
      title={t('title')}
      number={t('number')}
      description={t('desc')}
      data={[
        { Icon: IC_DOCKER, title: t('l1-title'), description: t('l1-desc') },
        { Icon: IC_AZURE, title: t('l2-title'), description: t('l2-desc') },
        { Icon: IC_JIRA, title: t('l3-title'), description: t('l3-desc') },
      ]}
    />
  );
}
