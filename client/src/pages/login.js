import React from "react";

import Form from "../components/form";

function Login(props) {
  return (
    <>
      <Form
        className="login-input-form"
        title="login"
        fields={[
          {
            email: "email",
            type: "email",
            required: true,
            placeholder: "Email",
          },
          {
            password: "password",
            type: "password",
            required: true,
            placeholder: "Password",
          },
        ]}
        submitText="Login"
      />
    </>
  );
}

export default React.memo(Login);
