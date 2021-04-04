import React, { Component, Fragment, useState, useEffect } from "react";
import BlogContent from "./BlogContent.jsx";
import { Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
} from "../../../../actions/getSelectedIdAction";
import { getUserCourse } from "../../../../actions/userAction";
import { removeWishList } from "../../../../actions/wishListAction";

const PurchaseHistoryList = () => {
  console.log("Inside Purchase History");
  const [render, setRender] = useState(false);
  
  const courseListAll = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const previousCourseList = useSelector(
    (state) => state.getAllUsers.getUserCourse.previousCourse
  );
  const userId = useSelector((state) => state.isLogged.payload.id);
//   console.log(categorySelectedList);

  // const selectedCourse = (()=>{
  //   courseListAll.map((course)=>{
  //     if(course._id === courseList){
  //       return course;
  //     }
  //   })
  // })

  var previousCourses = [];
  previousCourseList.forEach((previousCourse) => {
    for (let i = 0; i < courseListAll.length; i++) {
      if (previousCourse === courseListAll[i]._id) {
        previousCourses.push(courseListAll[i]);
      }
    }
  });

  useEffect(() => {
    dispatch(getUserCourse(`${userId}`));
    // dispatch(getSelectedCourseCategory(""));
  }, [render]);

  const dispatch = useDispatch();
  return (
    <Fragment>
        {previousCourses.length != 0 ? (  <div className="row">
        {/* {console.log("course list size in BlogList.js= " + courseList.length)} */}

        {previousCourses.map((course) => (
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
                {/* <div className="blog-btn">
                  <a
                    className="rn-btn text-white"
                    href="#"
                    onClick={() => {
                      dispatch(
                        removeWishList({ user: userId, course: course._id })
                      );
                      // setRender(true);
                    }}
                  >
                    Remove Course
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    ):(<div className="row">
    <h3>
      You have not yet purchased any courses from this platform yet. Once you purchase a course and finish the course, it will appear in this section.
    </h3>
  </div>) }
    
      </Fragment>
  );
};

export default PurchaseHistoryList;
