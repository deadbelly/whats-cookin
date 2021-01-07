import { expect } from 'chai';

import User from '../src/user';
import {users} from './test-data';
import {recipes} from './test-data';
import {ingredients} from './test-data';


describe('User', () => {
  let user;
  let userInfo;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);
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
    user.addRecipe('favoriteRecipes', recipe1);
    expect(user.favoriteRecipes).to.eql([recipe1]);

    user.addRecipe('favoriteRecipes', recipe2);
    expect(user.favoriteRecipes).to.eql([recipe1, recipe2]);
  });

  it('should not save the same recipe to favoriteRecipes multiple times', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe1);
    expect(user.favoriteRecipes).to.eql([recipe1]);
  });

  it('should be able to remove recipes from favoriteRecipes', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);
    user.removeRecipe('favoriteRecipes', recipe1);
    expect(user.favoriteRecipes).to.eql([recipe2]);

    user.removeRecipe('favoriteRecipes', recipe2);
    expect(user.favoriteRecipes).to.eql([])
  });

  it('should be able to remove recipes from recipesToCook', () => {
    user.addRecipe('recipesToCook', recipe1);
    user.addRecipe('recipesToCook', recipe2);
    user.removeRecipe('recipesToCook', recipe1);
    expect(user.recipesToCook).to.eql([recipe2]);

    user.removeRecipe('recipesToCook', recipe2);
    expect(user.recipesToCook).to.eql([])
  });

  it('should be able to decide to cook a recipe', () => {
    user.addRecipe('recipesToCook', recipe1);
    expect(user.recipesToCook).to.eql([recipe1]);

    user.addRecipe('recipesToCook', recipe2);
    expect(user.recipesToCook).to.eql([recipe1, recipe2])
  });

  it('should be able to filter favoriteRecipes by tag', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);

    expect(user.filterRecipes('favoriteRecipes', 'tags', 'italian')).to.eql([recipe1]);

    user.addRecipe('favoriteRecipes', recipe3)
    expect(user.filterRecipes('favoriteRecipes', 'tags', 'japanese')).to.eql([recipe2, recipe3]);
  });

  it('should be able to filter recipesToCook by tag', () => {
    user.addRecipe('recipesToCook', recipe1);
    user.addRecipe('recipesToCook', recipe2);

    expect(user.filterRecipes('recipesToCook', 'tags', 'italian')).to.eql([recipe1]);

    user.addRecipe('recipesToCook', recipe3);
    expect(user.filterRecipes('recipesToCook', 'tags', 'japanese')).to.eql([recipe2, recipe3]);
  });

  it('should be able to filter favoriteRecipes by name', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);
    user.addRecipe('favoriteRecipes', recipe3);

    expect(user.filterRecipes('favoriteRecipes', 'name', 'Chicken Parm')).to.eql([recipe1]);
  });

  it('should be able to filter recipesToCook by name', () => {
    user.addRecipe('recipesToCook', recipe1);
    user.addRecipe('recipesToCook', recipe2);
    user.addRecipe('recipesToCook', recipe3);

    expect(user.filterRecipes('recipesToCook', 'name', 'Somen')).to.eql([recipe2]);
  });

  it('should be able to filter favoriteRecipes by ingredient name', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);
    user.addRecipe('favoriteRecipes', recipe3);

    expect(user.filterRecipes('favoriteRecipes', 'ingredients', 'chicken breast')).to.eql([recipe1]);
    expect(user.filterRecipes('favoriteRecipes', 'ingredients', 'noodles')).to.eql([recipe2, recipe3]);
  });

  it('should be able to filter recipesToCook by ingredient name', () => {
    user.addRecipe('recipesToCook', recipe1);
    user.addRecipe('recipesToCook', recipe2);
    user.addRecipe('recipesToCook', recipe3);

    expect(user.filterRecipes('recipesToCook', 'ingredients', 'chicken breast')).to.eql([recipe1]);
    expect(user.filterRecipes('recipesToCook', 'ingredients', 'noodles')).to.eql([recipe2, recipe3]);
  });

});
