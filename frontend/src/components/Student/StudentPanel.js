import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, makeStyles, Toolbar } from "@material-ui/core";
import theme from "../../theme";
import Navbar from "../Navbar";
import CourseView from "../CourseViewHome";
import Tab from "./Tab";
import axios from "../../api/Config";
import { getUserCourse } from "../../actions/userAction";

const useStyles = makeStyles((theme) => ({
  Grid: {
    width: "100%",
    margin: "0px",
  },
}));

export default function StudentPanel() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const userId = useSelector((state) => state.isLogged.payload._id);

  useEffect(() => {
    dispatch(getUserCourse(userId));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.Grid}
      >
        <Grid item xs={12}>
          {/* <CourseView courses={localStorage.getItem("course")} /> */}
        </Grid>
        <Grid item xs={12}>
          <Tab />
        </Grid>
      </Grid>
    </div>
  );
}
