import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Path from 'src/routers/path';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/project',
        lazy: () => import('src/page/Project/Project.tsx'),
      },
      {
        path: Path.Contact,
        lazy: () => import('src/page/Contact/Contact.tsx'),
      },
      {
        path: Path.Result1,
        lazy: () => import('src/page/Result-1/Result1.tsx'),
      },
      {
        path: Path.Result2,
        lazy: () => import('src/page/Result-2/Result2'),
      },
    ],
  },
]);
