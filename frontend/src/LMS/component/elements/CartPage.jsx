import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import { useSelector, useDispatch } from "react-redux";

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

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: "240px",
  },
  cover: {
    width: 150,
  },
  root: {
    display: "flex",
    backgroundColor: "#191C21",
    marginTop: 10,
    marginBottom: 10,
    markerEnd: 10,
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cartInfo.cart);
  console.log(`first course id in cart = ${cartItems[0]}`);
  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  var cartCoursesList = [];

  cartItems.forEach((cartItem) => {
    for (let i = 0; i < courseList.length; i++) {
      if (cartItem == courseList[i]._id) {
        cartCoursesList.push(courseList[i]);
      }
    }
  });

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Cart" />
      <main>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="cart" />
        <div className=" bg_color--6">
          <Grid container lg={6}>
            {cartCoursesList.map((course) => (
              <Grid
                item
                lg={12}
                style={{
                  marginBottom: "20px",
                  marginLeft: "50px",
                  marginRight: "50px",
                }}
              >
                <Card className={classes.root} raised="true">
                  <CardMedia
                    className={classes.cover}
                    image={`http://63.250.33.174/${course.thumbnail}`}
                    title="Live from space album cover"
                  />
                  <CardContent>
                    <div className="container ">
                      <div className="col">
                        <div className="row">
                          <h4 className="theme-gradient">{course.title}</h4>
                        </div>
                        <div className="row text-white">{course.subtitle}</div>
                        <div className="row text-white">{course.catagory}</div>

                        <div className="blog-btn pt--20">
                          <a className="rn-btn text-white" href="#">
                            Remove from cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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

export default CartPage;
