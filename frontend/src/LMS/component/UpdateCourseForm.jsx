import React, { Component } from "react";
import { connect } from "react-redux";
// import { getInstructor } from "../../actions/instructorAction";
import {
  updateCourse,
  getCourse,
  getCourseById,
} from "../../actions/courseAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnTitle: "",
      rnSubtitle: "",
      rnCatagory: "",
      rnCourseHour: "",
      rnPrice: "",
      rnRequirements: "",
      rnTopic: "",
      rnWhoFor: "",
      rnInstructor: "",
      rnFeatured: "",
      rnThumbnail: "",
      refThumbnail: "",
      rnDocuments: "",
      refDocuments: "",
      rnDesc: "",
      rnVideos: "",
      refVideos: "",
      rnBanner: "",
      refBanner: "",
      rnCourse: "",
    };
  }
  componentWillMount() {
    this.props.getCourse();
  }
  componentDidMount() {
    this.setState({ rnCourse: this.props.course_data[0]._id });
    this.props.getCourseById(this.props.course_data[0]._id);
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="section-title text-left theme-gradient">
                <h4 className="title">Update Course</h4>
              </div>
              <p className="text-muted">
                All the fields are optionel, can update any number of fields as
                needed.
              </p>
              <div className="form-wrapper">
                <form ref={(el) => (this.form = el)}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Course to Update *
                        </label>
                        <label htmlFor="instructor *">
                          <select
                            name="courseId"
                            value={this.state.rnCourse}
                            className="form-control"
                            onChange={(e) => {
                              this.setState({ rnCourse: e.target.value });
                              this.props.getCourseById(e.target.value);
                            }}
                          >
                            {/* {this.props.instructorList.unshift("n/a")} */}
                            {this.props.course_data.map((course, index) => (
                              <option key={index} value={course._id}>
                                {course.title}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <label htmlFor="item02">
                        <input
                          type="text"
                          name="subtitle"
                          id="item02"
                          value={this.state.rnSubtitle}
                          onChange={(e) => {
                            this.setState({ rnSubtitle: e.target.value });
                          }}
                          placeholder="Subtitle *"
                        />
                      </label>
                    </div>

                    <div className="col-lg-4">
                      <label htmlFor="item03">
                        <input
                          type="text"
                          name="courseHour"
                          id="item03"
                          value={this.state.rnCourseHour}
                          onChange={(e) => {
                            this.setState({ rnCourseHour: e.target.value });
                          }}
                          placeholder="Course Hour *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="item04">
                        <input
                          type="text"
                          name="price"
                          id="item04"
                          value={this.state.rnPrice}
                          onChange={(e) => {
                            this.setState({ rnPrice: e.target.value });
                          }}
                          placeholder="Price *"
                        />
                      </label>
                    </div>

                    <div className="col-lg-4">
                      <label htmlFor="item05">
                        <input
                          type="text"
                          name="requirements"
                          id="item05"
                          value={this.state.rnRequirements}
                          onChange={(e) => {
                            this.setState({ rnRequirements: e.target.value });
                          }}
                          placeholder="Requirements *"
                        />
                      </label>
                    </div>

                    <div className="col-lg-4">
                      <label htmlFor="item06">
                        <input
                          type="text"
                          name="topic"
                          id="item06"
                          value={this.state.rnTopic}
                          onChange={(e) => {
                            this.setState({ rnTopic: e.target.value });
                          }}
                          placeholder="Topics *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="item07">
                        <input
                          type="text"
                          name="whoFor"
                          id="item07"
                          value={this.state.rnWhoFor}
                          onChange={(e) => {
                            this.setState({ rnWhoFor: e.target.value });
                          }}
                          placeholder="Who this course is for *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="item10">
                        <input
                          type="text"
                          name="catagory"
                          id="item10"
                          value={this.state.rnCatagory}
                          onChange={(e) => {
                            this.setState({ rnCatagory: e.target.value });
                          }}
                          placeholder="Catagory *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Instructor *
                        </label>
                        <label htmlFor="instructor *">
                          <select
                            name="instructor"
                            className="form-control"
                            onSelect={(e) => {
                              this.setState({ rnInstructor: e.target.value });
                            }}
                          >
                            {this.props.instructorList.map(
                              (instructor, index) => (
                                <option key={index} value={instructor._id}>
                                  {instructor.name}
                                </option>
                              )
                            )}
                          </select>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Feature Course *
                        </label>
                        <label htmlFor="featured *">
                          <select
                            name="featured"
                            className="form-control"
                            onSelect={(e) => {
                              this.setState({ rnFeatured: e.target.value });
                            }}
                          >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Banner File
                        </label>
                        <label htmlFor="item11">
                          <input
                            type="file"
                            name="banner"
                            id="item08"
                            value={this.state.rnBanner.name}
                            onChange={async (e) => {
                              e.preventDefault();
                              let file = await e.target.files[0];
                              // this.setState({
                              //   refBanner: file,
                              // });
                              // this.formd.append("banner", file);
                              if (file) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnBanner: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            placeholder="Banner *"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Thumbnail File
                        </label>
                        <label htmlFor="item08">
                          <input
                            type="file"
                            name="thumbnail"
                            id="item08"
                            value={this.state.rnThumbnail.name}
                            onChange={async (e) => {
                              e.preventDefault();
                              let file = await e.target.files[0];
                              // this.setState({
                              //   refThumbnail: file,
                              // });
                              // this.formd.append("thumbnail", file);
                              if (file) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnThumbnail: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            placeholder="Thumbnail *"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Document File
                        </label>
                        <label htmlFor="item09">
                          <input
                            type="file"
                            multiple
                            name="documents"
                            id="item09"
                            value={this.state.rnDocuments.name}
                            onChange={(e) => {
                              let files = e.target.files;
                              let tempFile = {};
                              for (let i = 0; i < files.length; i++) {
                                // tempFile.append(`documents`, e.target.files[i]);
                                // this.formd.append(
                                //   `documents`,
                                //   e.target.files[i]
                                // );
                              }
                              this.setState({
                                refDocuments: tempFile,
                              });
                              if (files) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnDocuments: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(files[0]);
                              }
                            }}
                            placeholder="Document *"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <label htmlFor="item10">
                    <textarea
                      type="text"
                      id="item10"
                      name="desc"
                      value={this.state.rnDesc}
                      onChange={(e) => {
                        this.setState({
                          rnDesc: e.target.value,
                        });
                        // this.formd.append("desc", e.target.value);
                      }}
                      placeholder="Description *"
                    />
                  </label>
                  <div className="section-title text-left theme-gradient pt--60">
                    <h4 className="title">Update Lesson</h4>
                  </div>
                  <p className="text-muted">
                    The new videos will replace the previous videos, you can select multiple video files and file names must be same as the lesson name.
                  </p>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Lesson/s *
                        </label>
                        <label htmlFor="item03">
                          <input
                            type="file"
                            multiple
                            name="videos"
                            id="item03"
                            value={this.state.rnVideos.name}
                            onChange={(e) => {
                              let files = e.target.files;
                              let tempFIle = {};
                              for (let i = 0; i < files.length; i++) {
                                // tempFIle.append(`videos`, e.target.files[i]);
                                // this.formd.append(`videos`, e.target.files[i]);
                              }
                              this.setState({
                                refVideos: tempFIle,
                              });
                              if (files) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnVideos: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(files[0]);
                              }
                            }}
                            placeholder="lesson *"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    onClick={async (event) => {
                      event.preventDefault();
                      const body = new FormData(this.form);
                      const id = body.get("courseId");
                      // console.log(body.getAll());
                      body.delete("courseId");
                      const data = new FormData();
                      for (var pair of body.entries()) {
                        if (
                          pair[0] == "banner" ||
                          pair[0] == "videos" ||
                          pair[0] == "documents" ||
                          pair[0] == "thumbnail"
                        ) {
                          if (pair[1].name != "") {
                            console.log(
                             //pair[0] + ", " + JSON.stringify(pair[1].name)
                            );
                            data.append(pair[0], body.get(pair[0]));
                          }
                        } else if (pair[1]) {
                          //console.log(pair[0] + ", " + pair[1]);
                          data.append(pair[0], body.get(pair[0]));
                        }
                      }
                      toast("Update started!!! please wait!!");
                      await this.props.updateCourse(id, data);
                      this.props.create_course_update_status ===
                      "Course Updated Successfully!"
                        ? toast.success("Course Updated Successfully!", {
                            position: "bottom-center",
                            autoClose: false,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          })
                        : toast.error("Course Update Failed!",{
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
                    Update
                  </button>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  instructorList: state.getInstructor.instructorList,
  create_course_update_status: state.getCourse.updateConfirmation,
  course_data: state.getCourse.courseList,
  pay_load: state.getCourse.payload,
});

export default connect(mapStateToProps, {
  updateCourse,
  getCourse,
  getCourseById,
})(UpdateCourseForm);
