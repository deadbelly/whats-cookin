class Recipe {
  constructor(recipe, allIngredients) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
    this.ingredients = this.findIngredients(allIngredients, recipe.ingredients);
  }

  findIngredients(allIngredients, ingredientData) {
    const ingredientList = ingredientData.reduce((acc, i) => {
      allIngredients.forEach(ingredient => {
        let findArray = acc.find(ingredient => ingredient.id === i.id);
        if (ingredient.id === i.id && !findArray) {
          ingredient['quantity'] = {amount: i.quantity.amount, unit: i.quantity.unit};
          acc.push(ingredient);
        }
      })
      return acc;
    }, []);
    // console.log(ingredientList);
    return ingredientList;
  }
  
  listIngredientNames() {
    const ingredientNames = this.ingredients.map(ingredient => ingredient.name);
    // console.log(ingredientNames);
    return ingredientNames;
  }

  calculateIngredientsCost() {
    return this.ingredients.reduce((sum, ingredient) => {
      console.log(Math.floor(sum + ingredient.estimatedCostInCents * ingredient.quantity.amount));
      return Math.floor(sum + ingredient.estimatedCostInCents * ingredient.quantity.amount);
    }, 0);
  }
  // return this.ingredients.reduce((sum, i) => {
  //   const foundIngredient = allIngredients.find(ingredient => ingredient.id === i.id);
  //   return sum + foundIngredient.estimatedCostInCents * i.quantity.amount;
  // }, 0);
}

module.exports = Recipe;
