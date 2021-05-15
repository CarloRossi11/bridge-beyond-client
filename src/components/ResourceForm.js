import React from  "react"

function ResourceForm() {
    return (
      <div className="ResourceForm">
        
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
          
      </div>
    );
  }

export default ResourceForm

// cheatsheet:https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react