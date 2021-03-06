import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiMusic } from "react-icons/fi";

import { Avatar } from "@material-ui/core";

export default function ServiceTwo() {
  const ServiceList = [
    {
      icon: `/assets/images/icons/guitar.png`,
      title: "Guitar",
      description:
        "Play with excellence and give a new flavour to each piece!",
    },
    {
      icon: `/assets/images/icons/bass.png`,
      title: "Bass Guitar",
      description:
        "The foundation of rhythm and then carried the entire band in harmony!",
    },
    {
      icon: `/assets/images/icons/drum.png`,
      title: "Percussion",
      description:
        "There is no right or wrong beat, just an enhancement to the musical experience.",
    },
    {
      icon: `/assets/images/icons/keyboard.png`,
      title: "Piano & Keyboard",
      description:
        "The keyboardist plays a vital role in keeping the harmony of the song set. It works like a chaperone, guiding all the members through the song!",
    },
    {
      icon: <FiMusic />,
      title: "Sound Engineering",
      description:
        "Sound engineer works in order to produce the best output of the instruments playing so the end result has the best quality possible!",
    },
  ];
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
          <React.Fragment>
            <div className="row">
              {ServiceList.map((val, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                  <div className="service service__style--1">
                    <div className="icon">
                      <img src={val.icon} alt="Digital Agency" />
                    </div>
                    <div className="content">
                      <h4 className="title">{val.title}</h4>
                      <p className="title text-white">{val.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
}

