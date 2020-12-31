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

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
}));

function Admin() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Service" />

      <main className={classes.content}>
        <Header from="admin" />

        <Breadcrumb from="admin"/>

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
