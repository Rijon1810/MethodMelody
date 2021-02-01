import React, { Component, useState, useEffect } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

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
                  <a className="rn-btn" href="#" onClick={
                    dispatch(checkout({store_id:"testbox"
                    ,store_passwd:"qwerty"
                    ,total_amount:"100"
                    ,currency:"EUR"
                    ,tran_id:"REF123"
                    ,success_url:"http://yoursite.com/success.php"
                    ,fail_url:"http://yoursite.com/fail.php"
                    ,cancel_url:"http://yoursite.com/cancel.php"
                    ,cus_name:"Customer Name"
                    ,cus_email:"cust@yahoo.com"
                    ,cus_add1:"Dhaka"
                    ,cus_add2:"Dhaka"
                    ,cus_city:"Dhaka"
                    ,cus_state:"Dhaka"
                    ,cus_postcode:"1000"
                    ,cus_country:"Bangladesh"
                    ,cus_phone:"01711111111"
                    ,cus_fax:"01711111111"
                    ,ship_name:"Customer Name"
                    ,ship_add1 :"Dhaka"
                    ,ship_add2:"Dhaka"
                    ,ship_city:"Dhaka"
                    ,ship_state:"Dhaka"
                    ,ship_postcode:"1000"
                    ,ship_country:"Bangladesh"
                    ,multi_card_name:"mastercard,visacard,amexcard"
                    ,value_a:"ref001_A"
                    ,value_b:"ref002_B"
                    ,value_c:"ref003_C"
                    ,value_d:"ref004_D"}))
                  }>
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
