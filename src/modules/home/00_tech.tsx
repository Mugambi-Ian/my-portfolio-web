import usePageTranslation from '@/hooks/usePageTranslation';

import { IC_DOTNET, IC_NODE, IC_PHP } from './icons/tech';
import { HomeListing } from './modules/listings/listings';

export function HomeTech() {
  const { t } = usePageTranslation('home', 'Tech');
  return (
    <HomeListing
      title={t('title')}
      number={t('number')}
      description={t('desc')}
      data={[
        { Icon: IC_DOTNET, title: t('l1-title'), description: t('l1-desc') },
        { Icon: IC_NODE, title: t('l2-title'), description: t('l2-desc') },
        { Icon: IC_PHP, title: t('l3-title'), description: t('l3-desc') },
      ]}
    />
  );
}
