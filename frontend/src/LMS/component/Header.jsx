//importing material components
import { Avatar, Badge, Grid } from "@material-ui/core";
import {
  AccountCircleOutlined,



  Dashboard, HomeOutlined, LocalLibraryOutlined,
  PowerSettingsNewOutlined,


  ShoppingCartOutlined
} from "@material-ui/icons";
import React, { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCart } from "../../actions/cartAction";
import {
  getSelectedCourseCategory, getSelectedInstructorId
} from "../../actions/getSelectedIdAction";
import { logOut } from "../../actions/logOutAction";
import {
  getCurrentMessageById,

  getGeneralMessage, getPreviousMessageById,

  getStudentMessage
} from "../../actions/messageAction";
import { getByStudentType, getByType, getUserCourse } from "../../actions/userAction";







export default function Header(props) {
  const dispatch = useDispatch();

  let history = useHistory();

  const cart_number = useSelector((state) => state.cartInfo.cart);

  const userId = useSelector((state) => state.isLogged.payload.id);

  const username = useSelector((state) => state.getAllUsers.getUserCourse.name);

  const user_type = useSelector((state) => state.isLogged.payload.type);
  const login_data = useSelector((state) => state.isLogged.payload);
  const loginStatus = useSelector((state) => state.isLogged.login);
  
  useEffect(() => {
    // dispatch(isLogged());
    // dispatch(logOut());
    // dispatch(getCourse());
    // dispatch(getSelectedInstructorId());
    // dispatch(getSelectedCourseCategory(""));
    if (loginStatus) {
      dispatch(getCart(`${userId}`));
      dispatch(getUserCourse(`${userId}`));
      if (user_type === 4) {
        dispatch(getCurrentMessageById(`${userId}`));
        dispatch(getPreviousMessageById(`${userId}`));
      }
      if (user_type === 1) {
        dispatch(getGeneralMessage());
        dispatch(getStudentMessage());
        dispatch(getByType(1));
        dispatch(getByType(2));
        dispatch(getByType(3));
        dispatch(getByStudentType("student"));
        dispatch(getByStudentType("subscriber"))
      }
    }

    // dispatch(getSelectedCourseCategory(""));
  }, [dispatch, loginStatus, userId, user_type , /* cart_number */]);

  // const logOut = useSelector((state) => state.logOut);
  //   console.log("is logged in: " + isLoggedIn);

  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const catagory_datas = useSelector((state) => state.getCourse.catagoryList);
  //console.log("this is the problem",catagory_datas);
  var catagory_data=[];
  for(var i=0;i<catagory_datas.length;i++){
    if(catagory_datas[i]){
          catagory_data.push(catagory_datas[i])
    }

  }
  //console.log("is it ok",catagory_data);

  // const PostList = BlogContent.slice(0, 4);
  // dispatch(getInstructor());
  // life-cycle methods
  // alert(instructorList);
  // const instructorLists = useSelector((state) => state.login);

  // view all course handler
  function handleViewAllCourse() {
    history.push("/courses", { courses: "all" });
  }

  // var titleColor = {"Red": "#b12222"}
  var color = "default-color";
  //custom styles
  const mystyle = {
    width: "35ch",
    background: "#101010",
    overflow: "auto",
    maxHeight: "50ch",
    scrollbar: "auto",
  };

  const avatar = {
    width: "45px",
    height: "45px",
  };

  function menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  function CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  //constants
  const categoryLists = {
    Guitar: { alt: "Guitar", src: "assets/images/icons/guitar.png" },
    Piano: { alt: "Piano & Keyboard", src: "assets/images/icons/keyboard.png" },
    Bass: { alt: "Bass", src: "assets/images/icons/bass.png" },
    Percussion: { alt: "Percussion", src: "assets/images/icons/drum.png" },
    Sound: {
      alt: "Sound Engineering",
      src: "assets/images/icons/engineering.png"
    },
  };
  return (
    <header
      className={`header-area formobile-menu header--transparent ${color}`}
    >
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <Link to="/" onClick={() => dispatch(getSelectedCourseCategory(""))}>
              <img
                src="/assets/images/logo/logo-red.png"
                alt="Method Melody"
              />
            </Link>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            {props.from !== "login" && props.from !== "signup" && (
              <ul className="mainmenu">
                {props.from !== "admin" && (
                  <li className="has-droupdown">
                    <Link to="/allcourses">Courses</Link>
                    <ul className="submenu" style={mystyle}>
                      {catagory_data.map((category) => (
                        <li>
                          <Link
                            to="/allcourses"
                            onClick={() =>
                              dispatch(
                                getSelectedCourseCategory(
                                  category.split(" ")[0]
                                )
                              )
                            }
                          >
                            <Grid container direction="row" alignItems="center">
                              <Grid item style={{ marginRight: 10 }}>
                                {" "}
                                <Avatar
                                  alt={category}
                                  src={`${process.env.PUBLIC_URL}/${categoryLists[category.split(" ")[0]].src
                                    }`}
                                />
                              </Grid>

                              <Grid item style={{ color: "#fff" }}>
                                {category}
                              </Grid>
                            </Grid>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                {props.from !== "admin" && (
                  <li className="has-droupdown">
                    <Link to="/instructorlist">Musicians</Link>
                    <ul className="submenu" style={mystyle}>
                      {instructorList.map((instructor) => (
                        <li>
                          <Link
                            to="/instructorview"
                            onClick={async (event) => {
                              dispatch(getSelectedInstructorId(instructor));
                            }}
                          >
                            <Grid container direction="row" alignItems="center">
                              <Grid item style={{ marginRight: 10 }}>
                                {" "}
                                <Avatar
                                  alt={instructor.name}
                                  src={
                                    "http://localhost:8080/" + instructor.photo
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
                {props.from !== "admin" && loginStatus !== false ? (
                  <li className="has-droupdown">
                    <Link to="/cart">
                      <Grid container direction="row" alignItems="center">
                        <Grid item style={{ marginRight: 10 }}>
                          <Badge
                            badgeContent={cart_number.length}
                            color="secondary"
                          >
                            <ShoppingCartOutlined />
                          </Badge>
                        </Grid>
                        {/* <Grid item>Cart</Grid> */}
                      </Grid>
                    </Link>
                  </li>
                ) : (null)}


                <li className="has-droupdown">
                  {props.from !== "landing" ? (
                    <Link to="/">
                      <Grid container direction="row" alignItems="center">
                        <Grid item style={{ marginRight: 10 }}>
                          <HomeOutlined />
                        </Grid>
                        <Grid item>Home</Grid>
                      </Grid>
                    </Link>
                  ) : null}
                </li>

                {loginStatus ? (
                  <li className="has-droupdown">
                    <Link to="#">
                      <Grid container direction="row" alignItems="center">
                        <Grid item style={{ marginRight: 10 }}>
                          <AccountCircleOutlined />
                        </Grid>
                        <Grid item> {username}</Grid>
                        <Grid item> </Grid>
                      </Grid>
                    </Link>
                    {user_type == 4 && (
                      <ul className="submenu" style={mystyle}>
                        <li>
                          <Link to="/studentpanel">
                            <Grid container direction="row" alignItems="center">
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
                        {/* <li>
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
                       */}
                        <li>
                          <Link to="#">
                            <span
                              onClick={() => {
                                dispatch(logOut());
                                history.push("/");
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

                    {user_type == 1 && (
                      <ul className="submenu" style={mystyle}>
                        <li>
                          <Link to="/admin">
                            <Grid container direction="row" alignItems="center">
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
                                dispatch(logOut());
                                history.push("/");
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

                    {user_type == 3 && (
                      <ul className="submenu" style={mystyle}>
                        <li>
                          <Link to="/instructorpanel">
                            <Grid container direction="row" alignItems="center">
                              <Grid
                                item
                                style={{ marginRight: 10, color: "#f9004c" }}
                              >
                                <Dashboard />
                              </Grid>
                              <Grid item style={{ color: "#fff" }}>
                                My Dashboard
                              </Grid>
                            </Grid>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span
                              onClick={() => {
                                dispatch(logOut());
                                history.push("/");
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

                    {user_type == 2 && (
                      <ul className="submenu" style={mystyle}>
                        <li>
                          <Link to="#">
                            <span
                              onClick={() => {
                                dispatch(logOut());
                                history.push("/");
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
            {(props.from === "login" || props.from === "signup") && (
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="/">
                    <Grid container direction="row">
                      <Grid item style={{ marginRight: 10 }}>
                        <HomeOutlined />
                      </Grid>
                      <Grid item> Home</Grid>
                    </Grid>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
          {props.from !== "login" &&
            props.from !== "signup" &&
            loginStatus === false && (
              <div className="header-btn">
                {console.log(localStorage.getItem("name"))}
                <Link className="rn-btn" to="/login">
                  <span>Login</span>
                </Link>
              </div>
            )}

          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={CLoseMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
