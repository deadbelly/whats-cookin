import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe';
import Pantry from '../src/pantry';
import Ingredient from '../src/ingredient';
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredientsData} from './test-data';


describe('User', () => {
  let user;
  let userInfo;
  let recipes;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredientsData));
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should initialize with an id', () => {
    expect(user.id).to.eq(1);
  });

  it('should initialize with a name', () => {
    expect(user.name).to.eq('Saige O\'Kon');
  });

  it('should initialize with a pantry', () => {
    expect(user.pantry).to.eql(userInfo.pantry);
  });

  it('should initialize with an empty favoriteRecipes array', () => {
    expect(user.favoriteRecipes).to.eql([]);
  });

  it('should initialize with an empty recipesToCook array', () => {
    expect(user.recipesToCook).to.eql([]);
  });

  it('should be able to save a recipe to favoriteRecipes', () => {
    user.addRecipe('favoriteRecipes', recipes[0].id);
    expect(user.favoriteRecipes).to.eql([1]);

    user.addRecipe('favoriteRecipes', recipes[1].id);
    expect(user.favoriteRecipes).to.eql([1, 2]);
  });

  it('should not save the same recipe to favoriteRecipes multiple times', () => {
    user.addRecipe('favoriteRecipes', recipes[0].id);
    user.addRecipe('favoriteRecipes', recipes[0].id);
    expect(user.favoriteRecipes).to.eql([1]);
  });

  it('should be able to remove recipes from favoriteRecipes', () => {
    user.addRecipe('favoriteRecipes', recipes[0].id);
    user.addRecipe('favoriteRecipes', recipes[1].id);
    user.removeRecipe('favoriteRecipes', recipes[0].id);
    expect(user.favoriteRecipes).to.eql([2]);

    user.removeRecipe('favoriteRecipes', recipes[1].id);
    expect(user.favoriteRecipes).to.eql([])
  });

  it('should be able to decide to cook a recipe', () => {
    user.addRecipe('recipesToCook', recipes[0].id);
    expect(user.recipesToCook).to.eql([1]);

    user.addRecipe('recipesToCook', recipes[1].id);
    expect(user.recipesToCook).to.eql([1, 2])
  });

  it('should be able to remove recipes from recipesToCook', () => {
    user.addRecipe('recipesToCook', recipes[0].id);
    user.addRecipe('recipesToCook', recipes[1].id);
    user.removeRecipe('recipesToCook', recipes[0].id);
    expect(user.recipesToCook).to.eql([2]);

    user.removeRecipe('recipesToCook', recipes[1].id);
    expect(user.recipesToCook).to.eql([])
  });
});
