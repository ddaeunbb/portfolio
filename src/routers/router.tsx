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
    ],
  },
]);
