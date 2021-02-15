import React, { Component, useState, useEffect, Route } from "react";
import { useHistory } from "react-router-dom";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";
import axios from "axios";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import { checkout, removeCart } from "../../../actions/cartAction";
import Paper from "@material-ui/core/Paper";

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
  const dispatch = useDispatch();
  let history = useHistory();
  const classes = useStyles();
  const cartItems = useSelector((state) => state.cartInfo.cart);
  const userID = useSelector((state) => state.isLogged.payload.id);
  let total = 0;
  console.log(`first course id in cart = ${cartItems[0]}`);
  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const [remove, setRemove] = React.useState(false);

  var cartCoursesList = [];

  cartItems.forEach((cartItem) => {
    for (let i = 0; i < courseList.length; i++) {
      if (cartItem == courseList[i]._id) {
        cartCoursesList.push(courseList[i]);
        total = parseFloat(courseList[i].price) + parseFloat(total);
      }
    }
  });

  useEffect(() => {}, [remove]);

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Cart" />
      <main>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="cart" />
        <div className="ptb--50">
          <div className="row plr--50">
            <div className="col">
              {cartCoursesList.map((course) => (
                <div>
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
                            <h4 style={{ color: "#b12222" }}>{course.title}</h4>
                          </div>
                          <div className="row text-white">
                            <p>Subtitle: {course.subtitle}</p>
                          </div>
                          <div className="row text-white">
                            <p>Category: {course.catagory}</p>
                          </div>

                          <div className="blog-btn pt--20 row d-flex">
                            <a
                              className="rn-btn text-white"
                              href="#"
                              onClick={() => {
                                dispatch(
                                  removeCart({
                                    user: userID,
                                    course: course._id,
                                  })
                                );
                                setRemove(true);
                              }}
                            >
                              Remove from cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col">
              <Card className={classes.root} raised="true">
                <CardContent>
                  <h2 style={{ color: "#b12222" }}>Checkout</h2>

                  <h4 className="text-white  mt--50">Your Checkout List: </h4>

                  {cartCoursesList.map((course, idx) => (
                    <div>
                      <p className="text-white">
                        {idx + 1}. {course.price} BDT
                      </p>
                    </div>
                  ))}
                  <div className="row d-flex align-items-center  mt--50">
                    <div className="col">
                      <h4 className="text-white">Total: </h4>
                    </div>
                    <div className="col">
                      <h4 style={{ color: "#b12222" }}>{total}</h4>
                    </div>
                    <div className="col">
                      <h4 className="text-white">(BDT)</h4>
                    </div>
                  </div>
                  <div className="blog-btn mt--20">
                    <a
                      className="rn-btn text-white"
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        axios
                          .post(
                            "http://63.250.33.174/api/v1/cart/ssl/",
                            {
                              total_amount: "1000",
                              discount_amount: "0",
                              cus_name: "Shanewas",
                              cus_phone: "+8801521108012",
                              cus_email: "shanewas@potato.com",
                              cus_add1: "asda",
                              cus_city: "Dhaka",
                              cus_country: "Bangladesh",
                              cus_postcode: "1206",
                              num_of_item: "3",
                              product_name: "Course",
                              cart: { id: userID, course: [] },
                              currency: "BDT",
                            },
                            {
                              headers: {
                                "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                                "Content-type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            window.location.href = res.data.GatewayPageURL;
                            // goes into redux
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      Proceed to checkout
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
