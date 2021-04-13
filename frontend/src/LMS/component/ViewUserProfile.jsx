import React from "react";
import { FiChevronUp, FiClock } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import AdminDrawer from "./elements/AdminDrawer.jsx";

import Footer from "./Footer";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import Slider from "react-slick";
/* import { portfolioSlick2 } from "../page-demo/script"; */

import { portfolioSlick2 } from "../page-demo/script";
const ViewUserProfile = () => {

  var user = useSelector((state) => state.getSelectedId.getSelectedUserId);
  var userCourseList = [];

  function findUserCourses() {
    for (var i = 0; i < user.course.length; i++) {
      userCourseList.push(user.course[i]);
    }
  }
  findUserCourses();

  return (
    <React.Fragment>
      
      <PageHelmet pageTitle="Blog Details" />
      <Header from="allinstructors" />
      <Breadcrumb from="instructorview" />
      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--6">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src={`https://localhost:8080/${user.photo}`}
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title theme-gradient">{user.name}</h2>
                    <p className="description text-white">{user.bio}</p>
                    <ul className="text-white mt--50 list-group">
                      <span style={{ color: "#000" }}>
                        <li>
                          <p className="text-white">
                            <FiClock className="mr--10" />
                            Since: {new Date(user.createdAt).toDateString()}
                          </p>
                        </li>
                      </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start  Course Area Area */}
      <div className="rn-blog-area ptb--100  mb-dec--30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h3>Courses</h3>
                <p className="theme-gradient">
                 {user.name} By this courses from MethodMelody
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End course Area */}
      <div className="rn-blog-area ptb--100  mb-dec--30 bg_color--6">
        <div className="container">
          <div className="portfolio-area ptb--120 ">
            <div className="portfolio-sacousel-inner mb--55">
              <div portfolio-slick-activation mt--70 mt_sm--40>
                <Slider {...portfolioSlick2}>
                  {userCourseList.map((course) => (
                    <div className="portfolio" key={course._id}>
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <Link to="/courseview">
                            <img
                              src={`https://localhost:8080/${course.thumbnail}`}
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="content">
                        {/* <p className="blogtype">{instructor.bio}</p> */}
                        <h4 className="title">
                          <Link to="/courseview">{course.title}</Link>
                        </h4>

                        <div className="portfolio-btn">
                          <Link className="rn-btn text-white" to="/courseview">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-12">
          <div className="text-center ptb--50"></div>
        </div> */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
     {/*  <AdminDrawer/> */}
    </React.Fragment>
  );
};

export default ViewUserProfile;
