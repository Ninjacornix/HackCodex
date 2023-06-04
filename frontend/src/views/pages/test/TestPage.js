import { Button, Typography } from '@mui/material';
import { margin } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetchTableOfContents } from 'services/toc.service';
import Editor from 'views/editor/Editor';
import { useEffect } from 'react';

const TestPage = () => {
  const fetchTableOfContents = useFetchTableOfContents();
  const pres = useSelector((state) => state.presentation);

  useEffect(() => {
    fetchTableOfContents(pres.theme, pres.title, pres.summary.data);
  }, []);

  return (
    <div>
      <Editor />
    </div>
  );
};

export default TestPage;
