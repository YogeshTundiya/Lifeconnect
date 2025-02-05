import React from "react";
import "../css/Login.css";
import Forml from "../../component/shared/Form/Form";
const Register = () => {
  return (
    <>
      {" "}
      <div className="l_row">
        <div className="col-md-8 form-banner"></div>
        <div className="login">
          <Forml
            formTitle={"Register Page"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
