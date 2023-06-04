import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Get In Touch</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">
                We value your feedback. Please send us your comments and suggestions.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">Office Address 1:</span>
                  <br /> <span className="text-muted d-block mt-2">Bijenička cesta 32 <br />10000 Zagreb</span>
                </p>
                <p className="mt-4">
                  <span className="h5">Office Address 2:</span>
                  <br />{' '}
                  <span className="text-muted d-block mt-2">
                    Unska ulica 3 <br />
                    10000 Zagreb
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br /> <span className="text-muted d-block mt-2">9:00AM - 6:00PM</span>
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="custom-form mt-4 pt-4">
                <div id="message"></div>
                <form method="post" action="home-one" name="contact-form" id="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Your name*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-2">
                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email*" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input type="text" className="form-control" id="subject" placeholder="Your Subject.." />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-right">
                      <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                      <div id="simple-msg"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
