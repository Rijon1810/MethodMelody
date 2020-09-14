import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  makeStyles,
  Button,
  CardActions,
  Box,
  CardContent,
  CardMedia,
  Card,
  IconButton,
  Snackbar,
  Toolbar,
  CardActionArea,
  TextField,
  ButtonGroup,
  Fade,
  Avatar,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Menu,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "../api/Config";

import {
  ChevronRight,
  AddShoppingCart,
  ShopOutlined,
  ShoppingCart,
  FilterList,
  ExpandMore,
  ArrowDropDown,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import theme from "../theme";
import Dialog from "./Home/LearnMoreDialog";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:focus": {
      outline: "none",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  Typography: {
    marginBottom: theme.spacing(8),
  },
  Typography1: {
    marginBottom: theme.spacing(3),
  },
  Button: {
    marginTop: theme.spacing(4),

    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
  },
  Button1: {
    marginBottom: theme.spacing(5),

    "&:focus": {
      outline: "none",
    },
  },
  Snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ITEM_HEIGHT = 48;

export default function CourseViewHome(props) {
  const classes = useStyles();

  const courseList = props.courses;

  const [open, setOpen] = React.useState(props.open);
  //show filter button group if true
  const [showFilterTag, setShowFilterTag] = React.useState(false);

  const [showCategory, setShowCategory] = React.useState(null);
  const [showLevel, setShowLevel] = React.useState(null);
  const [showModule, setShowModule] = React.useState(null);

  const [instructorList, setInstructorList] = useState([]);
  const [showInstructor, setShowInstructor] = React.useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const history = useHistory();
  function navigateToCourse(course) {
    history.push("/course", course);
  }
  function navigateToCourseList() {
    history.push("/course/all");
  }

  useEffect(() => {
    console.log("course list inside CourseViewHome: " + courseList.length);
    getInstructors();
  }, [courseList]);

  function buyCourse(id) {
    axios
      .post(
        "buy/",
        {
          user: localStorage.getItem("id"),
          course: id,
        },
        {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          },
        }
      )
      .then((res) => {
        console.log("bought: " + res.data);
        setOpen(true);
      });
  }

  const handleFilterClick = (event) => {
    if (showFilterTag === true) {
      setShowFilterTag(false);
    } else {
      setShowFilterTag(true);
    }
  };

  //for category menu
  const handleCategoryClick = (event) => {
    setShowCategory(event.currentTarget);
  };

  const handleCategoryClose = (event) => {
    setShowCategory(null);
  };

  //for level menu
  const handleLevelClick = (event) => {
    setShowLevel(event.currentTarget);
  };

  const handleLevelClose = (event) => {
    setShowLevel(null);
  };

  //for module menu
  const handleModuleClick = (event) => {
    setShowModule(event.currentTarget);
  };

  const handleModuleClose = (event) => {
    setShowModule(null);
  };

  //for instructor menu
  const handleInstructorClick = (event) => {
    setShowInstructor(event.currentTarget);
  };

  const handleInstructorCose = (event) => {
    setShowInstructor(null);
  };

  //get all instructor list from server later it will be list of all featured instructors
  function getInstructors() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorList = res.data;
        setInstructorList(instructorList);
        console.log(
          "instructor list fetched in courseuploader: " + instructorList
        );
      });
  }

  const categoryList = [
    {
      primary: "Guitar",
      alt: "Guitar",
      src:
        "https://i1.pngguru.com/preview/844/649/188/button-ui-2-apple-paid-pro-guitar-icon-png-clipart.jpg",
    },
    {
      primary: "Acoustic Fingerstyle Guitar",
      alt: "Acoustic Fingerstyle guitar",
      src: "https://image.flaticon.com/icons/png/512/176/176540.png",
    },
    {
      primary: "Drums",
      alt: "Drums",
      src:
        "https://imageog.flaticon.com/icons/png/512/1803/1803943.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    },
    {
      primary: "Piano/Keyboard",
      alt: "Piano/Keyboard",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxbm59tHjLaXC1joj-gB2Mid9SXnZ7KZTX3A&usqp=CAU",
    },
    {
      primary: "Sound Engineering",
      alt: "Sound Engineering",
      src:
        "https://imageog.flaticon.com/icons/png/512/2198/2198024.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    },
  ];

  const levelList = ["Basic", "Intermediate", "Advance", "Pro", "Mastro"];

  const moduleList = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"];

  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="xl">
          {props.from === "CourseList" && (
            <div className="App">
              <Navbar />
              <Toolbar style={{ marginBottom: theme.spacing(2) }} />
              <Grid container direction="row" spacing={theme.spacing(1)}>
                <Grid item>
                  <Button
                    color="inherit"
                    variant="outlined"
                    className={classes.Button1}
                    endIcon={<FilterList />}
                    onClick={handleFilterClick}
                  >
                    Filter by
                  </Button>
                </Grid>
                {showFilterTag === true && (
                  <Grid item>
                    <ButtonGroup
                      size="large"
                      color={theme.palette.text.primary}
                      fullWidth="true"
                      variant="outlined"
                      aria-label="large outlined primary button group"
                    >
                      <Button
                        endIcon={<ArrowDropDown fontSize="small" />}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleCategoryClick}
                      >
                        Category
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={showCategory}
                        keepMounted
                        open={Boolean(showCategory)}
                        onClose={handleCategoryClose}
                        TransitionComponent={Fade}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        {...props}
                      >
                        {categoryList.map((courseCategory, index) => (
                          <MenuItem
                            onClick={() => {
                              navigateToCourse(courseCategory.primary);
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar
                                alt={courseCategory.alt}
                                src={courseCategory.src}
                              />
                            </ListItemAvatar>
                            <ListItemText primary={courseCategory.primary} />
                          </MenuItem>
                        ))}
                      </Menu>
                      <Button
                        endIcon={<ArrowDropDown fontSize="small" />}
                        onClick={handleLevelClick}
                      >
                        Level
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={showLevel}
                        keepMounted
                        open={Boolean(showLevel)}
                        onClose={handleLevelClose}
                        TransitionComponent={Fade}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        {...props}
                      >
                        {levelList.map((courseLevel, index) => (
                          <MenuItem
                            onClick={() => {
                              // navigateToCourse(courseCategory.primary);
                            }}
                          >
                            <ListItemText primary={courseLevel} />
                          </MenuItem>
                        ))}
                      </Menu>
                      <Button
                        endIcon={<ArrowDropDown fontSize="small" />}
                        onClick={handleModuleClick}
                      >
                        Module
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={showModule}
                        keepMounted
                        open={Boolean(showModule)}
                        onClose={handleModuleClose}
                        TransitionComponent={Fade}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        {...props}
                      >
                        {moduleList.map((courseModule, index) => (
                          <MenuItem
                            onClick={() => {
                              navigateToCourse(courseModule);
                            }}
                          >
                            <ListItemText primary={courseModule} />
                          </MenuItem>
                        ))}
                      </Menu>
                      <Button
                        endIcon={<ArrowDropDown fontSize="small" />}
                        onClick={handleInstructorClick}
                      >
                        Instructor
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={showInstructor}
                        keepMounted
                        open={Boolean(showInstructor)}
                        onClose={handleInstructorCose}
                        TransitionComponent={Fade}
                        getContentAnchorEl={null}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 5.5,
                            width: "40ch",
                          },
                        }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        {...props}
                      >
                        {instructorList.map((courseInstructor, index) => (
                          <MenuItem
                            onClick={() => {
                              // navigateToCourse(courseCategory.primary);
                            }}
                          >
                            <ListItemAvatar>
                              <Avatar
                                // alt={courseInstructor.alt}
                                src={
                                  "http://162.0.231.67/" +
                                  courseInstructor.photo
                                }
                              />
                            </ListItemAvatar>
                            <ListItemText primary={courseInstructor.name} />
                          </MenuItem>
                        ))}
                      </Menu>
                    </ButtonGroup>
                  </Grid>
                )}
              </Grid>
            </div>
          )}
          {props.from === "Home" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
            >
              {props.totalCourse} in-depth courses for you to subscribe
            </Typography>
          )}

          {props.from === "All" && (
            <Typography
              variant="h4"
              component="h4"
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {props.from === "Featured" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {props.from === "Top Selling" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {/* {props.from === "CourseList" && (
            <Typography variant="h6" className={classes.Typography1}>
              {props.totalCourse} All Courses
            </Typography>
          )} */}
          <Grid container spacing={3}>
            {courseList.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={4} lg={2} xl={2}>
                <CardActionArea className={classes.card}>
                  <Card className={classes.card}>
                    <div
                      onClick={() => {
                        navigateToCourse(course);
                      }}
                      className={classes.card}
                    >
                      <CardMedia
                        className={classes.cardMedia}
                        image={"http://162.0.231.67/" + course.thumbnail}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="h2"
                          align="left"
                        >
                          <Box fontWeight="fontWeightMedium">
                            {course.title}
                          </Box>
                        </Typography>
                        <Typography variant="body2" align="left">
                          <Box fontWeight="fontWeightMedium" fontStyle="italic">
                            {course.subtitle}
                          </Box>
                        </Typography>
                        <Typography
                          variant="body2"
                          align="left"
                        >{`Category: ${course.catagory}`}</Typography>
                        <Typography
                          variant="body2"
                          align="left"
                        >{`Level: ${course.level}`}</Typography>
                        <Typography
                          variant="body2"
                          align="left"
                        >{`Module: ${course.sublevel}`}</Typography>
                      </CardContent>
                    </div>
                    {props.from !== "studentpanel" && (
                      <Grid container direction="row" justify="flex-end">
                        <Dialog courseToView={course} buyfunction={buyCourse} />
                      </Grid>
                    )}
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {props.from === "Home" && (
            <Button
              color="inherit"
              variant="text"
              endIcon={<ChevronRight />}
              size="large"
              className={classes.Button}
              onClick={navigateToCourseList}
            >
              View all courses
            </Button>
          )}
        </Container>
      </main>
      <div className={classes.Snackbar}>
        {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Course Purchased Successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
