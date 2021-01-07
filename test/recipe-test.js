import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipeData from '../src/data/recipe-data';
import ingredientsData from '../src/data/ingredient-data';

describe('Recipe', () => {
  let recipe;
  let recipeInfo;

  beforeEach(() => {
    recipeInfo = recipeData;
    recipe = new Recipe(recipeInfo[0], ingredientsData);
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', () => {
    expect(recipe.id).to.equal(595736);
  });

  it('should initialize with an name', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with tags', () => {
    expect(recipe.tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ]);
  });
  
  it('should initialize with all the ingredients', () => {
    expect(recipe.allIngredients).to.deep.equal();
  });
  
  // it('should initialize with the instructions', () => {
  //   expect(recipe.)
  // })

  
  it('should initialize with an array of ingredients', () => {
    const ingredient = {
      "id": 20081,
      "name": "all purpose flour",
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }
    expect(recipe.ingredients[0]).to.deep.equal(ingredient);
  });

  it('should contain find ingredients with all the properties combined', () => {
    expect(recipe.findIngredients()).to.deep.equal();
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost()).to.equal(17775);
  });
});
