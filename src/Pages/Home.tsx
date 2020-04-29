import React, { ReactElement } from 'react';
import Navbar from './../Components/Navbar';
import Services from './../Components/Services';
import Features from './../Components/Features';
import Descriptions from './../Components/Descriptions';
import Team from './../Components/Team';
import Process from './../Components/Process';
import Testi from './../Components/Testi';
import Started from './../Components/Started';
import Contact from './../Components/Contact';
import SocialMedia from './../Components/SocialMedia';
import Footer from './../Components/Footer';
import FooterLinks from './../Components/FooterLinks';
import { Link } from 'react-router-dom';

class HomeFive extends React.Component {
  public render(): ReactElement {
    const bkg1 = {
      backgroundImage: 'url(images/img-2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <>
        <Navbar />

        <section className="home-padding-t-150 position-relative" id="home" style={bkg1}>
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="home-cell-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-white text-center">
                    <h1 className="home-title">We help startups launch their products</h1>
                    <p className="padding-t-15 home-desc">
                      Etiam sed.Interdum consequat proin vestibulum className at a euismod mus luctus quam.Lorem ipsum
                      dolor sit amet, consectetur adipisicing eli.
                    </p>
                    <Link to="" className="btn btn-custom margin-t-20">
                      Get Started
                    </Link>
                    <img src="images/home-dashboard.png" alt="" className="img-fluid center-block margin-t-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <Features />

        <Descriptions />

        <Team />

        <Process />

        <Testi />

        <Started />

        <Contact />

        <SocialMedia />
        <Footer />
        <FooterLinks />
      </>
    );
  }
}

export default HomeFive;
