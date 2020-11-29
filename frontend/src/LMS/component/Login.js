import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

import auth from "../routes/auth";
import axios from "../api/Config";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnEmail: "",
      rnPassword: "",
    };
  }

  userLogin(event) {
    event.preventDefault();
    const data = { email: this.state.rnEmail, password: this.state.rnPassword };
    axios
      .post("user/login/", data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        auth.login(
          res.data.v_token,
          res.data.email,
          res.data.name,
          res.data.id,
          res.data.course
        );
      })
      .catch((res) => {
        auth.logout();
      });
  }

  render() {
    return (
      <div className="active-dark">
        <PageHelmet pageTitle="Login" />
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
                <h3 className="title">Login to your account.</h3>
                <p className="description">
                  Please enter your registered email and password for login.
                  <br></br>
                </p>
              </div>
              <form>
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
                    value={this.state.rnSubject}
                    onChange={(e) => {
                      this.setState({ rnPassword: e.target.value });
                    }}
                    placeholder="Your password"
                  />
                </label>

                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                  onClick={(event) => this.userLogin(event)}
                >
                  Submit
                </button>

                <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                  <a href="/signup" className="btn-transparent rn-btn-dark">
                    <br />
                    <span>Don't have an account? Signup</span>
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
export default Login;
