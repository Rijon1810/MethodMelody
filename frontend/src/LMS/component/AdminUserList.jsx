import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { getUser, suspend } from "../../actions/userAction";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import { withAlert } from "react-alert";
import { getSelectedUserId } from "../../actions/getSelectedIdAction";
const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
  cover: {
    width: 150,
  },
  root: {
    display: "flex",
    backgroundColor: "#191C21",
    marginTop: 10,
    marginBottom: 10,
    markerEnd: 10,
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

const AdminUserList = ({ alert }) => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const featuredInstructorList = findFeaturedInstructors(instructorList);

  /*  console.log(`featured course list size = ${featuredInstructorList.length}`);
   */
  const dispatch = useDispatch();

  const [list, setList] = React.useState("featured");
  const [id, setId] = React.useState("featured");

  useEffect(() => {
    dispatch(getUser());
  }, [id, dispatch]);

  const userList = useSelector((state) => state.getAllUsers.student);
  const subscriberList = useSelector((state) => state.getAllUsers.subscriber);
  const adminList = useSelector((state) => state.getAllUsers.getByType_1);
  const contentUploaderList = useSelector(
    (state) => state.getAllUsers.getByType_2
  );
  const instructorAccountList = useSelector(
    (state) => state.getAllUsers.getByType_3
  );
  function clearButton(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

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
              {userList.map((user) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">{user.name}</h4>
                          </div>
                          <div className="row text-white">{user.phone}</div>
                          <div className="row text-white">{user.email}</div>
                          <div className="row">
                            <div className="col-6">
                              <div className="blog-btn pt--20">
                                <Link
                                  className="rn-btn text-white"
                                  to="/viewuser"
                                  onClick={(e) => {
                                    dispatch(getSelectedUserId(user));
                                  }}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              {user.suspend === false ? (
                                <div id={user._id} className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dispatch(suspend(user._id));
                                      alert.show(
                                        "User suspend successfully!!!"
                                      );
                                      clearButton(user._id);
                                    }}
                                  >
                                    Suspend
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${user.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End User List */}
        {/* Start Subscriber List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Subscribers</h3>
                  <p className="theme-gradient">All Subscribed User List</p>
                  <p>
                    You can suspend any user anytime hitting the button below.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              {subscriberList.map((user) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">{user.name}</h4>
                          </div>
                          <div className="row text-white">{user.phone}</div>
                          <div className="row text-white">{user.email}</div>
                          <div className="row">
                            <div className="col-6">
                              <div className="blog-btn pt--20">
                                <Link
                                  className="rn-btn text-white"
                                  to="/viewuser"
                                  onClick={(e) => {
                                    dispatch(getSelectedUserId(user));
                                  }}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              {user.suspend === false ? (
                                <div id={user._id} className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dispatch(suspend(user._id));
                                      alert.show(
                                        "User suspend successfully!!!"
                                      );
                                      clearButton(user._id);
                                    }}
                                  >
                                    Suspend
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${user.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Subscriber List */}
        {/* Start Instructor List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Instructors</h3>
                  <p className="theme-gradient">All Instructor User List</p>
                  <p>
                    You can suspend any user anytime hitting the button below.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              {instructorList.map((user) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">{user.name}</h4>
                          </div>
                          <div className="row text-white">{user.phone}</div>
                          <div className="row text-white">{user.email}</div>
                          <div className="row">
                            <div className="col-6">
                              <div className="blog-btn pt--20">
                                <Link
                                  className="rn-btn text-white"
                                  to="/viewuser"
                                  onClick={(e) => {
                                    dispatch(getSelectedUserId(user));
                                  }}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              {user.suspend === false ? (
                                <div id={user._id} className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dispatch(suspend(user._id));
                                      alert.show(
                                        "User suspend successfully!!!"
                                      );
                                      clearButton(user._id);
                                    }}
                                  >
                                    Suspend
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${user.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Instructor List */}
        {/* Start Admin List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Admins</h3>
                  <p className="theme-gradient">All Admin User List</p>
                  <p>
                    You can suspend any user anytime hitting the button below.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              {adminList.map((user) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">{user.name}</h4>
                          </div>
                          <div className="row text-white">{user.phone}</div>
                          <div className="row text-white">{user.email}</div>
                          <div className="row">
                            <div className="col-6">
                              <div className="blog-btn pt--20">
                                <Link
                                  className="rn-btn text-white"
                                  to="/viewuser"
                                  onClick={(e) => {
                                    dispatch(getSelectedUserId(user));
                                  }}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              {user.suspend === false ? (
                                <div id={user._id} className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dispatch(suspend(user._id));
                                      alert.show(
                                        "User suspend successfully!!!"
                                      );
                                      clearButton(user._id);
                                    }}
                                  >
                                    Suspend
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${user.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Admin List */}
        {/* Start ContentUploader List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Content Uploaders</h3>
                  <p className="theme-gradient">
                    All Content Uploader User List
                  </p>
                  <p>
                    You can suspend any user anytime hitting the button below.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              {contentUploaderList.map((user) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">{user.name}</h4>
                          </div>
                          <div className="row text-white">{user.phone}</div>
                          <div className="row text-white">{user.email}</div>
                          <div className="row">
                            <div className="col-6">
                              <div className="blog-btn pt--20">
                                <Link
                                  className="rn-btn text-white"
                                  to="/viewuser"
                                  onClick={(e) => {
                                    dispatch(getSelectedUserId(user));
                                  }}
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              {user.suspend === false ? (
                                <div id={user._id} className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn text-white"
                                    to="#"
                                    onClick={(event) => {
                                      event.preventDefault();
                                      dispatch(suspend(user._id));
                                      alert.show(
                                        "User suspend successfully!!!"
                                      );
                                      clearButton(user._id);
                                    }}
                                  >
                                    Suspend
                                  </Link>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${user.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End ContentUploader List */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* <Footer /> */}
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default withAlert()(AdminUserList);
