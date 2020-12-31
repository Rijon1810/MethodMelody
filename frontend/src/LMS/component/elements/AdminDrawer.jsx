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
  Dashboard,
  AssignmentInd,
  AccountCircleOutlined,
  AccountCircleTwoTone,
  AccountCircleRounded,
  AccountCircle,
  Mail,
  PieChart,
  Assessment,
  HomeOutlined,
} from "@material-ui/icons";
import { GrUserAdmin } from "react-icons/gr";
import Admin from "../Admin";

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
    background: "black",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index + " clicked");

    switch(index){
       
    }
  };

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
          <ListItem
            button
            key="Home"
            onClick={(event) => handleListItemClick(event, 0)}
            selected={selectedIndex === 0}
          >
            <ListItemIcon>
              <Dashboard style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem
            button
            key="addcourse"
            onClick={(event) => handleListItemClick(event, 1)}
            selected={selectedIndex === 1}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Add New Course" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="addinstructor">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add New Instructor"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem button key="addnewuser">
            <ListItemIcon>
              <AccountCircle style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Add New User" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        {/* Update Section Start*/}
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Update Course" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="Update Instructor"
              style={{ color: "#fff" }}
            />
          </ListItem>
        </List>
        {/* Update Section End*/}
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Courses" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="updateinstructor">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="View Instructors"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem button key="updateuser">
            <ListItemIcon>
              <AccountCircleRounded style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Users" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="updatemessages">
            <ListItemIcon>
              <Mail style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Messages" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem button key="updatecourse">
            <ListItemIcon>
              <Assessment style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Site Analytics" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem button key="createadmin">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Create Admin Account" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="createinstructor">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Create Instructor Account" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem button key="createcontentdeveloper">
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Create Content Uploader Account" style={{ color: "#fff" }} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
