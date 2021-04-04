import { ArrowDropDown, FilterList } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import BlogList from "./elements/blog/BlogList";
import Pagination from "./elements/common/Pagination.jsx";
import Footer from "./Footer.jsx";
//custom components
import Header from "./HeaderFive.jsx";
import PageHelmet from "./Helmet.jsx";



export default function CourseList(props) {
  //hooks
  const [instructorList, setInstructorList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [featuredCourseList, setFeaturedCourseList] = useState([]);
  const [currentCourseList, setCurrentCourseList] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(8);
  const [popularCourseList, setPopularCourseList] = useState([]);

  // filters
  const [selectedCategory, selectCategory] = useState("");
  const [selectedLevel, selectLevel] = useState("");
  const [selectedModule, selectModule] = useState("");
  const [selectedInstructor, selectInstructor] = useState("");

  const getAllCourse = useSelector((state) => state.getCourse.courseList);

  const getFeaturedCourse = useSelector(
    (state) => state.getCourse.featuredCourseList
  );
  // life-cycle methods

  useEffect(() => {
    getAllCourses();
    getFeaturedCourses();
  }, [getAllCourses, getFeaturedCourses]);

  // custom functions

  // get instructor list
  // function getAllInstructors() {
  //   axios
  //     .get("instructor/", {
  //       headers: {
  //         "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
  //       },
  //     })
  //     .then((res) => {
  //       const instructors = res.data;
  //       setInstructorList(instructors);
  //       console.log(
  //         "all instructor list size fetched in CourseList: " +
  //           instructors.length
  //       );
  //     });
  // }

  // get courses list
  function getAllCourses() {
    const courses = getAllCourse;
    setCourseList(courses);
    getPopularCourses(getAllCourse);
    console.log(
      "all course list size fetched in CourseList: " + getAllCourse
    );
  }

  // get featured course list
  function getFeaturedCourses() {
    setFeaturedCourseList(getFeaturedCourse);
    console.log("course list fetched in home: " + getFeaturedCourse);
  }

  // get best selling course list
  function getPopularCourses(list) {
    //function to sort popular course list
    function compare(a, b) {
      // a should come before b in the sorted order
      if (a.sold < b.sold) {
        return 1;
        // a should come after b in the sorted order
      } else if (a.sold > b.sold) {
        return -1;
        // a and b are the same
      } else {
        return 0;
      }
    }
    var temp = list;
    temp.sort(compare);

    var finalList = [];
    for (let i = 0; i < temp.length; i++) {
      finalList.push(temp[i]);
      console.log(finalList[i].sold);
    }

    setPopularCourseList(finalList);
    console.log("top seller course = " + temp[0].title);
  }

  // get filtered courses

  //get current courses
  const indexOfLastCourse = currentCourseList * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseList.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  //change page
  const paginate = (courseNumbers) => setCurrentCourseList(courseNumbers);
  let title = "All Courses",
    description = `${courseList.length} in-depth courses to subscribe`;

  //constants
  const categoryList = [
    "Guitar",
    "Acoustic Fingerstyle Guitar",
    "Drums",
    "Piano/Keyboard",
    "Sound Engineering",
  ];

  const levelList = ["Basic", "Intermediate", "Advance", "Pro", "Mastro"];

  const moduleList = [
    "Module 1",
    "Module 2",
    "Module 3",
    "Module 4",
    "Module 5",
  ];

  //custom styles
  const mystyle = {
    cursor: "pointer",
  };

  return (
    <div className="active-dark">
      <PageHelmet pageTitle="All Courses" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      <div className="container mb--50 mt--50 row-sm-9">
        <div className="header-left d-flex align-items-center">
          <h4>
            Filter By <FilterList />
          </h4>
        </div>
        <div className="header-left d-flex align-items-center">
          <span class="border border-light rounded-lg pl--50 pr--50">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown" style={mystyle}>
                  <Link to="#">
                    Courses <ArrowDropDown />
                  </Link>
                  <ul className="submenu">
                    {categoryList.map((category) => (
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            selectCategory(category);
                            console.log(`category selected: ${category}`);
                          }}
                        >
                          {" "}
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has-droupdown" style={mystyle}>
                  <Link to="#">
                    Level
                    <ArrowDropDown />
                  </Link>
                  <ul className="submenu" style={mystyle}>
                    {levelList.map((level) => (
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            selectLevel(level);
                            console.log(`level selected: ${level}`);
                          }}
                        >
                          {level}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has-droupdown" style={mystyle}>
                  <Link to="#">
                    Module
                    <ArrowDropDown />
                  </Link>
                  <ul className="submenu" style={mystyle}>
                    {moduleList.map((module) => (
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            selectModule(module);
                            console.log(`module selected: ${module}`);
                          }}
                        >
                          {module}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="has-droupdown" style={mystyle}>
                  <Link to="#">
                    Instructor
                    <ArrowDropDown />
                  </Link>
                  <ul className="submenu" style={mystyle}>
                    {instructorList.map((instructor) => (
                      <li>
                        <Link
                          to="#"
                          onClick={() => {
                            selectInstructor(instructor._id);
                            console.log(
                              `instructor seleected: ${instructor._id}`
                            );
                          }}
                        >
                          {instructor.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>

      {/* Start All Course Area */}
      <div className="container pt--50">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>{title}</h3>
              <p className="theme-gradient">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-blog-area pt--50 bg_color--5">
        <div className="container">
          <BlogList courseList={currentCourses} />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination
                coursePerPage={coursesPerPage}
                totalCourses={courseList.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End All Course Area */}

      {/* Start Featured Course Area */}
      <div className="container pt--100">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>Featured Courses</h3>
              <p className="theme-gradient">
                You can also choose to start with one of our featured courses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-area pb--140 bg_color--5">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slick-space-gutter--15 slickdot--10">
                  <Slider {...slickDot}>
                    {featuredCourseList.map((featuredCourse) => (
                      <div className="portfolio" key={featuredCourse._id}>
                        <div className="thumbnail-inner">
                          <img
                            src={
                              "http://63.250.33.174/" + featuredCourse.thumbnail
                            }
                            width="100%"
                          ></img>
                          {/* <div className={`bg-blr-image ${value.image}`}></div> */}
                        </div>
                        <div className="content">
                          <div className="inner">
                            <p>{featuredCourse.catagory}</p>
                            <h4>
                              <Link to="/portfolio-details">
                                {featuredCourse.title}
                              </Link>
                            </h4>
                            <div className="portfolio-button">
                              <Link className="rn-btn" to="/portfolio-details">
                                View Course
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Featured Course Area */}

      {/* Start Best Seller Course Area */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3>Popular Courses</h3>
              <p className="theme-gradient">
                Our most subscribed courses till date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-area pb--140 bg_color--5">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slick-space-gutter--15 slickdot--10">
                  <Slider {...slickDot}>
                    {popularCourseList.map((popularCourse) => (
                      <div className="portfolio" key={popularCourse._id}>
                        <div className="thumbnail-inner">
                          <img
                            src={
                              "http://162.0.231.67/" + popularCourse.thumbnail
                            }
                            width="100%"
                          ></img>
                          {/* <div className={`bg-blr-image ${value.image}`}></div> */}
                        </div>
                        <div className="content">
                          <div className="inner">
                            <p>{popularCourse.catagory}</p>
                            <h4>
                              <Link to="/portfolio-details">
                                {popularCourse.title}
                              </Link>
                            </h4>
                            <div className="portfolio-button">
                              <Link className="rn-btn" to="/portfolio-details">
                                View Course
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {End Best Seller Course Area} */}

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
