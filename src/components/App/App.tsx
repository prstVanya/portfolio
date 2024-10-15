import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer';
import { useEffect, useState } from 'react';
import Navigator from 'components/Navigator/ui/Navigator';

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
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Navigator
          onClose={handleCloseNav}
          isOpen={openNav}
          isTrue={isDark}
          toogleButton={handleToogleButton}
        />
        <Header openNav={handleOpenNav} isTrue={isDark} toogleButton={handleToogleButton} />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
