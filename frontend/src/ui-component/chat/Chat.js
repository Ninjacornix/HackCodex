import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Box, Stack, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Message from './Message';

import './chat.scss';

import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import { useEffect } from 'react';

const Chat = () => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  const chatBoxRef = useRef(null);

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

  useEffect(() => {
    chatBoxRef.current.scrollBy({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [chatBoxRef.current, messages]);

  const handleMessageSending = (e) => {
    value != '' ? addMessage('user', value) : console.log('empty message');
  };

  return (
    <Box style={{ height: '400px' }}>
      <Box ref={chatBoxRef} style={{ height: '400px', overflowY: 'scroll' }}>
        <Stack className="chat-container">
          <Message sender="bot">How can I help you?</Message>
          {messages.map((msg) => (
            <Message key={msg.id} sender={msg.sender}>
              {msg.content}
            </Message>
          ))}
        </Stack>
      </Box>
      <OutlinedInput
        sx={{ width: '100%', pr: 1, pl: 2, my: 2, border: '1px solid #fff' }}
        id="input-chat"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleMessageSending(e);
          }
        }}
        placeholder="Type in your prompt..."
        endAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="send message"
              onClick={handleMessageSending}
              disabled={value === ''}
              className={`send-message-button ${value === '' ? 'disabled' : 'enabled'}`}
            >
              <SendIcon stroke={1.5} size="1rem" color={'primary'} />
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
