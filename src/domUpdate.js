import User from './user.js';

const domUpdates = {
    // GENERATE A USER ON LOAD
     loadUserDom(user) {
        let firstName = user.name.split(" ")[0];
        let welcomeMsg = `
          <div class="welcome-msg">
            <h1>Welcome ${firstName}!</h1>
          </div>`;
        document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
          welcomeMsg);
      },

    // CREATE RECIPE CARDS
      addToDom(main, recipeInfo, shortRecipeName, iconStatus) {
        let cardHtml = `
          <div class="recipe-card" id=${recipeInfo.id}>
            <h3 maxlength="40">${shortRecipeName}</h3>
            <div class="card-photo-container">
              <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
              <div class="text">
                <div>Click for Instructions</div>
              </div>
            </div>
            <h4>${recipeInfo.tags[0]}</h4>
            ${iconStatus}
          </div>`
        main.insertAdjacentHTML("beforeend", cardHtml);
      },

      clearCards() {
        document.querySelectorAll('.recipe-card').forEach(card => card.remove())
      },

    // FILTER BY RECIPE TAGS
      listTags(allTags, tagList) {
        allTags.forEach(tag => {
          let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
            <label for="${tag}">${this.capitalize(tag)}</label></li>`;
          tagList.insertAdjacentHTML("beforeend", tagHtml);
        });
      },

       hideUnselectedRecipes(foundRecipes) {
        foundRecipes.forEach(recipe => {
          let domRecipe = document.getElementById(`${recipe.id}`);
          domRecipe.style.display = "none";
        });
      },

    // CREATE RECIPE INSTRUCTIONS
      openRecipeInfo(event) {
        fullRecipeInfo.style.display = "inline";
        let recipeId = event.path.find(e => e.id).id;
        let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
        generateRecipeTitle(recipe, generateIngredients(recipe));
        addRecipeImage(recipe);
        generateInstructions(recipe);
        fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
      },

      generateRecipeTitle(recipe, ingredients) {
        let recipeTitle = `
          <button id="exit-recipe-btn">X</button>
          <h3 id="recipe-title">${recipe.name}</h3>
          <h4>Ingredients</h4>
          <p>${ingredients}</p>`
        fullRecipeInfo.insertAdjacentHTML("beforeend", recipeTitle);
      },

      addRecipeImage(recipe) {
        document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
      },

       generateInstructions(recipe) {
        let instructionsList = "";
        let instructions = recipe.instructions.map(i => {
          return i.instruction
        });
        instructions.forEach(i => {
          instructionsList += `<li>${i}</li>`
        });
        fullRecipeInfo.insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
        fullRecipeInfo.insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
      },

       exitRecipe() {
        while (fullRecipeInfo.firstChild &&
          fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
        fullRecipeInfo.style.display = "none";
        document.getElementById("overlay").remove();
      },

      // TOGGLE DISPLAYS
       showMyRecipesBanner() {
        document.querySelector(".welcome-msg").style.display = "none";
        document.querySelector(".my-recipes-banner").style.display = "block";
      },

       showWelcomeBanner() {
        document.querySelector(".welcome-msg").style.display = "flex";
        document.querySelector(".my-recipes-banner").style.display = "none";
      },

      // SEARCH RECIPES & INGREDIENTS
       toggleMenuVis(menuOpen) {
        var menuDropdown = document.querySelector(".drop-menu");
        if (menuOpen) {
          menuDropdown.style.display = "block";
        } else {
          menuDropdown.style.display = "none";
        }
      },

      // CREATE AND USE PANTRY
       displayPantryInfo(pantry) {
        pantry.forEach(ingredient => {
          let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
            <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
          document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
            ingredientHtml);
        });
      },

      capitalize(words) {
        return words.split(" ").map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
      }
}

export default domUpdates;
