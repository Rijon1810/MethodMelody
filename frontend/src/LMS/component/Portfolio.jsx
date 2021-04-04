import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../page-demo/script";
import { Link} from 'react-router-dom'

import { connect } from "react-redux";
import { getCourse } from "../../actions/courseAction";

//importing custom scripts

// const PortfolioList = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     }
// ]

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
    };
  }
  // life-cycle methods
  componentWillMount() {
    // this.getCourses();
  }

  render() {
    let title = "Our Courses",
      description = `${this.props.courseList.length} in-depth courses to subscribe`;
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h3>{title}</h3>
                  <p className="theme-gradient">{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {this.props.courseList.map((course) => (
                <div className="portfolio" key={course._id}>
                  <div className="thumbnail-inner">
                    {/* <div className={`thumbnail ${"http://162.0.231.67"+course.thumbnail}`}></div>
                                        <div className={`bg-blr-image ${"http://162.0.231.67"+course.thumbnail}`}></div> */}
                    <img
                      src={"http://63.250.33.174/" + course.thumbnail}
                      width="100%"
                    />
                  </div>
                  <div className="content">
                    <div className="inner">
                      <h5>{course.catagory + " course"}</h5>
                      <h4>
                        <Link  to="/portfolio-details">{course.title}</Link>
                      </h4>
                      <h5>{course.subtitle}</h5>
                      <div className="portfolio-button">
                        <Link className="rn-btn" to="/courseview">
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.getCourse.courseList,
});

export default connect(mapStateToProps, { getCourse })(Portfolio);
