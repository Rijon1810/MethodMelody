import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from "@material-ui/core";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { useSelector, useDispatch } from "react-redux";

import { getCourse } from "../../actions/courseAction";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
  getCurrentVideoIndex,
} from "../../actions/getSelectedIdAction";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
  cover: {
    width: 150,
  },
  root: {
    display: "flex",
    backgroundColor: "#191C21"
  },
}));

const findFeaturedInstructors = (instructors) => {
  var iL = [];
  instructors.forEach((instructor) => {
    if (instructor.featured) {
      iL.push(instructor);
    }
  });
  return iL;
};

const AdminUserList = () => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const featuredInstructorList = findFeaturedInstructors(instructorList);

  console.log(`featured course list size = ${featuredInstructorList.length}`);

  const dispatch = useDispatch();

  const [list, setList] = React.useState("featured");

  useEffect(() => {}, [list]);

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - User List" />
      <main className={classes.content}>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="admincourselist" />
        {/* Start User List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Users</h3>
                  <p className="theme-gradient">All Registered User List</p>
                  <p>
                    You can suspend any user anytime hitting the button below.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              <Card className={classes.root} raised="true">
                <CardContent>
                  <div className="container">
                    <div className="col">
                      <div className="row">
                        <h4 className="theme-gradient">John Doe</h4>
                      </div>
                      <div className="row text-white">
                       +8801796588950
                      </div>
                      <div className="row text-white">
                        tanzeerhossain@zoho.com
                      </div>
                      <div className="row">
                        <div className="blog-btn d-flex justify-content-center pt--20">
                          <a className="rn-btn text-white" href="/courseview">
                            Suspend
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardMedia
                  className={classes.cover}
                  image="https://cdn.vox-cdn.com/thumbor/gD8CFUq4EEdI8ux04KyGMmuIgcA=/0x86:706x557/920x613/filters:focal(0x86:706x557):format(webp)/cdn.vox-cdn.com/imported_assets/847184/stevejobs.png"
                  title="Live from space album cover"
                />
              </Card>
            </div>
          </div>
        </div>
        {/* End User List */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <Footer />
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default AdminUserList;
