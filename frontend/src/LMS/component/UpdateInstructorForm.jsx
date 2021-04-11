import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getInstructor,
  updateInstructor,
  getinstructorById,
} from "../../actions/instructorAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateInstructorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnBand: "",
      rnParcentage: "",
      rnFeatured: "",
      rnBio: "",
      rnPhoto: "",
      rnBanner: "",
      rnInstructor: "",
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="section-title text-left theme-gradient">
                <h4 className="title">Update Instructor</h4>
              </div>
              <p className="text-muted">
                All the fields are optional, can update any number of fields as
                needed.
              </p>
              <div className="form-wrapper">
                <form ref={(el) => (this.form = el)}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Instructor to Update *
                        </label>
                        <label htmlFor="instructor *">
                          <select
                            name="instructorId"
                            value={this.state.rnInstructor}
                            className="form-control"
                            onChange={(e) => {
                              this.setState({ rnInstructor: e.target.value });
                              this.props.getinstructorById(e.target.value);
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
                      <label htmlFor="item02">
                        <input
                          type="text"
                          name="band"
                          id="item02"
                          value={this.state.rnBand}
                          onChange={(e) => {
                            this.setState({ rnBand: e.target.value });
                          }}
                          placeholder="Band *"
                        />
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="item03">
                        <input
                          type="text"
                          name="percentage"
                          id="item03"
                          value={this.state.rnParcentage}
                          onChange={(e) => {
                            this.setState({ rnParcentage: e.target.value });
                          }}
                          placeholder="Percentage *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Feature Instructor *
                        </label>
                        <label htmlFor="featured *">
                          <select
                            className="form-control"
                            name="featured"
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
                          Thumbnail File
                        </label>
                        <label htmlFor="item04">
                          <input
                            type="file"
                            name="photo"
                            id="item04"
                            value={this.state.rnPhoto.name}
                            onChange={(e) => {
                              let files = e.target.files;
                              if (files) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnPhoto: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(files[0]);
                              }
                            }}
                            placeholder="Photo *"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Banner File
                        </label>
                        <label htmlFor="item05">
                          <input
                            type="file"
                            name="banner"
                            id="item05"
                            value={this.state.rnBanner.name}
                            onChange={(e) => {
                              let files = e.target.files;
                              if (files) {
                                let reader = new FileReader();
                                reader.onload = (e) => {
                                  this.setState({
                                    rnBanner: e.target.result,
                                  });
                                };
                                reader.readAsDataURL(files[0]);
                              }
                            }}
                            placeholder="Banner *"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <label htmlFor="item06">
                    <textarea
                      type="text"
                      id="item06"
                      name="bio"
                      value={this.state.rnBio}
                      onChange={(e) => {
                        this.setState({ rnBio: e.target.value });
                      }}
                      placeholder="Bio *"
                    />
                  </label>
                  <button
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
                        if (pair[0] === "banner" || pair[0] === "thumbnail") {
                          if (pair[1].name !== "") {
                           /*  console.log(
                              pair[0] + ", " + JSON.stringify(pair[1].name)
                            ) */;
                            data.append(pair[0], body.get(pair[0]));
                          }
                        } else if (pair[1]) {
                         // console.log(pair[0] + ", " + pair[1]);
                          data.append(pair[0], body.get(pair[0]));
                        }
                      }
                      toast("Upload started!!! please wait!!");
                      await this.props.updateInstructor(id, body);
                     // console.log(this.props.instructor_update_status);
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
  instructor_update_status: state.getInstructor.payload,
});

export default connect(mapStateToProps, {
  getInstructor,
  updateInstructor,
  getinstructorById,
})(UpdateInstructorForm);
