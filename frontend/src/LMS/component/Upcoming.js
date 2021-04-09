import { Avatar, Box, IconButton } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { upcoming } from "../../actions/upcomingAction";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
import { withAlert } from 'react-alert'
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";

class Upcoming extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      
      rnName: "",
      rnPhoto: "",
      rnPhotoSnap: ""
    };
  }
  render() {
    const alert = this.props.alert;
    return (
      <div>
        <PageHelmet pageTitle="Upcoming Course" />

        <Header from="upcpming" />
        <Breadcrumb from="upcoming" />

        <Box display="flex" justifyContent="center" alignItems="center">
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-10 col-sm-10 ptb--50">
            <div className="row d-flex align-items-center">
              <div className="col-8">
                <h3 className="title ">Create a new Upcoming Course.</h3>

                <p>Please enter all the information for create upcmoing course.</p>
              </div>
              <div className="col-4 d-flex justify-content-end">
                {" "}
                <IconButton>
                  <Avatar
                    style={{ width: "100px", height: "100px" }}
                    variant="rounded"
                    src={this.state.rnPhotoSnap}
                  ></Avatar>
                </IconButton>
              </div>
            </div>

            <form>
              <label htmlFor="item01">
                <input
                  type="text"
                  name="name"
                  id="item01"
                  value={this.state.rnName}
                  onChange={(e) => {
                    this.setState({ rnName: e.target.value });
            
                  }}
                  placeholder="Course Name"
                />
              </label>
              <label htmlFor="item02">
                <input
                  type="file"
                  name="image"
                  id="item02"
                  value={this.state.rnPhotoSnap.name}
                  ref={this.state.rnPhotoSnap.name}
                  onChange={async (e) => {
                    e.preventDefault();
                    let file = await e.target.files[0];
                    this.setState({ rnPhoto: file });

                    if (file) {
                      let reader = new FileReader();
                      reader.onload = (e) => {
                        this.setState({ rnPhotoSnap: e.target.result });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  placeholder="upload picture"
                />
              </label>
              <button
                className="rn-button-style--2 btn-solid"
                type="submit"
                value="submit"
                name="submit"
                id="mc-embedded-subscribe"
                onClick={async (event) => {
                  event.preventDefault();
                  let fd = new FormData();
                  
                  fd.append("name", this.state.rnName);
                  fd.append("photo", this.state.rnPhoto);
                
    

                  await this.props.upcoming(fd);
                  alert.show('Upcoming Course Added!!')
                  this.props.history.push("/admin");
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Box>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  create_user_status: state.isLogged.payload,
});


export default connect(mapStateToProps, { upcoming })(withAlert()(Upcoming));
