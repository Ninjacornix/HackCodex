import { Box, FormControlLabel, RadioGroup, Radio, Typography, Divider } from '@mui/material';

const RadioRow = (props) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">{props.headline}</Typography>
      <RadioGroup row aria-labelledby="row-radio-group" name="row-radio-group" defaultValue={props.labels[0]}>
        {props.labels.map((lbl) => (
          <FormControlLabel key={lbl} value={lbl} control={<Radio />} label={lbl} onChange={(e) => props.callback(e.target.value)} />
        ))}
      </RadioGroup>
      <Divider />
    </Box>
  );
};

export default RadioRow;
