import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import {
  PlayArrow,
  Lock,
  FilterNone,
  OndemandVideo,
  VerifiedUser,
  Timer,
  Description,
  Smartphone,
} from "@material-ui/icons";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@material-ui/core";
import { useSelector } from "react-redux";
//custom components
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import Footer from "./Footer.jsx";
import ReactPlayer from "./ReactPlayer";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";

import Column from "../../blocks/Columns.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#191c21",
  },
  Icon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  ListItemText: {
    color: "#fff",
  },
  ListItem: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#f9004d",
      color: "white",
    },
  },
  Avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "#f9004d",
    marginRight: theme.spacing(2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const lessonName = [
  "Introduction",
  "What you'll learn?",
  "Holding Your 'Guitar' properly",
  "Navigating the Fretboard",
  "Strumming Techniques",
  "Demystifying Chords",
  "Playing Advanced Chords",
  "Finding Your Sound",
  "Technique: Developing Speed",
  "Improvisation",
];

export default function CourseView(props) {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const topicList = useStyles((state) => state.getCourse.courseList[0].topic);
  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Course" />
      <Header from="landing" />
      <Breadcrumb from="courseview" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 section-title">
            <h3 className="fontWeight500" style={{ paddingTop: "2ch" }}>
              {courseList[0].title}
            </h3>
            <p className="fontWeight500" className="theme-gradient">
              {" "}
              {courseList[0].subtitle}
            </p>
            <div className="row align-items-center pb--60">
              <div className="col-lg-1">
                {" "}
                <Avatar
                  alt={instructorList[0].name}
                  src={"http://63.250.33.174/" + instructorList[0].photo}
                  className={classes.large}
                  // style={avatar}
                />
              </div>
              <div className="col-lg-11">
                <p className="text-white">{instructorList[0].name}</p>
              </div>
            </div>
          </div>

          <div
            className="header-btn col-lg-4 align-self-center"
            style={{ paddingTop: "2ch" }}
          >
            <p className="text-white text-lg-right">
              Subscribe for 30 Days with just
            </p>
            <p className="text-white text-lg-right">
              BDT {courseList[0].price}
            </p>
            <div className="d-flex flex-row-reverse">
              <a className="rn-btn" href="/login">
                <span>Get Enrolled !</span>
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <ReactPlayer url={"https://www.youtube.com/watch?v=cUxRhesT8gY"} />
          </div>
          <div className="col-lg-3">
            <div className={classes.root}>
              <List component="nav" aria-label="main mailbox folders">
                {lessonName.map((lesson) => (
                  <ListItem button className={classes.ListItem}>
                    <Avatar className={classes.Avatar}>
                      <PlayArrow className={classes.Icon} />
                    </Avatar>
                    <ListItemText
                      primary={lesson}
                      className={classes.ListItemText}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
          {/* Start Page Wrapper  */}
          <main className="page-wrapper">
            {/* Start Course Description Area  */}
            <div className="rn-columns-area ptb--60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="single-column">
                      <h3 className="tilte theme-gradient">
                        About this course
                      </h3>
                      <p className="text-white text-justify">
                        {courseList[0].desc}
                      </p>
                    </div>
                    {/* Start What You Will Learn Area */}
                    <div className="list-style--1 text-white pt--60">
                      <h3 className="tilte theme-gradient">
                        What will you learn?
                      </h3>
                      <ul>
                        {courseList[0].topic.map((top) => {
                          return <li>{top}</li>;
                        })}
                      </ul>
                    </div>
                    {/* End What You Will Learn Area */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-column">
                      <h3 className="tilte theme-gradient">
                        This course includes
                      </h3>
                      <ul className="list-style--1 text-white">
                        <li>
                          <OndemandVideo />
                          {courseList[0].courseHour} hours on-demand video
                        </li>
                        <li>
                          <Description />4 reference documents
                        </li>
                        <li>
                          <VerifiedUser />
                          Certificate of completion
                        </li>
                        <li>
                          <Timer />
                          30 days full subscription
                        </li>
                        <li>
                          <Smartphone />
                          Access on mobile
                        </li>
                      </ul>
                      {/* Start Course Requirements */}
                      <h3 className="tilte theme-gradient pt--60">
                        Requirements
                      </h3>
                      <ul className="list-style--1 text-white">
                        {courseList[0].requirements.map((requirement) => {
                          return (
                            <li>
                              <FilterNone className /> {requirement}
                            </li>
                          );
                        })}
                      </ul>
                      {/* End Course Requirements */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Course Description Area */}
          </main>
        </div>
      </div>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </div>
  );
}
