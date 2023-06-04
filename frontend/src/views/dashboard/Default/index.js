import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

import TotalGrowthBarChart from './TotalGrowthBarChart';
import PopularCard from './PopularCard';
import EarningCard from './EarningCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// Mock filesystem data
// Will be fetched from backend (todo)
const data = {
  "name": "root",
  "type": "folder",
  "path": "/root",
  "contents": [
    {
      "name": "folder1",
      "type": "folder",
      "path": "/root/folder1",
      "contents": [
        {
          "name": "file1.txt",
          "type": "file",
          "path": "/root/folder1/file1.txt"
        },
        {
          "name": "file2.txt",
          "type": "file",
          "path": "/root/folder1/file2.txt"
        }
      ]
    },
    {
      "name": "folder2",
      "type": "folder",
      "path": "/root/folder2",
      "contents": [
        {
          "name": "folder3",
          "type": "folder",
          "path": "/root/folder2/folder3",
          "contents": [
            {
              "name": "file3.txt",
              "type": "file",
              "path": "/root/folder2/folder3/file3.txt"
            },
            {
              "name": "file4.txt",
              "type": "file",
              "path": "/root/folder2/folder3/file4.txt"
            }
          ]
        }
      ]
    }
  ]
}


const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [fileStructure, setFileStructure] = useState(data);
  const [selectedFolder, setSelectedFolder] = useState(null);

  console.log(selectedFolder);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={8} md={8}>
            <TotalGrowthBarChart selectedFolder={selectedFolder} isLoading={isLoading} />
          </Grid>
          <Grid item xs={2} md={4}>
            <PopularCard data={fileStructure} selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} isLoading={isLoading} />
            <div style={{ height: '50px' }}></div>
            <TotalOrderLineChartCard selectedFolder={selectedFolder} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
