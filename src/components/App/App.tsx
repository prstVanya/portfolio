import { classNames } from 'utils/classNames/classNames';
import '../../pages/index.css';
import { Header } from 'components/Header';
import Main from 'components/Main/Main';
import { Footer } from 'components/Footer';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
