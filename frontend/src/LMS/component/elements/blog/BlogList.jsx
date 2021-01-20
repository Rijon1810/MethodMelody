import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent.jsx";

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";
import {getSelectedCourseId,getSelectedInstructorId} from "../../../../actions/getSelectedIdAction";

const BLogList = () => {
  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row">
        {console.log("course list size in BlogList.js= " + courseList.length)}

        {courseList.map((course) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
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
                    src={`http://63.250.33.174/` + course.thumbnail}
                    alt="Blog Images"
                  />
                </a>
              </div>
              <div className="content">
                <p className="blogtype">{course.catagory}</p>
                <h4 className="title">
                  <a href="/courseview">{course.title}</a>
                </h4>
                <div className="blog-btn">
                  <a className="rn-btn text-white" href="/courseview">
                    View Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BLogList;
