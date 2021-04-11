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
  Grid,
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import { FiChevronUp } from "react-icons/fi";
import { Link} from 'react-router-dom'
import ScrollToTop from "react-scroll-up";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PageHelmet from "./Helmet.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import { useSelector, useDispatch } from "react-redux";
// import { getMessage } from "../../actions/messageAction";
import { replyMessage } from "../../actions/messageAction";

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

const replyViaEmail = (message) => {
  window.open(`mailto:${message.email}`);
};

const AdminMessages = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  // dispatch(getMessage());

  const generalMessageList = useSelector((state) => state.Messages.general);
  const studentMessageList = useSelector((state) => state.Messages.student);

  const [open, setOpen] = useState(false);
  const [messageId, setMessageId] = useState("");
  const [reply, setReply] = useState("");
  const [message, setMessage] = useState("");

  // let messageId = '';
  // let reply = '';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendReply = () => {
    console.log(`message id = ${messageId} and reply message = ${reply}`);
    dispatch(replyMessage(messageId, { reply: reply }));
  };
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
            <div className="row-12">
              <h3>General Messages</h3>
              <p style={{ color: "#b12222" }}>
                All Registered & Un-registered User's Messages
              </p>
              <p>
                You can see all general messages in the below list and can reply
                via email to them.
              </p>
            </div>

            <div className="row mt--60 mt_sm--40 ">
              <Card raised="true" className={classes.root}>
                <List>
                  {generalMessageList.map((message) => (
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item container direction="row">
                        <Grid item xs={10}>
                          {" "}
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar
                                alt={message.name}
                                src="/static/images/avatar/1.jpg"
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={<h5>{message.name}</h5>}
                              secondary={
                                <React.Fragment>
                                  <Typography style={{ color: "#b12222" }}>
                                    {message.email}
                                  </Typography>
                                  <Typography style={{ color: "#000" }}>
                                    {message.message}
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </Grid>
                        <Grid item container xs={2} justify="center">
                          <div className="blog-btn pt--20">
                            <Link
                              className="rn-btn"
                              to="#"
                              onClick={() => {
                                replyViaEmail(message);
                              }}
                              style={{
                                backgroundColor: "#b12222",
                                color: "#ffffff",
                                borderBlockStyle: "hidden",
                              }}
                            >
                              Reply
                            </Link>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item xs={11}>
                        <Divider />{" "}
                      </Grid>
                    </Grid>
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
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>Student Messages</h3>
                  <p style={{ color: "#b12222" }}>
                    All messages from students enrolled in some courses at
                    present
                  </p>
                  <p>
                    You can see all messages sent by current students to their
                    respective instructors in the list below and can reply to
                    them from here.
                  </p>
                </div>
                <div className="row mt--60 mt_sm--40 ">
                  <Card raised="true" className={classes.root}>
                    <List>
                      {studentMessageList.map((message) => (
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item container direction="row">
                            <Grid item xs={10}>
                              {" "}
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar
                                    alt={message.name}
                                    src="/static/images/avatar/1.jpg"
                                  />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={<h5>{message.name}</h5>}
                                  secondary={
                                    <React.Fragment>
                                      <Typography style={{ color: "#b12222" }}>
                                        {message.toName === undefined
                                          ? null
                                          : `Instructor: ${message.toName}`}
                                      </Typography>
                                      <Typography style={{ color: "#000" }}>
                                        {message.message}
                                      </Typography>
                                      {message.status === true ? (
                                        <Typography
                                          style={{
                                            color: "#b12222",
                                          }}
                                        >
                                          {`Reply: ${message.reply}`}
                                        </Typography>
                                      ) : null}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                            </Grid>
                            {message.status === true ? null : (
                              <Grid item container xs={2} justify="center">
                                <div className="blog-btn pt--20">
                                  <Link
                                    className="rn-btn"
                                    to="#"
                                    // onClick={handleClickOpen}
                                    onClick={(event) => {
                                      handleClickOpen();
                                      setMessageId(message._id);
                                      setMessage(message.message);
                                    }}
                                    style={{
                                      backgroundColor: "#b12222",
                                      color: "#ffffff",
                                      borderBlockStyle: "hidden",
                                    }}
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </Grid>
                            )}
                          </Grid>
                          <Grid item xs={11}>
                            <Divider />{" "}
                          </Grid>
                        </Grid>
                      ))}
                    </List>
                  </Card>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 "></div>
          </div>
        </div>
        {/* End Registered User Message Section */}
        {/* Start Back To Top */}
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Reply!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please give your reply to the following student query to address
                his/her concerns and click the send button.
              </DialogContentText>
              <h5 style={{ color: "#b12222" }}>{`" ${message} "`}</h5>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Reply answer"
                type="text"
                fullWidth
                onChange={(event) => {
                  setReply(event.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: "#b12222" }}>
                Cancel
              </Button>
              <Button
                onClick={(event) => {
                  handleClose();
                  sendReply();
                }}
                style={{ color: "#b12222" }}
              >
                Send
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* <Footer /> */}
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default AdminMessages;
