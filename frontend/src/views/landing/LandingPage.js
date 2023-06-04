import { Box } from '@mui/system';
import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImageList } from '@mui/material';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  }
];

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh'
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        Imagine a .... AI generated presentation!
      </Typography>

      <Typography variant="h3" component="div" gutterBottom>
        Unlock your creativity with AI, powered by OpenAi models.
        Create a presentation just with a prompt thent edit it with our editor, if you wish.
      </Typography>

      <ImageList sx={{ width: 1300, height: 256, marginTop: 10, marginBottom: 10}} cols={10} rowHeight={256}>
        {itemData.map((item) => (
          <img
            key={item.img}
            src={`${item.img}?w=256&h=256&fit=crop&auto=format`}
            srcSet={`${item.img}?w=256&h=256&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        ))}
      </ImageList>

      <Typography variant="h1" component="div" gutterBottom>
        Try it now!
      </Typography>

      <Button variant="contained" href="/login" sx={{ marginTop: 2, marginBottom: 2}}>
        Create a presentation!
      </Button>

    </Box>
  );
};

export default LandingPage;