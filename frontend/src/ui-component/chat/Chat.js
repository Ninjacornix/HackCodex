import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Box, Stack, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Message from './Message';

import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  const addMessage = (sender, value) => {
    const message = {
      id: new Date().valueOf(),
      sender: sender,
      content: value
    };
    setMessages([...messages, message]);
    setValue('');

    // TODO: dodati AI odgovore
  };

  return (
    <Box>
      <Stack>
        <Message sender="bot">How can I help you?</Message>
        {messages.map((msg) => (
          <Message key={msg.id} sender={msg.sender}>
            {msg.content}
          </Message>
        ))}
      </Stack>
      <OutlinedInput
        sx={{ width: '100%', pr: 1, pl: 2, my: 2 }}
        id="input-chat"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask me anything..."
        endAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="send message" onClick={() => addMessage('user', value)}>
              <SendIcon stroke={1.5} size="1rem" color={theme.palette.grey[500]} />
            </IconButton>
          </InputAdornment>
        }
        aria-describedby="search-helper-text"
        inputProps={{
          'aria-label': 'weight'
        }}
      />
    </Box>
  );
};

export default Chat;
