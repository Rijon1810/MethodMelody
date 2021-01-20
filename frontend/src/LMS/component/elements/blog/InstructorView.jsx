import React, { Component } from "react";
import PageHelmet from "../../Helmet.jsx";
import { SiBandsintown } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";

import { connect } from "react-redux";

import Breadcrumb from "../common/Breadcrumb.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
} from "../../../../actions/getSelectedIdAction";

const InstructorVIew = () => {
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const courseList = useSelector((state) => state.getCourse.featuredCourseList);
  var instructor = useSelector(
    (state) => state.getSelectedId.getSelectedInstructorId
  );
  var instructorCourseList = [];
  function findInstructorCourses() {
    courseList.forEach((course) => {
      if (course.instructor === instructor._id) {
        instructorCourseList.push(course);
      }
    });
  }
  findInstructorCourses();
  console.log(instructorCourseList.length);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Blog Details" />
      <Header from="landing" />
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
                    src={`http://63.250.33.174/${instructor.photo}`}
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title theme-gradient">{instructor.name}</h2>
                    <p className="description text-white">{instructor.bio}</p>
                    <ul className="text-white mt--50 list-group">
                      <span style={{ color: "#000" }}>
                        <li className="mr--50">
                          <p className="text-white">
                            <SiBandsintown className="mr--10" />
                            Band: {instructor.band}
                          </p>
                        </li>
                        <li className="mr--50">
                          <p className="text-white">
                            <GiTeacher className="mr--10" />
                            Teaches: {instructor.teaches}
                          </p>
                        </li>
                        <li>
                          <p className="text-white">
                            <FiClock className="mr--10" />
                            Since:{" "}
                            {new Date(instructor.createdAt).toDateString()}
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
                  Start with any of {instructor.name}'s courses
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            {instructorCourseList.map((course) => (
              <div
                className="col-lg-3 col-md-4 col-12"
                key={course._id}
                onClick={async (event) => {
                  dispatch(getSelectedCourseId(course));
                  instructorList.forEach((instructor) => {
                    if (instructor._id === course.instructor) {
                      dispatch(getSelectedInstructorId(instructor));
                    }
                  });
                }}
              >
                <div className="blog blog-style--1">
                  <div className="thumbnail">
                    <a href="/courseview">
                      <img
                        className="w-100"
                        src={`http://63.250.33.174/${course.thumbnail}`}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    {/* <p className="blogtype">{instructor.bio}</p> */}
                    <h4 className="title">
                      <a href="/courseview">{course.title}</a>
                    </h4>

                    <div className="blog-btn">
                      <a className="rn-btn text-white" href="/courseview">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End course Area */}

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

      <Footer />
    </React.Fragment>
  );
};

export default InstructorVIew;
