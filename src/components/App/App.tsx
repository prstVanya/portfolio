import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { NavBarContext } from 'Context/NavBarContext';
import { useState } from 'react';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
