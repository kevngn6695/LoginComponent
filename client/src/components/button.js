import React from "react";
import "../assets/style/sass/components/button.sass";

function button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default React.memo(button);
