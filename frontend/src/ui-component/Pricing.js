import React from 'react';
import { Link } from 'react-router-dom';
const Pricing = () => {
  return (
    <section className="section pt-5" id="pricing">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="section-title text-center">Our Pricing</h1>
            <div className="section-title-border margin-t-20"></div>
            <p className="section-subtitle font-secondary text-muted text-center padding-t-30">
              Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing
              options.
            </p>
          </div>
        </div>
        <div className="row margin-t-50">
          <div className="col-lg-4">
            <div className="text-center pricing-box hover-effect">
              <h4 className="text-uppercase">Economy</h4>
              <h1>$9.90</h1>
              <h6 className="text-uppercase text-muted">Billing Per Month</h6>
              <div className="pricing-border"></div>
              <div className="plan-features margin-t-30">
                <p>
                  Presentations: <b className="text-custom">2</b>
                </p>
                <p>
                  Onlinespace: <b className="text-custom">20MB</b>
                </p>
                <p>
                  Support: <b className="text-custom">No</b>
                </p>
              </div>
              <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">
                Join Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center pricing-box hover-effect price-active">
              <h4 className="text-uppercase">Deluxe</h4>
              <h1>$19.90</h1>
              <h6 className="text-uppercase text-muted">Billing Per Month</h6>
              <div className="pricing-border"></div>
              <div className="plan-features margin-t-30">
                <p>
                  Presentations: <b className="text-custom">20</b>
                </p>
                <p>
                  Onlinespace: <b className="text-custom">100MB</b>
                </p>
                <p>
                  Support: <b className="text-custom">Yes</b>
                </p>
              </div>
              <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">
                Join Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center pricing-box hover-effect">
              <h4 className="text-uppercase">Ultimate</h4>
              <h1>$29.90</h1>
              <h6 className="text-uppercase text-muted">Billing Per Month</h6>
              <div className="pricing-border"></div>
              <div className="plan-features margin-t-30">
                <p>
                  Presentations: <b className="text-custom">UNLIMITED</b>
                </p>
                <p>
                  Onlinespace: <b className="text-custom">5 GB</b>
                </p>
                <p>
                  Support: <b className="text-custom">Yes</b>
                </p>
              </div>
              <Link to="JavaScript:Void(0);" className="btn btn-custom waves-effect waves-light margin-t-30">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
