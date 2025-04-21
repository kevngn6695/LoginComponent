import React from "react";
import "../assets/style/sass/components/heading.sass";
function heading(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default React.memo(heading);
