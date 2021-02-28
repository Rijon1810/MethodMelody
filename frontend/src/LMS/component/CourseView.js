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
  Cancel,
} from "@material-ui/icons";
import {
  makeStyles,
  List,
  ListItem,
  Button,
  ListItemText,
  Backdrop,
  Avatar,
  Modal,
  Grid,
  Fade,
  IconButton,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
//custom components
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import Footer from "./Footer.jsx";
import ReactPlayer from "./ReactPlayer";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";

import Column from "../../blocks/Columns.jsx";
import { getCurrentVideoIndex } from "../../actions/getSelectedIdAction";
import { postCart } from "../../actions/cartAction";
import { isLogged } from "../../actions/isLoggedAction";
import { getUserCourse } from "../../actions/userAction";
import { postWishListCourse } from "../../actions/wishListAction";
import StudentContactForm from "./StudentContactForm.jsx";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#191919",
    maxHeight: 500,
    overflow: "auto",
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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#191c21",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
  button: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

export default function CourseView(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogIn = useSelector((state) => state.isLogged.login);

  const userCourses = useSelector(
    (state) => state.getAllUsers.getUserCourse.course
  );

  const selectedCourse = useSelector(
    (state) => state.getSelectedId.getSelectedCourseId
  );

  const userId = useSelector((state) => state.isLogged.payload.id);

  const selectedInstructor = useSelector(
    (state) => state.getSelectedId.getSelectedInstructorId
  );
  const selectedLesson = useSelector(
    (state) => state.getSelectedId.getCurrentVideoIndex
  );

  const [open, setOpen] = React.useState(false);
  const [paid, setPaid] = React.useState(false);
  const [wish, setWish] = React.useState(false);

  const handleOpen = () => {
    console.log(`is user logged in = ${isLogIn}`);
    if (isLogIn) {
      setOpen(true);
    } else {
      history.push("/login")
    }
  };
  const handleWish = () => {
    console.log(`is user logged in = ${isLogIn}`);
    if (isLogIn) {
      setWish(true);
    }
  };

  const handleClose = () => {
    console.log(`handleClose called`);
    setOpen(false);
  };

  useEffect(() => {
    if (isLogIn) {
      userCourses.forEach((c) => {
        if (c[0] == selectedCourse._id) {
          setPaid(true);
        }
      });
    }
  }, [paid, wish]);

  const renderPlayButton = (lesson_status, course_id) => {
    if (lesson_status === "open") {
      return (
        <Avatar className={classes.Avatar}>
          <PlayArrow className={classes.Icon} />
        </Avatar>
      );
    } else if (lesson_status === "login") {
      if (isLogIn) {
        return (
          <Avatar className={classes.Avatar}>
            <PlayArrow className={classes.Icon} />
          </Avatar>
        );
      } else {
        return (
          <Avatar className={classes.Avatar}>
            <Lock className={classes.Icon} />
          </Avatar>
        );
      }
    } else if (lesson_status === "paid") {
      if (isLogIn) {
        if (userCourses !== undefined) {
          console.log(typeof userCourses);

          if (userCourses.length === 0) {
            return (
              <Avatar className={classes.Avatar}>
                <Lock className={classes.Icon} />
              </Avatar>
            );
          } else {
            let userCoursesIdArr = [];
            userCourses.forEach((c) => {
              userCoursesIdArr.push(c._id);
            });
            var a = userCoursesIdArr.indexOf(course_id);
            if (a < 0) {
              return (
                <Avatar className={classes.Avatar}>
                  <PlayArrow className={classes.Icon} />
                </Avatar>
              );
            }
          }
        } else {
          return (
            <Avatar className={classes.Avatar}>
              <Lock className={classes.Icon} />
            </Avatar>
          );
        }
      } else {
        return (
          <Avatar className={classes.Avatar}>
            <Lock className={classes.Icon} />
          </Avatar>
        );
      }
    }
  };

  return (
    <div className="active-dark">
      <PageHelmet pageTitle="Course" />
      <Header from="landing" />
      <Breadcrumb from="courseview" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 section-title">
            <h3 className="fontWeight500" style={{ paddingTop: "2ch" }}>
              {selectedCourse.title}
            </h3>
            <p className="fontWeight500" style={{ color: "#b12222" }}>
              {" "}
              {selectedCourse.subtitle}
            </p>
            <div className="row align-items-center pb--60">
              <div className="col-lg-1">
                {" "}
                <Avatar
                  alt={selectedInstructor.name}
                  src={"http://63.250.33.174/" + selectedInstructor.photo}
                  className={classes.large}
                  // style={avatar}
                />
              </div>
              <div className="col-lg-11">
                <p className="text-white">{selectedInstructor.name}</p>
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
              BDT {selectedCourse.price}
            </p>
            {paid != true ? (
              <div className="d-flex flex-row-reverse">
                <a className="rn-btn" href="#" onClick={handleOpen}>
                  <span>Get Enrolled !</span>
                </a>
              </div>
            ) : null}

            <div className="d-flex flex-row-reverse" style={{ marginTop: 20 }}>
              {wish != true ? (
                <a
                  className="rn-btn"
                  href="#"
                  onClick={() => {
                    dispatch(
                      postWishListCourse({
                        user: userId,
                        course: selectedCourse._id,
                      })
                    );
                    setWish(true);
                  }}
                >
                  <span>Add to Wish List !</span>
                </a>
              ) : null}
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              disableBackdropClick={true}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div className="container">
                    <div className="d-flex flex-row-reverse">
                      {" "}
                      <IconButton onClick={handleClose}>
                        <Cancel fontsize="small" className="text-white" />
                      </IconButton>
                    </div>
                    <div className="col-lg-12">
                      {" "}
                      <p className="text-white">{selectedCourse.title}</p>
                    </div>
                    <div className="col-lg-12">
                      {" "}
                      <h2 style={{ color: "#b12222" }}>
                        {selectedCourse.price}
                      </h2>
                    </div>
                    <div className="col-lg-12">
                      <p className="text-white">30 Days Subscription</p>
                    </div>
                    <div className="col-lg-12">
                      {" "}
                      <button
                        variant="contained"
                        className="rn-button-style--2 btn-solid"
                        fullWidth={true}
                        style={{ width: "100%", marginTop: "50px" }}
                        onClick={async (event) => {
                          dispatch(
                            postCart({
                              user: userId,
                              course: selectedCourse._id,
                            })
                          );
                          setPaid(true);
                          handleClose();
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="col-lg-12">
                      {" "}
                      <button
                        variant="contained"
                        style={{ width: "100%", marginTop: "20px" }}
                        className="rn-button-style--2 btn-outlined"
                        onClick={async (event) => {
                          dispatch(
                            postCart({
                              user: userId,
                              course: selectedCourse._id,
                            })
                          );
                          setPaid(true);
                          handleClose();
                          history.push('/cart');
                        }}
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
          </div>
          <div onContextMenu={(e) => e.preventDefault()} className="col-lg-9">
            <ReactPlayer
              url={
                "http://63.250.33.174/" +
                selectedCourse.videos[selectedLesson].path
              }
              config={{
                file: {
                  attributes: {
                    onContextMenu: (e) => e.preventDefault(),
                    controlsList: "nodownload",
                  },
                },
              }}
              controls
            />
            {/* <ReactPlayer url={"https://www.youtube.com/watch?v=cUxRhesT8gY"} /> */}
          </div>
          <div className="col-lg-3">
            <div className={classes.root}>
              <List component="nav" aria-label="main mailbox folders">
                {selectedCourse.videos.map((lesson, index) => (
                  <ListItem
                    button
                    className={classes.ListItem}
                    onClick={async (event) => {
                      if (lesson.status === "open") {
                        dispatch(getCurrentVideoIndex(index));
                      } else if (lesson.status === "login") {
                        if (isLogIn) {
                          dispatch(getCurrentVideoIndex(index));
                        } else {
                          alert(
                            "Please login first in order to play this lesson"
                          );
                        }
                      } else if (lesson.status === "paid" && isLogIn === true) {
                        console.log(`course id = ${selectedCourse._id}`);
                        console.log(`lesson status = ${lesson.status}`);
                        userCourses.forEach((c) => {
                          console.log(c[0]);
                          if (c[0] === selectedCourse._id) {
                            dispatch(getCurrentVideoIndex(index));
                          } else {
                            alert(
                              'Please buy the course first by clicking on the "Get Enrolled!" button first to play this lesson'
                            );
                          }
                        });
                      } else {
                        alert(
                          'Please buy the course first by clicking on the "Get Enrolled!" button to play this lesson'
                        );
                      }
                    }}
                  >
                    {/* <Avatar className={classes.Avatar}>
                      <PlayArrow className={classes.Icon} />
                    </Avatar> */}
                    {renderPlayButton(lesson.status, selectedCourse._id)}
                    <ListItemText
                      primary={lesson.originalname}
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
                      <h3 className="tilte " style={{ color: "#b12222" }}>
                        About this course
                      </h3>
                      <p className="text-white text-justify">
                        {selectedCourse.desc}
                      </p>
                    </div>
                    {/* Start What You Will Learn Area */}
                    <div className="list-style--1 text-white pt--60">
                      <h3 className="tilte " style={{ color: "#b12222" }}>
                        What will you learn?
                      </h3>
                      <ul>
                        {selectedCourse.topic[0].split(";").map((top) => {
                          return <li>{top}</li>;
                        })}
                      </ul>
                    </div>
                    {/* End What You Will Learn Area */}
                  </div>
                  <div className="col-lg-3">
                    <div className="single-column">
                      <h3 className="tilte " style={{ color: "#b12222" }}>
                        This course includes
                      </h3>
                      <ul className="list-style--1 text-white">
                        <li>
                          <OndemandVideo />
                          {selectedCourse.courseHour} hours on-demand video
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
                      <h3 className="tilte  pt--60">Requirements</h3>
                      <ul className="list-style--1 text-white">
                        {selectedCourse.requirements[0]
                          .split(";")
                          .map((requirement) => {
                            return (
                              <li>
                                <FilterNone className /> {requirement}
                              </li>
                            );
                          })}
                      </ul>
                      {/* End Course Requirements */}
                      {/* Start Course Who For */}
                      <h3 className="tilte  pt--60">Who this course is for</h3>
                      <ul className="list-style--1 text-white">
                        {selectedCourse.whoFor[0].split(";").map((who) => {
                          return (
                            <li>
                              <FilterNone className /> {who}
                            </li>
                          );
                        })}
                      </ul>
                      {/* End Course Who For */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Course Description Area */}
          </main>
        </div>
      </div>

      {/* Start Contact Form Area */}
      {paid == true ? (
        <div
          className="portfolio-area pb--120  bg_color--1"
          style={{ paddingTop: "10ch" }}
        >
          <StudentContactForm instructor={selectedInstructor} />
        </div>
      ) : null}

      {/* End Contact Form Area */}

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
