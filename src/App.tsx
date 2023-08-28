import { useMatch, Outlet, ScrollRestoration } from 'react-router-dom';
import * as SC from './App.styled';
import Navbar from './components/navbar/Navbar';
import Info from './page/Info/Info';
import Intro from './page/Intro/Intro';
import Log from './page/Log/Log';
import Main from './page/Main/Main';
import Skills from './page/Skills/Skills';

function App() {
  const matchHome = useMatch('/');
  return (
    <SC.Body>
      <ScrollRestoration />
      <Navbar />
      {matchHome && (
        <>
          <Main />
          <Intro />
          <Info />
          <Log />
          <Skills />{' '}
        </>
      )}
      <Outlet />
    </SC.Body>
  );
}

export default App;
