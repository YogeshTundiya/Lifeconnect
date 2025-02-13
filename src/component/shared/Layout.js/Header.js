import React from "react";
import "../../css/Header.css";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout succesfully🎉");
    navigate("/login");
  };
  return (
    <>
      <div className="navbar">
        <div className="container-fluid">
          {/* logo or company name  */}
          <div className="navbar-brand"></div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item  mx-2">
              <p className="nav-link">
                <BiUserCircle />
                Welcome{" "}
                <span>
                  {user?.names || user?.organizationName || user?.hospitalName}
                </span>{" "}
                &nbsp;
                <Badge className="badge dg-secondary" bg="secondary">
                  {user?.role}
                </Badge>
              </p>
            </li>
            <li className="nav-item mx-1">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
