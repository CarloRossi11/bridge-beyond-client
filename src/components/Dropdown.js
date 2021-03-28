import React, { useState } from "react";

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <ul className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Categories
      </a>
      <div className="catchecks">{open && props.children}</div>
    </ul>
  );
}
export default Dropdown;
