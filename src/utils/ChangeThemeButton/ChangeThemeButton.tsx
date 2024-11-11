import { classNames } from 'utils/classNames/classNames';
import ChangeSun from 'utils/changeSun/changeSun';
import { useEffect } from 'react';
import cls from './ChangeThemeButton.module.css';

interface IChangeThemeButtonData {
  className?: string;
  toogleButton: () => void;
  isTrue: boolean;
  isNavBar: boolean;
}

const ChangeThemeButton = ({
  className, toogleButton, isTrue, isNavBar,
}: IChangeThemeButtonData) => {
  const handleChangeWidth = () => {
    if (isNavBar) {
      return cls.hed;
    }
    return '';
  };

  useEffect(() => {
    handleChangeWidth();
  }, [isNavBar]);

  return (
    <button
      onClick={toogleButton}
      className={classNames(cls.button, {
        [cls.dark]: isTrue,
        [cls.hed]: isNavBar,
      }, [className])}
    >
      <ChangeSun isTrue={isTrue} />
    </button>
  );
};

export default ChangeThemeButton;
