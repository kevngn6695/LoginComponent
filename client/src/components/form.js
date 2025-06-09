import React from "react";

import { FirstLetterUpperCase } from "../utils/ult";

import PropTypes from "prop-types";
import Button from "./button";
import Heading from "./heading";

import "../assets/style/sass/components/form.sass";

function Form({
  className = "",
  title = "Form",
  fields = [],
  onSubmit,
  submitText = "Submit",
  children,
  ...props
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      onSubmit(data);
    }
  };

  return (
    <form className={`form ${className}`} onSubmit={handleSubmit} {...props}>
      {title && (
        <Heading className="form-heading" h1>
          {FirstLetterUpperCase(title)}
        </Heading>
      )}

      {fields.map((field) => (
        <div key={field.name} className="form-field">
          {field.label && <label htmlFor={field.name}>{field.label}</label>}
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={field.rows || 3}
              className={`form-input ${field.className || ""}`}
            />
          ) : (
            <input
              id={field.name}
              type={field.type || "text"}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              className={`form-input ${field.className || ""}`}
            />
          )}
        </div>
      ))}

      {children}

      <Button type="submit" className="login-btn">
        {submitText}
      </Button>
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      label: PropTypes.string,
      required: PropTypes.bool,
      placeholder: PropTypes.string,
      className: PropTypes.string,
      rows: PropTypes.number,
    }),
  ),
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Form);
