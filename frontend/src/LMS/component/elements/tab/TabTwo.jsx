import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Pagination from "../common/Pagination.jsx";
import BlogList from "../blog/BlogList.jsx";

import { connect } from "react-redux";
import { getCourse } from "../../../../actions/courseAction";
import { isLogged } from "../../../../actions/isLoggedAction";

import { MailOutline, Event, LocalOffer, AssignmentInd } from "@material-ui/icons";
//importing material components
import { Grid } from "@material-ui/core";

class TabsTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnPhone: "",
      rnAddress: "",
    };
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

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

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

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            BSc In CSE
                            <span> - ABC University, Los Angeles, CA</span>
                          </a>{" "}
                          2010
                        </li>
                        <li>
                          <a href="/service">
                            Diploma in Computer Science
                            <span> - Gamma Technical Institute</span>
                          </a>{" "}
                          2009
                        </li>
                        <li>
                          <a href="/service">
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
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
                                    src={
                                      `http://63.250.33.174/` +
                                      this.props.profile.photo
                                    }
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
                                  Referral Code: {this.props.profile.referralCode}
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

                                      <button
                                        className="rn-button-style--2 btn-solid"
                                        type="submit"
                                        value="submit"
                                        name="submit"
                                        id="mc-embedded-subscribe"
                                        onClick={async (event) => {}}
                                      >
                                        Save
                                      </button>
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
});

export default connect(mapStateToProps, { getCourse })(TabsTwo);
