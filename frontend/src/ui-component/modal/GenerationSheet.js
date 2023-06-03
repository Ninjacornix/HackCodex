//import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Dialog, Button, Box, TextField, Typography } from '@mui/material';
import RadioRow from './RadioRow';

const GenerationSheet = () => {
  //const theme = useTheme();
  const types = ['informative / educational', 'sales / pitch', 'conference', 'meeting', 'inspirational', 'other'];
  const numSlides = ['0-10', '10-20', '20-30', '30-40', '40+'];
  const design = ['naturalistic', 'conventional', 'geometric', 'abstract'];

  const [type, setType] = useState(types[0]);
  const [numberOfSlides, setNumberOfSlides] = useState(numSlides[0]);
  const [designType, setDesignType] = useState(design[0]);
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');

  const totalState = {
    type,
    numberOfSlides,
    designType,
    description,
    website
  };

  console.log(totalState);
  // Dalje treba raditi s ovim totalState-om ili samo slati ove pojedinacne digod kad se klikne submit

  return (
    <Dialog open={open} onClose={close} aria-labelledby="modal-generation-sheet" aria-describedby="modal-used-for-presentation-generation">
      <div style={{ padding: 10 }}>
        <Typography variant="h2">Generate presentation</Typography>

        <RadioRow callback={setType} headline="Type" labels={types}></RadioRow>
        <RadioRow callback={setNumberOfSlides} headline="Number of slides" labels={numSlides}></RadioRow>
        <RadioRow callback={setDesignType} headline="Style" labels={design}></RadioRow>

        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Add text</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="description-text"
            label="Add the content from which you want to create a presentation..."
            multiline
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Add website</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="add-link"
            label="Add website link"
            multiline
            rows={1}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Box>

        <Box textAlign="center">
          <Button variant="contained" href="#" align="center">
            Generate presentation
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

export default GenerationSheet;
