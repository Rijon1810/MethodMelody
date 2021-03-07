import React, { Component } from "react";
import PageHelmet from "../Helmet.jsx";
import Breadcrumb from "./common/Breadcrumb.jsx";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import { Cancel } from "@material-ui/icons";
import { Modal, Button, Backdrop, makeStyles, Fade, IconButton } from "@material-ui/core";
import Select from 'react-select';
import { connect } from "react-redux";
import { getCourse } from "../../../actions/courseAction";
import { useSelector, useDispatch } from "react-redux";

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
        width: "50%",
    },
    button: {
        margin: theme.spacing(2, 0, 0, 0),
    },
}));

export default function Blog() {
    const [open, setOpen] = React.useState(false);
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
        var c = { value: catagory, label: catagory }
        categoryOptions.push(c)
    })

    var instructorOptions = [];
    instructorList.map((instructor) => {
        var i = { value: instructor._id, label: instructor.name }
        instructorOptions.push(i)
    })

    console.log(`catagory_data is a = ${categoryOptions}`)

    const colourStyles = {
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // const color = chroma(data.color);
            console.log({ data, isDisabled, isFocused, isSelected });
            return {
                ...styles,
                backgroundColor: isFocused ? "#999999" : null,
                color: "#333333"
            };
        }
    };
    return (
        <div className="active-dark">
            <Header from="allcourses" />
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
                            <div className="d-flex flex-row">
                                <h3 className="fontWeight500 text-white">
                                    Filter and Search Course
                                </h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
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
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select category"
                                        // defaultValue={ }
                                        isClearable={true}
                                        isSearchable={true}
                                        name="color"
                                        options={instructorOptions}
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
                        <a className="rn-btn" href="#" onClick={handleOpen}>
                            <span>Filter Course</span>
                        </a>
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


