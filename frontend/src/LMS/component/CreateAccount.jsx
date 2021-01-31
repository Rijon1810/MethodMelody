import React, { Component } from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import Form from "./CreateAccountForm.jsx";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
}));

function CreateAccount() {
  const analytics_data = useSelector(
    (state) => state.getAnalytics.getAnalytics
  );
  const classes = useStyles();
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Admin Panel" />

      <main className={classes.content}>
        <Header from="admin" />

        <Breadcrumb from="admin" />

        <div className="rn-contact-form-area ptb--50 bg_color--1 pl--60 pr--60">
          <Form />
        </div>
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
export default CreateAccount;
