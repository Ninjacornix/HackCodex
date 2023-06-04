import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import NoSidebarMainRoutes from './NoSidebarMainRoutes';
import LandingRouter from './LandingPageRouter';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AuthenticationRoutes, NoSidebarMainRoutes, LandingRouter]);
}
