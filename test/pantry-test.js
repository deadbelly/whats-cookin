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
    pantry = new Pantry(user, recipeData[1]);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('pantry should initialize with an array of users ingredients', () => {
    expect(pantry.pantry).to.eql(user.pantry);
  });

  it.only('pantry should be able to indicate if a user can cook a given meal', () => {
    pantry.canCook(recipeData[1]);
    expect(pantry.pantry).to.eql(
    {id: 2,
    amount: 4})
  });

  it(`if there are not enough ingredients, pantry should return array of ingredients needed to cook a meal`, () => {
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

});
