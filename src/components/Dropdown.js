import React, { useState } from 'react'

function Dropdown(props) {

    const [open, setOpen] = useState(false)

    return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => {setOpen(!open)}}>
        Categories
      </a>
      {open && props.children}
    </li>
    )
}
export default Dropdown