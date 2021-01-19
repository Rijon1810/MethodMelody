import React, { Component } from "react";
import { connect } from "react-redux";
import { getInstructor, postInstructor } from "../../actions/instructorAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../../actions/signUpAction";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnPassword: "",
      rnUserType: "",
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="section-title text-left theme-gradient">
                <h4 className="title">Create New User Account</h4>
              </div>
              <p className="text-muted">
                All the fields are rquired for successful account creation.
              </p>
              <div className="form-wrapper">
                <form ref={(el) => (this.form = el)}>
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="item01">
                        <input
                          type="text"
                          name="name"
                          id="item01"
                          value={this.state.rnName}
                          onChange={(e) => {
                            this.setState({ rnName: e.target.value });
                          }}
                          placeholder="Name *"
                        />
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="item02">
                        <input
                          type="text"
                          name="email"
                          id="item02"
                          value={this.state.rnEmail}
                          onChange={(e) => {
                            this.setState({ rnEmail: e.target.value });
                          }}
                          placeholder="Email *"
                        />
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="item03">
                        <input
                          type="text"
                          name="password"
                          id="item03"
                          value={this.state.rnPassword}
                          onChange={(e) => {
                            this.setState({ rnPassword: e.target.value });
                          }}
                          placeholder="Password *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Account Type *
                        </label>
                        <label htmlFor="accounttype *">
                          <select
                            className="form-control"
                            name="type"
                            onSelect={(e) => {
                              this.setState({ rnUserType: e.target.value });
                            }}
                          >
                            <option value={1}>Admin</option>
                            <option value={2}>Content Uploader</option>
                            <option value={3}>Instructor</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Instructor
                        </label>
                        <label htmlFor="accounttype *">
                          <select
                            className="form-control"
                            name="type"
                            onSelect={(e) => {
                              this.setState({ rnUserType: e.target.value });
                            }}
                          >
                            <option value={1}>Admin</option>
                            <option value={2}>Content Uploader</option>
                            <option value={3}>Instructor</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    onClick={async (event) => {
                      event.preventDefault();
                      const body = new FormData(this.form);
                      for (var pair of body.entries()) {
                        console.log(pair[0] + ", " + pair[1]);
                      }
                      toast("Upload started!!! please wait!!");
                      await this.props.signUp(body);
                      //   this.props.create_instructor_status.message ===
                      //   "Instructor Added Successfully!"
                      //     ? toast.info("Instructor Added Successfully!", {
                      //         position: "bottom-center",
                      //         autoClose: 7000,
                      //         hideProgressBar: false,
                      //         closeOnClick: true,
                      //         pauseOnHover: true,
                      //         draggable: true,
                      //         progress: undefined,
                      //       })
                      //     : toast("Instructor Add Failed!");
                    }}
                  >
                    Submit
                  </button>
                  <ToastContainer
                    position="bottom-center"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  create_user_status: state.isLogged.payload,
});

export default connect(mapStateToProps, { signUp })(CreateAccount);
