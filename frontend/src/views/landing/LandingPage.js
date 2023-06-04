import React from 'react';
import Navbar from '../../ui-component/Navbar';
import Services from '../../ui-component/Services';
import Features from '../../ui-component/Features';
import Descriptions from '../../ui-component/Descriptions';
import Pricing from '../../ui-component/Pricing';
import Team from '../../ui-component/Team';
import Process from '../../ui-component/Process';
import Testi from '../../ui-component/Testi';
import Started from '../../ui-component/Started';
import Blog from '../../ui-component/Blog';
import Contact from '../../ui-component/Contact';
import SocialMedia from '../../ui-component/SocialMedia';
import Footer from '../../ui-component/Footer';
import FooterLinks from '../../ui-component/FooterLinks';
import Switcher from '../../ui-component/Switcher';
import { Link } from 'react-router-dom';
import Aux from './hoc/Aux_';

class HomeTwo extends React.Component {
  render() {
    var bkg1 = {
      backgroundImage: 'url(free/images/wave-shape/wave1.png)'
    };
    var bkg2 = {
      backgroundImage: 'url(free/images/wave-shape/wave2.png)'
    };
    var bkg3 = {
      backgroundImage: 'url(free/images/wave-shape/wave3.png)'
    };

    return (
      <Aux>
        {/* Navbar Component*/}
        {/* <Navbar /> */}

        <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-white text-center">
                    <h1 className="home-title">Making presentations is now easy</h1>
                    {/*<p className="padding-t-15 home-desc">Etiam sed.Interdum consequat proin vestibulum className at.</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div className="wave wave-one" style={bkg1}></div>
            </div>
            <div className="waves-shape shape-two">
              <div className="wave wave-two" style={bkg2}></div>
            </div>
            <div className="waves-shape shape-three">
              <div className="wave wave-three" style={bkg3}></div>
            </div>
          </div>
        </section>

        {/* Services Component*/}
        <Services />

        {/* Features Component*/}
        <Features />

        {/* Pricing Component*/}
        <Pricing />

        {/* Process Component*/}
        <Process />

        {/* Contact Component*/}
        <Contact />

        {/* SocialMedia Component*/}
        <SocialMedia />

        {/* Footer Component*/}
        {/*<Footer />*/}

        {/* FooterLinks Component*/}
        <FooterLinks />
      </Aux>
    );
  }
}

export default HomeTwo;
