import { expect } from 'chai';

import User from '../src/user';
import users from '../src/data/users-data';

describe('User', () => {
  let user;
  let userInfo;
  let recipe1;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    userInfo = users[0];
    user = new User(userInfo);

    recipe1 = {name: 'Chicken Parm', type: ['italian', 'dinner']};
    recipe2 = {name: 'Somen', type: ['japanese', 'lunch']};
    recipe3 = {name: 'Yakisoba', type: ['japanese', 'lunch']};
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

  it('should be able to filter favoriteRecipes by type', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);

    expect(user.filterRecipes('favoriteRecipes', 'type', 'italian')).to.deep.equal([recipe1]);

    user.addRecipe('favoriteRecipes', recipe3)
    expect(user.filterRecipes('favoriteRecipes', 'type', 'japanese')).to.deep.equal([recipe2, recipe3]);
  });

  it('should be able to filter recipesToCook by type', () => {
    user.addRecipe('recipesToCook', recipe1);
    user.addRecipe('recipesToCook', recipe2);

    expect(user.filterRecipes('recipesToCook', 'type', 'italian')).to.deep.equal([recipe1]);

    user.addRecipe('recipesToCook', recipe3);
    expect(user.filterRecipes('recipesToCook', 'type', 'japanese')).to.deep.equal([recipe2, recipe3]);
  });

  it('should be able to filter favoriteRecipes by name', () => {
    user.addRecipe('favoriteRecipes', recipe1);
    user.addRecipe('favoriteRecipes', recipe2);
    user.addRecipe('favoriteRecipes', recipe3);

    expect(user.filterRecipes('favoriteRecipes', 'name', 'Chicken Parm')).to.deep.equal([recipe1]);
  });

});
