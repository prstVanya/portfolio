import { createContext } from 'react';

interface ITranslateContextData {
  language: string;
  toggleLanguage: () => void;
  translations: {
    en: {
      about: string;
      study: string;
      projects: string;
      footer: string;
    };
    ru: {
      about: string;
      study: string;
      projects: string;
      footer: string;
    };
  };
}
2;
const TranslateContext = createContext<ITranslateContextData | null>(null);

export default TranslateContext;
