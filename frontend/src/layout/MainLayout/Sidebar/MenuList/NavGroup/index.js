import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const theme = useTheme();

  // menu list collapse & items
  //console.log(item);
  const items = item.slides?.map((menu) => {
    //console.log(menu);
    switch (menu.type) {
      case 'textSlide':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'imageFullSlide':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'imageQuarterSlide':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'imageHalfSlide':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      default:
        return <NavItem key={menu.id} item={menu} level={1} />;
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
