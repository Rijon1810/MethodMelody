import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/MethodMelodyOfficial",
  },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/company/method-melody" },
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
              <div className="col-lg-12">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Explore Section  */}
                    <div className="col-lg-4 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4 className="theme-gradient">Explore</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/portfolio">Classes</a>
                          </li>
                          <li>
                            <a href="/about">Metholdmelody Live</a>
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
                            <a href="/about">Privacy</a>
                          </li>
                          <li>
                            <a href="/contact">Terms</a>
                          </li>
                          <li>
                            <a href="/contact">Support</a>
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
                            <a href="mailto:hr@example.com">
                              info@methodmelody.com
                            </a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
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
                          . All Rights Reserved.
                        </p>
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
