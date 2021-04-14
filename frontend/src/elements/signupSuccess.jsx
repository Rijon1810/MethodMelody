import React, { Component } from 'react';
import { FiChevronUp } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import Footer from "../LMS/component/Footer.jsx";
import Header from "../LMS/component/Header.jsx";

 class signupSuccess extends Component {
    
    render() {
        return (
            <>
                <Header  from="landing" />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h2 className="title" style={{ color: "#b12222" }}>Successful!!!</h2>
                                    <h6 className="sub-title"  style={{ fontSize: "17px" }}>Your account has been created , check your email for verification!!</h6>
                                    <span style={{ fontSize: "15px" }}> Check your inbox or spam folder.</span>
                                    <div className="error-button">
                                        <Link className="rn-button-style--2 btn-solid" to="/login">Go To Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </>
        )
    }
}
export default signupSuccess;
