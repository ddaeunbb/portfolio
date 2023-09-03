import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Path from 'src/routers/path';
import { projectLoader } from 'src/routers/projectLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: Path.ProjectList,
        lazy: () => import('src/page/Project-List/ProjectList'),
      },
      {
        path: Path.Contact,
        lazy: () => import('src/page/Contact/Contact.tsx'),
      },
      {
        path: Path.Project,
        lazy: () => import('src/page/Project/Project'),
        loader: async ({ params }) => projectLoader(params),
      },
      // {
      //   path: Path.Result1,
      //   lazy: () => import('src/page/Result-1/Result1.tsx'),
      // },
      // {
      //   path: Path.Result2,
      //   lazy: () => import('src/page/Result-2/Result2'),
      // },
      // {
      //   path: Path.Result3,
      //   lazy: () => import('src/page/Result-3/Result3'),
      // },
      // {
      //   path: Path.Result4,
      //   lazy: () => import('src/page/Result-4/Result4'),
      // },
    ],
  },
]);
