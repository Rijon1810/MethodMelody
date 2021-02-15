import React, { Component, Fragment, useState, useEffect } from "react";
import BlogContent from "./BlogContent.jsx";

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
} from "../../../../actions/getSelectedIdAction";
import { getUserCourse } from "../../../../actions/userAction";
import { removeWishList } from "../../../../actions/wishListAction";
const WishList = () => {
  const dispatch = useDispatch();
  console.log("Inside wishlist");
  const [render, setRender] = useState(false);
  const courseList = useSelector(
    (state) => state.getAllUsers.getUserCourse.wishList
  );
  const courseListAll = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const categorySelectedList = useSelector(
    (state) => state.getSelectedId.getSelectedCourseCategoryList
  );
  const userId = useSelector((state) => state.isLogged.payload.id);
  console.log(categorySelectedList);

  // const selectedCourse = (()=>{
  //   courseListAll.map((course)=>{
  //     if(course._id === courseList){
  //       return course;
  //     }
  //   })
  // })

  var wishListCourses = [];
  courseList.forEach((wishItem) => {
    for (let i = 0; i < courseListAll.length; i++) {
      if (wishItem === courseListAll[i]._id) {
        wishListCourses.push(courseListAll[i]);
      }
    }
  });

  useEffect(() => {
    dispatch(getUserCourse(`${userId}`));
    for (var j = 0; j < wishListCourses.length; j++) {
      if (wishListCourses[j]._id === render) {
        wishListCourses.splice(j, 1);
      }
    }
  }, [dispatch, wishListCourses]);

  return (
    <Fragment>
      {wishListCourses.length != 0 ? (
        <div className="row">
          {console.log("course list size in BlogList.js= " + courseList.length)}

          {wishListCourses.map((course) => (
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
                  <div className="blog-btn">
                    <a
                      className="rn-btn text-white"
                      href="#"
                      onClick={() => {
                        dispatch(
                          removeWishList({ user: userId, course: course._id })
                        );
                        setRender(course._id);
                      }}
                    >
                      Remove Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row">
          <h3>
            Currently your wish list is empty, add some courses to your wishlist
            in order to bookmark them to this section.
          </h3>
        </div>
      )}
    </Fragment>
  );
};

export default WishList;
