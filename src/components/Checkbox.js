import React from  "react"
import propTypes from "prop-types"

function Checkbox({label, selected, styleClass, onChange}) {

    const handleChange = (event) => {
      const {selected} = event.target
      onChange(selected)
    }

    return(
        <div className={`form-group form-check ${styleClass}`}>
            <input 
                type="checkbox" 
                value={selected} 
                defaultChecked = {selected}
                onChange={handleChange}/>
                <label>{label}</label>
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