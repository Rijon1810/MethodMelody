import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  ImportContacts,
  MoveToInbox,
  AssignmentInd,
  AccountCircleOutlined,
  AccountCircleTwoTone,
  AccountCircleRounded,
  AccountCircle,
  Mail,
  PieChart,
  Assessment,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <List>
          <ListItem button key="addcourse">
            <ListItemIcon>
              <ImportContacts />
            </ListItemIcon>
            <ListItemText primary="Add New Course" />
          </ListItem>
          <ListItem button key="addinstructor">
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Add New Instructor" />
          </ListItem>
          <ListItem button key="addinstructor">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Add New User" />
          </ListItem>
        </List>
        <Divider />
        {/* Update Section Start*/}
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <ImportContacts />
            </ListItemIcon>
            <ListItemText primary="Update Course" />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Update Instructor" />
          </ListItem>
        </List>
        {/* Update Section End*/}
        <Divider />
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <ImportContacts />
            </ListItemIcon>
            <ListItemText primary="View Courses" />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary="View Instructors" />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <AccountCircleRounded />
            </ListItemIcon>
            <ListItemText primary="View Users" />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="View Messages" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <Assessment />
            </ListItemIcon>
            <ListItemText primary="Site Analytics" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
