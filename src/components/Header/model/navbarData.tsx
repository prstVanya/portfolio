import { ReactNode } from 'react';
import HomeIcon from 'assets/images/icons/home.svg';
import HomeIconActive from 'assets/images/icons/home_active.svg';
import CompetitionIcon from 'assets/images/icons/competition.svg';
import CompetitionIconActive from 'assets/images/icons/competition_active.svg';
import CommunityIcon from 'assets/images/icons/community.svg';
import CommunityIconActive from 'assets/images/icons/community_active.svg';
import AboutIcon from 'assets/images/icons/about.svg';
import AboutIconActive from 'assets/images/icons/about_active.svg';
import ProfileIcon from 'assets/images/icons/profile.svg';
import ProfileIconActive from 'assets/images/icons/profile_active.svg';
import cls from '../ui/Header.module.css';

interface INavbarData {
  to: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  text: string;
  position: string;
}

export const navbarData: INavbarData[] = [
  {
    to: '',
    icon: <HomeIcon className={cls.icon} />,
    activeIcon: <HomeIconActive className={cls.icon} />,
    text: 'Header',
    position: '0.8%',
  },
  {
    to: '#',
    icon: <CompetitionIcon className={cls.icon} />,
    activeIcon: <CompetitionIconActive className={cls.icon} />,
    text: 'About',
    position: '21%',
  },
  {
    to: '#',
    icon: <CommunityIcon className={cls.icon} />,
    activeIcon: <CommunityIconActive className={cls.icon} />,
    text: 'Study',
    position: '40.8%',
  },
  {
    to: '#',
    icon: <AboutIcon className={cls.icon} />,
    activeIcon: <AboutIconActive className={cls.icon} />,
    text: 'Projects',
    position: '57.75%',
  },
  {
    to: '',
    icon: <ProfileIcon className={cls.icon} />,
    activeIcon: <ProfileIconActive className={cls.icon} />,
    text: 'Contacts',
    position: '77.75%',
  },
];
