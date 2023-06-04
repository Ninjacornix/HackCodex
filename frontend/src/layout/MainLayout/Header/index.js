import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, ButtonBase } from '@mui/material';

import { useState } from 'react';

// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

// assets
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand } from '@tabler/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const handleLogin = (event) => {
    event.preventDefault();

    navigate('/login');
  };

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>

        {handleLeftDrawerToggle && (
          <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: 'all .2s ease-in-out',
                background: '#31596A',
                color: theme.palette.primary.light,
                '&:hover': {
                  background: '#31596A',
                  color: '#000000'
                }
              }}
              onClick={() => {
                handleLeftDrawerToggle();
                handleToggle();
              }}
              color="inherit"
            >
              {open ? <IconLayoutSidebarLeftExpand stroke={1.5} /> : <IconLayoutSidebarLeftCollapse stroke={1.5} />}
            </Avatar>
          </ButtonBase>
        )}
      </Box>

      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}

      {auth.access_token ? (
        <>
          {/* <NotificationSection /> */}
          <ProfileSection
            auth={{
              name: auth.name,
              email: auth.email,
              imgSrc: auth.picture
            }}
          />
        </>
      ) : (
        <Button onClick={handleLogin}>Login</Button>
      )}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
