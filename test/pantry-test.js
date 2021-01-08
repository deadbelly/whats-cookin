import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe'
import Pantry from '../src/pantry'
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredients} from './test-data';

describe('Pantry', () => {
  let pantry;
  let user;
  let userInfo;
  let recipes;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);
    pantry = new Pantry(user.pantry);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('pantry should initialize with an array of users ingredients', () => {
    expect(pantry.ingredients).to.eql(user.pantry);
  });

  it('pantry should be able to indicate if a user can cook a given meal', () => {
    expect(pantry.cookMeal(recipeData[1])).to.eq(true);
    expect(pantry.cookMeal(recipedata[0])).to.eq(12);
  });

  it(`if there are not enough ingredients, pantry should return cost of ingredients needed to cook a meal`, () => {
    expect(pantry.cookMeal(recipedata[0])).to.eq(12);
  });

  it('should initialize with an array of ingredients with additional properties of name and cost in cents', () => {
    expect(pantry.completeIngredients[0]).to.eql({
      id: 1,
      name: 'chicken breast',
      amount: 2,
      estimatedCostInCents: 10
    });
  });

  
});
