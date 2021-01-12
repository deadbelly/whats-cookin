import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe';
import Pantry from '../src/pantry';
import Ingredient from '../src/ingredient';
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredientsData} from './test-data';

describe('Pantry', () => {
  let userInfo;
  let user;
  let pantry;
  let recipes;
  let ingredients;

  beforeEach(() => {
    ingredients = ingredientsData.map(data => new Ingredient(data));
    userInfo = users[0];
    user = new User(userInfo);
    pantry = new Pantry(user);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('pantry should initialize with an array of users ingredients', () => {
    expect(pantry.pantry).to.eql(user.pantry);
  });

  // it('should initialize with an array of ingredients with additional properties of name and cost in cents', () => {
  //   expect(pantry.compileIngredientsData(ingredients)[0]).to.eql({
  //     id: 1,
  //     name: 'chicken breast',
  //     estimatedCostInCents: 10,
  //     amount: 2
  //   });
  // });

  it('pantry should be able to indicate if a user can cook a given meal', () => {
    pantry.canCook(recipeData[1]);
    expect(pantry.pantry).to.eql(
    {id: 2,
    amount: 4})
  });

  it.only(`if there are not enough ingredients, pantry should return array of ingredients needed to cook a meal`, () => {
    expect(pantry.canCook(recipes[0])).to.eql([
  {
    id: 5,
    name: 'parmesan',
    cost: 12,
    quantity: { amount: 0.25, unit: 'c' }
  }
]
);
  });

  // it('should return a list of ingredients needed if pantry does not have enough to cook a meal', () => {
  //   expect(pantry.returnListOfIngredientsNeeded(recipeData[0])).to.eq('parmesan');
  // });


});
