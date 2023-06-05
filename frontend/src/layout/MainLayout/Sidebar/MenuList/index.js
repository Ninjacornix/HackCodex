// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import { useMenuItems } from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const menuItems = useMenuItems();
  const navItems = menuItems?.items[0]?.sections?.map((item) => {
    return <NavGroup key={item.name} item={item}/>;
  });

  return <>{navItems}</>;
};

export default MenuList;
