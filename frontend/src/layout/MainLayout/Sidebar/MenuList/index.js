// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = menuItem.items[0].sections.map((item) => {
      return <NavGroup key={item.id} item={item} />;
  });

  return <>{navItems}</>;
};

export default MenuList;
