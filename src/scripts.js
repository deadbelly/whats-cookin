import fetchRequests from './fetchRequests';
import './css/styles.scss';
import domUpdates from './domUpdates';

import User from './user';
import Recipe from './recipe';
import Pantry from './pantry';
import Ingredient from './ingredient';
import './images/apple-logo-outline.png';
import './images/apple-logo.png';
import './images/search.png';
import './images/cookbook.png';
import './images/cookbook.png';
import './images/seasoning.png';



const allRecipesBtn = document.querySelector(".show-all-btn");
const filterBtn = document.querySelector(".filter-btn");
const fullRecipeInfo = document.querySelector(".recipe-instructions");
const main = document.querySelector("main");
const pantryBtn = document.querySelector(".my-pantry-btn");
const savedRecipesBtn = document.querySelector(".saved-recipes-btn");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const showPantryRecipes = document.querySelector(".show-pantry-recipes-btn");
const tagList = document.querySelector(".tag-list");
const tagFilterDropdown = document.querySelector(".filter-dropbtn");
const cookRecipeButton = document.querySelector(".cook-recipe-button");
const recipeOkayButton = document.querySelector(".recipe-okay-button");

let pantryInfo = [];
let viewFavorites = false;
let menuOpen = false;
let viewTags = false;
let user;
let recipes;
let ingredients;
let activeSearch;


window.addEventListener("load", loadAllData);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", reloadRecipes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", pressEnterSearch);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);
tagFilterDropdown.addEventListener("click", toggleFilter);
cookRecipeButton.addEventListener("click", cookRecipe);
recipeOkayButton.addEventListener("click", returnToRecipeView);

function loadAllData() {
  Promise.all([fetchRequests.getUsers(), fetchRequests.getRecipes(), fetchRequests.getIngredients()])
  .then(values => {
    user = generateUser(values[0]);
    user.pantry = generateUserPantry(user);
    domUpdates.loadUserDom(user);
    ingredients = generateIngredients(values[2]);
    recipes = generateRecipes(values[1]);
    findPantryInfo();
    domUpdates.displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
    createCards();
    findTags();
  });
}

//LOAD DATA MODEL
function generateUser(users) {
  return new User(users[Math.floor(Math.random() * users.length)]);
}

function generateRecipes(recipes) {
  return recipes.map(recipe => new Recipe(recipe, ingredients));
}

function generateUserPantry(user) {
  return new Pantry(user);
}

function generateIngredients(ingredients) {
  return ingredients.map(ingredient => new Ingredient(ingredient))
}

//CALL domUpdates
function createCards() {
  let recipeArray = filterRecipes(recipes);
  recipeArray.forEach(recipe => {
    let shortRecipeName = recipe.name;
    let iconStatus = checkIfSaved(recipe);
    if (recipe.name.length > 40) {
      shortRecipeName = recipe.name.substring(0, 40) + "...";
    }
    domUpdates.addToDom(main, recipe, shortRecipeName, iconStatus);
  });
}

function reloadRecipes() {
  domUpdates.clearCards();
  createCards();
}

function findTags() {
  let tags = new Set(recipes.reduce((tags, recipe) => {
    return tags.concat(recipe.tags).sort();
  }, []));
  domUpdates.listTags(tags, tagList);
}

function checkIfSaved(recipe) {
  if (user.favoriteRecipes.includes(recipe.id)) {
    return '<img src="./images/apple-logo.png" alt="filled apple icon" class="card-apple-icon">';
  } else {
    return '<img src="./images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">';
  }
}

function toggleMenu() {
  menuOpen = !menuOpen;
  domUpdates.toggleMenuVis(menuOpen);
}

function toggleFilter() {
  viewTags = !viewTags;
  domUpdates.toggleFilterVis(viewTags);
}

function showSavedRecipes() {
  viewFavorites = true;
  reloadRecipes();
  domUpdates.showMyRecipesBanner();
}

function showAllRecipes() {
  viewFavorites = false;
  reloadRecipes();
  domUpdates.showWelcomeBanner();
}


// FAVORITE RECIPE FUNCTIONALITY
function cookRecipe() {
  let recipeId = event.target.id;
  let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
  let missingIngredients = user.pantry.canCook(recipe)
  if (missingIngredients.length) {
    domUpdates.clearModalView(fullRecipeInfo);
    domUpdates.displayTotalCostToCook(missingIngredients, fullRecipeInfo);
    domUpdates.displayMissingIngredients(missingIngredients, cookRecipeButton, fullRecipeInfo, recipeOkayButton);
    domUpdates.generateRecipeTitle(recipe, fullRecipeInfo);
    domUpdates.addRecipeImage(recipe);
  } else {
    findPantryInfo();
    domUpdates.displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
    user.addRecipe("recipesToCook", recipeId);
  }
}

function returnToRecipeView() {
  domUpdates.clearModalView(fullRecipeInfo);
  domUpdates.openRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton);
  recipeOkayButton.style.display = "none";
  document.getElementById("overlay").remove();
}

function addToMyRecipes() {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id);
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.addRecipe('favoriteRecipes', cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe('favoriteRecipes', cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe(fullRecipeInfo, recipeOkayButton);
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    domUpdates.openRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

//FILTERING AND SEARCHING
function pressEnterSearch(event) {
  event.preventDefault();
  activeSearch = searchInput.value.toLowerCase();
  reloadRecipes();
}

function filterRecipesByFavorites(recipeArray) {
  recipeArray = recipeArray.filter(recipe => {
    return user.favoriteRecipes.includes(recipe.id);
  })
  return recipeArray;
}

function findSelectedTags() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes);
  return checkboxInfo.filter(box => {
    return box.checked;
  })
}

function filterRecipesByTag(recipeArray, selectedTags) {
  selectedTags.forEach(tag => {
    recipeArray = recipeArray.filter(recipe => recipe.tags.includes(tag.id));
  })
  return recipeArray;
}

function filterRecipesBySearch(recipeArray, search) {
  recipeArray = recipeArray.filter(recipe => {
    return (recipe.listIngredientNames().find(ingredient => ingredient.includes(search)) ||
    recipe.name.toLowerCase().includes(search))});
  return recipeArray
}

function filterRecipes(recipeArray) {
  if (activeSearch) {
    recipeArray = filterRecipesBySearch(recipeArray, activeSearch);
  }
  if(findSelectedTags()) {
    recipeArray = filterRecipesByTag(recipeArray, findSelectedTags());
  }
  if (viewFavorites) {
    recipeArray = filterRecipesByFavorites(recipeArray);
  }
  return recipeArray
}

// CREATE AND USE PANTRY
function findPantryInfo() {
  user.pantry.pantry.forEach(item => {
    let itemInfo = ingredients.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = pantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.count += item.amount;
    } else if (itemInfo) {
      pantryInfo.push({name: itemInfo.name, count: item.amount});
    }
  });
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes);
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      allRecipeIngredients.push(ingredient.name);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}
