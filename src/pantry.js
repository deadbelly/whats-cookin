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

  // cookMeal(recipe) {
  //
  // }


};



///     /*what? an array of ingredient objects and a recipe object
//     want? to return true if there are enough ingredients in the user's Pantry
//     to cook the meal, or the cost of the remaining ingredients needed to cook that meal
//     methods?
//     how?
//     */
// //   }

module.exports = Pantry;
