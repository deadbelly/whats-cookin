class Pantry {
  constructor(user) {
    this.pantry = user.pantry;
  }

  findIngredientById(id) {
    return this.pantry.find(ingredient => ingredient.id === id)
  }

  findMissingIngredients(recipe) {
    let missingIngredients = recipe.ingredients.filter(ingredient => {
      return (!this.findIngredientById(ingredient.id) ||
      ingredient.quantity.amount > this.findIngredientById(ingredient.id).amount)
    })
    missingIngredients.forEach(missingIng => {
      missingIng.cost = Math.floor(missingIng.estimatedCostInCents * missingIng.quantity.amount);
      delete missingIng.estimatedCostInCents;
    })
    return missingIngredients;
  }

  removeCookedIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.findIngredientById(ingredient.id).amount -= ingredient.quantity.amount
    })
  }

  canCook(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe)
    console.log("missing ings", missingIngredients);
    if(missingIngredients.length) {
      return missingIngredients;
    } else {
      this.removeCookedIngredients(recipe)
    }
  }
}

module.exports = Pantry;
