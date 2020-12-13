import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import PropTypes from 'prop-types'
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

import { connect } from "react-redux";
import { isLogged } from "../../actions/isLoggedAction";
import Landing from "../Landing.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnEmail: "",
      rnPassword: "",
    };
  }
  render() {
    return (
      <div className="active-dark">
        <PageHelmet pageTitle="Login" />
        <Header from="login" />
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
                  onClick={(event) => {
                    event.preventDefault();
                    this.props.isLogged({
                      email: this.state.rnEmail,
                      password: this.state.rnPassword,
                    });
                    // this.props.loginStatus ? console.log("success") : console.log("not success");
                    // this.props.loginStatus ? <Redirect to="/" /> : <Rredirect to='/'/>;
                  }}
                >
                  Submit
                </button>

                <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                  <a href="/signup" className="btn-transparent rn-btn-dark">
                    <br />
                    <span>
                      Don't have an account? Signup
                      {/* {console.log("aaaaaaaaaaaaaaaaaa" + this.props.isLogged.name)} */}
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </div>
    );
  }
}

Login.propTypes = {
  userData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged.payload,
  loginStatus: state.isLogged.login,
});

export default connect(mapStateToProps, { isLogged })(Login);
