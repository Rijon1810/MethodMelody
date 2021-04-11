import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import PageHelmet from "./Helmet.jsx";
import { Link} from 'react-router-dom'

import auth from "../routes/auth";
import axios from "../api/Config";



export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const userLogin = (data)=>{
        // localStorage.setItem("user-data", data.email);
       // console.log(data.email);
        axios
          .post("user/login/", data, {
            headers: {
              "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
              "Content-type": "application/json",
            },
          })
          .then((res) => {
            localStorage.setItem("success", true);
            auth.login(
              res.data.v_token,
              res.data.email,
              res.data.name,
              res.data.id,
              res.data.course
            );
          })
          .catch((res) => {
            // auth.logout();
            localStorage.setItem("success", false);
          });
      }

      return (
        <div className="active-dark">
          <PageHelmet pageTitle="Login" />
          <Header
            headertransparent="header--transparent"
            colorblack="color--black"
            logoname="logo.png"
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <div className="contact-form--1 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="  order-2 order-lg-1">
                <div className="section-title text-left mb--20">
                  <h3 className="title theme-gradient">Login to your account.</h3>
                  <p className="text-white">
                    Please enter your registered email and password for login.
                    <br></br>
                  </p>
                </div>
                <form>
                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={(e) => {
                        setEmail(e.target.value );
                      }}
                      placeholder="Your email"
                    />
                  </label>
  
                  <label htmlFor="item03">
                    <input
                      type="password"
                      name="password"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={(e) => {
                        setPassword( e.target.value );
                      }}
                      placeholder="Your password"
                    />
                  </label>
  
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                    // onClick={(e) => {
                    //   const { rnEmail, rnPassword } = this.state;
                    //   alert(rnEmail)
                    //   this.userLogin({ email: rnEmail, password: rnPassword });
                    // }}
                    onClick={() => userLogin({email,password})}
                  >
                    Submit
                  </button>
  
                  <div className=" text-right blog-btn mt_sm--10 mt_md--10">
                    <Link to="/signup" className="btn-transparent rn-btn-dark">
                      <br />
                      <span>Don't have an account? Signup</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Box>
          <Footer />
        </div>
      );
}