import { expect } from 'chai';

import Recipe from '../src/recipe';
import {recipeData} from './test-data';
import {ingredientsData} from './test-data';

describe('Recipe', () => {
  let recipe;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0], ingredientsData);
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', () => {
    expect(recipe.id).to.equal(1);
  });

  it('should initialize with an name', () => {
    expect(recipe.name).to.equal('Chicken Parmesan');
  });

  it('should initialize with an image', () => {
    expect(recipe.image).to.equal('www.example.com/image.jpg');
  });

  it('should initialize with tags', () => {
    expect(recipe.tags).to.eql(recipeData[0].tags);
  });

  it('should initialize with the instructions', () => {
    expect(recipe.instructions).to.deep.equal(recipeData[0].instructions);
  });

  it('should initialize with an array of ingredients', () => {
    const ingredient = {
      id: 1,
      name: "chicken breast",
      estimatedCostInCents: 10,
      quantity: {
        amount: 1,
        unit: "large"
      }
    }
    expect(recipe.ingredients[0]).to.deep.equal(ingredient);
  });

  it('should list all of the ingredient\'s names in the recipe', () => {
    expect(recipe.listIngredientNames()).to.deep.equal(['chicken breast', 'parmesan']);
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost()).to.equal(22);
  });
});
