import React from  "react"
import propTypes from "prop-types"

function Dropdown({value, data, placeholder, styleClass, onChange}) {

    const handleChange = (event) => {
      console.log(event)
    }

    return(
        <div className={`form-group ${styleClass}`}>
            <select value={value} ClassName="form-control" onChange={handleChange}>
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option 
                        key={key} 
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

Dropdown.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  data: propTypes.array,
  styleClass: propTypes.string,
  onChange: propTypes.func
}

Dropdown.defaultProps = {
    value: "",
    placeholder: "",
    styleClass: ""
}

export default Dropdown