import React, { Component } from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "../../elements/common/Breadcrumb.jsx";
import CounterOne from "../../elements/counters/CounterOne";
import Testimonial from "../../elements/Testimonial";
import BrandTwo from "../../elements/BrandTwo.jsx";
import CropSquareIcon from "@material-ui/icons/CropSquare";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  CropSquare,
} from "react-icons/fa";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class Privacy extends Component {
  render() {
    let title = "Our Policy",
      description = `This Privacy Policy describes the data protection practices of MethodMelody (“MethodMelody,”
            “we,” “us,” or “our”). This Privacy Policy applies to information that we collect and use about
            you when you access or use the MethodMelody website, mobile application, or other online or
            mobile service that links to or otherwise presents this Privacy Policy to you. We refer to these
            products and services collectively as the “Services.”
            PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE
            HANDLE YOUR INFORMATION. IF YOU DO NOT AGREE TO THIS PRIVACY
            POLICY, PLEASE DO NOT USE THE SERVICES.`;
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Terms" />

        <Header from="landing" />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"PRIVACY POLICY"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row  align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description text-justify">{description}</p>
                      <h4 className="description text-justify font-weight-bold">
                        This Privacy Policy contains the following sections
                      </h4>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              Information We Collect
                            </p>
                            <p classname="description">
                              How We Use Your Information
                            </p>
                            <p classname="description">
                              Cookies and Similar Technologies
                            </p>
                            <p classname="description">
                              Online Analytics and Advertising
                            </p>
                            <p classname="description">
                              How We Share and Disclose Your Information
                            </p>
                            <p classname="description">
                              Retention of Your Information
                            </p>
                            <p classname="description">
                              How We Protect Your Information
                            </p>
                            <p classname="description">
                              Third Party Links and Features
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">Children’s Privacy</p>
                            <p classname="description">
                              Data Subject Rights and Choices
                            </p>
                            <p classname="description">
                              Legal Bases for Use of Your Information
                            </p>
                            <p classname="description">
                              International Transfer and Privacy Shield
                            </p>
                            <p classname="description">
                              Privacy Notice for Residents of Certain U.S.
                              States
                            </p>
                            <p classname="description">
                              Changes to Our Privacy Policy
                            </p>
                            <p classname="description">
                              MethodMelody Contact Information
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt--150">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">INFORMATION WE COLLECT</h2>
                      <p className="description">
                        We collect information about you through the means
                        discussed below. Please note that we need certain types
                        of information so that we can provide the Services to
                        you. If you do not provide us with such information, or
                        ask us to delete it, you may no longer be able to access
                        or use our Services.
                      </p>
                      <h4 className="description text-justify font-weight-bold">
                        Information You Provide to Us
                      </h4>
                      <p className="description">
                        We collect a variety of information that you provide
                        directly to us. For example, we collect information from
                        you through:
                      </p>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <CropSquareIcon />
                              The Services you use or processing your orders
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Requests or questions you submit to us via online
                              forms, email, or otherwise
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Your participation in sweepstakes, contests, or
                              surveys
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Any reviews that you submit about the Services
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <CropSquareIcon />
                              Account registration and administration of your
                              account
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Uploads or posts to the Services
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Requests for customer support and technical
                              assistance
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            {" "}
                            <p classname="description">
                              Information about you. While parts of the Services
                              may not require you to provide any information
                              that can directly identify you by name (such as if
                              you choose to browse the website without logging
                              in), the specific types of information we collect
                              will depend upon the Services you use, how you use
                              them, and the information you choose to provide.
                            </p>
                            <p className="description text-justify">
                              The types of data we collect directly from you
                              includes:
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <CropSquareIcon />
                              Email address
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Name, if you choose to provide it
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Log-in credentials, if you create a MethodMelody
                              account
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Billing information, such as shipping address of a
                              gift card recipient, credit or debit card number,
                              Bkash ad Rocket number, verification number, and
                              expiration date
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Information about purchases or other transactions
                              with us
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Information about your customer service
                              interactions with us
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-us-list">
                            <p classname="description">
                              <CropSquareIcon />
                              Demographic information such as your gender or
                              other information you choose to provide as part of
                              your MethodMelody profile
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              User-generated content you provide to us, such as
                              when you comment on content on the Services,
                              respond to a survey request, review a class, or
                              participate in the public forums
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Classes in which you enroll
                            </p>
                            <p classname="description">
                              <CropSquareIcon />
                              Any other information you choose to directly
                              provide to us in connection with your use of the
                              Services
                            </p>
                            <h4 className="description text-justify font-weight-bold">
                              Information You Provide to Us
                            </h4>
                            <p className="description text-justify">
                              If you request that your purchase be provided to
                              someone other than yourself (such as a gift
                              recipient), we use the information you provide
                              about the other person to fulfill the shipment.
                              
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
export default Privacy;
