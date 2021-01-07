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
  
  it('should initialize with the instructions', () => {
    expect(recipe.instructions).to.deep.equal([
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      },
      {
        "number": 2,
        "instruction": "Add egg and vanilla and mix until combined."
      },
      {
        "number": 3,
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees."
      },
      {
        "number": 4,
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt."
      },
      {
        "number": 5,
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown."
      },
      {
        "number": 6,
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce."
      }
    ]);
  });
  
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
    expect(recipe.findIngredients()).to.deep.equal();
  });

  it('should list all of the ingredient\'s names in the recipe', () => {
    expect(recipe.listIngredientNames()).to.deep.equal();
    expect(recipe.listIngredientNames()).to.deep.equal();
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost()).to.equal(17775);
    expect(recipe.calculateIngredientsCost()).to.equal();
  });
});
