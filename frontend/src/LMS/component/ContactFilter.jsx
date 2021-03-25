import { CircularProgress, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { courseFilter } from "../../actions/courseAction";
import { getInstructor } from "../../actions/instructorAction";


class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnCatagory: "",
      rnInstructor: "",
      courseType:"",
      rnUploading: false,
    };
  }
  formd = new FormData();

  render() {
    var categoryList = [
      "Guitar",
      "Bass Guitar",
      "Percussion",
      "Piano & Keyboard",
      "Sound Engineering",
    ];
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-12 order-2 order-lg-1">

              <div className="form-wrapper">
                <form ref={(el) => (this.form = el)}>
     

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Category *
                        </label>
                        <label htmlFor="item10">
                          <select
                            name="catagory"
                            className="form-control"
                            onSelect={(e) => {
                              this.setState({ rnCatagory: e.target.value });
                            }}
                          >
                            {categoryList.map((category, index) => (
                              <option key={index} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Select Instructor *
                        </label>
                        <label htmlFor="instructor *">
                          <select
                            name="instructor"
                            className="form-control"
                            onSelect={(e) => {
                              this.setState({ rnInstructor: e.target.value });
                            }}
                          >
                            {this.props.instructorList.map(
                              (instructor, index) => (
                                <option key={index} value={instructor._id}>
                                  {instructor.name}
                                </option>
                              )
                            )}
                          </select>
                        </label>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          Course Type *
                        </label>
                        <label htmlFor="courseType *">
                          <select
                            name="courseType"
                            className="form-control"
                            onSelect={(e) => {
                              console.log(e.target.value);
                              this.setState({ courseType: e.target.value });
                            }}
                          >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advance">Advance</option>
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
                      this.setState({ rnUploading: true });
                      const body = new FormData(this.form);
                      await this.props.courseFilter(body);

                    }}
                  >
                    
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
          <Grid container justify="center">
            {this.state.rnUploading ? <CircularProgress style={{color: "#b12222"}}/> : null}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  instructorList: state.getInstructor.instructorList,
  create_course_filter: state.courseFilter.payload,
});

export default connect(mapStateToProps, { getInstructor, courseFilter })(
  ContactFilter
);
