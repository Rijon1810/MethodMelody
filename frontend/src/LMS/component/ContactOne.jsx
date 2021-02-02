import React, { Component } from "react";

//custom components
import GoogleMap from "./GoogleMap";
import { connect } from "react-redux";
import { submitGeneralContact } from "../../actions/messageAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnMessage: "",
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-center ">
            <div className="col-lg-8 order-2 order-lg-1 offset-lg-2">
              <div className="section-title text-left mb--50">
                <h3 className="title theme-gradient">Contact Us.</h3>
                <p className="description">
                  For any queries regarding the Platform, Subscription Process,
                  Account Registration, etc. You can also reach us via <br></br>
                  <a href="tel:+8801923088574">01913130113</a> or email:
                  <a href="mailto:admin@example.com"> info@methodmelody.com</a>{" "}
                </p>
              </div>
              <div className="form-wrapper">
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
                      placeholder="Your Name *"
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
                      placeholder="Your email *"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={(e) => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="Your Message"
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
                      let submitted = await this.props.submitGeneralContact({
                        name: this.state.rnName,
                        email: this.state.rnEmail,
                        message: this.state.rnMessage,
                      });
                      if (submitted) {
                        toast.success("Message sent!!", {
                          position: "bottom-center",
                          autoClose: false,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      } else {
                        toast.error("Failed sending message!!", {
                          position: "bottom-center",
                          autoClose: false,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      }
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { submitGeneralContact })(ContactOne);
