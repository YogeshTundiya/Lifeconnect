import React from "react";
import "../css/Login.css";
import Forml from "../../component/shared/Form/Form";
import Spinner from "../../component/shared/Spinner";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Login = () => {
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
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
