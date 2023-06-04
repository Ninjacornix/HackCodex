import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from '../MainLayout/Header';

// assets
import { IconChevronRight } from '@tabler/icons';
import { useMenuItems } from 'menu-items';

// styles
const NoSidebarMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  padding: 0,
  marginTop: 72,
  marginRight: 0,
  // transition: theme.transitions.create(
  //   'margin',
  //   open
  //     ? {
  //         easing: theme.transitions.easing.easeOut,
  //         duration: theme.transitions.duration.enteringScreen
  //       }
  //     : {
  //         easing: theme.transitions.easing.sharp,
  //         duration: theme.transitions.duration.leavingScreen
  //       }
  // ),
  [theme.breakpoints.up('md')]: {
    marginLeft: 0,
    width: `100%`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '0px',
    width: `calc(100%)`,
    padding: '0px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
    width: `calc(100%)`,
    padding: '0px',
    marginRight: '0px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const LandingPageLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);

  console.log(theme.components.MuiButton);
  const navigation = useMenuItems();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: '#0f1120',
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>

      {/* main content */}
      <NoSidebarMain theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
        <Outlet />
      </NoSidebarMain>
      {/* <Customization /> */}
    </Box>
  );
};

export default LandingPageLayout;
