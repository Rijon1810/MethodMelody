import {
  Backdrop,
  Fade,
  IconButton,
  makeStyles,
  Modal,
} from "@material-ui/core";

import { Cancel } from "@material-ui/icons";
import React, { useState ,useEffect} from "react";
import { FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector , } from "react-redux";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import Select from "react-select";
import Slider from "react-slick";
import { getSelectedCourseCategory } from "../../../actions/getSelectedIdAction";
import { portfolioSlick2 } from "../../page-demo/script";
import BlogList from "../elements/blog/BlogList";
import Pagination from "../elements/common/Pagination";
import Footer from "../Footer.jsx";
import Header from "../Header.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#191919",
    maxHeight: 500,
    overflow: "auto",
  },
  Icon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  ListItemText: {
    color: "#fff",
  },
  ListItem: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#f9004d",
      color: "white",
    },
  },
  Avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: "#f9004d",
    marginRight: theme.spacing(2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#191c21",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    width: "80%",
  },
  button: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

export default function Blog() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedInstructor, setSelectedInstructor] = React.useState("");
  const [selectedCourseType, setSelectedCourseType] = React.useState("");
  const upcomingList = useSelector((state) => state.getCourse.upcomingList);
  const classes = useStyles();
  const catagory_data = useSelector((state) => state.getCourse.catagoryList);
  const instructorList = useSelector(
    (state) => state.getInstructor.instructorList
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Search
  const allCourseList = useSelector((state) => state.getCourse.courseList);
  console.log("All Courses: ", allCourseList);
  const [courseList, setCourseList] = useState(allCourseList);
  const filterCourses = () => {
    let filteredCourse = allCourseList;

    if (selectedCategory !== "All" && selectedCategory !== "") {
      filteredCourse = filteredCourse.filter(
        (course) =>
          course.catagory.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (selectedInstructor !== "All" && selectedInstructor !== "") {
      filteredCourse = filteredCourse.filter(
        (course) =>
          course.instructor.toLowerCase() === selectedInstructor.toLowerCase()
      );
    }
    if (selectedCourseType !== "All" && selectedCourseType !== "") {
      filteredCourse = filteredCourse.filter(
        (course) =>
          course.courseType.toLowerCase() === selectedCourseType.toLowerCase()
      );
    }
   // console.log(filteredCourse);
    setCourseList(filteredCourse);
  };

  var categoryOptions = [];
  catagory_data.map((catagory) => {
    var c = { value: catagory.split(" ")[0], label: catagory };
    categoryOptions.push(c);
  });
  categoryOptions.unshift({ value: "All", label: "All" });

  var instructorOptions = [];
  instructorList.map((instructor) => {
    var i = { value: instructor._id, label: instructor.name };
    instructorOptions.push(i);
  });
  instructorOptions.unshift({ value: "All", label: "All" });
  var typeOptions = [];
  typeOptions.push({ value: "beginner", label: "Beginner" });
  typeOptions.push({ value: "intermediate", label: "Intermediate" });
  typeOptions.push({ value: "advance", label: "Advance" });
  typeOptions.unshift({ value: "All", label: "All" });

  // handle onChange event of the dropdown
  const handleCategoryChange = (e) => {
   // console.log("catagory change ", e.value);
    if (e.value !== "") {
      setSelectedCategory(e.value);
    } else {
      setSelectedCategory("");
    }
  };
  useEffect(() => {
    filterCourses();
  }, [selectedCategory, selectedInstructor, selectedCourseType]);

  const handleInstructorChange = (e) => {
   // console.log("instructor change ", e.value);
    if (e.value !== "") {
      setSelectedInstructor(e.value);
    } else {
      setSelectedInstructor("");
    }
  };
  const handleOptionChange = (e) => {
    if (e.value !== "") {
      setSelectedCourseType(e.value);
    } else {
      setSelectedCourseType("");
    }
  };

/*   const filterCourse = (e) => {
    e.preventDefault();

    dispatch(
      getSelectedCourseCategory(
        selectedCategory,
        selectedInstructor,
        selectedCourseType
      )
    );
    handleClose();
  }; */

  //console.log(`catagory_data is a = ${categoryOptions}`);

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      // console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#b12222" : "#ffffff",
        color: isFocused ? "#ffffff" : "#000000",
      };
    },
  };
  return (
    <div className="active-dark">
      <Header from="allcourses" />
      {/* Start Breadcrump Area */}
      <Breadcrumb from="allcourses" />
      {/* End Breadcrump Area */}

      {/* Start Filter Area */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="container">
              <div className="d-flex flex-row-reverse">
                {" "}
                <IconButton onClick={handleClose}>
                  <Cancel fontsize="small" className="text-white" />
                </IconButton>
              </div>
{/*               <div className="d-flex mb--30">
                <Link className="rn-btn" href="#" onClick={filterCourse}>
                  <span>Filter</span>
                </Link>
              </div> */}
              {/* <div className="d-flex flex-row">
                                <h3 className="fontWeight500 text-white">
                                    Filter and Search Course
                                </h3>
                            </div> */}
              <div className="row">
                <div className="col-4">
                  <h3 className="theme-gradient">Instrument</h3>
                  <Select
                    className="basic-single"
                    classNamePrefix="select category"
                    // defaultValue={ }
                    isClearable={true}
                    isSearchable={true}
                    name="color"
                    options={categoryOptions}
                    styles={colourStyles}
                    onChange={handleCategoryChange}
                  />
                </div>
                <div className="col-4">
                  <h3 className="theme-gradient">Artist</h3>
                  <Select
                    className="basic-single"
                    classNamePrefix="select category"
                    // defaultValue={ }
                    isClearable={true}
                    isSearchable={true}
                    name="color"
                    options={instructorOptions}
                    onChange={handleInstructorChange}
                    styles={colourStyles}
                  />
                </div>

                <div className="col-4">
                  <h3 className="theme-gradient">Level</h3>
                  <Select
                    className="basic-single"
                    classNamePrefix="select category"
                    // defaultValue={ }
                    isClearable={true}
                    isSearchable={true}
                    name="color"
                    options={typeOptions}
                    onChange={handleOptionChange}
                    styles={colourStyles}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>

      {/* End Filter Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--60 bg_color--1">
        <div className="container">
          <div className="d-flex flex-row-reverse mb--50">
            <Link className="rn-btn" href="#" onClick={handleOpen}>
              <span>Filter Course</span>
            </Link>
          </div>
          {/* <Button className="rn-button-style--2" onClick={handleOpen}>Open Modal</Button> */}
          <BlogList
            courseList={courseList}
          />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination />
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <div className="rn-blog-area ptb--100  mb-dec--30">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="section-title text-left">
                <h3>Upcoming Courses</h3>
                <p className="theme-gradient">
                  Our Upcoming {upcomingList.length} courses for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End course Area */}
      <div className="rn-blog-area ptb--100  mb-dec--30 bg_color--6">
        <div className="container">
          <div className="portfolio-area ptb--120 ">
            <div className="portfolio-sacousel-inner mb--55">
              <div portfolio-slick-activation mt--70 mt_sm--40>
                <Slider {...portfolioSlick2}>
                  {upcomingList.map((course) => (
                    <div className="portfolio" key={course._id}>
                      <div className="thumbnail-inner">
                        <div className="thumbnail">
                          <Link to="/courseview">
                            <img
                              src={`https://localhost:8080/${course.photo}`}
                              alt="Blog Images"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="content">
                        {/* <p className="blogtype">{instructor.bio}</p> */}
                        <h4 className="title">
                          <Link to="/courseview">{course.name}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
