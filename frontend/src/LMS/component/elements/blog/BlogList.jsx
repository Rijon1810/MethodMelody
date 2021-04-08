import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { postCart } from '../../../../actions/cartAction';
import { getSelectedCourseId, getSelectedInstructorId } from "../../../../actions/getSelectedIdAction";
import { postWishListCourse } from '../../../../actions/wishListAction';

const BLogList = ({Category , Instructor , CourseType}) => {
  const courseList = useSelector((state) => state.getCourse.courseList);
  const [visibleCourses, setVisibleCourses] = useState(courseList);
  const [keyword, setKeyword] = useState("");

  const search = (keyword) => {
    if (keyword !== "") {
      setKeyword(keyword);
      const filteredCourses = courseList.filter(
        (course) =>
          course.title.toLowerCase().includes(keyword.toLowerCase()) && courseList
      );
      setVisibleCourses(filteredCourses);
    } else {
      setKeyword("");
      setVisibleCourses(courseList);
    }
  };
  search(Category)
  search(Instructor)
  search(CourseType)
  
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

  const userId = useSelector((state) => state.isLogged.payload.id);
  console.log(`selected instructor id bloglist = ${selectedInstructor}`)
  
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="row">
        {console.log("course list size in BlogList.js= " + courseList.length)}

        {visibleCourses.map((course) => (          
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
                <button
                        variant="contained"
                        className="rn-button-style--2 btn-solid"
                        fullWidth={true}
                        style={{ width: "100%", marginTop: "50px" }}
                        onClick={async (event) => {
                          dispatch(
                            postCart({
                              user: userId,
                              course: course._id,
                            })
                          );
                        }}
                      >
                        Add to cart
                      </button>
                        <button
                        variant="contained"
                        className="rn-button-style--2 btn-solid"
                        fullWidth={true}
                        style={{ width: "100%", marginTop: "50px" }}
                        onClick={async (event) => {
                          dispatch(
                            postWishListCourse({
                              user: userId,
                              course: course._id,
                            })
                          );
                        }}
                      >
                        Add to wishlist
                      </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BLogList;
