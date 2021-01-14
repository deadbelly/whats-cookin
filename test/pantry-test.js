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

  it('should initialize with an array of ingredients', () => {
    expect(pantry.pantry).to.eql(user.pantry);
  });

  it('should be able to cook a given meal', () => {
    pantry.cook(recipes[1]);
    expect(pantry.pantry).to.eql(
      [
      { ingredient: 1, amount: 2 },
      { ingredient: 2, amount: 4, modification: -1},
      { ingredient: 3, amount: 2, modification: -1}]);
  })

  it(`should return array of missing ingredients needed to cook a meal`, () => {
    expect(pantry.cook(recipes[0])).to.eql([{
    id: 5,
    name: 'parmesan',
    quantity: { amount: 0.25, unit: 'c' },
    cost: 12}]);
  });

  it(`should return array of missing ingredients needed to cook a different meal`, () => {
    expect(pantry.cook(recipes[2])).to.eql([{
    id: 4,
    name: 'oil',
    quantity: { amount: 0.25, unit: 'c' },
    cost: 10}]);
  });

  it(`should not cook things that aren't recipes`, () => {
    expect(pantry.cook.bind(pantry, {object: true})).to.throw("Cannot read property 'filter' of undefined");
    expect(pantry.cook.bind(pantry, 12)).to.throw("Cannot read property 'filter' of undefined");
    expect(pantry.cook.bind(pantry, false)).to.throw("Cannot read property 'filter' of undefined");
    expect(pantry.cook.bind(pantry, 'string')).to.throw("Cannot read property 'filter' of undefined");
  })

  it('should be assignable to a user', () => {
    expect(user.pantry).to.eql(pantry.pantry)
    user.pantry = pantry
    expect(user.pantry.pantry).to.eql(pantry.pantry)
  });
});
