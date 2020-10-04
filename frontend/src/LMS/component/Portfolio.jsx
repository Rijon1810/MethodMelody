import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../page-demo/script";

//importing custom scripts
import axios from "../api/Config";

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

  // my dunctions
  //get all courses from server later it will be list all featured courses
  getCourses() {
    axios
      .get("course/featured/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res, err) => {
        const courseList = res.data;
        this.setState({ courseList: courseList });
        console.log("course list fetched in home: " + res.data.length);
      });
  }

  // life-cycle methods
  componentWillMount() {
    this.getCourses();
  }

  render() {
    let title = "Our Courses",
      description = `${this.state.courseList.length} in-depth courses to subscribe`;
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
              {this.state.courseList.map((course) => (
                <div className="portfolio" key={course._id}>
                  <div className="thumbnail-inner">
                    {/* <div className={`thumbnail ${"http://162.0.231.67"+course.thumbnail}`}></div>
                                        <div className={`bg-blr-image ${"http://162.0.231.67"+course.thumbnail}`}></div> */}
                    <img
                      src={"http://162.0.231.67/" + course.thumbnail}
                      width="100%"
                    />
                  </div>
                  <div className="content">
                    <div className="inner">
                      <h5>{course.catagory + " course"}</h5>
                      <h4>
                        <a href="/portfolio-details">{course.title}</a>
                      </h4>
                      <div className="portfolio-button">
                        <a className="rn-btn" href="/portfolio-details">
                          View Course
                        </a>
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
export default Portfolio;
