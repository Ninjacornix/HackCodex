import { Button, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetchTableOfContents } from 'services/toc.service';
import Editor from 'views/editor/Editor';

const TestPage = () => {
  const fetchTableOfContents = useFetchTableOfContents();
  const pres = useSelector((state) => state.presentation);

  return (
    <div>
      <Typography variant="h1" sx={{ mb: 1 }}>
        Test page
      </Typography>
      <Editor />
    </div>
  );
};

export default TestPage;
