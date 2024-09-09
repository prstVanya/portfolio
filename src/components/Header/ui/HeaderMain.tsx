import { useEffect, useState } from 'react';
import Header from './Header';
import { Navbar } from './NavBar';

interface HeaderMainProps {
  isDark: boolean;
  toogleButton: () => void;
}

export const HeaderMain = ({ isDark, toogleButton }: HeaderMainProps) => {
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
      {isHeader ? <Header toogleButton={toogleButton} isDark={isDark} /> : <Navbar />}
    </>
  );
};
