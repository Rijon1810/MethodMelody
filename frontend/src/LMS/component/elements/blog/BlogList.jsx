import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent.jsx";
import { Link} from 'react-router-dom'

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";
import {getSelectedCourseId,getSelectedInstructorId} from "../../../../actions/getSelectedIdAction";

const BLogList = () => {
  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const categorySelectedList = useSelector(
    (state) => state.getSelectedId.getSelectedCourseCategoryList
  );
  console.log(categorySelectedList)

  const selectedInstructor = useSelector(
    (state) => state.getSelectedId.getSelectedInstructorId
  )

  console.log(`selected instructor id bloglist = ${selectedInstructor}`)
  
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row">
        {console.log("course list size in BlogList.js= " + courseList.length)}

        {categorySelectedList.map((course) => (          
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
                <Link to="/courseview">
                  <img
                    className="w-100"
                    src={`http://63.250.33.174/` + course.thumbnail}
                    alt="Blog Images"
                  />
                </Link>
              </div>
              <div className="content">
                <p className="blogtype">{course.catagory}</p>
                <h4 className="title">
                  <Link to="/courseview">{course.title}</Link>
                </h4>
                <div className="blog-btn">
                  <Link className="rn-btn text-white" to="/courseview">
                    View Course
                  </Link>
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
