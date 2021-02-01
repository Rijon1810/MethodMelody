import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiMusic } from "react-icons/fi";

import { Avatar } from "@material-ui/core";

const ServiceList = [
  {
    icon: <FiMusic />,
    title: "Guitar",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMusic />,
    title: "Bass Guitar",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMusic />,
    title: "Percussion",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMusic />,
    title: "Piano & Keyboard",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMusic />,
    title: "Sound Engineering",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "Course Categories",
      description = "Our courses are primarily divided into five categories.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h3 className="title">{title}</h3>
              <p className="theme-gradient">{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/service">
                  <span className="text">View Details</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <a href="/service-details">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
