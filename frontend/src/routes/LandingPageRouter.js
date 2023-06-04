import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import TestPage from 'views/pages/test/TestPage';
import About from 'views/pages/about/About';
import LandingPage from 'views/landing/LandingPage';
import HomeTwo from 'views/landing/LandingPage';
import Editor from 'views/editor/Editor';

import AuthLogin3 from 'views/pages/authentication/authentication3/Login3';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const LandingPageRouter = {
  path: '/',
  children: [
    {
      path: '/',
      element: <HomeTwo />
    },
    {
      path: '/editor',
      element: <Editor />
    },
    {
      path: '/login',
      element: <AuthLogin3 />
    }
  ]
};

export default LandingPageRouter;
