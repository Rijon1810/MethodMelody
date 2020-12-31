import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import {
  LocalLibraryOutlined,
  PowerSettingsNewOutlined,
  AccountCircleOutlined,
  ForumOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  Dashboard,
} from "@material-ui/icons";

import { connect } from "react-redux";
import { isLogged } from "../../actions/isLoggedAction";
import { logOut } from "../../actions/logOutAction";

//importing material components
import { Avatar, Grid } from "@material-ui/core";

//constants
const categoryList = [
  {
    primary: "Guitar",
    alt: "Guitar",
    src: "assets/images/icons/guitar-electric.png",
  },
  {
    primary: "Acoustic Fingerstyle Guitar",
    alt: "Acoustic Fingerstyle guitar",
    src: "assets/images/icons/acoustic-guitar.png",
  },
  {
    primary: "Drums",
    alt: "Drums",
    src: "assets/images/icons/drums.png",
  },
  {
    primary: "Piano/Keyboard",
    alt: "Piano/Keyboard",
    src: "assets/images/icons/piano.png",
  },
  {
    primary: "Sound Engineering",
    alt: "Sound Engineering",
    src: "assets/images/icons/sound-engineering.png",
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
    this.state = {
      instructorList: [],
      loginInfo: props.isLogged,
    };
  }

  routeChange = (path) => {
    let history = useHistory();
    history.push(path);
  };

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  // my functions

  // get all instructor list from server later it will be list of all featured instructors
  // getInstructors() {
  //   axios
  //     .get("instructor/", {
  //       headers: {
  //         "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
  //       },
  //     })
  //     .then((res) => {
  //       const instructorList = res.data;
  //       // setInstructorList(instructorList);
  //       this.setState({ instructorList: instructorList });
  //       console.log(
  //         "instructor list size fetched in navbar: " + instructorList.length
  //       );
  //     });
  // }

  // life-cycle methods
  // componentWillMount() {
  //   this.getInstructors();
  // }

  render() {
    //custom styles
    const mystyle = {
      width: "35ch",
      background: "#101010",
    };

    const avatar = {
      width: "45px",
      height: "45px",
    };

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    var color = "default-color";

    // function logout() {
    //   localStorage.clear();
    // }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img
                  src="/assets/images/logo/logo-white.png"
                  alt="Digital Agency"
                />
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              {(this.props.from === "landing" ||
                this.props.from === "admin") && (
                <ul className="mainmenu">
                  {this.props.from !== "admin" && (
                    <li className="has-droupdown">
                      <Link to="#">Courses</Link>
                      <ul className="submenu" style={mystyle}>
                        {categoryList.map((category) => (
                          <li>
                            <Link to="/service">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid item style={{ marginRight: 10 }}>
                                  {" "}
                                  <Avatar
                                    alt={category.alt}
                                    src={`${process.env.PUBLIC_URL}/${category.src}`}
                                    style={avatar}
                                  />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  {category.primary}
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                  {this.props.from !== "admin" && (
                    <li className="has-droupdown">
                      <Link to="#">Musicians</Link>
                      <ul className="submenu" style={mystyle}>
                        {this.props.instructorList.map((instructor) => (
                          <li>
                            <Link to="/service">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid item style={{ marginRight: 10 }}>
                                  {" "}
                                  <Avatar
                                    alt={instructor.name}
                                    src={
                                      "http://63.250.33.174/" + instructor.photo
                                    }
                                    style={avatar}
                                  />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  {instructor.name}
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                        ))}
                        {/* <li><Link to="/service">{this.state.instructorList.length}</Link></li>
                      <li><Link to="/service-details">Service Details</Link></li> */}
                      </ul>
                    </li>
                  )}
                  {/* <li><Link to="/about" >About</Link></li> */}
                  {this.props.from !== "admin" ? (
                    <li className="has-droupdown">
                      <Link to="/courseview">
                        <Grid container direction="row" alignItems="center">
                          <Grid item style={{ marginRight: 10 }}>
                            <ShoppingCartOutlined />
                          </Grid>
                          <Grid item>Cart</Grid>
                        </Grid>
                      </Link>
                    </li>
                  ):(
                    <li className="has-droupdown">
                    <Link to="/">
                      <Grid container direction="row" alignItems="center">
                        <Grid item style={{ marginRight: 10 }}>
                          <HomeOutlined />
                        </Grid>
                        <Grid item>Home</Grid>
                      </Grid>
                    </Link>
                  </li>
                  )}

                  {this.props.loginStatus ? (
                    <li className="has-droupdown">
                      <Link to="#">
                        <Grid container direction="row" alignItems="center">
                          <Grid item style={{ marginRight: 10 }}>
                            <AccountCircleOutlined />
                          </Grid>
                          <Grid item> {this.props.login_data.name}</Grid>
                          <Grid item> </Grid>
                        </Grid>
                      </Link>
                      {this.props.user_type == 4 && (
                        <ul className="submenu" style={mystyle}>
                          <li>
                            <Link to="/service">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <LocalLibraryOutlined />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Classroom
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/service">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <AccountCircleOutlined />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Profile
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/service">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <ForumOutlined />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Messages
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span
                                onClick={() => {
                                  this.props.logOut();
                                }}
                              >
                                <Grid
                                  container
                                  direction="row"
                                  alignItems="center"
                                >
                                  <Grid
                                    item
                                    style={{
                                      marginRight: 10,
                                      color: "#f9004c",
                                    }}
                                  >
                                    <PowerSettingsNewOutlined />
                                  </Grid>
                                  <Grid item style={{ color: "#fff" }}>
                                    Log Out
                                  </Grid>
                                </Grid>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}

                      {this.props.user_type == 1 && (
                        <ul className="submenu" style={mystyle}>
                          <li>
                            <Link to="/admin">
                              <Grid
                                container
                                direction="row"
                                alignItems="center"
                              >
                                <Grid
                                  item
                                  style={{ marginRight: 10, color: "#f9004c" }}
                                >
                                  <Dashboard />
                                </Grid>
                                <Grid item style={{ color: "#fff" }}>
                                  Admin Dashboard
                                </Grid>
                              </Grid>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span
                                onClick={() => {
                                  this.props.logOut();
                                }}
                              >
                                <Grid
                                  container
                                  direction="row"
                                  alignItems="center"
                                >
                                  <Grid
                                    item
                                    style={{
                                      marginRight: 10,
                                      color: "#f9004c",
                                    }}
                                  >
                                    <PowerSettingsNewOutlined />
                                  </Grid>
                                  <Grid item style={{ color: "#fff" }}>
                                    Log Out
                                  </Grid>
                                </Grid>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  ) : null}
                </ul>
              )}
              {(this.props.from === "login" ||
                this.props.from === "signup") && (
                <ul className="mainmenu">
                  <li className="has-droupdown">
                    <a href="/">
                      <Grid container direction="row">
                        <Grid item style={{ marginRight: 10 }}>
                          <HomeOutlined />
                        </Grid>
                        <Grid item> Home</Grid>
                      </Grid>
                    </a>
                  </li>
                </ul>
              )}
            </nav>
            {this.props.from !== "login" &&
              this.props.from !== "signup" &&
              this.props.loginStatus === false && (
                <div className="header-btn">
                  {console.log(localStorage.getItem("name"))}
                  <a className="rn-btn" href="/login">
                    <span>Login</span>
                  </a>
                </div>
              )}

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_type: state.isLogged.payload.type,
    login_data: state.isLogged.payload,
    loginStatus: state.isLogged.login,
    logOut: state.logOut,
    instructorList: state.getInstructor.instructorList,
  };
};

export default connect(mapStateToProps, { isLogged, logOut })(Header);
