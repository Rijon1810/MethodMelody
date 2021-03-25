import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import  { Link} from 'react-router-dom'
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Form from '../ContactFilter'
import Footer from "../Footer.jsx";
import { Cancel } from "@material-ui/icons";
import { Modal, Button, Backdrop, makeStyles, Fade, IconButton } from "@material-ui/core";
import Select from 'react-select';
import { connect } from "react-redux";
import { getCourse } from "../../../actions/courseAction";
import { getSelectedCourseCategory } from "../../../actions/getSelectedIdAction";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { slideSlick } from "../../page-demo/script";
//constants
const SlideList = [
    {
      textPosition: "text-center",
      bgImage: "bg_image--21",
      category: "",
      title: "Guitar",
      description:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
      buttonText: "Upcoming Courses",
      buttonLink: "/allcourses",
    },
    {
      textPosition: "text-center",
      bgImage: "bg_image--22",
      category: "",
      title: "Guitar",
      description:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
      buttonText: "Bass",
      buttonLink: "/allcourses",
    },
    {
      textPosition: "text-center",
      bgImage: "bg_image--23",
      category: "",
      title: "Guitar",
      description:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
      buttonText: "Upcoming Courses",
      buttonLink: "/allcourses",
    },
    {
      textPosition: "text-center",
      bgImage: "bg_image--24",
      category: "",
      title: "Piano",
      description:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
      buttonText: "Upcoming Courses",
      buttonLink: "/allcourses",
    },
    {
      textPosition: "text-center",
      bgImage: "bg_image--26",
      category: "",
      title: "Persussion",
      description:
        "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
      buttonText: "Upcoming Courses",
      buttonLink: "/allcourses",
    },
  ];
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

    const classes = useStyles();
    const catagory_data = useSelector((state) => state.getCourse.catagoryList);
    const instructorList = useSelector((state) => state.getInstructor.instructorList);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const colourOptions = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" }
    ];

    var categoryOptions = [];
    catagory_data.map((catagory) => {
        var c = { value: catagory.split(" ")[0], label: catagory }
        categoryOptions.push(c)
    })
    categoryOptions.unshift({ value: "", label: "All" });

    var instructorOptions = [];
    instructorList.map((instructor) => {
        var i = { value: instructor._id, label: instructor.name }
        instructorOptions.push(i)
    })
    instructorOptions.unshift({value: "", label:"All"})

    // handle onChange event of the dropdown
    const handleCategoryChange = e => {
        setSelectedCategory(e.value);
        console.log(`selected select category = ${e.value}`)
    }

    const handleInstructorChange = e => {
        setSelectedInstructor(e.value);
        console.log(`selected select instructor = ${e.value}`)
    }

    const filterCourse = e => {
        dispatch(
            getSelectedCourseCategory(selectedCategory)
        )
        handleClose();
    }


    console.log(`catagory_data is a = ${categoryOptions}`)

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // const color = chroma(data.color);
            console.log({ data, isDisabled, isFocused, isSelected });
            return {
                ...styles,
                backgroundColor: isFocused ? "#b12222" : "#ffffff",
                color: isFocused ? "#ffffff" : "#000000",
            };
        }
    };
    return (
        <div className="active-dark">
            <Header from="allcourses" />
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
                {
                  <div className="slide-btn">
                    <Link
                      className="rn-button-style--2"
                      style={{
                        backgroundColor: "#b12222",
                        color: "#ffffff",
                        borderBlockStyle: "hidden",
                      }}
                      to="/allcourses"
                    >
                      {value.buttonText}
                    </Link>
                  </div>
                }
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
            {/* Start Breadcrump Area */}
            <Breadcrumb from='All Courses' />
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
                            <div className="d-flex mb--30">
                                <Link className="rn-btn" to="#" onClick={filterCourse}>
                                    <span>Filter</span>
                                </Link>
                            </div>
                            {/* <div className="d-flex flex-row">
                                <h3 className="fontWeight500 text-white">
                                    Filter and Search Course
                                </h3>
                            </div> */}
                            <div className="row">
                                   <Form/>
{/*                                 <div className="col-12">
                                    {console.log(`category = ${catagory_data}`)}
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
                                </div> */}
                                {/* <div className="col-6">
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
                                </div> */}
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
                        <Link className="rn-btn" to="#" onClick={handleOpen}>
                            <span>Filter Course</span>
                        </Link>
                    </div>
                    {/* <Button className="rn-button-style--2" onClick={handleOpen}>Open Modal</Button> */}
                    <BlogList />
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

            <Footer />

        </div>
    )
}


