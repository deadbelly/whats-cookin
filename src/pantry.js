class Pantry {
  constructor(user) {
    this.pantry = user.pantry;
  }

  findIngredient(id) {
    return this.pantry.find(ingredient => ingredient.ingredient === id)
  }

  findMissingIngredients(recipe) {
    let missingIngredients = recipe.ingredients.filter(ingredient => {
      return (!this.findIngredient(ingredient.id) ||
      ingredient.quantity.amount > this.findIngredient(ingredient.id).amount)
    })
    this.removePantryIngredients(missingIngredients);
    this.calculateRemainingCost(missingIngredients);
    return missingIngredients;
  }

  calculateRemainingCost(missingIngredients) {
    missingIngredients.forEach(missingIng => {
      missingIng.cost = Math.floor(missingIng.estimatedCostInCents * missingIng.quantity.amount);
      delete missingIng.estimatedCostInCents;
    })
  }

  removePantryIngredients(missingIngredients) {
    missingIngredients.forEach(ingredient => {
      if (this.findIngredient(ingredient.id)) {
        ingredient.quantity.amount -= this.findIngredient(ingredient.id).amount;
      }
    });
    missingIngredients = missingIngredients.filter(ingredient => ingredient.amount > 0)
  }

  removeCookedIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.findIngredient(ingredient.id).amount -= ingredient.quantity.amount;
      this.findIngredient(ingredient.id).modification = (0 - ingredient.quantity.amount);
    })
  }

  cook(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe)
    if(!missingIngredients.length) {
      this.removeCookedIngredients(recipe);
    }
    return missingIngredients;
  }
}

module.exports = Pantry;
