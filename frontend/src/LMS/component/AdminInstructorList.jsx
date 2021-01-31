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
import axios from "../api/Config";

import { getInstructor } from "../../actions/instructorAction";
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

const findFeaturedInstructors = (instructors) => {
  var iL = [];
  instructors.forEach((instructor) => {
    if (instructor.featured) {
      iL.push(instructor);
    }
  });
  return iL;
};

const featureOrUnfeatureInstructor = (instructor) => {
  console.log(`instructor for featuring = ${instructor._id}`)
  var data = { "featured": [], "unFeatured": [] };
  console.log(`instructor status = ${instructor.featured}`);
  if (instructor.featured) {
    data.unFeatured.push(instructor._id);
  } else {
    data.featured.push(instructor._id);
  }
  axios
    .post(`instructor/featured/add/`, data, {
      headers: {
        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
      },
    })
    .then((res) => {
      console.log(`instructor feature api response = ${res.data}`);
    })
    .catch((err) => {
      console.log(`instructor feature api response = ${err}`);
    });
};

const AdminInstructorList = () => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const featuredInstructorList = findFeaturedInstructors(instructorList);

  console.log(`featured course list size = ${featuredInstructorList.length}`);

  const dispatch = useDispatch();
  dispatch(getInstructor());

  const [list, setList] = React.useState("featured");

  useEffect(() => {}, [instructorList]);

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Instructor List" />
      <main className={classes.content}>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="admincourselist" />
        {/* Start Featured Instructor List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                {list !== "featured" ? (
                  <div className="section-title text-left">
                    <h3>All Instructors</h3>
                    <p className="theme-gradient">
                      All Published Instructor List
                    </p>
                    <p>
                      You can feature as well as unpublish any instructor from
                      here. To get already featured instructor list hit the
                      button to the right.
                    </p>
                  </div>
                ) : (
                  <div className="section-title text-left">
                    <h3>Featured Instructors</h3>
                    <p className="theme-gradient">
                      All Published Featured Instructor List
                    </p>
                    <p>
                      You can unfeature any instructor from here. To get all
                      published instructor list hit the button to the right.
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
                        View Featured Instructors
                      </span>
                    ) : (
                      <span
                        className="text"
                        onClick={() => {
                          setList("all");
                        }}
                      >
                        View All Instructors
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {list !== "featured"
                ? instructorList.map((instructor) => (
                    <div
                      className="col-lg-3 col-md-4 col-12"
                      key={instructor._id}
                    >
                      <div className="blog blog-style--1">
                        <div
                          className="thumbnail"
                          onClick={async (event) => {
                            dispatch(getSelectedInstructorId(instructor));
                          }}
                        >
                          <a href="/instructorview">
                            <img
                              className="w-100"
                              src={`http://63.250.33.174/${instructor.photo}`}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          {/* <p className="blogtype">{instructor.bio}</p> */}
                          <h4 className="title">
                            <a
                              href="/instructorview"
                              onClick={async (event) => {
                                dispatch(getSelectedInstructorId(instructor));
                              }}
                            >
                              {instructor.name}
                            </a>
                          </h4>
                          <div className="blog-btn d-flex justify-content-center">
                            {instructor.featured ? (
                              <a
                                className="rn-btn text-white"
                                href="#"
                                onClick={() => {
                                  featureOrUnfeatureInstructor(instructor);
                                }}
                              >
                                Un Feature
                              </a>
                            ) : (
                              <a
                                className="rn-btn text-white"
                                href="#"
                                onClick={() => {
                                  featureOrUnfeatureInstructor(instructor);
                                }}
                              >
                                Feature
                              </a>
                            )}
                          </div>
                          <div className="blog-btn d-flex justify-content-center">
                            <a className="rn-btn text-white" href="/courseview">
                              Un Publish
                            </a>
                          </div>
                          <div className="blog-btn d-flex justify-content-center">
                            <a
                              className="rn-btn text-white"
                              href="/instructorview"
                              onClick={async (event) => {
                                dispatch(getSelectedInstructorId(instructor));
                              }}
                            >
                              Read More
                            </a>
                            {dispatch(getSelectedInstructorId(instructor))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : featuredInstructorList.map((instructor) => (
                    <div
                      className="col-lg-3 col-md-4 col-12"
                      key={instructor._id}
                    >
                      <div className="blog blog-style--1">
                        <div
                          className="thumbnail"
                          onClick={async (event) => {
                            dispatch(getSelectedInstructorId(instructor));
                          }}
                        >
                          <a href="/instructorview">
                            <img
                              className="w-100"
                              src={`http://63.250.33.174/${instructor.photo}`}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          {/* <p className="blogtype">{instructor.bio}</p> */}
                          <h4 className="title">
                            <a
                              href="/instructorview"
                              onClick={async (event) => {
                                dispatch(getSelectedInstructorId(instructor));
                              }}
                            >
                              {instructor.name}
                            </a>
                          </h4>
                          {list !== "featured" ? (
                            <div>
                              {" "}
                              <div className="blog-btn">
                                <div className="blog-btn d-flex justify-content-center">
                                  {instructor.featured ? (
                                    <a
                                      className="rn-btn text-white"
                                      href="#"
                                      onClick={() => {
                                        featureOrUnfeatureInstructor(instructor);
                                      }}
                                    >
                                      Un Feature
                                    </a>
                                  ) : (
                                    <a
                                      className="rn-btn text-white"
                                      href="#"
                                      onClick={() => {
                                        featureOrUnfeatureInstructor(instructor);
                                      }}
                                    >
                                      Feature
                                    </a>
                                  )}
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
                                    href="/instructorview"
                                    onClick={async (event) => {
                                      dispatch(
                                        getSelectedInstructorId(instructor)
                                      );
                                    }}
                                  >
                                    Read More
                                  </a>
                                </div>
                                {dispatch(getSelectedInstructorId(instructor))}
                              </div>
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <div className="blog-btn">
                                <div className="blog-btn d-flex justify-content-center">
                                  <a
                                    className="rn-btn text-white"
                                    href="#"
                                    onClick={() => {
                                      featureOrUnfeatureInstructor(instructor);
                                    }}
                                  >
                                    Un Feature
                                  </a>
                                </div>

                                <div className="blog-btn d-flex justify-content-center">
                                  <a
                                    className="rn-btn text-white"
                                    href="/instructorview"
                                    onClick={async (event) => {
                                      dispatch(
                                        getSelectedInstructorId(instructor)
                                      );
                                    }}
                                  >
                                    Read More
                                  </a>
                                </div>
                                {dispatch(getSelectedInstructorId(instructor))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        {/* End Featured Instructor List */}
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

export default AdminInstructorList;
