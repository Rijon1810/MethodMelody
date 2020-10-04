import React, { useState, useEffect } from "react";

//custom components
import Header from "./Header.jsx";
import BlogList from "./elements/blog/BlogList";
import Pagination from "./elements/common/Pagination.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import PageHelmet from "./Helmet.jsx";

//importing custom scripts
import axios from "../api/Config";
import { Grid } from "@material-ui/core";

export default function CourseList(props) {
  //hooks
  const [callingComponent, setCallingComponent] = useState(
    props.location.state.courses
  );

  const [courseList, setCourseList] = useState([]);

  // life-cycle methods

  useEffect(() => {
    getCourseType();
  }, []);

  // custom functions

  // get course list type
  function getCourseType() {
    switch (callingComponent) {
      case "all":
        getAllCourses();
        break;
    }
  }

  // get courses list
  function getAllCourses() {
    axios
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const courses = res.data;
        setCourseList(courses);
        console.log(
          "all course list size fetched in CourseList: " + courses.length
        );
      });
  }

  return (
    <div className="active-dark">
      <PageHelmet pageTitle="All Courses" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"All Courses"} />
      {/* End Breadcrump Area */}
      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--10 bg_color--5">
        <div className="container">
          <BlogList courseList={courseList} />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination />
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
