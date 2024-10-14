import { classNames } from 'utils/classNames/classNames';
import ChangeSun from 'utils/changeSun/changeSun';
import cls from './ChangeThemeButton.module.css';

interface IChangeThemeButtonData {
  className?: string;
  toogleButton: () => void;
  isTrue: boolean;
}

const ChangeThemeButton = ({ className, toogleButton, isTrue }: IChangeThemeButtonData) => {
  return (
    <button onClick={toogleButton} className={classNames(cls.button, {}, [className])}>
      <ChangeSun isTrue={isTrue} />
    </button>
  );
};

export default ChangeThemeButton;
