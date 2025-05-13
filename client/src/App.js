import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import "./assets/style/sass/main/app.sass";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <Router>
      <Container className="login-container">
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
      </Container>
      <Footer className="login-footer" />
    </Router>
  );
}

export default React.memo(App);
