import React, { useState } from "react";

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Categories
      </a>
      <div className="dropcontents">{open && props.children}</div>
    </div>
  );
}
export default Dropdown;
