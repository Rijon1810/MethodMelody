import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { useSelector, useDispatch } from "react-redux";

import { getCourse } from "../../actions/courseAction";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
  getCurrentVideoIndex,
} from "../../actions/getSelectedIdAction";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
}));

const findFeaturedCourses = (courses) => {
  var cL = [];
  courses.forEach((course) => {
    if (course.featured) {
      cL.push(course);
    }
  });
  return cL;
};

const AdminCourseList = () => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);

  const featuredCourseList = findFeaturedCourses(courseList);

  console.log(`featured course list size = ${featuredCourseList.length}`);

  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const dispatch = useDispatch();

  const [list, setList] = React.useState("featured");

  useEffect(() => {}, [list]);

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Courses List" />
      <main className={classes.content}>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="admincourselist" />
        {/* Start Featured Course List */}
        <div className="rn-blog-area ptb--100  mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                {list !== "featured" ? (
                  <div className="section-title text-left">
                    <h3>All Courses</h3>
                    <p className="theme-gradient">All Published Course List</p>
                    <p>
                      You can feature as well as unpublish any course from here.
                      To get already featured course list hit the button to the
                      right.
                    </p>
                  </div>
                ) : (
                  <div className="section-title text-left">
                    <h3>Featured Courses</h3>
                    <p className="theme-gradient">
                      All Published Featured Course List
                    </p>
                    <p>
                      You can unfeature any course from here. To get all
                      published course list hit the button to the right.
                    </p>
                  </div>
                )}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <a className="btn-transparent rn-btn-dark" href="#">
                    {list !== "featured" ? (
                      <span
                        className="text"
                        onClick={() => {
                          setList("featured");
                        }}
                      >
                        View Featured Courses
                      </span>
                    ) : (
                      <span
                        className="text"
                        onClick={() => {
                          setList("all");
                        }}
                      >
                        View All Courses
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {list !== "featured"
                ? courseList.map((course) => (
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
                          {list !== "featured" ? (
                            <div>
                              {" "}
                              <div className="blog-btn d-flex justify-content-center">
                                <a
                                  className="rn-btn text-white"
                                  href="/courseview"
                                >
                                  Un Feature
                                </a>
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <a
                                  className="rn-btn text-white"
                                  href="/courseview"
                                >
                                  Un Publish
                                </a>
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <a
                                  className="rn-btn text-white"
                                  href="/courseview"
                                >
                                  View Details
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <div className="blog-btn d-flex justify-content-center">
                                <a
                                  className="rn-btn text-white"
                                  href="/courseview"
                                >
                                  Un Feature
                                </a>
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <a
                                  className="rn-btn text-white"
                                  href="/courseview"
                                >
                                  View Details
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                : featuredCourseList.map((course) => (
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

                          <div className="blog-btn d-flex justify-content-center">
                            <a className="rn-btn text-white" href="/courseview">
                              Un Feature
                            </a>
                          </div>
                          <div className="blog-btn d-flex justify-content-center">
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
        {/* End Featured Course List */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <Footer />
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default AdminCourseList;
