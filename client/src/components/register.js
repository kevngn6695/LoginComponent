import React from "react";

import Button from "../assets/style/sass/components/button.sass";

function register(props) {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

export default React.memo(register);
