import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { PlayArrow, Lock, FilterNone } from "@material-ui/icons";
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
  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Course" />
      <Header from="landing" />
      <Breadcrumb from="courseview" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 section-title">
            <h3 className="fontWeight500" style={{ paddingTop: "2ch" }}>
              {courseList[0].title}
            </h3>
            <p
              className="fontWeight500"
              style={{ paddingBottom: "2ch" }}
              className="theme-gradient"
            >
              {" "}
              {courseList[0].subtitle}
            </p>
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
                  <div className="col-lg-12">
                    <div className="single-column">
                      <h3 className="tilte theme-gradient">Description</h3>
                      <p className="text-white">{courseList[0].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Course Description Area */}

            {/* Start Course Requirements */}

            <div className="rn-columns-area pb--60">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-column">
                      <h3 className="tilte theme-gradient">Requirements</h3>
                      <ul className="list-style--1 text-white">
                        {courseList[0].requirements.map((requirement) => {
                          return (
                            <li>
                              <FilterNone /> {requirement}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End Course Requirements */}
          </main>
        </div>
        {/* </div> */}
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
