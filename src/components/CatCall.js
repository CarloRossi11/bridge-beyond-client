export function getCats() {
    return fetch('https://buddy-system-api.herokuapp.com/categories')
      .then(data => data.json())
  }