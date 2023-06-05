import { useTheme } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Features = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <section className="section bg-light" id="features">
      <div className="container">
        <div className="row vertical-content">
          <div className="col-lg-5">
            <div className="features-box">
              <Typography variant="h3" color="#0f1120">
                A digital web based presentation generating app.
              </Typography>
              <p className="text-muted web-desc">
                As a small and passionate team, we craft our digital products with great care and love. Our goal is to empower users and
                make their life easier.
              </p>
              <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                <li className="">User experience is our top priority.</li>
                <li className="">We put a lot of effort in design.</li>
                <li className="">1% better everyday.</li>
              </ul>
              {/* <Button onClick={() => navigate('/about')} variant='contained' color='primary' className="btn btn-custom margin-t-30 waves-effect waves-light">
                Learn More <i className="mdi mdi-arrow-right"></i>
              </Button> */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="features-img features-right text-right">
              {/* <img src="images/online-world.svg" alt="macbook image" className="img-fluid" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
