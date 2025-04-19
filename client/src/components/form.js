import React from "react";
import Button from "./button";
import "../assets/style/sass/components/form.sass";

function form(props) {
  return (
    <form className={props.className}>
      <h1>Form</h1>

      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <Button className="login-btn">Login</Button>
    </form>
  );
}

export default React.memo(form);
