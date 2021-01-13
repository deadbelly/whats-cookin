import fetchRequests from './fetchRequests';
import './css/styles.scss';
import domUpdates from './domUpdates';

import User from './user';
import Recipe from './recipe';
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
main.addEventListener("click", runCardButtons);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", pressEnterSearch);
showPantryRecipes.addEventListener("click", reloadRecipes);
searchForm.addEventListener("submit", pressEnterSearch);
tagFilterDropdown.addEventListener("click", toggleFilter)

function loadAllData() {
  Promise.all([fetchRequests.getUsers(), fetchRequests.getRecipes(), fetchRequests.getIngredients()])
  .then(values => {
    user = generateUser(values[0]);
    domUpdates.loadUserDom(user);
    ingredients = values[2];
    recipes = instantiateRecipes(values[1]);
    domUpdates.displayPantryInfo(generatePantryInfo());
    createCards();
    findTags();
  });
}

//LOAD DATA MODEL
function generateUser(users) {
  return new User(users[Math.floor(Math.random() * users.length)]);
}

function instantiateRecipes(recipes) {
  return recipes.map(recipe => new Recipe(recipe, ingredients));
}

function generatePantryInfo() {
  let ingredientsInPantry = [];
  user.pantry.pantry.forEach((pantryIng, i) => {
    ingredientsInPantry.push(ingredients.find(ing => ing.id === pantryIng.ingredient));
    ingredientsInPantry[i].amount = pantryIng.amount;
  })
  return ingredientsInPantry.sort((a, b) => a.name.localeCompare(b.name));
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
function runCardButtons(event) {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes(event)
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe(fullRecipeInfo);
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    domUpdates.openRecipeInfo(event, fullRecipeInfo, recipes);
  }
}

function addToMyRecipes(event) {
  let cardId = parseInt(event.target.closest(".recipe-card").id);
  if (!user.favoriteRecipes.includes(cardId)) {
    event.target.src = "../images/apple-logo.png";
    user.addRecipe('favoriteRecipes', cardId);
  } else {
    event.target.src = "../images/apple-logo-outline.png";
    user.removeRecipe('favoriteRecipes', cardId);
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

function findSelected(checkboxClass) {
  let checkboxes = document.querySelectorAll(checkboxClass);
  let checkboxInfo = Array.from(checkboxes);
  return checkboxInfo.filter(box => {
    return box.checked;
  })
}

function filterRecipesByTag(recipeArray, selected) {
  selected.forEach(tag => {
    recipeArray = recipeArray.filter(recipe => recipe.tags.includes(tag.id));
  })
  return recipeArray;
}

function filterRecipesByPantry(recipeArray, selected) {
  selected.forEach(ing => {
    recipeArray = recipeArray.filter(recipe => recipe.listIngredientNames().includes(ing.id));
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
  if(findSelected('.checked-tags')) {
    recipeArray = filterRecipesByTag(recipeArray, findSelected('.checked-tags'));
  }
  if(findSelected('.pantry-checkbox')) {
    recipeArray = filterRecipesByPantry(recipeArray, findSelected('.pantry-checkbox'))
  }
  if (viewFavorites) {
    recipeArray = filterRecipesByFavorites(recipeArray);
  }
  return recipeArray
}
