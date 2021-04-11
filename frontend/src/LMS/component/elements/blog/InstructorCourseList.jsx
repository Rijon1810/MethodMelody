import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
    getSelectedCourseId,
    getSelectedInstructorId
} from "../../../../actions/getSelectedIdAction";


const InstructorCourseList = () => {
  const courseList = useSelector((state) => state.getCourse.courseList);
 
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const categorySelectedList = useSelector(
    (state) => state.getSelectedId.getSelectedCourseCategoryList
  );

/*   const instructorId = useSelector(
    (state) => state.isLogged.payload.instructor
  ); */
  const instructorId =  useSelector((state) => state.isLogged.payload.instructor);
  //console.log("Hello this is me : ",instructorId);
  var instructorCourses = [];
  for(var i=0;i<courseList.length;i++)
  {

    if (courseList[i].instructor === instructorId) {
     
      instructorCourses.push(courseList[i]);
    }
  }

 

  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row">
        {/* console.log("course list size in BlogList.js= " + courseList.length) */}

        {instructorCourses.map((course) => (
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
                <h4 className="title">
                   Number of sold : { course.sold}
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

export default InstructorCourseList;
