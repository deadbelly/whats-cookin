const fetchRequests = {
  getIngredients() {
    return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getUsers() {
    return fetch("http://localhost:3001/api/v1/users")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getRecipes() {
    return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  }
};

export default fetchRequests;
