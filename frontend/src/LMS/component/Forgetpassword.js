import React, { Component } from "react";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import axios from "../../api/Config.js";
import { connect } from "react-redux";
import { isLogged } from "../../actions/isLoggedAction";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import { Link } from "react-router-dom";
import { withAlert } from "react-alert";
class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnEmail: "",
    };
  }

  routeChange = () => {
    // let history = useHistory();
    // history.push(path);
  };

  render() {
    const alert = this.props.alert;
    if (this.props.loginStatus) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <PageHelmet pageTitle="Forget Password" />
        <Header from="forgetpassword" />
        <Breadcrumb from="forgetpassword" />
        <Box display="flex" justifyContent="center" alignItems="center">
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-8 col-sm-10 ptb--50">
            <div className="row d-flex align-items-center">
              <div className="col-12 pb--20">
                <h3 className=" title">Enter User Email</h3>

                <p>
                  Please enter your user email for access your account.
                </p>
              </div>
            </div>
            <form>
              <label htmlFor="item01">
                <input
                  type="text"
                  name="email"
                  id="item01"
                  value={this.state.rnEmail}
                  onChange={(e) => {
                    this.setState({ rnEmail: e.target.value });
                  }}
                  placeholder="Your email"
                />
              </label>

              <button
                className="rn-button-style--2"
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
                style={{
                  backgroundColor: "#b12222",
                  color: "#ffffff",
                  borderBlockStyle: "hidden",
                }}
                onClick={async (event) => {
                  event.preventDefault();

                  const email = this.state.rnEmail;
                //  console.log("my email",email);
             
                  if (email === "") {
                    alert.show("Any of the field is not fillup!!!");
                  } else {
                    
                    axios
                    .post(`user/passwordreset/${email}`, {
                      headers: {
                        "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                        "Content-type": "multipart/form-data",
                      },
                    })
                    .then((res) => {
                     
                      
                    })
                    .catch((err) => {
                     // console.log(err);
                    });
                    alert.show("Check Your Email for password reset!!");
                    this.props.history.push("/login");

                  }

                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Box>

        <Footer />
      </div>
    );
  }
}

Forgetpassword.propTypes = {
  userData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.isLogged.payload,
  loginStatus: state.isLogged.Forgetpassword,
});

export default connect(mapStateToProps, { isLogged })(withAlert()(Forgetpassword));
