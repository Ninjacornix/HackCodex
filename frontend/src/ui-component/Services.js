import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Our Services</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                We generate new, stunning presentations for your business, school, or personal use. Find the best template or theme for your
                next project. Hit Generate and start presenting like a pro!
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-diamond text-custom"></i>
                <h4 className="padding-t-15">Stunning themes</h4>
                <p className="padding-targett-15 text-muted">Describe your presenting style and get amazing themes that fit your needs.</p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-display2 text-custom"></i>
                <h4 className="padding-t-15">Generate and customize</h4>
                <p className="padding-t-15 text-muted">Load your research, generate slides, and edit to perfection.</p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-science text-custom"></i>
                <h4 className="padding-t-15">Awesome Support</h4>
                <p className="padding-t-15 text-muted">Need assistance? Our support team is here to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
