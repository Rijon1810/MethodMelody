import React, { Component } from "react";
import { connect } from "react-redux";
import { getInstructor } from "../../actions/getInstructorAction";

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnName: "",
      rnEmail: "",
      rnSubject: "",
      rnMessage: "",
    };
  }
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">
              <div className="section-title text-left theme-gradient">
                <h4 className="title">Upload Instructor</h4>
              </div>
              <p className="text-muted">
                All the fields are rquired for successful course upload
              </p>
              <div className="form-wrapper">
                <form>
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
                          placeholder="Band *"
                        />
                      </label>
                    </div>
                    <div className="col-lg-4">
                      <label htmlFor="item03">
                        <input
                          type="text"
                          name="subject"
                          id="item03"
                          value={this.state.rnSubject}
                          onChange={(e) => {
                            this.setState({ rnSubject: e.target.value });
                          }}
                          placeholder="Percentage *"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label for="exampleFormControlFile1">
                          Feature Instructor *
                        </label>
                        <label for="featured *">
                          <select className="form-control">
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label for="exampleFormControlFile1">
                          Thumbnail File
                        </label>
                        <label htmlFor="item03">
                          <input
                            type="file"
                            name="subject"
                            id="item03"
                            value={this.state.rnSubject}
                            onChange={(e) => {
                              this.setState({ rnSubject: e.target.value });
                            }}
                            placeholder="Thumbnail *"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label for="exampleFormControlFile1">
                          Banner File
                        </label>
                        <label htmlFor="item03">
                          <input
                            type="file"
                            name="subject"
                            id="item03"
                            value={this.state.rnSubject}
                            onChange={(e) => {
                              this.setState({ rnSubject: e.target.value });
                            }}
                            placeholder="Document *"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={(e) => {
                        this.setState({ rnMessage: e.target.value });
                      }}
                      placeholder="Bio *"
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
  instructorList: state.getInstructor.instructorList,
});

export default connect(mapStateToProps, { getInstructor })(ContactThree);
