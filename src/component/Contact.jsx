import React from "react";
import Layout from "./shared/Layout.js/Layout";
import Spinner from "./shared/Spinner";
import { useSelector } from "react-redux";

function Contact() {
  const { error, loading } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <h5 className="ms-4">
          <i className="fa-solid fa-plus py-4"></i>
          Add Inventory
        </h5>
      )}
    </Layout>
  );
}

export default Contact;
