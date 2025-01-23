import React from "react";
import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <section>
        <div className="head">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Blood and Organ Donation Network</p>
          <div>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
        <div className="logo_time">
          <p className="logo">LifeConnect</p>
          <div className="time">
            <p>Available Daily from 7am to 10pm</p>
            <button>contact us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
