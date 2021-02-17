import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../LMS/component/Header.jsx";
import Footer from "../LMS/component/Footer.jsx";

class About extends Component {
  render() {
    let title = "Method Melody",
      description =
        "Learning knows no bounds, nor does passion. There is no age limit when it comes to music either, it is an art that only people blessed with talent can express. Method Melody is where all of the above come into harmony and give people the chance to venture into new challenges.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          from="landing"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About Method Melody"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <p className="description text-justify">
                            {description}
                          </p>
                        </div>
                        <div className="about-us-list">
                          <p className="text-justify">
                            Method Melody is an online streaming platform where
                            big names of the Bangladeshi Music Industry have
                            come together under one roof to revolutionise the
                            way of learning to play musical instruments! It
                            shall be an experience that aspiring artists have
                            always desired but may never thought were possible,
                            to learn their musical instrument from famous
                            artists who have made a significant impact on the
                            Music Industry.
                          </p>
                        </div>
                        <div className="about-us-list">
                          <p className="text-justify">
                            Method Melody hopes to be the answer to making
                            musical education accessible to all. With renowned
                            artists as mentors, it aspires to inspire new talent
                            and enhance existing talent.{" "}
                          </p>
                        </div>
                        <div className="about-us-list">
                          <p className="text-justify">
                            Our founders are music enthusiasts who understand
                            the needs of artists and are actively working
                            towards giving its subscribers the best value for
                            their money. We are a small company working towards
                            a big change. Founded in 2020, amidst a global
                            pandemic, Method Melody is a completely online
                            educational platform that ensures the safety of
                            everyone involved.
                          </p>
                        </div>
                        <div className="about-us-list">
                          <p className="text-justify">
                            Our goal is to bridge the path when it comes to
                            talent reaching its highest potential in the Musical
                            World.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
