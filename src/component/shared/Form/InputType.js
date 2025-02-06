import React from "react";
import Form from "react-bootstrap/Form";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <>
      <Form>
        <Form.Group
          className="mb-1"
          htmlFor={labelFor}
          controlId="formBasicEmail"
        >
          <Form.Label> {labelText} </Form.Label>
          <Form.Control
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default InputType;
