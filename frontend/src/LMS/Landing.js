import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Slider from "react-slick";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { videoTagString, VideoTag } from "react-video-tag";

//importing material components
import { Grid } from "@material-ui/core";

//importing custom components
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import { slideSlick } from "./page-demo/script";
import Portfolio from "./component/Portfolio.jsx";
import CounterOne from "./component/CounterOne.jsx";
import ContactOne from "./component/ContactOne.jsx";
// import BlogContent from "./component/elements/blog/BlogContent.jsx";
import Team from "./component/Team.jsx";
import Testimonial from "./component/TestimonialOne.jsx";
import ServiceTwo from "./component/elements/service/ServiceTwo.jsx";

import { useSelector, useDispatch } from "react-redux";
import {
  getInstructor,
  getFeaturedInstructor,
} from "../actions/instructorAction";
import { getCart } from "../actions/cartAction";
import { getCourse } from "../actions/courseAction";
import { getAnalytics } from "../actions/getAnalyticsAction";
import {
  getSelectedCourseId,
  getSelectedInstructorId,
  getCurrentVideoIndex,
  getSelectedCourseCategory,
} from "../actions/getSelectedIdAction";
import { getUserCourse } from "../actions/userAction";

//constants
const SlideList = [
  {
    textPosition: "text-center",
    bgImage: "bg_image--21",
    category: "",
    title: "Ibrahim Ahmed Kamal",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Let's Get Started",
    buttonLink: "/login",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--22",
    category: "",
    title: "George Linclon D'Costa",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Let's Get Started",
    buttonLink: "/login",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--23",
    category: "",
    title: "Mahan Fahim",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Let's Get Started",
    buttonLink: "/login",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--24",
    category: "",
    title: "Nafeez Al Amin",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Let's Get Started",
    buttonLink: "/login",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--26",
    category: "",
    title: "Raef Al Hasan Rafa",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Let's Get Started",
    buttonLink: "/login",
  },
];

export default function Landing() {
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const featuredInstructorList = useSelector(
    (state) => state.getInstructor.featuredInstructorList
  );
  const userId = useSelector((state) => state.isLogged.payload.id);

  const isLoggedIn = useSelector((state) => state.isLogged.login);
  console.log("is logged in: " + isLoggedIn);

  const courseList = useSelector((state) => state.getCourse.featuredCourseList);

  const length = useSelector((state) => state.getInstructor.length);

  const cart = useSelector((state) => state.getCart);

  const dispatch = useDispatch();

  let history = useHistory();

  // const PostList = BlogContent.slice(0, 4);
  // dispatch(getInstructor());
  // life-cycle methods
  // alert(instructorList);
  // const instructorLists = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getInstructor());
    dispatch(getFeaturedInstructor());
    dispatch(getCourse());
    dispatch(getAnalytics());
    dispatch(getCurrentVideoIndex(0));
    dispatch(getCart(`${userId}`));
    dispatch(getUserCourse(`${userId}`));
    dispatch(getSelectedCourseCategory(""));
  }, [dispatch]);

  // view all course handler
  function handleViewAllCourse() {
    history.push("/courses", { courses: "all" });
  }

  console.log(SlideList[0].bgImage);

  // var titleColor = {"Red": "#b12222"}

  return (
    <div className="active-dark">
      <Header from="landing" />

      {/* Start Slider Area   */}
      <div className="slider-wrapper">
        <div className="slider-activation slider-startup">
          <Slider className="rn-slick-dot dot-light" {...slideSlick}>
            {SlideList.map((value, index) => (
              // Start Single Slider
              <div
                className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                key={index}
                data-black-overlay="8"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 style={{ color: "#b12222" }}>{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {/* {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )} */}
                        {isLoggedIn ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2" style={{ backgroundColor: "#b12222", color:"#ffffff", borderBlockStyle:"hidden" }}
                              href="/allcourses"
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2" style={{ backgroundColor: "#b12222", color:"#ffffff", borderBlockStyle:"hidden"  }}
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              // End Single Slider
            ))}
          </Slider>
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start Featured Course Area Area */}
      <div className="rn-blog-area ptb--100  mb-dec--30 bg_color--6">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h3>Our Courses</h3>
                <p style={{ color: "#b12222" }}>
                  Start with any of our {courseList.length} in-depth featured
                  courses
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                <a
                  className="btn-transparent rn-btn-dark"
                  href="/allcourses"
                  onClick={dispatch(getSelectedCourseCategory(""))}
                >
                  <span className="text">View All Courses</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            {courseList.map((course) => (
              <div
                className="col-lg-3 col-md-4 col-12"
                key={course._id}
                onClick={async (event) => {
                  dispatch(getSelectedCourseId(course));
                  instructorList.forEach((instructor) => {
                    if (instructor._id === course.instructor) {
                      dispatch(getSelectedInstructorId(instructor));
                    }
                  });
                }}
              >
                <div className="blog blog-style--1">
                  <div className="thumbnail">
                    <a href="/courseview">
                      <img
                        className="w-100"
                        src={`http://63.250.33.174/${course.thumbnail}`}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    {/* <p className="blogtype">{instructor.bio}</p> */}
                    <h4 className="title">
                      <a href="/courseview">{course.title}</a>
                    </h4>

                    <div className="blog-btn">
                      <a className="rn-btn text-white" href="/courseview">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End featured course Area */}

      {/* Start Course Category Area  */}
      <div className="service-area  bg_color--1 ptb--100">
        <div className="container">
          <ServiceTwo />
        </div>
      </div>
      {/* End Course Category Area  */}

      {/* Start How Platform Works Video */}
      <Grid
        container
        justify="center"
        direction="row"
        className="ptb--100 bg_color--5"
      >
        <Grid item lg={8}>
          {" "}
          <div className="section-title text-center">
            <h3 className="title pb--50 fontWeight500">
              How the platform works
            </h3>
          </div>
        </Grid>
        <Grid item lg={8} md={8}>
          <div class="embed-responsive embed-responsive-21by9">
            <VideoTag
              autoPlay={`${true}`}
              muted={`${true}`}
              playsInline={`${true}`}
              loop={`${true}`}
              src={`${"/assets/images/service/video.mp4"}`}
              poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
            />
          </div>
        </Grid>
      </Grid>

      {/* End How Platform Works Video */}

      {/* Start CounterUp Area */}
      <div
        className="rn-counterup-area pt--25 pb--100 bg_color--1"
        // style={{ paddingTop: "15ch" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500" style={{ paddingTop: "5ch" }}>
                  Our Platform
                </h3>
              </div>
            </div>
          </div>
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Featured Instructor Area */}
      <div
        className="rn-blog-area pt--50  mb-dec--30 ptb--100 bg_color--6"
        style={{ paddingBottom: "15ch" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h3>Our Instructors</h3>
                <p style={{ color: "#b12222" }}>
                  Learn from the best of the Best
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                <a
                  className="btn-transparent rn-btn-dark"
                  href="/instructorlist"
                >
                  <span className="text">View All Instructors</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt--60 mt_sm--40">
            {featuredInstructorList.map((instructor) => (
              <div className="col-lg-3 col-md-4 col-12" key={instructor._id}>
                <div className="blog blog-style--1">
                  <div
                    className="thumbnail"
                    onClick={async (event) => {
                      dispatch(getSelectedInstructorId(instructor));
                    }}
                  >
                    <a href="/instructorview">
                      <img
                        className="w-100"
                        src={`http://63.250.33.174/${instructor.photo}`}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    {/* <p className="blogtype">{instructor.bio}</p> */}
                    <h4 className="title">
                      <a
                        href="/instructorview"
                        onClick={async (event) => {
                          dispatch(getSelectedInstructorId(instructor));
                        }}
                      >
                        {instructor.name}
                      </a>
                    </h4>
                    <div className="blog-btn">
                      <a
                        className="rn-btn text-white"
                        href="/instructorview"
                        onClick={async (event) => {
                          dispatch(getSelectedInstructorId(instructor));
                        }}
                      >
                        Read More
                      </a>
                      {dispatch(getSelectedInstructorId(instructor))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Student Feedback */}
      {/* <div className="col-lg-12 ptb--100 bg_color--1">
        <Testimonial />
      </div> */}
      {/* End Student Feedback */}

      {/* Start Team Area  */}
      {/* <div className="rn-team-area ptb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                <h3 className="title">Our Team</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-self-center">
            <Team column="col-lg-3 col-md-6 col-sm-6 col-12" />
          </div>
        </div>
      </div> */}
      {/* End Team Area  */}

      {/* Start Faq Area */}
      <div className="pv-feaq-area  ptb--100 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-title text-left pb--30">
                <h3 style={{ color: "#b12222" }}>Do you have any Question</h3>
              </div>
            </div>
          </div>
          <div className="row" style={{ color: "#fff" }}>
            <div className="col-lg-6 offset-lg-2">
              <div className="faq-area">
                <Accordion className="accodion-style--1" preExpanded={"0"}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        What is MethodMelody?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody is the first streaming platform of
                        Bangladesh that gives you the opportunity to learn your
                        desired musical instrument.Whether you want to learn
                        singing, playing instrument or music production,
                        MethodMelody is your one stop solution to get into
                        music."
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        What is included in a MethodMelody course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody provides you in depth understanding of
                        music, note and instrument. Every course has five levels
                        of lesson. Our easy road map will show you how you can
                        be better in music. If you are not looking for road map
                        and you want to learn specific course MethodMelody has
                        solution for you too. Select the course you want to
                        learn and pay for the course you want to learn.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        How Subscription work in MethodMelody?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div>
                        <p>
                          MethodMelody gives you access to your lessons for
                          30day for a course. The courses are designed
                          accordingly to make you a better singer/player.
                          Whether you are a beginner or a master there is always
                          a room for learning something new.
                        </p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        Where can I learn?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        With MethodMelody you can absolutely learn your desired
                        lesson in anytime and anywhere including your
                        smartphone, personal computer, TV or any gadget that has
                        internet in it.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        Which course is perfect for me?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody offers hundreds of video lesson across
                        variety of instruments, singing and even music
                        production. The courses are designed to be accessible
                        for people with little to no experience and master level
                        student. Please watch some trailer videos and checkout
                        our catalog. Even after you are still confused you can
                        always{" "}
                        <a
                          style={{ color: "#b12222" }}
                          href="https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0"
                        >
                          <strong>contact</strong>
                        </a>{" "}
                        us.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        What is the price for a course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody designed their course considering the socio
                        economic states of Bangladesh. Prices may vary from
                        course to course. Whatever the price is, it is worth it.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        What are the payment methods?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody allows you to pay in most easy way. You can
                        choose your payment methods. You can always pay with
                        your visa card, master card, debit card, credit card,
                        bKash, rocket, UCash, bank payment (For bank payment,
                        please send us a copy of deposit slip so we can activate
                        your course it may require some time to activate your
                        account that is up to not more than 48hours) even you
                        can physically come and pay for the course you want to
                        purchase.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        How does the free trial works?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        MethodMelody offers you a 72 hours of free trail of
                        selected course after you sign up/in. The course that is
                        open during 72 hours will only be open for 96 hours.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ color: "#fff" }}>
                        Who is eligible for free trial?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can sign up for a free trail if you are new to
                        MethodMelody selected-access-pass. If you have
                        previously sign up for free trail, or have experienced
                        the selected-access-pass, then you are not eligible. For
                        more information, check out our{" "}
                        <a
                          className="theme-gradient"
                          href="https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0"
                        >
                          <strong>offered terms</strong>
                        </a>{" "}
                        .
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Faq Area */}

      {/* Start Contact Form Area */}
      <div
        className="portfolio-area pb--120  bg_color--6"
        style={{ paddingTop: "10ch" }}
      >
        <ContactOne />
      </div>
      {/* End Contact Form Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </div>
  );
}
