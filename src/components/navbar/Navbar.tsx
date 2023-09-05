import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import * as SC from './Navbar.styled';
import Tab from 'src/components/navbar/Tab';
import Path from 'src/routers/path';

export default function Navbar() {
  const location = useLocation();
  const pattern = /\/project\//;

  return (
    <motion.div
      css={SC.MotionCss}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}>
      <SC.Logo />
      {location?.pathname === '/' && (
        <SC.Tabs>
          <Tab link="/" path="Home" />
          <Tab link="/" path="Info" />
          <Tab link="/" path="Skills" />
          <Tab link={Path.ProjectList} path="Project" />
        </SC.Tabs>
      )}

      {location.pathname === '/project' && (
        <SC.Tabs>
          <Tab link="/" path="ToHome" />
          <Tab link={Path.ProjectList} path="Project" />
        </SC.Tabs>
      )}

      {pattern.test(location.pathname as string) ||
        (location.pathname === '/contact' && (
          <SC.Tabs>
            <Tab link="/" path="ToHome" />
            <Tab link={Path.ProjectList} path="Projects" />
          </SC.Tabs>
        ))}
    </motion.div>
  );
}
