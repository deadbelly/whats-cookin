const fetchRequests = {
  getIngredients() {
    return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json());
  },

  getUsers() {
    return fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json());
  },

  getRecipes() {
    return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json());
  }
};

export default fetchRequests;
