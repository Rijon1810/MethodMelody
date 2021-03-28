import { Avatar, Box, IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signUp } from "../../actions/signUpAction";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

class Signup extends Component {
  constructor(props) {
    super(props);
    
    const refercode = this.props.match.params.refercode;
   
    this.state = {
      rnName: "",
      rnEmail: "",
      rnPassword: "",
      rnConfirmPassword: "",
      rnPhoto: "",
      rnDob: "",
      rnPhone: "",
      rnAddress: "",
      rnPhotoSnap: "",
      refercode: refercode
    };
  }
  render() {
    return (
      <div>
        <PageHelmet pageTitle="Sign Up" />

        <Header from="signup" />
        <Breadcrumb from="signup" />

        <Box display="flex" justifyContent="center" alignItems="center">
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-10 col-sm-10 ptb--50">
            <div className="row d-flex align-items-center">
              <div className="col-8">
                <h3 className="title ">Create a new account.</h3>

                <p>Please enter all the information for your account.</p>
              </div>
              <div className="col-4 d-flex justify-content-end">
                {" "}
                <IconButton>
                  <Avatar
                    style={{ width: "100px", height: "100px" }}
                    variant="rounded"
                    src={this.state.rnPhotoSnap}
                  ></Avatar>
                </IconButton>
              </div>
            </div>

            <form>
              <label htmlFor="item01">
                <input
                  type="text"
                  name="name"
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
              <div className="row">
                <div className="col-6">
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
                </div>
                <div className="col-6">
                  <label htmlFor="item04">
                    <input
                      type="password"
                      name="confirm password"
                      id="item04"
                      value={this.state.rnConfirmPassword}
                      onChange={(e) => {
                        this.setState({
                          rnConfirmPassword: e.target.value,
                        });
                      }}
                      placeholder="Confirm password"
                    />
                  </label>
                </div>
              </div>
              <label htmlFor="item05">
                <input
                  type="file"
                  name="image"
                  id="item05"
                  value={this.state.rnPhotoSnap.name}
                  ref={this.state.rnPhotoSnap.name}
                  onChange={async (e) => {
                    e.preventDefault();
                    let file = await e.target.files[0];
                    this.setState({ rnPhoto: file });

                    if (file) {
                      let reader = new FileReader();
                      reader.onload = (e) => {
                        this.setState({ rnPhotoSnap: e.target.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  placeholder="upload picture"
                />
              </label>
              <label htmlFor="item06">
                <input
                  type="date"
                  name="dob"
                  id="item06"
                  max={new Date().toISOString().split("T")[0]}
                  value={this.state.rnDob}
                  onChange={(e) => {
                    this.setState({ rnDob: e.target.value });
                  }}
                  placeholder="Enter your Date of Birth"
                />
              </label>
              <label htmlFor="item07">
                <input
                  type="text "
                  pattern="[0-9]*"
                  name="phone"
                  id="item07"
                  value={this.state.rnPhone}
                  onChange={(e) => {
                    this.setState({ rnPhone: e.target.value });
                  }}
                  placeholder="Phone Number"
                />
              </label>
              <label htmlFor="item08">
                <textarea
                  type="text"
                  name="address"
                  id="item08"
                  value={this.state.rnAddress}
                  onChange={(e) => {
                    this.setState({ rnAddress: e.target.value });
                  }}
                  placeholder="Address"
                />
              </label>
              <button
                className="rn-button-style--2 btn-solid"
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
                onClick={async (event) => {
                  event.preventDefault();
                  let fd = new FormData();
                  fd.append("name", this.state.rnName);
                  fd.append("email", this.state.rnEmail);
                  fd.append("password", this.state.rnPassword);
                  fd.append("confirmPassword", this.state.rnConfirmPassword);
                  fd.append("photo", this.state.rnPhoto);
                  fd.append("dob", this.state.rnDob);
                  fd.append("phone", this.state.rnPhone);
                  fd.append("address", this.state.rnAddress);
                  fd.append("refercode" , this.state.refercode);

                  await this.props.signUp(fd);
                  this.props.history.push("/login");

                  // return <Redirect to="/login" />;
                  // this.props.create_user_status.message === "user added!"
                  //   ? this.props.history.push("/login")
                  //   : this.props.history.push("/signup");
                }}
              >
                Submit
              </button>

              <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                <Link to="/login" className="btn-transparent rn-btn-dark">
                  <br />
                  <span>Already have an account? Login</span>
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

const mapStateToProps = (state) => ({
  create_user_status: state.isLogged.payload,
});

export default connect(mapStateToProps, { signUp })(Signup);
