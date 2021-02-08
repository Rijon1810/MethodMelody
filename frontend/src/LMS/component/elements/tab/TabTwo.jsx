import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Pagination from "../common/Pagination.jsx";
import BlogList from "../blog/ClassroomCourseList.jsx";
import WishList from "../blog/WishList.jsx";
import PurchaseHistoryList from "../blog/PurchaseHistoryList.jsx";
import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { isLogged } from "../../../../actions/isLoggedAction";
import { getUserCourse, updateUser } from "../../../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MailOutline,
  Event,
  LocalOffer,
  AssignmentInd,
} from "@material-ui/icons";
//importing material components
import { Grid } from "@material-ui/core";

class TabsTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnPhone: "",
      rnAddress: "",
      rnPassword: "",
      rnPhotoSnap: "",
      rnPhoto: "",
    };
  }
  componentWillMount() {
    this.props.getUserCourse(this.props.userId);
  }
  render() {
    let tab1 = "Classroom",
      tab2 = "Wishlist",
      tab3 = "Messages",
      tab4 = "Purchase History",
      tab5 = "Profile";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList
                    className={`${tabStyle} bg_color--1`}
                    style={{ padding: 50 }}
                  >
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                    <Tab>{tab5}</Tab>
                  </TabList>

                  {/* Start Classroom Area */}
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="container">
                        <BlogList />
                        <div className="row">
                          <div className="col-lg-12">
                            {/* Start Pagination Area */}
                            <Pagination />
                            {/* End Pagination Area */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  {/* End Classroom Area */}

                  {/* Start Wish List */}
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="container">
                        <WishList />
                        <div className="row">
                          <div className="col-lg-12">
                            {/* Start Pagination Area */}
                            <Pagination />
                            {/* End Pagination Area */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  {/* End Wish List */}

                  {/* Start Message */}
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  {/* End Message */}

                  {/* Start Purchase History */}
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="container">
                        <PurchaseHistoryList />
                        <div className="row">
                          <div className="col-lg-12">
                            {/* Start Pagination Area */}
                            <Pagination />
                            {/* End Pagination Area */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  {/* End Purchase History */}

                  {/* Start Profile Area */}
                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="row">
                        {/* Start Info Area */}
                        <div className="col-lg-4 bg_color--6">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="thumbnail pt--20">
                                <a href="#">
                                  <img
                                    className="w-100"
                                    src={this.state.rnPhotoSnap}
                                    alt="Blog Images"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-12 pt--50">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <AssignmentInd />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Student ID: {this.props.profile.studentId}
                                </Grid>
                              </Grid>
                            </div>
                            <div className="col-lg-12 pt--20">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <MailOutline />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Email: {this.props.profile.email}
                                </Grid>
                              </Grid>
                            </div>
                            <div className="col-lg-12 pt--20">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <Event />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Date of Birth: {this.props.profile.dob}
                                </Grid>
                              </Grid>
                            </div>
                            <div className="col-lg-12 pt--20">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <LocalOffer />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Referral Code:{" "}
                                  {this.props.profile.referralCode}
                                </Grid>
                              </Grid>
                            </div>
                            <div className="col-lg-12 ptb--20">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                                justify="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <LocalOffer />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Referral Bonus: {this.props.refBonus}
                                </Grid>
                              </Grid>
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
                                    You can edit below informations of your
                                    profile by hitting the save button.
                                  </p>
                                  <div className="form-wrapper">
                                    <form ref={(el) => (this.form = el)}>
                                      <div className="row">
                                        <div className="col-lg-12">
                                          <label
                                            htmlFor="exampleFormControlFile1"
                                            className="text-muted"
                                          >
                                            Full Name
                                          </label>
                                          <label htmlFor="item01">
                                            <input
                                              type="text"
                                              name="name"
                                              id="item01"
                                              value={this.state.rnName}
                                              onChange={(e) => {
                                                this.setState({
                                                  rnName: e.target.value,
                                                });
                                              }}
                                              placeholder={
                                                this.props.profile.name
                                              }
                                            />
                                          </label>
                                        </div>

                                        <div className="col-lg-12">
                                          <label
                                            htmlFor="exampleFormControlFile1"
                                            className="text-muted"
                                          >
                                            Phone
                                          </label>
                                          <label htmlFor="item01">
                                            <input
                                              type="number"
                                              name="phone"
                                              id="item02"
                                              value={this.state.rnPhone}
                                              onChange={(e) => {
                                                this.setState({
                                                  rnPhone: e.target.value,
                                                });
                                              }}
                                              placeholder={
                                                this.props.profile.phone
                                              }
                                            />
                                          </label>
                                        </div>

                                        <div className="col-lg-12">
                                          <label
                                            htmlFor="exampleFormControlFile1"
                                            className="text-muted"
                                          >
                                            Address
                                          </label>
                                          <label htmlFor="item01">
                                            <input
                                              type="text"
                                              name="address"
                                              id="item03"
                                              value={this.state.rnAddress}
                                              onChange={(e) => {
                                                this.setState({
                                                  rnAddress: e.target.value,
                                                });
                                              }}
                                              placeholder={
                                                this.props.profile.address
                                              }
                                            />
                                          </label>
                                        </div>
                                      </div>

                                      <div className="col-lg-12">
                                        <label
                                          htmlFor="exampleFormControlFile2"
                                          className="text-muted"
                                        >
                                          Full Name
                                        </label>
                                        <label htmlFor="item99">
                                          <input
                                            type="text"
                                            name="password"
                                            id="item99"
                                            value={this.state.rnPassword}
                                            onChange={(e) => {
                                              this.setState({
                                                rnPassword: e.target.value,
                                              });
                                            }}
                                            placeholder="***"
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
                                              let file = await e.target
                                                .files[0];
                                              this.setState({ rnPhoto: file });

                                              if (file) {
                                                let reader = new FileReader();
                                                reader.onload = (e) => {
                                                  this.setState({
                                                    rnPhotoSnap:
                                                      e.target.result,
                                                  });
                                                };
                                                reader.readAsDataURL(file);
                                              }
                                            }}
                                            placeholder="upload picture"
                                          />
                                        </label>
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
                                          // console.log(body);
                                          body.append(
                                            "user",
                                            this.props.userId
                                          );
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
                                            : toast.error(
                                                "User Update Failed!",
                                                {
                                                  position: "bottom-center",
                                                  autoClose: false,
                                                  hideProgressBar: false,
                                                  closeOnClick: true,
                                                  pauseOnHover: true,
                                                  draggable: true,
                                                  progress: undefined,
                                                }
                                              );
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
                </Tabs>
              </div>
            </div>
          </div>
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
  refBonus: state.getAllUsers.getUserCourse.referralBonus,
  paylod: state.getAllUsers.payload,
});

export default connect(mapStateToProps, {
  getCourse,
  getUserCourse,
  updateUser,
})(TabsTwo);
