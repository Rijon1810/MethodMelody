import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCourse,
  updateCourse,
  getCourseById,
} from "../../actions/courseAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "../api/Config";

class UpdateLessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnCourse: "",
      showCourse: "",
      showVideos: [],
      rnStatus: "",
      rnStatusList: ["open", "login", "paid"],
    };
  }

  componentDidMount() {}

  courseToShow = (id) => {
    console.log(`rnCourse value = ${id}`);
    // this.setState({ showCourse: id });
    {
      this.props.courseList.map((course) => {
        if (course._id == id) {
          this.setState({ showVideos: course.videos });
          console.log(course.videos);
        }
      });
    }
  };

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="section-title text-left theme-gradient">
                <h4 className="title">Update Lesson Status</h4>
              </div>
              <p className="text-muted">
                Can update the access level of each lesson from the associated
                dropdown list.
              </p>
              <div className="form-wrapper">
                <form ref={(el) => (this.form = el)}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Course to Update Lesson From*
                        </label>
                        <label htmlFor="instructor *">
                          <select
                            name="instructorId"
                            value={this.state.rnCourse}
                            className="form-control"
                            onChange={(e) => {
                              this.courseToShow(e.target.value);
                              this.setState({ rnCourse: e.target.value });
                              this.props.getCourseById(e.target.value);
                            }}
                          >
                            <option key={""} value={0}>
                              Select Course
                            </option>
                            {this.props.courseList.map((course, index) => (
                              <option key={index} value={course._id}>
                                {course.title}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    onClick={async (event) => {
                      event.preventDefault();
                      const body = new FormData(this.form);
                      const id = body.get("instructorId");
                      body.delete("instructorId");
                      const data = new FormData();
                      for (var pair of body.entries()) {
                        if (pair[0] == "banner" || pair[0] == "thumbnail") {
                          if (pair[1].name != "") {
                            console.log(
                              pair[0] + ", " + JSON.stringify(pair[1].name)
                            );
                            data.append(pair[0], body.get(pair[0]));
                          }
                        } else if (pair[1]) {
                          console.log(pair[0] + ", " + pair[1]);
                          data.append(pair[0], body.get(pair[0]));
                        }
                      }
                      toast("Upload started!!! please wait!!");
                      await this.props.updateInstructor(id, body);
                      console.log(this.props.instructor_update_status);
                      this.props.instructor_update_status ===
                      "Instructor Updated Successfully!"
                        ? toast.success("Instructor Updated Successfully!", {
                            position: "bottom-center",
                            autoClose: false,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          })
                        : toast.error("Instructor Update Failed!", {
                            position: "bottom-center",
                            autoClose: false,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                    }}
                  >
                    Submit
                  </button> */}

                  <ToastContainer
                    position="bottom-center"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </form>
              </div>
              <div className="mt--50">
                {/* {this.props.courseList.map((course) => {
                    
                  if (course._id == this.state.showCourse) {
                    // course.videos.forEach((video) => {
                    //   console.log(video.path);
                    // });

                    course.videos.map((video) => <h2>{video.path}</h2>);
                  }
                })} */}
                {this.state.showVideos.map((video) => (
                  <div className="row pt--30">
                    <div className="col">
                      <p>{video.filename}</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <p >{video.status}</p>
                    </div>
                    <div className="col blog-btn d-flex justify-content-end">
                    <a
                        className="rn-btn"
                        href="#"
                        onClick={() => {
                          console.log(video._id);
                          console.log(this.state.rnStatus); 
                          axios
                            .post(
                              "course/status/",
                              {
                                id: video._id,
                                status: "open",
                              },
                              {
                                headers: {
                                  "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                                  "Content-type": "application/json",
                                },
                              }
                            )
                            .then((res) => {
                              alert(`lesson status updated successfully`);
                            })
                            .catch((err) => {
                              console.log(err);
                            });                         
                        }}
                      >
                        Open
                      </a>
                    </div>
                    <div className="col blog-btn d-flex justify-content-end">
                    <a
                        className="rn-btn"
                        href="#"
                        onClick={() => {
                          console.log(video._id);
                          console.log(this.state.rnStatus);  
                          axios
                            .post(
                              "course/status/",
                              {
                                id: video._id,
                                status: "login",
                              },
                              {
                                headers: {
                                  "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                                  "Content-type": "application/json",
                                },
                              }
                            )
                            .then((res) => {
                              alert(`lesson status updated successfully`);
                            })
                            .catch((err) => {
                              console.log(err);
                            });                        
                        }}
                      >
                        Login
                      </a>
                    </div>
                    <div className="col blog-btn d-flex justify-content-end">
                      <a
                        className="rn-btn"
                        href="#"
                        onClick={() => {
                          console.log(video._id);
                          console.log(this.state.rnStatus);  
                          axios
                            .post(
                              "course/status/",
                              {
                                id: video._id,
                                status: "paid",
                              },
                              {
                                headers: {
                                  "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                                  "Content-type": "application/json",
                                },
                              }
                            )
                            .then((res) => {
                              alert(`lesson status updated successfully`);
                            })
                            .catch((err) => {
                              console.log(err);
                            });                         
                        }}
                      >
                        Paid
                      </a>
                    
                    </div>
                  </div>
                ))}
                {/* <h1>Hello!!!!!!!s</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.getCourse.courseList,
  //   instructor_update_status: state.getInstructor.payload,
});

export default connect(mapStateToProps, {
  getCourse,
  updateCourse,
  getCourseById,
})(UpdateLessonForm);
