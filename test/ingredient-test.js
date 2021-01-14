import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe';
import Pantry from '../src/pantry';
import Ingredient from '../src/ingredient';
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredientsData} from './test-data';

describe('Ingredient', () => {
  let userInfo;
  let user;
  let pantry;
  let recipes;
  let ingredients;
  let ingredient;

  beforeEach(() => {
    ingredients = ingredientsData.map(data => new Ingredient(data));
    ingredient = ingredients[0]
    userInfo = users[0];
    user = new User(userInfo);
    pantry = new Pantry(user);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.eq(1)
  });

  it('should have a name', () => {
    expect(ingredient.name).to.eq('chicken breast')
  });

  it('should have an estimated cost in cents', () => {
    expect(ingredient.estimatedCostInCents).to.eq(10)
  });

});
