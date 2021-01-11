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

let pantryInfo = [];
let menuOpen = false;
let user;
let recipes;
let ingredients;


window.addEventListener("load", loadAllData);
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", pressEnterSearch);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);

function loadAllData() {
  Promise.all([fetchRequests.getUsers(), fetchRequests.getRecipes(), fetchRequests.getIngredients()])
  .then(values => {
    user = generateUser(values[0]);
    domUpdates.loadUserDom(user);
    ingredients = values[2];
    recipes = instantiateRecipes(values[1]);
    findPantryInfo();
    domUpdates.displayPantryInfo(pantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
    createCards();
    findTags();
  });
}


function generateUser(users) {
  return new User(users[Math.floor(Math.random() * users.length)]);
}

//MENU
function toggleMenu() {
  menuOpen = !menuOpen;
  domUpdates.toggleMenuVis(menuOpen);
}

// CREATE RECIPE CARDS
function instantiateRecipes(recipes) {
  return recipes.map(recipe => new Recipe(recipe, ingredients));
}

function createCards(recipeArray = recipes) {
  recipeArray.forEach(recipe => {
    let shortRecipeName = recipe.name;
    let iconStatus = checkIfSaved(recipe)
    if (recipe.name.length > 40) {
      shortRecipeName = recipe.name.substring(0, 40) + "...";
    }
    domUpdates.addToDom(main, recipe, shortRecipeName, iconStatus)
  });
}

function checkIfSaved(recipe) {
  if (user.favoriteRecipes.includes(recipe.id)) {
    return '<img src="./images/apple-logo.png" alt="filled apple icon" class="card-apple-icon">'
  } else {
    return '<img src="./images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">'
  }
}

// FILTER BY RECIPE TAGS
function findTags() {
  let tags = new Set(recipes.reduce((tags, recipe) => {
    return tags.concat(recipe.tags).sort()
  }, []));
  domUpdates.listTags(tags, tagList);
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  domUpdates.hideUnselectedRecipes(foundRecipes)
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes() {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.addRecipe('favoriteRecipes', cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe('favoriteRecipes', cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    domUpdates.exitRecipe(fullRecipeInfo);
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    domUpdates.openRecipeInfo(event, fullRecipeInfo, recipes);
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

function showSavedRecipes() {
  const favoriteRecipes = recipes.filter(recipe => {
    return user.favoriteRecipes.includes(recipe.id)
  })
  domUpdates.clearCards()
  createCards(favoriteRecipes)
  domUpdates.showMyRecipesBanner()
}

// SEARCH RECIPES & INGREDIENTS
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
  searchIngredients();
}

function searchRecipes() {
  let searchedRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterSearched(searchedRecipes);
}

function searchIngredients() {
  let searchedIngredients = recipes.filter(recipe => {
    return recipe.ingredients.find(ingredient => {
      return ingredient.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
  });
  filterSearched(searchedIngredients);
}

function filterSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return ids.includes(recipe.id)
  })
  domUpdates.clearCards();
  createCards(found);
}

function showAllRecipes() {
  domUpdates.clearCards();
  createCards();
  domUpdates.showWelcomeBanner();
}

// CREATE AND USE PANTRY
function findPantryInfo() {
  user.pantry.forEach(item => {
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
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
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
