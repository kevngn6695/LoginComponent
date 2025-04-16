import React from "react";
import "../assets/style/sass/components/footer.sass";
function Footer(props) {
  return (
    <footer className={props.className}>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
}

export default React.memo(Footer);
