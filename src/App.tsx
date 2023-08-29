import { useMatch, Outlet, ScrollRestoration } from 'react-router-dom';
import * as SC from './App.styled';
import Navbar from 'src/components/navbar/Navbar';
import Info from 'src/page/Info/Info';
import Intro from 'src/page/Intro/Intro';
import Log from 'src/page/Log/Log';
import Main from 'src/page/Main/Main';
import Skills from 'src/page/Skills/Skills';

function App() {
  const matchHome = useMatch('/');
  const matchResult1 = useMatch('/project/1');
  const matchResult2 = useMatch('/project/2');
  return (
    <SC.Body>
      <ScrollRestoration />
      {!(matchResult1 || matchResult2) && <Navbar />}
      {matchHome && (
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
