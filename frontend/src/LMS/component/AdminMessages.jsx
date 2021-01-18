import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import { FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../../actions/messageAction";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
  root: {
    width: "100%",
    maxHeight: 400,
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const AdminMessages = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  dispatch(getMessage());

  const generalMessageList = useSelector(
    (state) => state.getAllGeneralMessages.generalMessages
  );

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - Messages" />
      <main className={classes.content}>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="admincourselist" />
        {/* Start General Message Section */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>General Messages</h3>
                  <p className="theme-gradient">
                    All Registered & Un-registere User's Messages
                  </p>
                  <p>
                    You can see all general messages in the below list and can
                    reply via email to them.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              <Card raised="true" className={classes.root}>
                <List>
                  {generalMessageList.map((message) => (
                    <div>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={<h5>{message.name}</h5>}
                          secondary={
                            <React.Fragment>
                              <Typography className="theme-gradient">
                                {message.email}
                              </Typography>
                              <Typography style={{ color: "#000" }}>
                                {message.message}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider style={{marginLeft: 50, marginRight:50}}/>
                    </div>
                  ))}
                </List>
              </Card>
            </div>
          </div>
        </div>
        {/* End General Message Section */}
        {/* Start Registered User Message Section */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>Student Messages</h3>
                  <p className="theme-gradient">
                    All messages from students enrolled in some courses at
                    present
                  </p>
                  <p>
                    You can see all messages sent by current students to their
                    respective instructors in the list below and can reply to
                    them from here.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 "></div>
          </div>
        </div>
        {/* End Registered User Message Section */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <Footer />
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default AdminMessages;
