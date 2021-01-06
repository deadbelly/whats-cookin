class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addRecipe(array, recipe) {
    if (!this[array].includes(recipe)) {
      this[array].push(recipe)
    }
  }

  removeRecipe(array, recipe) {
    let i = this[array].indexOf(recipe);
    this[array].splice(i, 1);
  }

  filterRecipes(array, key, search) {
    return this[array].filter(recipe => recipe[key].includes(search));
  }
}

module.exports = User;
