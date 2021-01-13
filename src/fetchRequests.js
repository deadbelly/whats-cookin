

const fetchRequests = {
  getIngredients() {
    return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  },

  getUsers() {
    return fetch("http://localhost:3001/api/v1/users")
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => console.log(error));
  },

  getRecipes() {
    return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => console.log(error))
  }
};

export default fetchRequests;
