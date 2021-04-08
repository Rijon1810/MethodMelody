import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index + " clicked");

    switch (index) {
      case 0:
        history.push("/admin");
        break;
      case 1:
        history.push("/addcourse");
        break;
      case 2:
        history.push("/addinstructor");
        break;

      case 3:
        history.push("/updatecourse");
        break;
      case 4:
        history.push("/updateinstructor");
        break;
      case 5:
        history.push("/updatelesson");
        break;
      case 6:
        history.push("/admincourselist");
        break;
      case 7:
        history.push("/admininstructorlist");
        break;
      case 8:
        history.push("/adminuserlist");
        break;
      case 9:
        history.push("/adminmessages");
        break;
      case 11:
        history.push("/createaccount");
        break;
      case 12:
        history.push("/cupon");
        break;
      case 13:
        history.push("/admincuponlist");
        break;
      case 14:
        history.push("/adminorderlist");
        break;
      default:
        break;
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
          <ListItem
            button
            key="addinstructor"
            onClick={(event) => handleListItemClick(event, 2)}
            selected={selectedIndex === 2}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add New Instructor"
              style={{ color: "#fff" }}
            />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem
            button
            key="createcupon"
            onClick={(event) => handleListItemClick(event, 12)}
            selected={selectedIndex === 12}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Create Cupon" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="admincuponlist"
            onClick={(event) => handleListItemClick(event, 13)}
            selected={selectedIndex === 13}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Cupon List" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="adminorderlist"
            onClick={(event) => handleListItemClick(event, 14)}
            selected={selectedIndex === 14}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Order List" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="addinstructor"
            onClick={(event) => handleListItemClick(event, 2)}
            selected={selectedIndex === 2}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="Add New Instructor"
              style={{ color: "#fff" }}
            />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        {/* Update Section Start*/}
        <List>
          <ListItem
            button
            key="updatecourse"
            onClick={(event) => handleListItemClick(event, 3)}
            selected={selectedIndex === 3}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Update Course" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="updateinstructor"
            onClick={(event) => handleListItemClick(event, 4)}
            selected={selectedIndex === 4}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="Update Instructor"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem
            button
            key="updatelesson"
            onClick={(event) => handleListItemClick(event, 5)}
            selected={selectedIndex === 5}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Update Lesson" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        {/* Update Section End*/}
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem
            button
            key="viewcourses"
            onClick={(event) => handleListItemClick(event, 6)}
            selected={selectedIndex === 6}
          >
            <ListItemIcon>
              <ImportContacts style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Courses" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="viewinstructor"
            onClick={(event) => handleListItemClick(event, 7)}
            selected={selectedIndex === 7}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText
              primary="View Instructors"
              style={{ color: "#fff" }}
            />
          </ListItem>
          <ListItem
            button
            key="viewusers"
            onClick={(event) => handleListItemClick(event, 8)}
            selected={selectedIndex === 8}
          >
            <ListItemIcon>
              <AccountCircleRounded style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Users" style={{ color: "#fff" }} />
          </ListItem>
          <ListItem
            button
            key="viewmessages"
            onClick={(event) => handleListItemClick(event, 9)}
            selected={selectedIndex === 9}
          >
            <ListItemIcon>
              <Mail style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="View Messages" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem button key="siteanalytics">
            <ListItemIcon>
              <Assessment style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Site Analytics" style={{ color: "#fff" }} />
          </ListItem>
        </List>
        <Divider style={{ background: "#1d1e24" }} />
        <List>
          <ListItem
            button
            key="createaccount"
            onClick={(event) => handleListItemClick(event, 11)}
            selected={selectedIndex === 11}
          >
            <ListItemIcon>
              <AssignmentInd style={{ color: "#f9004d" }} />
            </ListItemIcon>
            <ListItemText primary="Create Account" style={{ color: "#fff" }} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
