import User from './user.js';

const domUpdates = {
    //WELCOME MESSAGE
     displayWelcomeMessage(user) {
        let firstName = user.name.split(" ")[0];
        let welcomeMsg = `
          <div class="welcome-msg">
            <h1>Welcome ${firstName}!</h1>
          </div>`;
        document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
          welcomeMsg);
      },

    //RECIPE CARDS
      addCard(main, recipeInfo, shortRecipeName, iconStatus) {
        let cardHtml = `
          <div class="recipe-card" id=${recipeInfo.id} >
            <h3 maxlength="40">${shortRecipeName}</h3>
            <div class="card-photo-container">
              <button title="view recipe instructions">
                <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
              </button>
                <div class="text">
                  <div>Click for Instructions</div>
              </div>
            </div>
            <h4>${recipeInfo.tags[0]}</h4>
            <button class="card-apple-icon" title="Add recipe to favorites">${iconStatus}</button>
          </div>`
        main.insertAdjacentHTML("beforeend", cardHtml);
      },

      clearCards() {
        document.querySelectorAll('.recipe-card').forEach(card => card.remove())
      },

      returnSavedImg() {
        return '<img src="./images/apple-logo.png" alt="filled apple icon" class="card-apple-icon">';
      },

      returnNormalImg() {
        return '<img src="./images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">';
      },

      switchImgSrc(user, cardId) {
        if (!user.favoriteRecipes.includes(cardId)) {
          event.target.src = "../images/apple-logo.png";
        } else {
          event.target.src = "../images/apple-logo-outline.png";
        }
      },

    //SIDEBAR
      listTags(allTags, tagList) {
        allTags.forEach(tag => {
          let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
            <label for="${tag}">${this.capitalize(tag)}</label></li>`;
          tagList.insertAdjacentHTML("beforeend", tagHtml);
        });
      },

    //RECIPE INSTRUCTIONS
      displayRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton) {
        fullRecipeInfo.style.display = "inline";
        let recipeId = event.path.find(e => e.id).id;
        let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
        cookRecipeButton.setAttribute("id", recipeId);
        recipeOkayButton.setAttribute("id", recipeId);
        this.displayInstructions(recipe, fullRecipeInfo);
        this.displayIngredients(recipe, fullRecipeInfo);
        this.displayRecipeTitle(recipe, fullRecipeInfo);
        this.displayRecipeImage(recipe);
        fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
        cookRecipeButton.style.display = "block";
      },

      displayIngredients(recipe, fullRecipeInfo) {
        let ingredients = recipe.ingredients.map(i => {
          return `${this.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
        }).join(", ");
        fullRecipeInfo.insertAdjacentHTML("afterbegin", `<h4>Ingredients</h4> <p>${ingredients}</p>`)
      },

      displayRecipeTitle(recipe, fullRecipeInfo) {
        let recipeTitle = `
          <button id="exit-recipe-btn">X</button>
          <h3 id="recipe-title">${recipe.name}</h3>`
        fullRecipeInfo.insertAdjacentHTML("afterbegin", recipeTitle);
      },

      displayRecipeImage(recipe) {
        document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
      },

       displayInstructions(recipe, fullRecipeInfo) {
        let instructionsList = "";
        let instructions = recipe.instructions.map(i => {
          return i.instruction
        });
        instructions.forEach(i => {
          instructionsList += `<li>${i}</li>`
        });
        fullRecipeInfo.insertAdjacentHTML("afterbegin", `<ol>${instructionsList}</ol>`);
        fullRecipeInfo.insertAdjacentHTML("afterbegin", "<h4>Instructions</h4>");
       },

       //MISSING INGREDIENTS
       displayMissingIngredients(missingIngredients, recipeCookButton, fullRecipeInfo, recipeOkayButton) {
         recipeCookButton.style.display = "none";
         missingIngredients.forEach(ingredient => {
           fullRecipeInfo.insertAdjacentHTML("afterbegin", `<li>${this.capitalize(ingredient.name)}, ${ingredient.quantity.amount} ${ingredient.quantity.unit}</li>`)
         });
         fullRecipeInfo.insertAdjacentHTML("afterbegin", "<h2>You need the following ingredients to cook this meal:</h2>");
         recipeOkayButton.style.display = "block";
       },

       displayTotalCostToCook(missingIngredients, fullRecipeInfo) {
         let recipeCost = missingIngredients.reduce((acc, ing) => {
           return acc + ing.cost;
         }, 0);
         fullRecipeInfo.insertAdjacentHTML("afterbegin", `<h2>Cost $${(recipeCost * .001).toFixed(2)}.</h2>`);
       },

       clearModalView(fullRecipeInfo) {
         while (fullRecipeInfo.childNodes.length > 4) {
           fullRecipeInfo.removeChild(fullRecipeInfo.firstChild);
         }
       },

       exitRecipe(fullRecipeInfo, recipeOkayButton) {
        this.clearModalView(fullRecipeInfo)
        fullRecipeInfo.style.display = "none";
        recipeOkayButton.style.display = "none";
        document.getElementById("overlay").remove();
      },

      returnToRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton) {
        this.clearModalView(fullRecipeInfo);
        this.displayRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton);
        recipeOkayButton.style.display = "none";
        document.getElementById("overlay").remove();
      },

      // TOGGLE DISPLAYS
       showMyRecipesBanner() {
        document.querySelector(".welcome-msg").style.display = "none";
        document.querySelector(".my-recipes-banner").style.display = "block";
      },

      showRecipesToCookBanner() {
        document.querySelector(".welcome-msg").style.display = "none";
        document.querySelector(".my-recipes-banner").style.display = "none";
        document.querySelector(".recipes-to-cook-banner").style.display = "block";
      },

       showWelcomeBanner() {
        document.querySelector(".welcome-msg").style.display = "flex";
        document.querySelector(".my-recipes-banner").style.display = "none";
        document.querySelector(".recipes-to-cook-banner").style.display = "none";
      },

       toggleMenuVis(menuOpen) {
        var menuDropdown = document.querySelector(".drop-menu");
        if (menuOpen) {
          menuDropdown.style.display = "block";
        } else {
          menuDropdown.style.display = "none";
        }
      },

      toggleFilterVis(viewTags) {
        var tagDropdown = document.querySelector(".tag-list");
        var filterRecipes = document.querySelector(".filter-btn");
        if (viewTags) {
          tagDropdown.style.display = "block";
          filterRecipes.style.display = "block";
        } else {
          tagDropdown.style.display = "none";
          filterRecipes.style.display = "none";
        }
      },

      //PANTRY
       displayPantryInfo(pantry) {
        document.querySelector(".pantry-list").innerHTML = ''
        pantry.forEach(ingredient => {
          let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
            <label for="${ingredient.name}">${ingredient.name}, ${ingredient.amount}</label></li>`;
          document.querySelector(".pantry-list").insertAdjacentHTML("beforeend",
            ingredientHtml);
        });
      },

      //SUPPORT
      capitalize(words) {
        return words.split(" ").map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
      }
}

export default domUpdates;
