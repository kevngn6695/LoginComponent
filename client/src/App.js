import React from "react";
import Container from "./components/container";
import "./assets/style/sass/main/app.sass";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Container className="login-container">
        <Form className="login-input-form" />
      </Container>
      <Footer className="login-footer" />
    </div>
  );
}

export default App;
