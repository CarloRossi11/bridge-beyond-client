import React, { useState } from "react";

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-item">
      <div
        // href="#"
        className="icon-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Categories
      </div>
      <div className="dropcontents">{open && props.children}</div>
    </div>
  );
}
export default Dropdown;
