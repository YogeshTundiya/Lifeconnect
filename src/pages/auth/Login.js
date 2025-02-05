import React from "react";
import "../css/Login.css";
import InputType from "../../component/shared/Form/InputType";
import Form from "../../component/shared/Form/Form";
import Forml from "../../component/shared/Form/Form";
const Login = () => {
  return (
    <>
      <div className="l_row">
        <div className="col-md-8 form-banner"></div>
        <div className="login">
          <Forml
            formTitle={"Login Page"}
            submitBtn={"Login"}
            formType={"login"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
