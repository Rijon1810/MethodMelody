import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

import Tab from "./tab/TabTwo.jsx";

class StudentPanel extends Component {
  render() {
    return (
      <div>
        <Header from="landing" />
        {/* Start Breadcrump Area */}
        <Breadcrumb from="Classroom" />
        {/* End Breadcrump Area */}

        {/* Start Blog Area */}

        <dvi className="container">
          <Tab tabStyle="tab-style--1" />
        </dvi>

        {/* End Blog Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </div>
    );
  }
}

export default StudentPanel;
