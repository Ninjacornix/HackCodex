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
        my: 0.5,
        maxWidth: '60%',
        display: 'flex',
        marginRight: '10px',
        borderRadius: '16px',
        p: '16px'
      }}
      className={`message message-${sender}`}
    >
      <Typography variant="body2" color={textColor} align={textAlign} sx={{ width: '100%', wordWrap: 'break-word' }}>
        {children}
      </Typography>
    </Card>
  );
};

export default Message;
