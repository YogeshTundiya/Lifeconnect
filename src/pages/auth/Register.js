import React from "react";
import "../css/Login.css";
import Forml from "../../component/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../component/shared/Spinner";
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {/* insted of toast.error we can use alert */}
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Register;
