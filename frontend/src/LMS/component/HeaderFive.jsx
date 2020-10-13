import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

//importing custom scripts
import axios from "../api/Config";

//importing material components
import { Avatar, Grid } from "@material-ui/core";

//constants
const categoryList = [
  {
    primary: "Guitar",
    alt: "Guitar",
    src:
      "https://img.pngio.com/guitar-icon-png-268713-free-icons-library-guitar-icon-png-200_200.jpg",
  },
  {
    primary: "Acoustic Fingerstyle Guitar",
    alt: "Acoustic Fingerstyle guitar",
    src: "https://static.thenounproject.com/png/481944-200.png",
  },
  {
    primary: "Drums",
    alt: "Drums",
    src: "https://icon-library.com/images/drum-kit-icon/drum-kit-icon-17.jpg",
  },
  {
    primary: "Piano/Keyboard",
    alt: "Piano/Keyboard",
    src:
      "https://lh3.googleusercontent.com/proxy/pxsl32UASnnENpKGiHho8ZWUhA-HWa06SYjdN9E_pxc24blCS4sDTxMECflBJ-ahVgCjkySVwlkI1CNsf54dUMSwW8i0UgzPppuE-gj7ZSdlHpTy5Rn4",
  },
  {
    primary: "Sound Engineering",
    alt: "Sound Engineering",
    src:
      "https://p7.hiclipart.com/preview/719/512/1002/recording-studio-audio-mixing-audio-mixers-audio-mastering-computer-icons-audio-mixer.jpg",
  },
];

class HeaderFive extends Component {
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
    };
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  // my functions

  // get all instructor list from server later it will be list of all featured instructors
  getInstructors() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorList = res.data;
        // setInstructorList(instructorList);
        this.setState({ instructorList: instructorList });
        console.log(
          "instructor list size fetched in navbar: " + instructorList.length
        );
      });
  }

  // life-cycle methods
  componentWillMount() {
    this.getInstructors();
  }

  render() {
    //custom styles
    const mystyle = {
      width: "35ch",
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

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Trydo" />;
    } else if (logo === "dark") {
      logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Trydo" />;
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img src="/assets/images/logo/logo-symbol-dark.png" alt="Trydo" />
      );
    } else if (logo === "all-dark") {
      logoUrl = <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo" />;
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img src="/assets/images/logo/logo-symbol-light.png" alt="Trydo" />
      );
    } else {
      logoUrl = <img src="/assets/images/logo/logo-white.png" alt="Trydo" />;
    }

    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="/">{logoUrl}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-6">
                <div className="header-right justify-content-end">
                  <nav className="mainmenunav d-lg-block">
                    <ul className="mainmenu">
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
                                      src={category.src}
                                    />
                                  </Grid>
                                  <Grid item>{category.primary}</Grid>
                                </Grid>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="has-droupdown">
                        <Link to="/service">Musicians</Link>
                        <ul className="submenu" style={mystyle}>
                          {this.state.instructorList.map((instructor) => (
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
                                        "http://162.0.231.67/" +
                                        instructor.photo
                                      }
                                    />
                                  </Grid>
                                  <Grid item>{instructor.name}</Grid>
                                </Grid>
                              </Link>
                            </li>
                          ))}
                          {/* <li><Link to="/service">{this.state.instructorList.length}</Link></li>
                                        <li><Link to="/service-details">Service Details</Link></li> */}
                        </ul>
                      </li>
                      <li className="has-droupdown">
                        <Link to="#pages">Cart</Link>
                      </li>

                      {/* <li className="has-droupdown">
                        <Link to="#pages">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blog">Blog List</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/service">Service</Link>
                          </li>
                          <li>
                            <Link to="/service-details">Service Details</Link>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/portfolio-details">
                              Portfolio Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/404">404</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-droupdown">
                        <Link to="#">Blocks</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="/service">Service</Link>
                          </li>
                          <li>
                            <Link to="/video-popup">Video Popup</Link>
                          </li>
                          <li>
                            <Link to="/progressbar">Progressbar</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/counters">Counters</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog List</Link>
                          </li>
                          <li>
                            <Link to="/clint-logo">Clint Logo</Link>
                          </li>
                          <li>
                            <Link to="/contact-form">Contact Form</Link>
                          </li>
                          <li>
                            <Link to="/google-map">Google Map</Link>
                          </li>
                          <li>
                            <Link to="/columns">Columns</Link>
                          </li>
                          <li>
                            <Link to="/pricing-table">Pricing Table</Link>
                          </li>
                        </ul>
                      </li>
                      <li> */}
                      {/* <Link to="/contact">Contact</Link>
                      </li> */}
                    </ul>
                  </nav>
                  <div className="header-btn">
                    <a className="rn-btn" href="/login">
                      <span>login</span>
                    </a>
                  </div>
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
                    <span
                      onClick={this.CLoseMenuTrigger}
                      className="closeTrigger"
                    >
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFive;
