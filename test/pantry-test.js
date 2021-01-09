import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe';
import Pantry from '../src/pantry';
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredients} from './test-data';

describe('Pantry', () => {
  let userInfo;
  let user;
  let pantry;
  let recipes;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);
    pantry = new Pantry(user.pantry, ingredients);
    // recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('pantry should initialize with an array of users ingredients', () => {
    expect(pantry.ingredients).to.eql(user.pantry);
  });

  it('should initialize with an array of ingredients with additional properties of name and cost in cents', () => {
    expect(pantry.compileIngredientsData(ingredients)[0]).to.eql({
      id: 1,
      name: 'chicken breast',
      estimatedCostInCents: 10,
      amount: 2
    });
  });

  it('pantry should be able to indicate if a user can cook a given meal', () => {
    expect(pantry.cookMeal(recipeData[1])).to.eq(true);
  });

  it('should return a list of ingredients needed if pantry does not have enough to cook a meal', () => {
    expect(pantry.returnListOfIngredientsNeeded(recipeData[0])).to.eq('parmesan');
  });

  it(`if there are not enough ingredients, pantry should return cost of ingredients needed to cook a meal`, () => {
    expect(pantry.cookMeal(recipedata[0])).to.eq(12);
  });

});
