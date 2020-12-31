import React, { Component } from "react";
import PageHelmet from "../../Helmet.jsx";
import { SiBandsintown } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { FiClock } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";

import { connect } from "react-redux";

import Breadcrumb from "../common/Breadcrumb.jsx";

class InstructorList extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }

  //   utcToLocal() {
  //     let utcTime = this.props.instructor.createdAt;

  //     var local_date = moment.utc(utcTime).local().format("YYYY-MM-DD HH:mm:ss");

  //     this.setState({createdAt: {local_date}});
  //   }

  render() {
    // {this.utcToLocal()}
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Blog Details" />
        <Header from="landing" />
        <Breadcrumb from="instructorview" />
        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--6">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={`http://63.250.33.174/${this.props.instructor.photo}`}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title theme-gradient">
                        {this.props.instructor.name}
                      </h2>
                      <p className="description text-white">
                        {this.props.instructor.bio}
                      </p>
                      <ul className="text-white mt--50 list-group">
                        <span style={{color: "#000"}}>
                        <li className="mr--50">
                          <p className="text-white">
                            <SiBandsintown className="mr--10" />
                            Band: {this.props.instructor.band}
                          </p>
                        </li>
                        <li className="mr--50">
                          <p className="text-white">
                          <GiTeacher className="mr--10" />
                          Teaches: {this.props.instructor.teaches}
                          </p>
                        </li>
                        <li>
                          <p className="text-white">
                          <FiClock className="mr--10" />
                          Since:{" "}
                          {new Date(
                            this.props.instructor.createdAt
                          ).toDateString()}
                          </p>
                        </li>
                        </span>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* <div className="col-lg-12">
          <div className="text-center ptb--50"></div>
        </div> */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    instructorLists: state.getInstructor.instructorList,
    courseList: state.getCourse.courseList,
    instructor: state.getSelectedId.getSelectedInstructorId,
  };
};

export default connect(mapStateToProps)(InstructorList);
