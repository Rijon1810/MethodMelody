import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { PlayArrow } from "@material-ui/icons";

//custom components
import Header from "./HeaderFive.jsx";
import PageHelmet from "./Helmet.jsx";
import Footer from "./Footer.jsx";
import ReactPlayer from "./ReactPlayer";

export default function CourseView(props) {
  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Course" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>Intro to Acoustic Guitar</h3>
          </div>
          <div className="col-lg-9 ">
            <ReactPlayer url={"https://www.youtube.com/watch?v=cUxRhesT8gY"} />
          </div>
          <div className="col-lg-3 bg_color--1">
            <div className=" pt--10">
              <h3> Curriculum</h3>
              <table className="table table-hover table-striped table-dark">
                <tbody>
                  <tr>
                    <td>
                      <PlayArrow />
                    </td>
                    <td>Introduction</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <PlayArrow />
                    </td>
                    <td>What you'll learn?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
