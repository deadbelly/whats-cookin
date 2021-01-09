let domUpdates = {
    generateUser() {
        user = new User(users[Math.floor(Math.random() * users.length)]);
        let firstName = user.name.split(" ")[0];
        let welcomeMsg = `
          <div class="welcome-msg">
            <h1>Welcome ${firstName}!</h1>
          </div>`;
        document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
          welcomeMsg);
        findPantryInfo();
      },

      addToDom(recipeInfo, shortRecipeName, iconStatus) {
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

      listTags(allTags) {
        allTags.forEach(tag => {
          let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
            <label for="${tag}">${capitalize(tag)}</label></li>`;
          tagList.insertAdjacentHTML("beforeend", tagHtml);
        });
      }
}

export default domUpdates;