import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconBadgeCc, IconFileDescription, IconPhoto, IconTex } from '@tabler/icons';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  //console.log(item);
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  let icon = null;

  switch (item.type) {
    case 'textSlide':
      icon = <IconFileDescription stroke={1.5} size="1.3rem" />;
      break;
    case 'imageFullSlide':
      icon = <IconPhoto stroke={1.5} size="1.3rem" />;
      break;
    case 'imageQuarterSlide':
      icon = <IconPhoto stroke={1.5} size="1.3rem" />;
      break;
    default:
      icon = <IconBadgeCc stroke={1.5} size="1.3rem" />;
      break;
  }


  return (
    <ListItemButton
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={customization.isOpen.findIndex((id) => id === item.title) > -1}
      onClick={() => itemHandler(item.title)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
