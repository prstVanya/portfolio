import ChangeThemeButton from 'utils/ChangeThemeButton/ChangeThemeButton';
import { classNames } from 'utils/classNames/classNames';
import CloseSvg from 'assets/images/icons/close_icon.svg';
import cls from './Navigator.module.css';
import { navigatorProps } from '../models/navigatorData';

interface INavigatorData {
  className?: string;
  isTrue: boolean;
  toogleButton: () => void;
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  scrollInto: (id: string) => void;
}

const Navigator = ({
  className, isTrue, toogleButton, isOpen, onClose, isDark, scrollInto,
}: INavigatorData) => {
  return (
    <div className={classNames(
      cls.navigator,
      {
        [cls.open]: isOpen,
        [cls.dark]: isDark,
      },
      [className],
    )}
    >
      <nav className={classNames(cls.container, {}, [])}>
        {navigatorProps.map((w) => {
          return (
            <a 
              href={w.to} 
              key={w.id}
              onClick={(e: any) => {
                e.preventDefault();

                scrollInto(w.to);
                onClose();
              }}
              className={classNames(
                cls.href,
                {
                  [cls.darkHref]: isDark,
                },
                [],
              )}>
                {w.name}
              </a>
          )
        })}
      </nav>
      <ChangeThemeButton
        className={classNames(cls.but, {}, [])}
        isNavBar={false}
        isTrue={isTrue}
        toogleButton={toogleButton}
      />
      <button onClick={onClose} className={classNames(cls.close, {}, [])}>
        <CloseSvg />
      </button>
    </div>
  );
};

export default Navigator;
