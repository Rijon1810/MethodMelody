import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
    getSelectedCourseId,
    getSelectedInstructorId
} from "../../../../actions/getSelectedIdAction";


const ClassroomCourseList = () => {
  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const currentCourseList = useSelector(
    (state) => state.getAllUsers.getUserCourse.course
  );
  // console.log(categorySelectedList)

  var currentCourses = [];
  if(currentCourseList)
  {
    currentCourseList.map((course_id) => {
      console.log(`current course id = ${course_id}}`);
      for (var i = 0; i < courseList.length; i++) {
        if (course_id[0] === courseList[i]._id) {
          currentCourses.push(courseList[i]);
        }
      }
    });
  }


  const dispatch = useDispatch();
  return (
    <Fragment>
      {currentCourses.length != 0 ? (
        <div className="row">
          {console.log("course list size in BlogList.js= " + courseList.length)}

          {currentCourses.map((course) => (
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
                      src={`htpp://localhost:8080/` + course.thumbnail}
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
      ) : (
        <div className="row">
          <h3>
            You are not enrolled to any courses yet, please buy your preferred
            courses and visit them from this section.
          </h3>
        </div>
      )}
    </Fragment>
  );
};

export default ClassroomCourseList;
