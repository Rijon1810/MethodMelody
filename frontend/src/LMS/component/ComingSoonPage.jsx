import React, { Component } from "react";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "../../elements/common/Breadcrumb.jsx";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { videoTagString, VideoTag } from "react-video-tag";

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
    <div>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Messages" />
      <div
        className="breadcrumb-area rn-bg-color ptb--100 bg_color--6"
        data-black-overlay="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="title text-white">Welcome to MethodMelody!</h1>
                <h3 className="title" style={{ color: "#b12222" }}>
                  Stay with us, we're coming live soon...
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-about-area bg_color--6">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-12 col-md-12">
              <div class="embed-responsive embed-responsive-16by9">
                <VideoTag
                  autoPlay={`${true}`}
                  muted={`${true}`}
                  playsInline={`${true}`}
                  loop={`${true}`}
                  src={`${"/assets/images/service/clock.mp4"}`}
                  // poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
