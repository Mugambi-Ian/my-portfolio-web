import usePageTranslation from '@/hooks/usePageTranslation';

import { IC_FIGMA, IC_LUCID, IC_VSCODE } from './icons/tools';
import { HomeListing } from './modules/listings/listings';

export function HomeTools() {
  const { t } = usePageTranslation('home', 'Development');
  return (
    <HomeListing
      title={t('title')}
      number={t('number')}
      description={t('desc')}
      data={[
        { Icon: IC_VSCODE, title: t('l1-title'), description: t('l1-desc') },
        { Icon: IC_FIGMA, title: t('l2-title'), description: t('l2-desc') },
        { Icon: IC_LUCID, title: t('l3-title'), description: t('l3-desc') },
      ]}
    />
  );
}
