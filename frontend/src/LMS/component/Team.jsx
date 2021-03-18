import React, { Component } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link} from 'react-router-dom'
let TeamContent = [
  {
    images: "04",
    title: "Arko Newaz Mahmood",
    designation: "Founder, CEO",
    socialNetwork: [
      {
        icon: <FaFacebookF />,
        url: "#",
      },
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
];

class Team extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {TeamContent.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className="team">
              <div className="thumbnail">
                <img
                  src={`/assets/images/team/team-${value.images}.jpg`}
                  alt="Blog Images"
                />
              </div>
              <div className="content">
                <h4 className="title">{value.title}</h4>
                <p className="designation">{value.designation}</p>
              </div>
              <ul className="social-icon">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <Link to={`${social.url}`}>{social.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Team;
