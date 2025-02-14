import React, { useState } from "react";
import Layout from "./shared/Layout.js/Layout";
import Spinner from "./shared/Spinner";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
// import Model from "react-bootstrap/Modal";
// import Model from "./shared/modal/Model";

function Contact() {
  const { error, loading } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h5
            className="ms-4"
            variant="primary"
            onClick={handleShow}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus py-4"></i>
            Add Inventory
          </h5>
          <Modal
            show={show}
            setShow={setShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex">Blood type &nbsp;</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Layout>
  );
}

export default Contact;
