import React, { useState } from "react";
import Layout from "./shared/Layout.js/Layout";
import Spinner from "./shared/Spinner";
import { useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";

function Contact() {
  const { error, loading } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [donationType, setDonationType] = useState("blood");

  const toggleModal = () => setShow((prev) => !prev);

  return (
    <Layout>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h5
            className="ms-4 text-primary"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-plus py-4"></i> Add Inventory
          </h5>

          <Modal
            show={show}
            onHide={toggleModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Donation Inventory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {/* Donation Type Selection */}
                <Form.Group controlId="donationType">
                  <Form.Label>Donation Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={donationType}
                    onChange={(e) => setDonationType(e.target.value)}
                  >
                    <option value="blood">Blood</option>
                    <option value="organ">Organ</option>
                  </Form.Control>
                </Form.Group>

                {/* Blood Donation Fields */}
                {donationType === "blood" && (
                  <Form.Group controlId="bloodType" className="mt-3">
                    <Form.Label>Blood Type</Form.Label>
                    <Form.Control as="select">
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </Form.Control>
                  </Form.Group>
                )}

                {/* Organ Donation Fields */}
                {donationType === "organ" && (
                  <Form.Group controlId="organType" className="mt-3">
                    <Form.Label>Select Organ</Form.Label>
                    <Form.Control as="select">
                      {/* Deceased Donation Section */}
                      <optgroup label="Organs That Can Be Donated After Death">
                        <option>Heart</option>
                        <option>Lungs</option>
                        <option>Liver</option>
                        <option>Kidneys</option>
                        <option>Pancreas</option>
                        <option>Intestines</option>
                      </optgroup>

                      {/* Living Donation Section */}
                      <optgroup label="Organs That Can Be Donated While Alive">
                        <option>One Kidney</option>
                        <option>Part of the Liver</option>
                        <option>One Lung or a Lobe of a Lung</option>
                        <option>Part of the Pancreas</option>
                        <option>Part of the Intestine</option>
                      </optgroup>
                    </Form.Control>
                  </Form.Group>
                )}

                {/* Quantity Input */}
                <Form.Group controlId="quantity" className="mt-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={
                      donationType === "blood"
                        ? "Enter quantity (in pints)"
                        : "Enter number of organs"
                    }
                    min="1"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Close
              </Button>
              <Button variant="primary">Submit</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Layout>
  );
}

export default Contact;
