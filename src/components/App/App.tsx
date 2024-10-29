import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer';
import { Suspense, useEffect, useState } from 'react';
import Navigator from 'components/Navigator/ui/Navigator';
import { PageLoader } from 'components/PageLoader/PageLoader';

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

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
            onClose={handleCloseNav}
            isDark={isDark}
            isOpen={openNav}
            isTrue={isDark}
            toogleButton={handleToogleButton}
          />
          <Header openNav={handleOpenNav} isTrue={isDark} toogleButton={handleToogleButton} />
          <Main isDark={isDark} />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
