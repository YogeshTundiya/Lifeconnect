import React, { useState } from "react";
import InputType from "./InputType";
import Form from "react-bootstrap/Form";

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
  return (
    <>
      <Form>
        <h1 style={{ textAlign: "center" }}> {formTitle} </h1> <hr />
        {/* switch statment */}
        {(() => {
          // eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    placeholder={"Enter email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forEmail"}
                    inputType={"password"}
                    placeholder={"Enter password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        <InputType
          labelText={"Name"}
          labelFor={"forName"}
          inputType={"text"}
          placeholder={"Enter Name"}
          value={names}
          onChange={(e) => setNames(e.target.value)}
        />
        <InputType
          labelText={"Organization Name"}
          labelFor={"forOrganizationName"}
          inputType={"text"}
          placeholder={"Name of organization"}
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <InputType
          labelText={"Hospital Name"}
          labelFor={"forHospitalName"}
          inputType={"text"}
          placeholder={"Name of hospital"}
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <InputType
          labelText={"Website"}
          labelFor={"forWebsite"}
          inputType={"text"}
          placeholder={"Name a WebAddress"}
          value={website}
          onChange={(e) => setwebsite(e.target.value)}
        />
        <InputType
          labelText={"Address"}
          labelFor={"forAddress"}
          inputType={"text"}
          placeholder={"Enter Address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <InputType
          labelText={"Phone"}
          labelFor={"forPhone"}
          inputType={"text"}
          placeholder={"Enter Phone number"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {" "}
            {submitBtn}{" "}
          </button>
        </div>
      </Form>
    </>
  );
};

export default Forml;
