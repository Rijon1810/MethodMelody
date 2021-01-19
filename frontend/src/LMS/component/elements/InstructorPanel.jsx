import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import InstructorPanelTab from "./tab/InstructorPanelTab.jsx";
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

import Tab from "./tab/InstructorPanelTab.jsx";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "inline",
  },
}));

const InstructorPanel = () => {
  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Messages" />
      <main>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="instructorpanel" />
        <div className=" bg_color--1">
          {" "}
          <InstructorPanelTab tabStyle="tab-style--1" />
        </div>
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

export default InstructorPanel;
