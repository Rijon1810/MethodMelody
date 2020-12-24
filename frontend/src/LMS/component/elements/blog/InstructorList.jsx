import React, { Component, Fragment } from "react";
import BlogContent from "./BlogContent.jsx";

import { connect } from "react-redux";
import { getInstructor } from "../../../../actions/getInstructorAction";

class InstructorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: props.courseList,
    };
  }
  render() {
    const PostList = BlogContent.slice(0, 6);
    return (
      <Fragment>
        <div className="row">
          {/* {console.log(
            "course list size in BlogList.js= " + this.state.courseList.length
          )} */}
          
          {this.props.allInstructorList.map((instructor) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={instructor._id}>
              <div className="blog blog-style--1">
                <div className="thumbnail">
                  <a href="/instructorview">
                    <img
                      className="w-100"
                      src={`http://63.250.33.174/` + instructor.photo}
                      alt="Blog Images"
                    />
                  </a>
                </div>
                <div className="content">
                  {/* <p className="blogtype">{course.catagory}</p> */}
                  <h4 className="title">
                    <a href="/instructorview">{instructor.name}</a>
                  </h4>
                  <div className="blog-btn">
                    <a className="rn-btn text-white" href="/instructorview">
                      View Instructor
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
    allInstructorList: state.getInstructor.instructorList,
});

export default connect(mapStateToProps, { getInstructor })(InstructorList);
