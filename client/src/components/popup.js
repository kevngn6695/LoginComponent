import React from "react";

import Container from "./container";

function Popup(props) {
  return <Container className={props.className}></Container>;
}

export default React.memo(Popup);
