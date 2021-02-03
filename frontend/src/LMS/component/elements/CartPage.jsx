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
import { checkout } from "../../../actions/cartAction";

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
  const [total, setTotal] = useState(0);
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

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Cart" />
      <main>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="cart" />
        <div className=" bg_color--5">
          <Grid container>
            <Grid item lg={6}>
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
                          <div className="row text-white">
                            {course.subtitle}
                          </div>
                          <div className="row text-white">
                            {course.catagory}
                          </div>

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
            <Grid item container justify="center" lg={6}>
              <Grid item lg={12}>
                <h2>Checkout</h2>
              </Grid>
              <Grid item lg={12}>
                <h3>Your Checkout List: </h3>
              </Grid>
              {cartCoursesList.map((course, idx) => (
                <Grid item lg={12}>
                  <h3>
                    {idx + 1}. {course.price} BDT
                  </h3>
                </Grid>
              ))}
              <Grid item lg={12}>
                <h3>Total: {cartCoursesList[0].price}</h3>
              </Grid>
              <Grid item lg={12}>
                <div className="blog-btn">
                  <a
                    className="rn-btn"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      axios
                        .post(
                          "http://localhost:8080/api/v1/cart/ssl/",
                          {
                            total_amount: "100",
                            currency: "BDT",
                            success_url: "http://63.250.33.174/cart/",
                            fail_url: "http://63.250.33.174/cart/",
                            cancel_url: "http://63.250.33.174/cart/",
                            cus_name: "Customer Name",
                            cus_email: "cust@yahoo.com",
                            cus_add1: "Dhaka",
                            cus_city: "Dhaka",
                            cus_state: "Dhaka",
                            cus_postcode: "1000",
                            cus_country: "Bangladesh",
                            cus_phone: "01711111111",
                            cus_fax: "01711111111",
                            ship_name: "Customer Name",
                            ship_add1: "Dhaka",
                            ship_add2: "Dhaka",
                            ship_city: "Dhaka",
                            ship_state: "Dhaka",
                            ship_postcode: "1000",
                            ship_country: "Bangladesh",
                            multi_card_name:
                              "mastercard,visacard,amexcard,bkash",
                            product_name: "course",
                            product_category: "category",
                            product_profile: "general",
                          },
                          {
                            headers: {
                              "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                              "Content-type": "application/json",
                            },
                          }
                        )
                        .then((res) => {
                          console.log(res.data.redirectGatewayURL);
                          console.log(res.data.GatewayPageURL);

                          // if (res.data.status === "SUCCESS") {
                          //   // axios.get(res.data.GatewayPageURL).then((re) => {
                          //   //   console.log(re);
                          //   // });
                          window.location.href = res.data.GatewayPageURL;
                          // }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    Proceed to checkout
                  </a>
                </div>
              </Grid>
            </Grid>
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

// dispatch(
//   checkout({
//     total_amount: "100",
//     currency: "BDT",
//     success_url: "http://google.com",
//     fail_url: "http://yoursite.com/fail.php",
//     cancel_url: "http://yoursite.com/cancel.php",
//     cus_name: "Customer Name",
//     cus_email: "cust@yahoo.com",
//     cus_add1: "Dhaka",
//     cus_city: "Dhaka",
//     cus_state: "Dhaka",
//     cus_postcode: "1000",
//     cus_country: "Bangladesh",
//     cus_phone: "01711111111",
//     cus_fax: "01711111111",
//     ship_name: "Customer Name",
//     ship_add1: "Dhaka",
//     ship_add2: "Dhaka",
//     ship_city: "Dhaka",
//     ship_state: "Dhaka",
//     ship_postcode: "1000",
//     ship_country: "Bangladesh",
//     multi_card_name: "mastercard,visacard,amexcard",
//     product_name: "course",
//     product_category: "category",
//     product_profile: "profile",
//   })
// );
