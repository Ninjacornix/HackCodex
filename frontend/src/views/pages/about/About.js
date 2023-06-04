import * as React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Paper,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton
} from '@mui/material/';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import './about.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { KeyboardArrowRight } from '@mui/icons-material';

const steps = [
  'Insert Content and Preferences',
  'Edit the Table of contents',
  'Edit the presentation',
  'Try magic slides',
  'Create a speech'
];

const description = [
  "Begin by inserting the text you want to discuss or the webpage from which you'd like to gather content. You can also upload relevant images along with their descriptions. Choose your preferred style and mood for the presentation. This step will generate a comprehensive table of contents for your presentation.",
  "The table of contents will automatically create slides with short descriptions. Take this opportunity to refine and perfect the structure of your presentation. Add or remove slides as needed to ensure your presentation is the best it can be. Once you're satisfied, simply press 'Continue,' and your presentation will be created!",
  "You now have complete control over the presentation. Feel free to make any desired edits directly within the software or download the presentation and work on it locally using PowerPoint. And don't forget, you can always rely on our AI chat to assist you with any specific requests you may have!",
  'If you\'re feeling uninspired or looking for some creative input, give our "Magic Slide" button a try. Let AI surprise you with its most captivating additions to your work. You might just discover something amazing!',
  "It's showtime! Utilize AI to help you refine and polish your speech, saving you valuable time in the process. Prepare to impress everyone with a well-crafted presentation and a compelling delivery!"
];

const aboutUsData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Ivan Vlahov',
    description: 'the fastest web-developer'
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Zvonimir Haramustek',
    description: 'the only back-end person'
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Milan Vrankić',
    description: 'director and multitasking master'
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Krunoslav Tomičić',
    description: 'crazy tester'
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Maja Milas',
    description: 'stray physicist'
  }
];

/**
 * TODO
 * dodati slike
 * dodati strelice lijevo i desno za slider
 */

const About = () => {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#0f1120',
    ...theme.typography.body2,
    padding: 15,
    textAlign: 'left',
    color: '#fff'
  }));

  const gridItem = (index) => {
    return (
      <>
        <Grid item xs={5}>
          <Item>{description[index]}</Item>
        </Grid>
        <Grid item xs={7}>
          <Item>tu ce ici slika jednog dana kada je bude...</Item>
        </Grid>
      </>
    );
  };

  const [active, setActive] = useState(0);
  const [gridComp, setGridComp] = useState(gridItem(0));

  const handleClick = (index) => {
    setActive(index);
    setGridComp(gridItem(index));
  };

  return (
    <Box sx={{ p: 3 }} className="about-page">
      <Typography variant="h1">About</Typography>
      <Typography variant="body2">
        NAME is a powerful tool that allows you to create presentations with the assistance of ChatGPT, an AI language model. With this app,
        you can easily generate presentations from your content, whether it`s text or web-based, and even include your own images. Customize
        the style and mood to match your unique vision, and voila! <br /> Once the presentation is generated, edit and refine it within the
        app or download it to work in PowerPoint. Whenever you need some extra inspiration, just turn to our AI chat or use the `Magic
        Slide` button. <br /> When it`s time to shine on stage, our app has your back. Let AI assist you in crafting a polished and
        captivating speech in no time. Whether you`re a professional presenter or someone looking to make an impact, prepare to impress
        everyone in the room! <br />
        Happy creating!
      </Typography>
      <Typography variant="h1">Create wonderful presentations</Typography>
      <div style={{ display: 'flex' }}>
        <IconButton aria-label="left_arrow" onClick={() => handleClick(active == 0 ? steps.length - 1 : active - 1)}>
          <KeyboardArrowLeftIcon stroke={1.5} size="1rem" color="primary" />
        </IconButton>
        <Stepper activeStep={active} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => handleClick(index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <IconButton aria-label="right_arrow" onClick={() => handleClick(active == steps.length - 1 ? 0 : active + 1)}>
          <KeyboardArrowRightIcon stroke={1.5} size="1rem" color="primary" />
        </IconButton>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {gridComp}
        </Grid>
      </Box>

      <Typography variant="h1">Who are we?</Typography>
      <Typography variant="body2">
        We are members of X.FER, a student organization at the Faculty of Electrical Engineering and Computing in Zagreb. Our main purpose
        is to teach students from all years about competitive programming and the fascinating world of algorithms. Since we are all busy
        individuals, we have created NAME to help us and our friends complete manual work quickly and focus on what truly matters - diving
        into another framework! &#x1F603;
      </Typography>

      <ImageList cols={5} gap={8}>
        {aboutUsData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 1x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} subtitle={<span>{item.description}</span>} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default About;
