import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as SC from './Tab.styled';

interface TabProp {
  path:
    | 'Home'
    | 'ToHome'
    | 'Info'
    | 'Skills'
    | 'Project'
    | 'Contact'
    | 'Projects';
  link: string;
}

export default function Tab({ path, link }: TabProp) {
  const location = useLocation();
  const [position, setPosition] = useState<number>(0);
  const pattern = /\/project\//;

  useEffect(() => {
    const onScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  switch (path) {
    case 'Home':
      return (
        <SC.Tab
          selected={location.pathname === link && position < 780}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          Home
        </SC.Tab>
      );

    case 'ToHome':
      return (
        <Link to={link}>
          <SC.Tab selected={false}>Home</SC.Tab>
        </Link>
      );

    case 'Info':
      return (
        <SC.Tab
          selected={
            location.pathname === link && position >= 780 && position < 2740
          }
          onClick={() => {
            window.scrollTo({ top: 780, behavior: 'smooth' });
          }}>
          Info
        </SC.Tab>
      );

    case 'Skills':
      return (
        <SC.Tab
          selected={location.pathname === link && position > 2740}
          onClick={() => {
            window.scrollTo({ top: 3464, behavior: 'smooth' });
          }}>
          Skills
        </SC.Tab>
      );

    case 'Projects':
      return (
        <Link to={link}>
          <SC.Tab selected={pattern.test(location.pathname as string)}>
            Project
          </SC.Tab>
        </Link>
      );

    default:
      return (
        <Link to={link}>
          <SC.Tab selected={location.pathname === link}>{path}</SC.Tab>
        </Link>
      );
  }
}
