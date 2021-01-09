import { expect } from 'chai';

import User from '../src/user';
import Recipe from '../src/recipe'
import {users} from './test-data';
import {recipeData} from './test-data';
import {ingredients} from './test-data';


describe('User', () => {
  let user;
  let userInfo;
  let recipes;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);
    recipes = recipeData.map(recipe => new Recipe(recipe, ingredients));
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

  it('should be able to remove recipes from recipesToCook', () => {
    user.addRecipe('recipesToCook', recipes[0].id);
    user.addRecipe('recipesToCook', recipes[1].id);
    user.removeRecipe('recipesToCook', recipes[0].id);
    expect(user.recipesToCook).to.eql([2]);

    user.removeRecipe('recipesToCook', recipes[1].id);
    expect(user.recipesToCook).to.eql([])
  });

  it('should be able to decide to cook a recipe', () => {
    user.addRecipe('recipesToCook', recipes[0].id);
    expect(user.recipesToCook).to.eql([1]);

    user.addRecipe('recipesToCook', recipes[1].id);
    expect(user.recipesToCook).to.eql([1, 2])
  });

  it.skip('should be able to filter favoriteRecipes by tag', () => {
    user.addRecipe('favoriteRecipes', recipes[0].id);
    user.addRecipe('favoriteRecipes', recipes[1].id);

    expect(user.filterRecipes('favoriteRecipes', 'tags', 'main dish')).to.eql([]);

    user.addRecipe('favoriteRecipes', recipes[2])
    expect(user.filterRecipes('favoriteRecipes', 'tags', 'side dish')).to.eql([recipes[1], recipes[2]]);
  });

  it.skip('should be able to filter recipesToCook by tag', () => {
    user.addRecipe('recipesToCook', recipes[0]);
    user.addRecipe('recipesToCook', recipes[1]);

    expect(user.filterRecipes('recipesToCook', 'tags', 'main dish')).to.eql([recipes[0]]);

    user.addRecipe('recipesToCook', recipes[2]);
    expect(user.filterRecipes('recipesToCook', 'tags', 'side dish')).to.eql([recipes[1], recipes[2]]);
  });

  it.skip('should be able to filter favoriteRecipes by name', () => {
    user.addRecipe('favoriteRecipes', recipes[0]);
    user.addRecipe('favoriteRecipes', recipes[1]);
    user.addRecipe('favoriteRecipes', recipes[2]);

    expect(user.filterRecipes('favoriteRecipes', 'name', 'Chicken Parm')).to.eql([recipes[0]]);
  });

  it.skip('should be able to filter recipesToCook by name', () => {
    user.addRecipe('recipesToCook', recipes[0]);
    user.addRecipe('recipesToCook', recipes[1]);
    user.addRecipe('recipesToCook', recipes[2]);

    expect(user.filterRecipes('recipesToCook', 'name', 'Somen')).to.eql([recipes[1]]);
  });

  it.skip('should be able to filter favoriteRecipes by ingredient name', () => {
    user.addRecipe('favoriteRecipes', recipes[0]);
    user.addRecipe('favoriteRecipes', recipes[1]);
    user.addRecipe('favoriteRecipes', recipes[2]);

    expect(user.filterRecipes('favoriteRecipes', 'ingredients', 'chicken breast')).to.eql([recipes[0]]);
    expect(user.filterRecipes('favoriteRecipes', 'ingredients', 'noodles')).to.eql([recipes[1], recipes[2]]);
  });

  it.skip('should be able to filter recipesToCook by ingredient name', () => {
    user.addRecipe('recipesToCook', recipes[0]);
    user.addRecipe('recipesToCook', recipes[1]);
    user.addRecipe('recipesToCook', recipes[2]);

    expect(user.filterRecipes('recipesToCook', 'ingredients', 'chicken breast')).to.eql([recipes[0]]);
    expect(user.filterRecipes('recipesToCook', 'ingredients', 'noodles')).to.eql([recipes[1], recipes[2]]);
  });

});
