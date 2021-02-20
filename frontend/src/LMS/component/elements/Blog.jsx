import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

import { connect } from "react-redux";
import { getCourse } from "../../../actions/courseAction";

class Blog extends Component{    
    render(){
        console.log(this.props.courseCategory)
        return(
            <div className="active-dark">
                <Header from="allcourses" />
                {/* Start Breadcrump Area */}
                <Breadcrumb from='All Courses'   />
                {/* End Breadcrump Area */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                        <BlogList/>
                        <div className="row mt--20">
                            <div className="col-lg-12">
                                {/* Start Pagination Area */}
                                <Pagination />
                                {/* End Pagination Area */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}
                
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    courseList: state.getCourse.courseList,
    courseCategory: state.getSelectedId.getSelectedCourseCategory,
  });
  
export default connect(mapStateToProps, { getCourse })(Blog);
