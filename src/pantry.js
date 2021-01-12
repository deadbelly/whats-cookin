 class Pantry {
  constructor(userPantry, allIngredients) {
    this.ingredients = userPantry;
    this.completeIngredients = this.compileIngredientsData(allIngredients);
  }

  compileIngredientsData(allIngredients) {
    const fullIngredientList = this.ingredients.reduce((acc, i) => {
      const matchingIngredient = allIngredients.find(ingredient => ingredient.id === i.id);
      const finalIngredient = {
        id: i.id,
        name: matchingIngredient.name,
        estimatedCostInCents: matchingIngredient.estimatedCostInCents,
        amount: i.amount
      }
      acc.push(finalIngredient);
      return acc;
    }, []);
    return fullIngredientList;
  }

  cookMeal(recipeToCook) {
    let recipe = recipeToCook
    // console.log(recipe);
    recipe.ingredients.forEach(recipeIngredient => {
      this.ingredients.forEach(pantryIngredient => {
        if (pantryIngredient.id === recipeIngredient.id) {
          recipeIngredient.quantity.amount -= pantryIngredient.amount
        }
      })
    })
    // console.log(recipe.ingredients[0].quantity.amount)
    recipe = recipe.ingredients.filter(ingredient => ingredient.quantity.amount > 0)
    if (!recipe.length) {
      this.removeIngredientsFromUserPantry(recipeToCook)
    }
    else
    {
      return this.failureMessage(recipe)
    }
  }

  failureMessage(recipe) {
    let message = ' '
    recipe.ingredients.forEach(ingredient => {
    //add name and how much we need to string
  })
  //add 'the remaining ingredients cost ${recipe.getCost}'
  return message
  }

  removeIngredientsFromUserPantry(recipe) {
    // console.log(recipe)
    recipe.ingredients.forEach(recipeIng => {
      this.ingredients.forEach(userIng => {
        if (recipeIng.id === userIng.id) {
          userIng.amount -= recipeIng.quantity.amount;
          console.log(userIng.amount);
        }
      })
    })
  }
};






  // getValidIngredientsIds(recipe) {
  //   const validIngredients = [];
  //   recipe.ingredients.forEach(recipeIng => {
  //     this.ingredients.forEach(userIng => {
  //       if (recipeIng.id === userIng.id) {
  //         validIngredients.push(userIng.id);
  //       }
  //     })
  //   })
  //   return validIngredients
  // }
  //
  // getInvalidIngredientsIds(recipe) {
  //   const validIngredients = getValidIngredients(recipe);
  //   const invalidIngredients = [];
  //   recipe.ingredients.forEach(recipeIng => {
  //     this.ingredients.forEach(userIng => {
  //       if (!validIngredients.includes(recipeIng.id) && !invalidIngredients.includes(recipeIng.id)) {
  //         invalidIngredients.push(recipeIng.id);
  //       }
  //     })
  //   })
  //   return invalidIngredients
  // }






module.exports = Pantry;
