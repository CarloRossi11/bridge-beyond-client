export function getList() {
    return fetch('https://buddy-system-api.herokuapp.com/resources')
    // we need documentation - swagger
    //categories; search term; pagesize; page number
    //verify we can give this terms
    //verify it respects pagination 
    //to check hack in search terms 
    // need to componitize frontend and push search logic to backend - can setState everything right now is hacked in app. 

      .then(data => data.json())
  }

  //Makes the call to get the outreach resources