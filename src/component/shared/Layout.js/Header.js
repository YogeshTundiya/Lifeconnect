import React from "react";
import "../../css/Header.css";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <div className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand"></div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item  mx-2">
              <p className="nav-link">
                <BiUserCircle />
                Welcome {user ? user.names : ""}
              </p>
            </li>
            <li className="nav-item mx-1">
              <button className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
