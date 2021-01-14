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
  },

  postIngredient(user, ingredient) {
    fetch("http://localhost:3001/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userID": user.id,
        "ingredientID": ingredient.ingredient,
        "ingredientModification": ingredient.modification
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(error));
  }
};

export default fetchRequests;
