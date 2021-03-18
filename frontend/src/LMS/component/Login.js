import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

import { connect } from "react-redux";
import { isLogged } from "../../actions/isLoggedAction";
import Landing from "../Landing.js";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import { Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnEmail: "",
      rnPassword: "",
    };
  }

  routeChange = () => {
    // let history = useHistory();
    // history.push(path);
  };

  render() {
    if (this.props.loginStatus) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <PageHelmet pageTitle="Login" />
        <Header from="login" />
        <Breadcrumb from="login" />
        <Box display="flex" justifyContent="center" alignItems="center">
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-8 col-sm-10 ptb--50">
            <div className="row d-flex align-items-center">
              <div className="col-12 pb--20">
                <h3 className=" title">Login to your account.</h3>

                <p>
                  Please enter your registered email and password for login.
                </p>
              </div>
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
                  data-toggle="password"
                />
              </label>

              <button
                className="rn-button-style--2"
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
                style={{ backgroundColor: "#b12222", color:"#ffffff" , borderBlockStyle:"hidden" }}
                onClick={async (event) => {
                  event.preventDefault();
                  await this.props.isLogged({
                    email: this.state.rnEmail,
                    password: this.state.rnPassword,
                  });
                  this.props.loginStatus
                    ? this.props.history.push("/")
                    : this.props.history.push("/login");
                }}
              >
                Submit
              </button>

              <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                <Link to="/signup" className="btn-transparent rn-btn-dark">
                  <br />
                  <span>Don't have an account? Signup</span>
                </Link>
              </div>
            </form>
          </div>
        </Box>

        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  userData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged.payload,
  loginStatus: state.isLogged.login,
});

export default connect(mapStateToProps, { isLogged })(Login);
