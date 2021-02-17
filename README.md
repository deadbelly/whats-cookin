# Refactor Tractor - What's Cookin?

## About
This is a group project which gave us developers the opportunity to build on top of somebody else's pre-existing codebase. The previous codebase was an application for recipe tracking / meal planning that allows user's to view their favorite recipes and plan shopping trips around them. This was a first for us developers to be working on a previous codebase, although on the job this is common practice, so this was a useful experience. All data used in the application is hosted on a local server and accessed on the site using fetch API's.

Link to orginal codebase [here](https://drive.google.com/file/d/1DAnwfBNtdcC3ZuMqo8Vo7EejB5qUZcMD/view?usp=sharing).


Link to GitHub Pages Site [here](https://deadbelly.github.io/whats-cookin/).
(Note: you have to follow Step 7 of the installation instructions for the site to work properly)

![gif of site/random user](https://media.giphy.com/media/nh6LVl3mvjlg6wPsEB/giphy.gif)

This site was designed to be responsive to screen size, as seen below.

![gif of breakpoints](https://media.giphy.com/media/FyExsuM6CaQ6aGWOj8/giphy.gif)

## How To Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start`
6. Copy and paste the domain from terminal into browser.
7. Run 'npm start' for local server [here](https://github.com/turingschool-examples/whats-cookin-api) for API.

## Features
  * User can search any recipes by name or ingredient within the search bar.
  * User can filter the recipes by one or more tag names.
  * User can filter the recipes by the ingredients they have in their pantry.
  * User has a pantry which stores all the ingredients they have to make a recipe.
  * User can favorite a recipe and add it to their My Recipes page.
  * User can also use the search or tag and pantry filter specifically for their favorited recipes.
  * User can view the recipe showing all the ingredients and instructions with the option to cook the meal. 
  * If the user can't cook the meal then the missing ingredients are displayed along with the total cost of those ingredients.
  * If the user can cook the meal, then the recipe is added to a new page called Recipes To Cook and the ingredients are taken out of the user's pantry. 
  
## Code Architecture
  * `scripts.js`, `domUpdates.js`, `fetchRequests.js` - Deals with all of the DOM manipulation and is what allows for functionality on the webpage. `scripts.js` is pulling data from the data model and allowing it to be processed as manipulation on the DOM. `domUpdates.js` is where all the manipulation of the DOM elements is occuring and `fetchRequests.js` is where the API data is being fetched using `GET`. The seperation of files helps to maintain a more modular file structure.
  
  * `user.js`, `recipe.js`, `ingredient.js`, `pantry.js` - These are all of the class files which holds the data model and is directly manipulating any data that comes in from the API's.
  
  * `user-test.js`, `recipe-test.js`, `ingredient-test.js`, `pantry-test.js` - Testing for all of the class files, ensuring TDD and checking for any errors within the Data Model.
  
  * `index.html`, `styles.scss` & all other `.scss` files - Used SASS for styling and broke them out into seperate files for mor modular file structuring. Used @mixins and SASS variables for readability and code effectiveness.
  
## Technologies Used
1. JavaScript (vanilla)
2. HTML/CSS
3. Webpack
4. Chai & Mocha
5. SASS
6. Normalize.scss

## Future Iterations
 * When a user can cook a meal alert user that meal has been added to recipes to cook.
 * Add an missing images for recipes (specifically Double Raspberry Souffle).
 * Fix any tags displaying as "undefined".
 * Display all of the recipe's tags to the card.
 * Allow a user to set limits on whe they're low on specific ingredients and be notified to purchase more ingredients.
 * Consolidate search buttons and have the DOM update more fluildly.

## Project Members
This project was designed and implemented by  [Boone Epstein](https://github.com/deadbelly) & [Brian Forbes](https://github.com/Codeherder19) & [Cameron Aragon](https://github.com/camaragon) 
