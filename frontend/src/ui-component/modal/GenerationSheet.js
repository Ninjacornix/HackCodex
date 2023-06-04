import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Dialog, DialogTitle, Button, Box, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const GenerationSheet = () => {
  const theme = useTheme();
  // TODO: add other
  const types = ['informative / educational', 'sales / pitch', 'conference', 'meeting', 'inspirational'];
  const numSlides = ['0-10', '10-20', '20-30', '30-40', '40+'];
  const design = ['naturalistic', 'conventional', 'geometric', 'abstract'];

  // const [type, setType] = useState(types[0]);
  // const [numberOfSlides, setNumberOfSlides] = useState(numSlides[0]);
  // const [designType, setDesignType] = useState(design[0]);

  const [presentationTitle, setPresentationTitle] = useState('');
  const [presentationTheme, setPresentationTheme] = useState('');
  const [description, setDescription] = useState('');

  // const [website, setWebsite] = useState('');
  const [modalOpen, setModalOpen] = useState(true);

  const generatePresentation = () => {
    const totalState = {
      // type,
      // numberOfSlides,
      // designType,
      presentationTitle,
      presentationTheme,
      description
      // website
    };
    handleClose();
    console.log(totalState);
  };

  // Dalje treba raditi s ovim totalState-om ili samo slati ove pojedinacne digod kad se klikne submit

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-generation-sheet"
      aria-describedby="modal-used-for-presentation-generation"
    >
      <DialogTitle style={{ fontSize: '24px' }}>
        Generate presentation
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 16,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div style={{ padding: '10px', width: 500 }}>
        {/* <RadioRow callback={setType} headline="Type" labels={types}></RadioRow>
        <RadioRow callback={setNumberOfSlides} headline="Number of slides" labels={numSlides}></RadioRow>
        <RadioRow callback={setDesignType} headline="Style" labels={design}></RadioRow> */}

        <Box sx={{ p: 2 }}>
          <Typography variant="h3">Add title</Typography>
          <Typography variant="body2">Pojasnjenje...</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="presentation-title"
            label="Add presentation title"
            onChange={(e) => setPresentationTitle(e.target.value)}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="h3">Add presentation theme</Typography>
          <Typography variant="body2">Pojasnjenje...</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="presentation-theme"
            label="Add presentation theme"
            onChange={(e) => setPresentationTheme(e.target.value)}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="h3">Add text</Typography>
          <Typography variant="body2">Pojasnjenje...</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="presentation-description"
            label="Add the content from which you want to create a presentation..."
            multiline
            rows={10}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        {/* <Box sx={{ p: 2 }}>
          <Typography variant="h6">Add website</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="add-link"
            label="Add website link"
            multiline
            rows={1}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Box> */}

        <Box textAlign="center">
          <Button variant="contained" href="#" align="center" onClick={generatePresentation}>
            Generate presentation
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

export default GenerationSheet;
