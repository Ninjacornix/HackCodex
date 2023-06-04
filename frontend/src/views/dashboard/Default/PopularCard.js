import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, CardActions, CardContent, Dialog, DialogTitle, Divider, Grid, Menu, MenuItem, Modal, Paper, Stack, TextField, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import TreeDataComponent from '../TreeDataComponent';
import { styled } from '@mui/system';


function AddFolderDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleSubmit = () => {
    axios.post(`https://bb5b-80-232-170-198.ngrok-free.app/api/folder`, {
      command: 'mkdir',
      path: props.selectedFolder.path,
      name: props.addFolderName
    })
      .then(function (response) {
        console.log(response);
        props.setAddFolderName('');
        handleClose();
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log('submit:  ' + props.selectedFolder.path + '/' + props.addFolderName);
  }

  return (
    <Dialog onClose={handleClose} open={open} disableScrollLock={true}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Typography variant='h4'>Create a folder</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField sx={{ width: '100%' }} onChange={(e) => props.setAddFolderName(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => handleSubmit()}>Continue</Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
}

const PopularCard = ({ isLoading, data, selectedFolder, setSelectedFolder }) => {
  const theme = useTheme();

  const [addFolderName, setAddFolderName] = useState('');

  const handleAddFolder = (selectedFolder) => {
    { selectedFolder ? handleOpenModal() : null }
  }

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h4'>My projects</Typography>
                <Button onClick={() => handleAddFolder(selectedFolder)} >Add folder</Button>
                <AddFolderDialog open={openModal} onClose={handleCloseModal} selectedFolder={selectedFolder} addFolderName={addFolderName} setAddFolderName={setAddFolderName}>
                  <Typography variant='h4'>Add folder</Typography>
                </AddFolderDialog>
              </Stack>
              <TreeDataComponent data={data} setSelectedFolder={setSelectedFolder} />
            </Stack>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
