import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <>
      <section>
        <div className="head">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Blood and Organ Donation Network</p>
        </div>
        <div className="so_icon">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffff" }} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffff" }} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffff" }} />
          </a>
        </div>
        <div className="logo_time">
          <p className="logo">LifeConnect</p>
          <div className="time">
            <p>Available Daily from 7am to 10pm</p>
            <button className="btn" as={/} link={/}>
              contact us
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="H_nav">
          <ul>
            <li className="nav_item">
              <Link to={"/"}>Home</Link>
              <Link to={"/contact"}>Get Involved</Link>
              <Link to={"/"}>About Us</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
