import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

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

  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header isTrue={isDark} toogleButton={handleToogleButton} />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
