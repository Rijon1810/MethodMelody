import React, { Component } from 'react';
import Header from "../LMS/component/Header.jsx";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../LMS/component/Footer.jsx";
import { Link} from 'react-router-dom'

 class passwordchange extends Component {
    
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
                                    <h3 className="sub-title">Your password change has been verified</h3>
                                    <span> Check your email for new password.</span>
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
export default passwordchange;
