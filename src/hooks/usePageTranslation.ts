import type { TranslationQuery } from 'next-translate';
import useTranslation from 'next-translate/useTranslation';

export type IReturnType = (
  fieldName: string,
  query?: TranslationQuery
) => string;

type CustomTranslation = (
  fileName: string,
  ComponentName: string
) => { t: IReturnType; lang: string };

const usePageTranslation: CustomTranslation = (
  fileName: string,
  componentName: string
) => {
  const { t, lang } = useTranslation(fileName);
  return {
    lang,
    t: (fieldName: string, query?: TranslationQuery) =>
      t(`${componentName}_${fieldName}`, query),
  };
};

export default usePageTranslation;
