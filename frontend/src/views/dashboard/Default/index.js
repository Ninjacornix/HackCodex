import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      
    </Grid>
  );
};

export default Dashboard;
