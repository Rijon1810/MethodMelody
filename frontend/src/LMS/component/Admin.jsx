import React from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../actions/userAction";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
}));

function Admin() {
  const analytics_data = useSelector(
    (state) => state.getAnalytics.getAnalytics
  );
  const classes = useStyles();

  const dispatch = useDispatch();
  dispatch(getUser());

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Admin Panel" />

      <main className={classes.content}>
        <Header from="admin" />

        <Breadcrumb from="admin" />

        {/* Start Stat Area  */}
        <div className="rn-columns-area ptb--50 bg_color--6">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-column custom-color">
                  <p className="text-white text-center title">Total Course</p>
                  <h2 className=" text-center text-white">
                    {analytics_data[0].course}
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt_sm--30">
                <div className="single-column custom-color custom-color--1">
                  <p className="tilte text-white text-center">
                    Total Instructor
                  </p>
                  <h2 className=" text-center text-white">
                    {analytics_data[0].instructor}
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt_sm--30 mt_md--30">
                <div className="single-column custom-color">
                  <p className="tilte text-white text-center">Total User</p>
                  <h2 className=" text-center text-white">
                    {analytics_data[0].user}
                  </h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mt_sm--30 mt_md--30">
                <div className="single-column custom-color custom-color--1">
                  <p className="tilte text-white text-center">Total Sales</p>
                  <h2 className=" text-center text-white">
                    {analytics_data[0].sold}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Stat Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </main>

      <AdminDrawer />
    </React.Fragment>
  );
}
export default Admin;
