import React from "react";
import Container from "./components/container";
import "./assets/style/sass/main/app.sass";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <>
      <Container className="login-container">
        <Form
          className="login-input-form"
          title="login"
          fields={[
            {
              email: "email",
              label: "Email",
              type: "email",
              required: true,
              placeholder: "Email",
            },
            {
              password: "password",
              label: "Password",
              type: "password",
              required: true,
              placeholder: "Password",
            },
          ]}
          submitText="Login"
        />
      </Container>
      <Footer className="login-footer" />
    </>
  );
}

export default App;
