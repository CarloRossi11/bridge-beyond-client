export function getList() {
    return fetch('https://buddy-system-api.herokuapp.com/resources')
      .then(data => data.json())
  }

  //Makes the call to get the outreach resources