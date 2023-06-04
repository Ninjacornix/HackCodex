import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography,
  TextField,
  MenuItem
} from '@mui/material';
import { IconMessage2 } from '@tabler/icons';
import Button from '@mui/material/Button';
import { IconNorthStar } from '@tabler/icons';
import { IconSend } from '@tabler/icons';
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from 'store/actions';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  let name = 'Type in yout new prompt here';

  // state - font family
  const [textName, setTextName] = useState(name);

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Customize slide">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="primary"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
            top: '50%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial
          }}
        >
          <IconButton color="inherit" size="large" disableRipple>
            <IconMessage2 />
          </IconButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 380
          }
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              {/* font family */}
              <SubCard title="Customize current slide">
                <FormControl>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    outlined
                    label="Type in your new prompt"
                    variant="outlined"
                    onC
                  ></TextField>
                </FormControl>
                <Button variant="contained" color="primary" sx={{ mt: 3 }} endIcon={<IconSend/>}>
                  Send
                </Button>
                <Typography variant="subtitle1" sx={{ mt: 3 }}>
                  or use
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3 }} endIcon={<IconNorthStar/>}>
                  Magic
                </Button>
              </SubCard>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
