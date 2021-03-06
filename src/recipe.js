class Recipe {
  constructor(recipe, allIngredients) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
    this.ingredients = this.findIngredients(allIngredients, recipe.ingredients);
  }

  findIngredients(allIngredients, recipeIngredients) {
    const ingredientList = recipeIngredients.reduce((acc, i) => {
      const foundIngredient = allIngredients.find(ingredient => ingredient.id === i.id);
      // foundIngredient.quantity = i.quantity;
      const completeIngredient = {
        id: i.id,
        name: foundIngredient.name,
        estimatedCostInCents: foundIngredient.estimatedCostInCents,
        quantity: i.quantity
      }
      acc.push(completeIngredient);
      return acc;
    }, []);
    return ingredientList;
  }

  listIngredientNames() {
    const ingredientNames = this.ingredients.map(ingredient => ingredient.name);
    return ingredientNames;
  }

  calculateIngredientsCost() {
    return this.ingredients.reduce((sum, ingredient) => {
      return Math.floor(sum + ingredient.estimatedCostInCents * ingredient.quantity.amount);
    }, 0);
  }
}

module.exports = Recipe;
