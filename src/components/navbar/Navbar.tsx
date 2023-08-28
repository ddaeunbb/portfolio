import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Path from '../../routers/path';
import * as SC from './Navbar.styled';
import Tab from './Tab';

export default function Navbar() {
  const location = useLocation();

  const pattern = /\/project\//;

  return (
    <motion.div
      className="w-screen h-16 fixed flex z-20 bg-white/50 shadow-md backdrop-blur px-16 gap-5"
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
          <Tab link={Path.Project} path="Project" />
          <Tab link={Path.Contact} path="Contact" />
        </SC.Tabs>
      )}

      {location.pathname === '/project' && (
        <SC.Tabs>
          <Tab link="/" path="ToHome" />
          <Tab link={Path.Project} path="Project" />
          <Tab link={Path.Contact} path="Contact" />
        </SC.Tabs>
      )}

      {pattern.test(location.pathname as string) && (
        <SC.Tabs>
          <Tab link="/project" path="Back" />
        </SC.Tabs>
      )}
    </motion.div>
  );
}
