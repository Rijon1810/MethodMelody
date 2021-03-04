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
  root: {
    flexGrow: 1,
    background: "#000000",
    height:"100vh",
    padding: "10%",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ComingSoonPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      spacing={0}
      align="center"
      justify="center"
      direction="column"
    >
      <h3 className="title text-white">Welcome to MethodMelody!</h3>

      <h3 className="title" style={{ color: "#b12222" }}>
        Stay with us, we're coming live soon...
      </h3>

      <div class="embed-responsive embed-responsive-4by3">
        <VideoTag
          autoPlay={`${true}`}
          muted={`${true}`}
          playsInline={`${true}`}
          loop={`${true}`}
          src={`${"/assets/images/service/clock.mp4"}`}
          // poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
        />
      </div>
    </Grid>

    // <div>
    //   {" "}
    //   <PageHelmet pageTitle="Coming Soon!" />
    //   <div
    //     className="rn-about-area pt--120 pb--20 bg_color--6"
    //     data-black-overlay="6"
    //   >
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <div className="breadcrumb-inner">
    //             <h1 className="title text-white">Welcome to MethodMelody!</h1>
    //             <h3 className="title" style={{ color: "#b12222" }}>
    //               Stay with us, we're coming live soon...
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="rn-about-area bg_color--6">
    //     <div className="container">
    //       <div className="row  align-items-center">
    //         <div className="col-lg-12 col-md-12">
    //           <div class="embed-responsive embed-responsive-16by9">
    //             <VideoTag
    //               autoPlay={`${true}`}
    //               muted={`${true}`}
    //               playsInline={`${true}`}
    //               loop={`${true}`}
    //               src={`${"/assets/images/service/clock.mp4"}`}
    //               // poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ComingSoonPage;
