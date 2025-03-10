import React, { useState } from "react";
import InputType from "./InputType";
import Form from "react-bootstrap/Form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Forml = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [names, setNames] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setwebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              names,
              role,
              email,
              password,
              organizationName,
              hospitalName,
              address,
              phone,
              website
            );
        }}
      >
        <h1 style={{ textAlign: "center" }}> {formTitle} </h1> <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadio"
              value={"donor"}
              onChange={(e) => setRole(e.target.value)}
              // defaultChecked
            />
            <label htmlFor="donorRadio" className="form-check-label">
              Donor
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donorRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donorRadio" className="form-check-label">
              Organization
            </label>
          </div>
        </div>
        {/* switch statment */}
        {(() => {
          // eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email :"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    placeholder={"Enter email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div style={{ position: "relative" }}>
                    <InputType
                      labelText="Password :"
                      labelFor="forPassword"
                      inputType={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        marginTop: "15px",
                      }}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </span>
                  </div>
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {/* {role === "admin" ? (
                    <InputType
                      labelText={"Name :"}
                      labelFor={"forName"}
                      inputType={"text"}
                      placeholder={"Enter Name"}
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                    />
                  ) : role === "donor" ? (
                    <InputType
                      labelText={"Name :"}
                      labelFor={"forName"}
                      inputType={"text"}
                      placeholder={"Enter Name"}
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                    />
                  ) : null} */}
                  {(role === "admin" || role === "donor") && (
                    <InputType
                      required
                      labelText={"Name :"}
                      labelFor={"forName"}
                      inputType={"text"}
                      placeholder={"Enter Name"}
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                    />
                  )}
                  {role === "organization" && (
                    <InputType
                      labelText={"Organization Name :"}
                      labelFor={"forOrganizationName"}
                      inputType={"text"}
                      placeholder={"Name of organization"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name :"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      placeholder={"Name of hospital"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelText={"Email :"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    placeholder={"Enter email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div style={{ position: "relative" }}>
                    <InputType
                      labelText="Password :"
                      labelFor="forPassword"
                      inputType={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        marginTop: "15px",
                      }}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </span>
                  </div>
                  <InputType
                    labelText={"Website :"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    placeholder={"Name a WebAddress"}
                    value={website}
                    onChange={(e) => setwebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address :"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    placeholder={"Enter Address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone :"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    placeholder={"Enter Phone number"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        <div className="f_an">
          {formType === "login" ? (
            <p>
              Not register yet? register
              <Link to="/register" style={{ textDecoration: "none" }}>
                {" "}
                Register
              </Link>
            </p>
          ) : (
            <p>
              Already a user then
              <Link to="/login">Login</Link>
            </p>
          )}
          <div className="L_R_btn">
            <button className="btn btn-grad" type="submit">
              {" "}
              {submitBtn}{" "}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Forml;
