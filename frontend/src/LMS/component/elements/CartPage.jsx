import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { getCart, removeCart } from "../../../actions/cartAction";
import { getCupon } from "../../../actions/cuponAction";
//import { getCupon} from  '../../../'
import Footer from "../Footer.jsx";
import Header from "../Header.jsx";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

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
  const [useCuponCode, setUseCuponCode] = React.useState("");
  const cartItems = useSelector((state) => state.cartInfo.cart);
  const userID = useSelector((state) => state.isLogged.payload.id);
//console.log(cartItems ," MY CART OPTION");

  var cuponList = JSON.parse(
    JSON.stringify(useSelector((state) => state.getCupon.cuponList))
  );
 // console.log(cuponList);

  //console.log("cupon list" + cuponList);
  let total = 0;
  //console.log(`first course id in cart = ${cartItems[0]}`);
  const courseList = useSelector((state) => state.getCourse.courseList);
  let referralBonus = 0;
  referralBonus = parseFloat(
    useSelector((state) => state.getAllUsers.getUserCourse.balance)
  );

  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const [remove, setRemove] = React.useState("");

  var cartCoursesList = [];

  cartItems.forEach((cartItem) => {
    for (let i = 0; i < courseList.length; i++) {
      if (cartItem === courseList[i]._id) {
      //  console.log(courseList[i]);
        cartCoursesList.push(courseList[i]);
        total = parseFloat(courseList[i].price) + parseFloat(total);
      }
    }
  });
  var subTotal = total;
  if (referralBonus > 0) {
    var val = Math.min(referralBonus, total);
    total = total - val;
  }
  for (var j = 0; j < cartCoursesList.length; j++) {
   // console.log(cartCoursesList[j]._id);
    if (cartCoursesList[j]._id === remove) {
      cartCoursesList.splice(j, 1);
    }
  }
  var value_a = false;
  var value_b;
  var isoDate = new Date().toISOString();
  var today = isoDate.slice(0, 10);


  for (j = 0; j < cuponList.length; j++) {
    if (
      cuponList[j].cuponCode === useCuponCode &&
      cuponList[j].useLimit >= cuponList[j].presentCount &&
      cuponList[j].expireDate >= today
    ) {
     // console.log(today + " " + cuponList[j].expireDate);
      var discount = parseFloat(cuponList[j].discount);
      discount = discount / 100.0;
     // console.log("discafdsf", discount);
      total = total - discount * total;
      total = Math.max(total, 0);
      value_a = true;
      value_b = useCuponCode;
      break;
    }
  }

  useEffect(() => {
    dispatch(getCart(`${userID}`));
    dispatch(getCupon());
  }, [dispatch, userID , remove]);
  const inputHandler = (e) => {
    e.preventDefault();
    setUseCuponCode(e.target.value);
 /*    console.log(e.target.value); */
  };
  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Cart" />
      <main style={{ backgroundColor: "#262626" }}>
        {" "}
        <Header from="landing" />
        <Breadcrumb from="cart" />
        <div className="ptb--50">
          <div className="row plr--50">
            <div className="col">
              {cartCoursesList.map((course) => (
                <div>
                  <Card className={classes.root} raised="true">
                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${course.thumbnail}`}
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
                            <Link
                              className="rn-btn text-white"
                              to="#"
                              onClick={() => {
                                dispatch(
                                  removeCart({
                                    user: userID,
                                    course: course._id,
                                  })
                                );
                                setRemove(course._id);
                              }}
                            >
                              Remove from cart
                            </Link>
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

                  <h4 className="text-white  mt--50">Course List: </h4>

                  {cartCoursesList.map((course, idx) => (
                    <div>
                      <p className="text-white">
                        {idx + 1}. {course.price} BDT
                      </p>
                    </div>
                  ))}
                  <div className="row d-flex align-items-center  mt--50">
                    <div className="col">
                      <h6 className="text-white">SubTotal: </h6>
                    </div>
                    <div className="col">
                      <h6 style={{ color: "#b12222" }}>৳{subTotal}</h6>
                    </div>
                  </div>
                  {/* end of row */}
                  {/* referral bonus */}
                  <div className="row d-flex justify-content-end">
                    <div className="col">
                      <h6 className="text-white">Referal Bonus: </h6>
                    </div>
                    <div className="col">
                      <h6 style={{ color: "#b12222" }}>৳{referralBonus}</h6>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <div className="col">
                      <h6 className="text-white">Enter Cupon code: </h6>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        onChange={inputHandler}
                        style={{ "color": "#b12222",  "border": "none", "border-bottom": "1px solid" }}
                      />
                      {/*   <h6 style={{ color: "#b12222" }}>৳{referralBonus}</h6> */}
                    </div>
                  </div>
                  <div className="row d-flex align-items-center mt--50">
                    <div className="col">
                      <h4 className="text-white">Total: </h4>
                    </div>
                    <div className="col">
                      <h4 style={{ color: "#b12222" }}>৳{total}</h4>
                    </div>
                  </div>

                  <div className="blog-btn mt--20">
                    <Link
                      className="rn-btn text-white"
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        axios
                          .post(
                            "http://localhost:8080/api/v1/order",
                            {
                              amount: total,
                              paid : false,
                              userId : userID,
                              courses : cartCoursesList
                            },
                            {
                              headers: {
                                "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
                                "Content-type": "application/json",
                              },
                            }
                          )
                          .then((res) => {
                            //console.log("order done mama" ,res.data);
                            axios
                            .post(
                              "http://localhost:8080/api/v1/cart/ssl/",
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
                                cart: { id: userID },
                                //cuponCode Used or not
                                value_a: value_a,
                                value_b: value_b,
                                value_c : res.data._id,
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
                             /*  console.log(err); */
                            });

                          })
                          .catch((err) => {
                          /*   console.log(err); */
                          });
                      }}
                    >
                      Proceed to checkout
                    </Link>
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
