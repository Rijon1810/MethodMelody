import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent.jsx";

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";

class BLogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: props.courseList,
    };
  }
  render() {
    return (
      <Fragment>
        <div className="row">
          {console.log(
            "course list size in BlogList.js= " + this.state.courseList.length
          )}
          
          {this.props.courseList.map((course) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={course._id}>
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/blog-details">
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
                    <a href="/blog-details">{course.title}</a>
                  </h4>
                  <div className="blog-btn">
                    <a className="rn-btn text-white" href="/CourseView">
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
  }
}
const mapStateToProps = (state) => ({
  courseList: state.getCourse.courseList,
});

export default connect(mapStateToProps, { getCourse })(BLogList);
