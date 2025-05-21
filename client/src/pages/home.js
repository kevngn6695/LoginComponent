import React from "react";

import Login from "../components/login";
import Container from "../components/container";

function Home(props) {
  return (
    <>
      <Container className="login-container">
        <Login />
      </Container>
    </>
  );
}

export default React.memo(Home);
