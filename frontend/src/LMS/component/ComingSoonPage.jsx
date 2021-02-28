import React, { Component } from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import {
  makeStyles,
  Card,
  CardMedia,
  Button,
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  Grid,
} from "@material-ui/core";


import ComingSoon from "./ComingSoon.jsx";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

const ComingSoonPage = () => {
  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Messages" />
      <main>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="instructorpanel" />

          <ComingSoon/>
      
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <Footer />
        {/* End Back To Top */}
      </main>
    </React.Fragment>
  );
};

export default ComingSoonPage;
