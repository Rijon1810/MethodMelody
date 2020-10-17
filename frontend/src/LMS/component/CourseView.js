import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { PlayArrow, Lock } from "@material-ui/icons";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@material-ui/core";

//custom components
import Header from "./HeaderFive.jsx";
import PageHelmet from "./Helmet.jsx";
import Footer from "./Footer.jsx";
import ReactPlayer from "./ReactPlayer";

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
  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Course" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>Intro to Acoustic Guitar</h3>
          </div>
          <div className="col-lg-9">
            <ReactPlayer url={"https://www.youtube.com/watch?v=cUxRhesT8gY"} />
          </div>
          <div className="col-lg-3">
            {/* <div className=" pt--10">
              <h3> Curriculum</h3> */}
            {/* <table className="table table-hover table-striped table-dark">
                <tbody>
                  <tr>
                    <td>
                      <PlayArrow />
                    </td>
                    <td>Introduction</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <PlayArrow />
                    </td>
                    <td>What you'll learn?</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
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
