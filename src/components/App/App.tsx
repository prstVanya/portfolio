import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import { useState, useEffect } from 'react';

const App = () => {
  const [changeBackground, setChangeBackround] = useState(false);

  const toogleButton = () => {
    const changeTheme = !changeBackground ? 'dark' : 'light';
    setChangeBackround(!changeBackground);
    localStorage.setItem('theme', changeTheme);
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme) {
      setChangeBackround(localStorageTheme === 'dark');
    }
  }, []);

  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header toogleButton={toogleButton} isDark={changeBackground} />
      </div>
    </div>
  );
};

export default App;
