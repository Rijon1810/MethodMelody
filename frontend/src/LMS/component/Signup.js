import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnPassword: "",
      rnConfirmPassword: "",
    };
  }
  render() {
    return (
      <div className="active-dark">
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="  order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h3 className="title">Create a new account.</h3>
                <p className="description">
                  Please enter all the information for your accounts.
                  <br></br>
                </p>
              </div>
              <form>
                <label htmlFor="item01">
                  <input
                    type="name"
                    name="text"
                    id="item01"
                    value={this.state.rnName}
                    onChange={(e) => {
                      this.setState({ rnName: e.target.value });
                    }}
                    placeholder="Your full name"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={this.state.rnEmail}
                    onChange={(e) => {
                      this.setState({ rnEmail: e.target.value });
                    }}
                    placeholder="Your email"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="password"
                    name="password"
                    id="item03"
                    value={this.state.rnPassword}
                    onChange={(e) => {
                      this.setState({ rnPassword: e.target.value });
                    }}
                    placeholder="Your password"
                  />
                </label>

                <label htmlFor="item04">
                  <input
                    type="password"
                    name="confirm password"
                    id="item04"
                    value={this.state.rnConfirmPassword}
                    onChange={(e) => {
                      this.setState({ rnConfirmPassword: e.target.value });
                    }}
                    placeholder="Confirm password"
                  />
                </label>

                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </button>

                <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                  <a href="/signup" className="btn-transparent rn-btn-dark">
                    <br />
                    <span>Already have an account? Login</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Box>
        <Footer />
      </div>
    );
  }
}
export default Signup;
