import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Path from './path';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/project',
        lazy: () => import('../page/Project/Project.tsx'),
      },
      {
        path: Path.Contact,
        lazy: () => import('../page/Contact/Contact.tsx'),
      },
      {
        path: Path.Result1,
        lazy: () => import('../page/Result-1/Result1.tsx'),
      },
    ],
  },
]);
