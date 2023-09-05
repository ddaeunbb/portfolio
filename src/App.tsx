import { useLocation, Outlet, ScrollRestoration } from 'react-router-dom';
import * as SC from './App.styled';
import Navbar from 'src/components/navbar/Navbar';
import Info from 'src/page/Info/Info';
import Intro from 'src/page/Intro/Intro';
import Log from 'src/page/Log/Log';
import Main from 'src/page/Main/Main';
import Skills from 'src/page/Skills/Skills';

function App() {
  const pattern = /\/project\//;
  const location = useLocation();

  return (
    <SC.Body isproject={pattern.test(location.pathname as string)}>
      <ScrollRestoration />
      {!pattern.test(location.pathname as string) && <Navbar />}
      {location.pathname === '/' && (
        <>
          <Main />
          <Intro />
          <Info />
          <Log />
          <Skills />
        </>
      )}
      <Outlet />
    </SC.Body>
  );
}

export default App;
