import { useEffect, useState } from 'react';
import Header from './Header';
import { Navbar } from './NavBar';

export const HeaderMain = () => {
  const [isHeader, setIsHeader] = useState(window.innerWidth >= 638);

  useEffect(() => {
    const handleResize = () => {
      setIsHeader(window.innerWidth >= 638);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isHeader]);

  return (
    <>
      {isHeader ? <Header /> : <Navbar />}
    </>
  );
};
