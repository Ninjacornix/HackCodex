import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Process = () => {
  const theme = useTheme();

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Typography variant="h2" color="#0f1120" sx={{ textAlign: 'center' }}>
              WORK PROCESS
            </Typography>
            <div className="section-title-border margin-t-20"></div>
            <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
              In an ideal world this website wouldn&apos;t exist, a client would acknowledge the importance of having web copy before the
              design starts.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center process-left-icon-1">
            <i className="pe-7s-angle-right"></i>
          </div>
          <div className="col-lg-6 text-center process-left-icon-2">
            <i className="pe-7s-angle-right"></i>
          </div>
        </div>
        <div className="row margin-t-50">
          <div className="col-lg-4 plan-line">
            <div className="text-center process-box">
              <i className="pe-7s-pen text-custom"></i>
              <p className="text-muted">Generate.</p>
            </div>
          </div>
          <div className="col-lg-4 plan-line">
            <div className="text-center process-box">
              <i className="pe-7s-id text-custom"></i>
              <p className="text-muted">Design.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center process-box">
              <i className="pe-7s-target text-custom"></i>
              <p className="text-muted">Present.</p>
            </div>
          </div>
          <div className="text-center mx-auto">
            <Link to="/dashboard" className="btn btn-custom waves-light waves-effect margin-t-50">
              Get Started <i className="mdi mdi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
