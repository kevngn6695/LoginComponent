import React from "react";
import Container from "./components/container";
import "./assets/style/sass/main/app.sass";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Container className="login-container"></Container>
      <Footer className="login-footer" />
    </div>
  );
}

export default App;
