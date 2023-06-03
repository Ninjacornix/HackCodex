import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Modal, Paper, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import TreeDataComponent from '../TreeDataComponent';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading, data, selectedFolder, setSelectedFolder }) => {
  const theme = useTheme();

  const handleAddFolder = (selectedFolder) => {
    handleOpenModal();
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
              <Stack direction="row" justifyContent="space-between">
                <Typography variant='h4'>My projects</Typography>
                <Button onClick={() => handleAddFolder(selectedFolder)} >Add folder</Button>
                <Modal open={openModal} onClose={handleCloseModal}>
                  <Paper>
                    <Typography variant='h4'>Add folder</Typography>
                  </Paper>
                </Modal>
              </Stack>

              <TreeDataComponent data={data} setSelectedFolder={setSelectedFolder} />
            </Stack>
          </CardContent>

          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
