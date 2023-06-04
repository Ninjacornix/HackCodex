import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, Button, Box, TextField, Typography, IconButton, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import './generationSheet.scss';
import { useNavigate } from 'react-router';

const GenerationSheet = () => {
  const theme = useTheme();
  // TODO: add other
  const types = ['informative / educational', 'sales / pitch', 'conference', 'meeting', 'inspirational'];
  const numSlides = ['0-10', '10-20', '20-30', '30-40', '40+'];
  const design = ['naturalistic', 'conventional', 'geometric', 'abstract'];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [type, setType] = useState(types[0]);
  // const [numberOfSlides, setNumberOfSlides] = useState(numSlides[0]);
  // const [designType, setDesignType] = useState(design[0]);

  const [presentationTitle, setPresentationTitle] = useState('');
  const [presentationTheme, setPresentationTheme] = useState('');
  const [description, setDescription] = useState('');

  const [urls, setUrls] = useState(['']);
  const [hasError, setHasError] = useState(false);

  // const [website, setWebsite] = useState('');
  const [modalOpen, setModalOpen] = useState(true);

  const generatePresentation = () => {
    dispatch({
      type: SET_PROMPT_DATA,
      action: {
        title: presentationTitle,
        theme: presentationTheme,
        text: description,
        urls
      }
    });

    handleClose();

    // TODO Kruno
    // navigate()
  };

  // Dalje treba raditi s ovim totalState-om ili samo slati ove pojedinacne digod kad se klikne submit

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleValueChange = (index, e) => {
    const updatedValues = urls.map((value, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return value;
      }
    });
    setUrls(updatedValues);
  };

  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };

  useEffect(() => {
    const validUrls = urls.every((url) => isValidUrl(url));
    const validTitle = presentationTitle !== '';
    const validTheme = presentationTheme !== '';
    const validText = description !== '';

    const validPrompt = validTitle && validTheme && ((urls.length > 0 && validUrls) || validText);
    setHasError(!validPrompt);
  }, [urls, presentationTitle, presentationTheme, description]);

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
            error={presentationTitle === ''}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography variant="h3">Add presentation theme</Typography>
          <Typography variant="body2">Pojasnjenje...</Typography>
          <TextField
            sx={{ width: '100%', my: 1 }}
            id="presentation-theme"
            label="Add presentation theme"
            error={presentationTheme === ''}
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

        <Box sx={{ p: 2 }}>
          <Typography variant="h3">Add URLs</Typography>
          <Typography variant="body2">Pojasnjenje...</Typography>
          {urls.map((url, index) => {
            console.log('mapping url', url);
            return (
              <TextField
                value={url}
                type="url"
                error={!isValidUrl(url)}
                sx={{ width: '100%', my: 1, borderColor: 'primary' }}
                id={`${index}`}
                className={`url-field-${index}`}
                key={`url-field-${index}`}
                onChange={(e) => handleValueChange(index, e)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={(e) => setUrls(urls.filter((_, id) => index !== id))}
                      sx={{ bgcolor: 'blue', borderRadius: '4px', border: '2px solid blue' }}
                    >
                      <DeleteIcon htmlColor="#ffffff" />
                    </IconButton>
                  )
                }}
              />
            );
          })}
          <IconButton onClick={(e) => setUrls([...urls, ''])} sx={{ bgcolor: 'blue', borderRadius: '4px', border: '2px solid blue' }}>
            <AddIcon htmlColor="#ffffff" />
          </IconButton>
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
          <Button variant="contained" href="#" align="center" disabled={hasError} onClick={generatePresentation}>
            Generate presentation
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

export default GenerationSheet;
