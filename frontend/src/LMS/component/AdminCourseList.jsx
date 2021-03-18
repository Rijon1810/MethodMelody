import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link} from 'react-router-dom'
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { useSelector, useDispatch } from "react-redux";
import axios from "../api/Config";
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

const featureOrUnfeatureCourse = (course) => {
  console.log(`course for featuring = ${course._id}`)
  var data = { "featured": [], "unFeatured": [] };
  console.log(`course status = ${course.featured}`);
  if (course.featured) {
    data.unFeatured.push(course._id);
  } else {
    data.featured.push(course._id);
  }
  axios
    .post(`course/featured/add/`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const AdminCourseList = () => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);

  var featuredCourseList = findFeaturedCourses(courseList);

  console.log(`featured course list size = ${featuredCourseList.length}`);

  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const dispatch = useDispatch();
  dispatch(getCourse());

  const [list, setList] = React.useState("featured");

  useEffect(() => {}, [courseList]);

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
                  <Link className="btn-transparent rn-btn-dark" to="#">
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
                  </Link>
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
                          <Link to="/courseview">
                            <img
                              className="w-100"
                              src={`http://63.250.33.174/${course.thumbnail}`}
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          {/* <p className="blogtype">{instructor.bio}</p> */}
                          <h4 className="title">
                            <Link to="/courseview">{course.title}</Link>
                          </h4>
                          {list !== "featured" ? (
                            <div>
                              {" "}
                              <div className="blog-btn d-flex justify-content-center">
                                {course.featured ? (
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={() => {
                                      featureOrUnfeatureCourse(course);
                                    }}
                                  >
                                    Un Feature
                                  </Link>
                                ) : (
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={() => {
                                      featureOrUnfeatureCourse(course);
                                    }}
                                  >
                                    Feature
                                  </Link>
                                )}
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <Link
                                  className="rn-btn text-white"
                                  to="/courseview"
                                >
                                  Un Publish
                                </Link>
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <Link
                                  className="rn-btn text-white"
                                  to="/courseview"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <div className="blog-btn d-flex justify-content-center">
                                <Link
                                  className="rn-btn text-white"
                                  to="#"
                                  onClick={() => {
                                    console.log(course);
                                    featureOrUnfeatureCourse(course);
                                  }}
                                >
                                  Un Feature
                                </Link>
                              </div>
                              <div className="blog-btn d-flex justify-content-center">
                                <Link
                                  className="rn-btn text-white"
                                  to="/courseview"
                                >
                                  View Details
                                </Link>
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
                          <Link to="/courseview">
                            <img
                              className="w-100"
                              src={`http://63.250.33.174/${course.thumbnail}`}
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                        <div className="content">
                          {/* <p className="blogtype">{instructor.bio}</p> */}
                          <h4 className="title">
                            <Link to="/courseview">{course.title}</Link>
                          </h4>

                          <div className="blog-btn d-flex justify-content-center">
                            <Link className="rn-btn text-white" to="#" onClick={()=>{
                              featureOrUnfeatureCourse(course);
                            }}>
                              Un Feature
                            </Link>
                          </div>
                          <div className="blog-btn d-flex justify-content-center">
                            <Link className="rn-btn text-white" to="/courseview">
                              View Details
                            </Link>
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
