import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer';
import {
  Suspense, useEffect, useState, useRef, RefObject,
} from 'react';
import Navigator from 'components/Navigator/ui/Navigator';
import { PageLoader } from 'components/PageLoader/PageLoader';

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToAboutPage = useRef<HTMLElement>(null);
  const scrollToHomePage = useRef<HTMLElement>(null);
  const scrollToStudyPage = useRef<HTMLElement>(null);
  const scrollToProjectsPage = useRef<HTMLElement>(null);

  const handleScrollPage = (id: string) => {
    const refMap: { [key: string]: RefObject<HTMLElement> } = {
      '#home': scrollToHomePage,
      '#about': scrollToAboutPage,
      '#education': scrollToStudyPage,
      '#projects': scrollToProjectsPage,
    };

    const elementRef = refMap[id];
    elementRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToogleButton = () => {
    const changeTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', changeTheme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      setIsDark(localStorageTheme === 'dark');
    }
  }, [isDark]);

  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNames('app', {}, [])}>
        <div className={classNames('wrapper', { dark: isDark }, [])}>
          <Navigator
            scrollInto={handleScrollPage}
            onClose={handleCloseNav}
            isDark={isDark}
            isOpen={openNav}
            isTrue={isDark}
            toogleButton={handleToogleButton}
          />
          <Header
            scrollPage={handleScrollPage}
            isDark={isDark}
            openNav={handleOpenNav}
            isTrue={isDark}
            activeSection={activeSection}
            toogleButton={handleToogleButton}
          />
          <Main
            isDark={isDark}
            refAbout={scrollToAboutPage}
            refHome={scrollToHomePage}
            refProject={scrollToProjectsPage}
            refStudy={scrollToStudyPage}
          />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
