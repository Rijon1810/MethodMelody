import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";
import Pagination from "./common/Pagination";
import BlogList from "./blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

import { connect } from "react-redux";
import { getInstructor } from "../../../actions/getInstructorAction";
import InstructorList from "./blog/InstructorList.jsx"

class AllInstructors extends Component{
    render(){
        return(
            <div className="active-dark">
                <Header from="landing" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'All Instructors'}   />
                {/* End Breadcrump Area */}


                {/* Start Blog Area */}
                <div className="rn-blog-area ptb--120 bg_color--1">
                    <div className="container">
                        <InstructorList/>
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
    instructorList: state.getInstructor.instructorList,
  });
  
export default connect(mapStateToProps, { getInstructor })(AllInstructors);
