import { Box } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { cupon } from "../../actions/cuponAction.js";
import AdminDrawer from "../component/elements/AdminDrawer.jsx";
import Breadcrumb from "./elements/common/Breadcrumb.jsx";
//custom components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { withAlert } from "react-alert";

import PageHelmet from "./Helmet.jsx";

class Cupon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuponCode: "",
      discount: "",
      useLimit: "",
      expireDate: "",
    };
  }
  render() {
    const alert = this.props.alert;
    return (
      <div>
        <PageHelmet pageTitle="Create a coupon" />

        <Header from="coupon" />
        <Breadcrumb from="coupon" />

        <Box display="flex" justifyContent="center" alignItems="center">
          <div className="contact-form--1 col-xl-6 col-lg-6 col-md-10 col-sm-10 ptb--50">
            <div className="row d-flex align-items-center">
              <div className="col-8">
                <h3 className="title ">Create a new Coupon.</h3>

                <p>Please enter all the information for create a Coupon</p>
              </div>
            </div>

            <form>
              <label htmlFor="item01">
                <input
                  type="text"
                  name="cuponCode"
                  id="item01"
                  value={this.state.cuponCode}
                  onChange={(e) => {
                    this.setState({ cuponCode: e.target.value });
                  }}
                  placeholder="Enter a coupon code..."
                />
              </label>
              <label htmlFor="item02">
                <input
                  type="text"
                  pattern="[0-9]*"
                  name="discount"
                  id="item02"
                  value={this.state.discount}
                  onChange={(e) => {
                    this.setState({ discount: e.target.value });
                  }}
                  placeholder="Enter Discount percentage..."
                />
              </label>
              <label htmlFor="item03">
                <input
                  type="date"
                  name="expirdeDate"
                  id="item03"
                  /*      max={new Date().toISOString().split("T")[0]} */
                  value={this.state.expireDate}
                  onChange={(e) => {
                    this.setState({ expireDate: e.target.value });
                  }}
                  placeholder="Enter deadline of this coupon.."
                />
              </label>
              <label htmlFor="item04">
                <input
                  type="text "
                  pattern="[0-9]*"
                  name="count"
                  id="item04"
                  value={this.state.useLimit}
                  onChange={(e) => {
                    this.setState({ useLimit: e.target.value });
                  }}
                  placeholder="Enter the limit of use!"
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
                  /*                   var fd = new FormData();
                  fd.append("cuponCode", this.state.cuponCode);
                  fd.append("discount", this.state.discount);
                  fd.append("useLimit", this.state.useLimit);
                  fd.append("expireDate", this.state.expireDate); */
                  if (
                    this.state.cuponCode === "" ||
                    this.state.discount === "" ||
                    this.state.useLimit === "" ||
                    this.state.expireDate === ""
                  ) {
                    alert.show("Any of the field is not fillup!!");
                  } else {
                    await this.props.cupon(
                      this.state.cuponCode,
                      this.state.discount,
                      this.state.useLimit,
                      this.state.expireDate
                    );
                    this.props.history.push("/cupon");
                    alert.show("Coupon Created Successfully");
                    this.setState({
                      cuponCode: "",
                      discount: "",
                      useLimit: "",
                      expireDate: "",
                    });
                  }
                }}
              >
                Create
              </button>
            </form>
          </div>
        </Box>
        <AdminDrawer />

        {/*  <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  create_user_status: state.isLogged.payload,
});

export default connect(mapStateToProps, { cupon })(withAlert()(Cupon));
