import User from './user.js';

const domUpdates = {
    //WELCOME MESSAGE
     loadUserDom(user) {
        let firstName = user.name.split(" ")[0];
        let welcomeMsg = `
          <div class="welcome-msg">
            <h1>Welcome ${firstName}!</h1>
          </div>`;
        document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
          welcomeMsg);
      },

    //RECIPE CARDS
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

    //FILTER BY RECIPE TAGS
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

      toggleFilterVis(viewTags) {
        var tagDropdown = document.querySelector(".tag-list");
        if (viewTags) {
          tagDropdown.style.display = "block";
        } else {
          tagDropdown.style.display = "none";
        }
      },

    //RECIPE INSTRUCTIONS
      openRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton) {
        fullRecipeInfo.style.display = "inline";
        let recipeId = event.path.find(e => e.id).id;
        let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
        cookRecipeButton.setAttribute("id", recipeId);
        this.generateInstructions(recipe, fullRecipeInfo);
        this.generateRecipeTitle(recipe, this.generateIngredients(recipe), fullRecipeInfo);
        this.addRecipeImage(recipe);
        fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
      },

      generateIngredients(recipe) {
        return recipe && recipe.ingredients.map(i => {
          return `${this.capitalize(i.name)} (${i.quantity.amount} ${i.quantity.unit})`
        }).join(", ");
      },

      generateRecipeTitle(recipe, ingredients, fullRecipeInfo) {
        let recipeTitle = `
          <button id="exit-recipe-btn">X</button>
          <h3 id="recipe-title">${recipe.name}</h3>
          <h4>Ingredients</h4>
          <p>${ingredients}</p>`
        fullRecipeInfo.insertAdjacentHTML("afterbegin", recipeTitle);
      },

      addRecipeImage(recipe) {
        document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
      },

       generateInstructions(recipe, fullRecipeInfo) {
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

       displayMissingIngredients(missingIngredients, recipeButton, fullRecipeInfo) {
         while (fullRecipeInfo.childNodes.length > 2) {
           fullRecipeInfo.removeChild(fullRecipeInfo.firstChild);
         };
         recipeButton.style.display = "none";
         missingIngredients.forEach(ingredient => {
           fullRecipeInfo.insertAdjacentHTML("afterbegin", `<li>${this.capitalize(ingredient.name)}, ${ingredient.quantity.amount} ${ingredient.quantity.unit}</li>`)
         });
         fullRecipeInfo.insertAdjacentHTML("afterbegin", "<h2>You need the following ingredients to cook this meal:</h2>");
       },

       displayTotalCostToCook(missingIngredients, fullRecipeInfo) {
         console.log(missingIngredients)
         let recipeCost = missingIngredients.reduce((acc, ing) => {
           return acc + ing.cost;
         }, 0);
         console.log(recipeCost);
         fullRecipeInfo.insertAdjacentHTML("beforeend", `<h2>Cost $${(recipeCost * .01).toFixed(2)}</h2>`);
       },

       exitRecipe(fullRecipeInfo) {
        while (fullRecipeInfo.childNodes.length > 2) {
          fullRecipeInfo.removeChild(fullRecipeInfo.firstChild);
        };
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

      //SEARCH RECIPES & INGREDIENTS
       toggleMenuVis(menuOpen) {
        var menuDropdown = document.querySelector(".drop-menu");
        if (menuOpen) {
          menuDropdown.style.display = "block";
        } else {
          menuDropdown.style.display = "none";
        }
      },

      //PANTRY
       displayPantryInfo(pantry) {
        document.querySelector(".pantry-list").innerHTML = ''
        pantry.forEach(ingredient => {
          let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
            <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label></li>`;
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
