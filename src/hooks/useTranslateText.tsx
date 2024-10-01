import TranslateContext from 'Context/TranslateContext';
import { ReactNode, useContext, useState } from 'react';

interface ITranslationTextData {
  children: ReactNode;
}

export const TranslationText = ({ children }: ITranslationTextData) => {
  const [language, setLanguage] = useState('en');

  const handleToogleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const translations = {
    en: {
      about: 'About',
      study: 'Study',
      projects: 'Projects',
      footer: 'Footer',
    },
    ru: {
      about: 'Обо мне',
      study: 'Образование',
      projects: 'Проекты',
      footer: 'Футер',
    },
  };

  return (
    <TranslateContext.Provider value={{ language, toggleLanguage: handleToogleLanguage, translations }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error('Ошибка');
  }
  return context;
};
