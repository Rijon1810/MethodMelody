import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link} from 'react-router-dom'

const SocialShare = [
    {
      Social: <FaFacebookF />,
      link: "https://www.facebook.com/MethodMelodyOfficial",
    },
    {
      Social: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/method-melody",
    },
    { Social: <FaInstagram />, link: "https://www.instagram.com/method_melody/" },
    { Social: <FaTwitter />, link: "https://twitter.com/method_melody" },
  ];
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ready To Do This</span>
                    <h2>
                      Let's get <br /> to work
                    </h2>
                    <Link className="rn-button-style--2" to="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>


              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                                          {/* Start Explore Section  */}
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4 className="theme-gradient">Explore</h4>
                        <ul className="ft-link">
                          <li>
                            <Link to="/allcourses">Courses</Link>
                          </li>
                          <li>
                          </li>
                          {/* <li>
                            <a href="/contact">Articles</a>
                          </li> */}
                          {/* <li>
                            <a href="/contact">Sitemap</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    {/* End Explore Section  */}


                    {/* Start About Section  */}
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4 className="theme-gradient">About</h4>
                        <ul className="ft-link">
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <Link to="/privacy">Privacy</Link>
                          </li>
                          <li>
                            <Link to="/terms">Terms</Link>
                          </li>
                          <li>
                            <Link to="/contact">Support</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End About Section  */}



                                     {/* Start Social Section  */}
                                     <div className="col-lg-4 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4 className="theme-gradient">Social</h4>
                        <ul className="ft-link">
                          <li>
                            <Link to="mailto:hr@example.com">
                              info@methodmelody.com
                            </Link>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <Link to={`${val.link}`}>{val.Social}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Social Section  */}



                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2020{" "}
                          <strong className="theme-gradient">
                            M/S MethodMelody International
                          </strong>
                          . 
                          
                        </p>
                        <p>All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
