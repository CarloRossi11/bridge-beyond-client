import React from  "react"
import propTypes from "prop-types"

function Checkbox({label, selected, styleClass, onChange}) {

    const handleChange = (event) => {
      const {checked} = event.target
      onChange(checked)
    }

    return(
        <div className={`form-group ${styleClass}`}>
            <label>
                <input 
                type="checkbox" 
                value={selected} 
                defaultChecked = {selected}
                onChange={handleChange}/>
            {label}
            </label>
        </div>
    )
  }
Checkbox.propTypes = {
    styleClass: propTypes.string,
    selected: propTypes.bool,
    label:propTypes.string,
    onChange: propTypes.func
}

Checkbox.defaulstProps = {
    styleClass: ""
}

export default Checkbox