import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import TestPage from 'views/pages/test/TestPage';
import About from 'views/pages/about/About';
import LandingPage from 'views/landing/LandingPage';
import NoSidebarMainLayout from 'layout/NoSidebarMainLayout';

import DashboardDefault from 'views/dashboard/Default';
// ==============================|| NO SIDEBAR ROUTING ||============================== //

const NoSidebarMainRoutes = {
  path: '/',
  element: <NoSidebarMainLayout />,
  children: [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    }
  ]
};

export default NoSidebarMainRoutes;
