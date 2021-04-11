import { Card, CardContent, CardMedia, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "react-scroll-up";
import { getCupon } from '../../actions/cuponAction';
import { getUser } from "../../actions/userAction";
import AdminDrawer from "./elements/AdminDrawer.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

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

const findFeaturedInstructors = (instructors) => {
  var iL = [];
  instructors.forEach((instructor) => {
    if (instructor.featured) {
      iL.push(instructor);
    }
  });
  return iL;
};

const AdminCuponList = () => {
  const classes = useStyles();

  const courseList = useSelector((state) => state.getCourse.courseList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );

  const featuredInstructorList = findFeaturedInstructors(instructorList);

  console.log(`featured course list size = ${featuredInstructorList.length}`);

  const dispatch = useDispatch();

  dispatch(getUser());

  const [list, setList] = React.useState("featured");

  useEffect(() => { dispatch(getCupon()) }, [dispatch]);

  const userList = useSelector((state) => state.getAllUsers.student);
  const subscriberList = useSelector((state) => state.getAllUsers.subscriber);
  const adminList = useSelector((state) => state.getAllUsers.getByType_1);
  var cuponList = JSON.parse(
    JSON.stringify(useSelector((state) => state.getCupon.cuponList))
  );

  return (
    <React.Fragment>
      {" "}
      <PageHelmet pageTitle="Admin Panel - User List" />
      <main className={classes.content}>
        {" "}
        <Header from="admin" />
        <Breadcrumb from="admincourselist" />
        {/* Start User List */}
        <div
          className="rn-blog-area pt--50  mb-dec--30 ptb--100"
          style={{ paddingBottom: "15ch" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h3>All Cupons</h3>
                  <p className="theme-gradient">All Created Cupons</p>
                  <p>
                    You can give this cupons to give the user for purchase any
                    course with discount.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40 ">
              {cuponList.map((cupon) => (
                <div className="col-4">
                  <Card className={classes.root} raised="true">
                    <CardContent>
                      <div className="container ">
                        <div className="col">
                          <div className="row">
                            <h4 className="theme-gradient">
                              Cupon Code : {cupon.cuponCode}
                            </h4>
                          </div>
                          <div className="row text-white">
                            {" "}
                            Discount : {cupon.discount}
                          </div>
                          <div className="row text-white">
                            {" "}
                            Expire Date : {cupon.expireDate}
                          </div>
                          <div className="row text-white">
                            {" "}
                            Number of used : {cupon.presentCount}
                          </div>
                          <div className="row text-white">
                            {" "}
                            Limit of use :{cupon.useLimit}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardMedia
                      className={classes.cover}
                      image={`htpp://localhost:8080/${cupon.photo}`}
                      title="Live from space album cover"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End User List */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* <Footer /> */}
        {/* End Back To Top */}
      </main>
      <AdminDrawer />
    </React.Fragment>
  );
};

export default AdminCuponList;
