import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Pagination from "../common/Pagination.jsx";
import BlogList from "../blog/InstructorCourseList.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { isLogged } from "../../../../actions/isLoggedAction";
import { updateUser } from "../../../../actions/userAction";

import { MailOutline, Event } from "@material-ui/icons";
//importing material components
import { Grid } from "@material-ui/core";

class InstructorPanelTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnPassword: "",
      rnPhone: "",
      rnAddress: "",
      rnPhotoSnap: "",
      rnPhoto: "",
    };
  }
  render() {
    let tab1 = "My Courses",
      tab2 = "Profile",
      tab3 = "Analytics";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}

        <div className="col-lg-12">
          <Tabs>
            <TabList
              className={`${tabStyle} bg_color--1`}
              style={{ paddingTop: 50, paddingLeft: 20, paddingBottom: 50 }}
            >
              <Tab>{tab1}</Tab>
              <Tab>{tab2}</Tab>
              <Tab>{tab3}</Tab>
            </TabList>
            <div className="col-lg-8">
              {/* Start Classroom Area */}
              <TabPanel>
                <div className="single-tab-content">
                  <BlogList />
                  <div className="row">
                    <div className="col-lg-12">
                      {/* Start Pagination Area */}
                      <Pagination />
                      {/* End Pagination Area */}
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* End Classroom Area */}

              {/* Start Profile Area */}
              <TabPanel style={{ paddingLeft: 20, paddingBottom: 100 }}>
                <div className="single-tab-content">
                  <div className="row">
                    {/* Start Info Area */}
                    <div className="col-lg-4 bg_color--6">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="thumbnail pt--20">
                            <a href="#">
                              {this.state.rnPhotoSnap == "" ? (
                                <img
                                  className="w-100"
                                  src={`http://63.250.33.174/${this.props.profile.photo}`}
                                  alt="Blog Images"
                                />
                              ) : (
                                <img
                                  className="w-100"
                                  src={this.state.rnPhotoSnap}
                                  alt="Blog Images"
                                />
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Info Area */}
                    {/* Start Edit Area */}
                    <div className="col-lg-8">
                      <div className="contact-form--1">
                        <div className="container">
                          <div className="row row--35 align-items-start">
                            <div className="col-lg-12 order-2 order-lg-1">
                              <div className="section-title text-left theme-gradient">
                                <h4 className="title">My Profile</h4>
                              </div>
                              <p className="text-muted">
                                You can edit below informations of your profile
                                by hitting the save button.
                              </p>
                              <div className="form-wrapper">
                                <form ref={(el) => (this.form = el)}>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <label
                                        htmlFor="exampleFormControlFile1"
                                        className="text-muted"
                                      >
                                        Email
                                      </label>
                                      <label htmlFor="item01">
                                        <input
                                          type="text"
                                          name="email"
                                          id="item01"
                                          value={this.state.rnEmail}
                                          onChange={(e) => {
                                            this.setState({
                                              rnEmail: e.target.value,
                                            });
                                          }}
                                          placeholder={this.props.profile.email}
                                          className="text-white"
                                          disabled={true}
                                        />
                                      </label>
                                    </div>

                                    {/* <div className="col-lg-12">
                                      <label
                                        htmlFor="exampleFormControlFile1"
                                        className="text-muted"
                                      >
                                        Old Password
                                      </label>
                                      <label htmlFor="item01">
                                        <input
                                          type="password"
                                          name="password"
                                          id="item02"
                                          value={this.state.rnPassword}
                                          onChange={(e) => {
                                            this.setState({
                                              rnPassword: e.target.value,
                                            });
                                          }}
                                          placeholder={
                                            this.props.profile.address
                                          }
                                        />
                                      </label>
                                    </div> */}

                                    <div className="col-lg-12">
                                      <label
                                        htmlFor="exampleFormControlFile1"
                                        className="text-muted"
                                      >
                                        New Password
                                      </label>
                                      <label htmlFor="item01">
                                        <input
                                          type="password"
                                          name="password"
                                          id="item03"
                                          value={this.state.rnPassword}
                                          onChange={(e) => {
                                            this.setState({
                                              rnPassword: e.target.value,
                                            });
                                          }}
                                          placeholder={
                                            this.props.profile.address
                                          }
                                        />
                                      </label>
                                    </div>
                                    <div className="col-lg-12">
                                      <label
                                        htmlFor="exampleFormControlFile12"
                                        className="text-muted"
                                      >
                                        Photo
                                      </label>

                                      <label htmlFor="item98">
                                        <input
                                          type="file"
                                          name="photo"
                                          id="item98"
                                          value={this.state.rnPhotoSnap.name}
                                          ref={this.state.rnPhotoSnap.name}
                                          onChange={async (e) => {
                                            e.preventDefault();
                                            let file = await e.target.files[0];
                                            this.setState({ rnPhoto: file });

                                            if (file) {
                                              let reader = new FileReader();
                                              reader.onload = (e) => {
                                                this.setState({
                                                  rnPhotoSnap: e.target.result,
                                                });
                                              };
                                              reader.readAsDataURL(file);
                                            }
                                          }}
                                          placeholder="upload picture"
                                        />
                                      </label>
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
                                      body.append("user", this.props.userId);
                                      await this.props.updateUser(body);
                                      this.props.paylod ===
                                      "User Updated Successfully!"
                                        ? toast.success(
                                            "User Updated Successfully!",
                                            {
                                              position: "bottom-center",
                                              autoClose: false,
                                              hideProgressBar: false,
                                              closeOnClick: true,
                                              pauseOnHover: true,
                                              draggable: true,
                                              progress: undefined,
                                            }
                                          )
                                        : toast.error("User Update Failed!", {
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
                                    Save
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
                    </div>
                    {/* End Edit Area */}
                  </div>
                </div>
              </TabPanel>
              {/* End Profile Area */}
            </div>
          </Tabs>
        </div>

        {/* End Tabs Area */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.getCourse.courseList,
  profile: state.isLogged.payload,
  userId: state.isLogged.payload.id,
  paylod: state.getAllUsers.payload,
});

export default connect(mapStateToProps, { getCourse, updateUser })(
  InstructorPanelTab
);
