import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

const Message = ({ sender, children }) => {
  const theme = useTheme();
  const bgColor = sender == 'user' ? theme.palette.primary.dark : theme.palette.primary.light;
  const textColor = sender == 'user' ? '#fff' : '#000';
  const textAlign = sender == 'bot' ? 'right' : 'left';

  return (
    <Card
      sx={{
        bgcolor: bgColor,
        my: 0.5
      }}
    >
      <CardContent>
        <Typography variant="body2" color={textColor} align={textAlign}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
