/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n  grid-area: header;\n  padding: 0% 0%;\n  height: auto;\n  width: 100%; }\n\nspan {\n  color: #C4EB67;\n  font-weight: 400; }\n\n.header-apple-icon {\n  height: 40px;\n  width: 35px;\n  margin-left: 5px; }\n\n#search {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset #C4EB67;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  font-family: \"Quicksand\", sans-serif;\n  margin: 1.2% 0.5% 1.2% 0%;\n  height: auto;\n  width: 100%; }\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5B7894;\n  color: #5B7894;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  width: 100%;\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease; }\n  #search-input:hover {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease; }\n\n#search-input:focus {\n  box-shadow: inset 0px 0px 0px 0px white; }\n\n#search-input::placeholder {\n  color: #5B7894;\n  font-size: 20px;\n  text-align: right;\n  text-shadow: none; }\n\n#search-input:focus::placeholder {\n  font-size: 0px;\n  transition: .8s ease; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #C4EB67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  align-items: center;\n  background: #5B7894 no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n  font-size: 0px;\n  font-weight: 700;\n  margin: 0%;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  height: auto;\n  width: 15%; }\n  .nav-btn:hover {\n    color: #C4EB67;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease; }\n\n.nav-btn img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #C4EB67; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 150px;\n  width: 100%;\n  overflow: hidden; }\n\n.my-recipes-banner,\n.welcome-msg,\n.recipes-to-cook-banner {\n  text-align: center;\n  height: auto;\n  width: 95%; }\n\n.my-recipes-banner h1,\n.welcome-msg h1,\n.recipes-to-cook-banner h1 {\n  color: white;\n  height: auto;\n  width: 100%; }\n\n.my-recipes-banner,\n.recipes-to-cook-banner {\n  display: none;\n  margin-top: 25px; }\n\n.welcome-msg {\n  margin-top: 50px; }\n\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn,\n.recipe-okay-button,\n.recipes-to-cook-btn,\n.cook-recipe-button {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n  .show-pantry-recipes-btn:hover,\n  .show-all-btn:hover,\n  .filter-btn:hover,\n  .recipe-okay-button:hover,\n  .recipes-to-cook-btn:hover,\n  .cook-recipe-button:hover {\n    background-color: #96d0b1; }\n\n.show-pantry-recipes-btn {\n  margin-top: 10px; }\n\n.cook-recipe-button {\n  margin-left: 40%; }\n\n.recipes-to-cook-btn {\n  margin-top: 5%; }\n\n.show-all-btn {\n  height: 40px;\n  width: 200px;\n  margin-top: 20px; }\n\n.recipe-okay-button {\n  display: none; }\n\nmain {\n  grid-area: main;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-content: flex-start; }\n\n.recipe-card {\n  background-color: white;\n  border: 2px solid #C4EB67;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 270px;\n  width: 250px;\n  margin: 20px;\n  padding: 15px; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease; }\n  .recipe-card:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease; }\n  .recipe-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: .5s ease;\n    height: auto;\n    width: 100%; }\n  .recipe-card button {\n    background: none;\n    border: none; }\n  .recipe-card:hover h3 {\n    text-shadow: 0px 0px 4px #C4EB67;\n    transition: .8s ease; }\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  width: 45px;\n  padding-bottom: 10px; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 130px;\n  width: 100%;\n  transition: .8s ease; }\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  height: 130px;\n  width: auto;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  height: auto;\n  width: 0%;\n  transition: .5s ease; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid #C4EB67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  width: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  z-index: 1000; }\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n  #exit-recipe-btn:hover {\n    background: #C4EB67;\n    transition: .3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n.recipe-instructions h4 {\n  background: white;\n  color: #359567; }\n\n.recipe-instructions p {\n  margin-left: 2%; }\n\n.recipe-instructions ol {\n  margin-right: 2%; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #5B7894;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  z-index: 100; }\n\n.drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  height: 600px;\n  width: 250px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  z-index: 3; }\n\n.drop-menu h2 {\n  color: #359567;\n  margin: 0px; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left;\n  display: inline; }\n\naside {\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: nowrap;\n  text-align: center; }\n\n.wrap {\n  background-color: white;\n  height: 100vh;\n  width: 200px;\n  padding: 10px;\n  position: relative; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n  display: block; }\n\nli {\n  margin: 2px; }\n\n.filter-dropbtn {\n  background-color: #359567;\n  display: none;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\nbody {\n  background-color: #5B7894;\n  display: grid;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  height: 100vh;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  height: auto;\n  width: 70%; }\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  width: auto;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #C4EB67;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  height: auto;\n  width: max-content; }\n\n@media screen and (max-width: 800px) {\n  body {\n    background-color: #5B7894;\n    display: grid;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto;\n    grid-template-areas: \"header header\" \"image image\" \"aside aside\" \"main main\";\n    height: 100vh;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  aside {\n    background-color: white;\n    grid-area: aside;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    text-align: center; }\n  .wrap {\n    background-color: white;\n    height: auto;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-wrap: nowrap;\n    padding: 10px;\n    position: relative; }\n  .drop-menu {\n    align-items: center;\n    background-color: #DAE4EE;\n    display: none;\n    height: 600px;\n    width: 250px;\n    margin-left: 60%;\n    margin-top: 110px;\n    overflow: scroll;\n    padding: 12px;\n    position: absolute;\n    text-align: center;\n    z-index: 3; }\n  .filter-dropbtn {\n    background-color: #359567;\n    display: inline;\n    border: 0;\n    border-radius: 3px;\n    color: white;\n    cursor: pointer;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 12pt;\n    font-weight: bold;\n    padding: 5px 10px 5px 10px; }\n  ul {\n    list-style-type: none;\n    text-align: left;\n    padding-left: 35px;\n    display: none; }\n  .cook-recipe-button {\n    margin-left: 30%; }\n  .filter-btn {\n    background-color: #359567;\n    display: none;\n    border: 0;\n    border-radius: 3px;\n    color: white;\n    cursor: pointer;\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 12pt;\n    font-weight: bold;\n    padding: 5px 10px 5px 10px; }\n    .filter-btn:hover {\n      background-color: #84C8A4; } }\n\n@media screen and (max-width: 800px) and (max-width: 600px) {\n  body {\n    background-color: #5B7894;\n    display: grid;\n    font-family: \"Quicksand\", sans-serif;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto;\n    grid-template-areas: \"header header\" \"image image\" \"aside aside\" \"main main\";\n    height: 100vh;\n    width: auto;\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto; }\n  header {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    grid-area: header;\n    padding: 0% 0%;\n    height: auto;\n    width: 100%; }\n  .drop-menu {\n    align-items: center;\n    background-color: #DAE4EE;\n    display: none;\n    height: 600px;\n    width: 250px;\n    margin-left: 15%;\n    margin-top: 210px;\n    overflow: scroll;\n    padding: 12px;\n    position: absolute;\n    text-align: center;\n    z-index: 3; }\n  ul {\n    list-style-type: none;\n    text-align: left;\n    padding-left: 35px;\n    display: none; }\n  .cook-recipe-button {\n    margin-left: 20%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_header.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_banner-image.scss","webpack://./src/css/_buttons.scss","webpack://./src/css/_main.scss","webpack://./src/css/_pantry.scss","webpack://./src/css/_sidebar.scss","webpack://./src/css/styles.scss"],"names":[],"mappings":"AAAA;ECaE,aAAa;EACb,mBDbwB;ECcxB,2BDdoC;ECepC,iBDf4C;EAC5C,iBAAiB;EACjB,cAAc;ECKd,YDJ2B;ECK3B,WDLiC,EAAA;;AAGnC;EACE,cCLsB;EDMtB,gBAAgB,EAAA;;AAGlB;ECJE,YDK2B;ECJ3B,WDIiC;EACjC,gBAAgB,EAAA;;AAGlB;EACE,kCAAkC;EAClC,0BChBsB;EDiBtB,mCAAmC;ECPnC,aAAa;EACb,mBDOwB;ECNxB,uBDMgC;ECLhC,iBDKwC;EACxC,oCCtBoC;EDuBpC,yBAAyB;ECfzB,YDgB2B;ECf3B,WDeiC,EAAA;;AAGnC;EACE,yBAAyB;EACzB,yGAA+H;EAC/H,gCAAgC;EAChC,YAAY;EACZ,4CC5BkB;ED6BlB,cC7BkB;ED8BlB,oCClCoC;EDmCpC,eAAe;EC3Bf,YD4B2B;EC3B3B,WD2BiC;EACjC,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB,EAAA;EAbtB;IAeI,uCAAuC;IACvC,oBAAoB,EAAA;;AAIxB;EACE,uCAAuC,EAAA;;AAGzC;EACE,cChDkB;EDiDlB,eAAe;EACf,iBAAiB;EACjB,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,oBAAoB,EAAA;;AAGtB;EACE,aAAa,EAAA;;AAGf;EACE,+BCjEsB;EDkEtB,gCAAgC;EAChC,WAAW,EAAA;;AAGb;EACE,mBAAmB;EACnB,6BAAiC;EACjC,YAAY;EACZ,eAAe;EChEf,aAAa;EACb,sBDgE2B;EC/D3B,uBD+DmC;EC9DnC,iBD8D2C;EAC3C,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EC7EpB,YD8E2B;EC7E3B,UD6EgC,EAAA;EAblC;IAgBI,cCtFoB;IDuFpB,eAAe;IACf,8BAA8B;IAC9B,oBAAoB,EAAA;;AAIxB;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB,EAAA;;AAGlB;EACE,8BCpGsB,EAAA;;ADuGxB;EACE,aAAa;EACb,wBAAwB,EAAA;;AE5G1B;EACE,4GAA6F;EAC7F,gBAAgB;EDMhB,aCL4B;EDM5B,WCNkC;EAClC,gBAAgB,EAAA;;AAGlB;;;EAGE,kBAAkB;EDFlB,YCG2B;EDF3B,UCEgC,EAAA;;AAGlC;;;EAGE,YAAY;EDTZ,YCU2B;EDT3B,WCSiC,EAAA;;AAGnC;;EAEE,aAAa;EACb,gBAAgB,EAAA;;AAGlB;EACE,gBAAgB,EAAA;;AC5BlB;;;;;;EAME,yBFDwB;EEExB,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oCFXoC;EEYpC,eAAe;EACf,iBAAiB;EACjB,0BAA0B,EAAA;EAd5B;;;;;;IAiBI,yBAAsC,EAAA;;AAI1C;EACE,gBAAgB,EAAA;;AAGlB;EACE,gBAAgB,EAAA;;AAGlB;EACE,cAAc,EAAA;;AAGhB;EFzBE,YE0B2B;EFzB3B,YEyBkC;EAClC,gBAAgB,EAAA;;AAGlB;EACE,aAAa,EAAA;;ACvCf;EACE,eAAe;EHYf,aAAa;EACb,mBGZwB;EHaxB,uBGbgC;EHchC,eGdsC;EACtC,yBAAyB,EAAA;;AAG3B;EACE,uBAAuB;EACvB,yBHLsB;EGMtB,kBAAkB;EAClB,eAAe;EHFf,aGG4B;EHF5B,YGEmC;EACnC,YAAY;EACZ,aAAa,EAAA;EAPf;IAUI,YAAY;IACZ,oBAAoB,EAAA;EAXxB;IAeI,YAAY;IACZ,oBAAoB,EAAA;EAhBxB;IAoBI,eAAe;IACf,aAAa;IACb,oBAAoB;IHpBtB,YGqB6B;IHpB7B,WGoBmC,EAAA;EAvBrC;IA2BI,gBAAgB;IAChB,YAAY,EAAA;EA5BhB;IAgCI,gCHnCoB;IGoCpB,oBAAoB,EAAA;;AAIxB;EACE,eAAe;EACf,YAAY;EHrCZ,YGsC2B;EHrC3B,WGqCiC;EACjC,oBAAoB,EAAA;;AAGtB;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EH/Cf,aGgD4B;EH/C5B,WG+CkC;EAClC,oBAAoB,EAAA;;AAGtB;EACE,mBAAmB;EHhDnB,aAAa;EACb,mBGgDwB;EH/CxB,uBG+CgC;EH9ChC,iBG8CwC;EHtDxC,aGuD4B;EHtD5B,WGsDkC;EAClC,kBAAkB,EAAA;;AAGpB;EACE,mBH/DwB;EGgExB,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EHnElB,YGoE2B;EHnE3B,SGmE+B;EAC/B,oBAAoB,EAAA;;AAGtB,wBAAA;AACA;EACE,iBAAiB;EACjB,yBHhFsB;EGiFtB,mBAAmB;EACnB,+BAA+B;EAC/B,aAAa;EH9Eb,WG+E0B;EH9E1B,UG8E+B;EAC/B,SAAS;EACT,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,aAAa,EAAA;;AAGf;EACE,iBAAiB;EACjB,0BH9FwB;EG+FxB,kBAAkB;EAClB,cHhGwB;EGiGxB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,oBAAoB,EAAA;EAVtB;IAYI,mBH1GoB;IG2GpB,oBAAoB,EAAA;;AAKxB;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,8BAA8B,EAAA;;AAGhC;EACE,iBAAiB;EACjB,cH5HwB,EAAA;;AG+H1B;EACE,eAAe,EAAA;;AAGjB;EACE,gBAAgB,EAAA;;AAGlB;EACE,yBAAwB;EACxB,yBH1IkB;EAIlB,YGuI2B;EHtI3B,WGsIiC;EACjC,OAAM;EACN,YAAW;EACX,eAAc;EACd,MAAK;EACL,YAAW,EAAA;;ACpJb;EACE,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EJKb,aIJ4B;EJK5B,YILmC;EACnC,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;EACE,cJVwB;EIWxB,WAAW,EAAA;;AAGb;EACE,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,eAAe,EAAA;;ACvBjB;EACE,uBAAuB;ELYvB,aAAa;EACb,mBKZwB;ELaxB,uBKbgC;ELchC,iBKdwC;EACxC,kBAAkB,EAAA;;AAGpB;EACE,uBAAuB;ELCvB,aKA4B;ELC5B,YKDmC;EACnC,aAAa;EACb,kBAAkB,EAAA;;AAGpB;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc,EAAA;;AAGhB;EACE,WAAW,EAAA;;AAGb;EACE,yBLpBwB;EKqBxB,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oCL/BoC;EKgCpC,eAAe;EACf,iBAAiB;EACjB,0BAA0B,EAAA;;AAG5B;EACE,kBAAkB;EAClB,qBAAqB,EAAA;;AC/BvB;EACE,yBNLkB;EMMlB,aAAa;EACb,oCNXoC;EMYpC,8BAA8B;EAC9B,+DAGc;ENRd,aMS4B;ENR5B,WMQkC;EAClC,SAAS;EACT,UAAU;EACV,4BAA4B,EAAA;;AAG9B;EACE,kBAAkB;EAClB,YAAY;EACZ,wCNzB0C;EM0B1C,eAAe;EACf,UAAU;EACV,qBAAqB;ENrBrB,YMsB2B;ENrB3B,UMqBgC,EAAA;;AAGlC;EACE,cAAc;EACd,yBAAyB,EAAA;;AAG3B;EACE,cNlCwB;EMmCxB,eAAe;ENhCf,WMiC0B;ENhC1B,WMgCgC;EAChC,wBAAwB;EACxB,oBAAoB,EAAA;;AAGtB;EACE,cN1CwB;EM2CxB,yBN7CsB;EM8CtB,kBAAkB;EAClB,wBAAwB;EACxB,wBAAwB;EN3CxB,YM4C2B;EN3C3B,kBM2CwC,EAAA;;AAG1C;EACE;IACE,yBNrDgB;IMsDhB,aAAa;IACb,oCN3DkC;IM4DlC,8BAA8B;IAC9B,wBAAwB;IACxB,4EAIa;IN1Df,aM2D8B;IN1D9B,WM0DoC;IAClC,SAAS;IACT,UAAU;IACV,4BAA4B,EAAA;EAG9B;IACE,uBAAuB;IACvB,gBAAgB;IN9DlB,aAAa;IACb,mBM8D0B;IN7D1B,uBM6DkC;IN5DlC,iBM4D0C;IACxC,kBAAkB,EAAA;EAGpB;IACE,uBAAuB;INzEzB,YM0E6B;INzE7B,WMyEmC;INrEnC,aAAa;IACb,sBMqE6B;INpE7B,uBMoEqC;INnErC,iBMmE6C;IAC3C,aAAa;IACb,kBAAkB,EAAA;EAGpB;IACE,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;INnFf,aMoF8B;INnF9B,YMmFqC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,UAAU,EAAA;EAGZ;IACE,yBNlGsB;IMmGtB,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oCN7GkC;IM8GlC,eAAe;IACf,iBAAiB;IACjB,0BAA0B,EAAA;EAG5B;IACE,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa,EAAA;EAGf;IACE,gBAAgB,EAAA;EAGlB;IACE,yBN1HsB;IM2HtB,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oCNrIkC;IMsIlC,eAAe;IACf,iBAAiB;IACjB,0BAA0B,EAAA;IAV5B;MAaI,yBAAyB,EAAA,EAC1B;;AAGH;EACE;IACE,yBN7Ic;IM8Id,aAAa;IACb,oCNnJgC;IMoJhC,8BAA8B;IAC9B,wBAAwB;IACxB,4EAIa;INlJjB,aMmJgC;INlJhC,WMkJsC;IAClC,SAAS;IACT,UAAU;IACV,4BAA4B,EAAA;EAG9B;INpJF,aAAa;IACb,mBMoJ4B;INnJ5B,uBMmJoC;INlJpC,eMkJ0C;IACtC,iBAAiB;IACjB,cAAc;IN5JlB,YM6J+B;IN5J/B,WM4JqC,EAAA;EAGnC;IACE,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;INnKjB,aMoKgC;INnKhC,YMmKuC;IACnC,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,UAAU,EAAA;EAGZ;IACE,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa,EAAA;EAGf;IACE,gBAAgB,EAAA,EACjB","sourcesContent":["header {\n  @include displayFlex(row, flex-start, nowrap);\n  grid-area: header;\n  padding: 0% 0%;\n  @include setDimensions(auto, 100%);\n}\n\nspan {\n  color: $inchworm-green;\n  font-weight: 400;\n}\n\n.header-apple-icon {\n  @include setDimensions(40px, 35px);\n  margin-left: 5px;\n}\n\n#search {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset $inchworm-green;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  @include displayFlex(row, center, nowrap);\n  font-family: $primary-font;\n  margin: 1.2% 0.5% 1.2% 0%;\n  @include setDimensions(auto, 100%);\n}\n\n#search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px $steel-blue;\n  color: $steel-blue;\n  font-family: $primary-font;\n  font-size: 42px;\n  @include setDimensions(100%, 100%)\n  outline: none;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  &:hover {\n    box-shadow: inset 0px 0px 0px 0px white;\n    transition: .8s ease;\n  }\n}\n\n#search-input:focus {\n  box-shadow: inset 0px 0px 0px 0px white;\n}\n\n#search-input::placeholder {\n  color: $steel-blue;\n  font-size: 20px;\n  text-align: right;\n  text-shadow: none;\n}\n\n#search-input:focus::placeholder {\n  font-size: 0px;\n  transition: .8s ease;\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $inchworm-green;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  align-items: center;\n  background: $steel-blue no-repeat;\n  border: none;\n  cursor: pointer;\n  @include displayFlex(column, center, nowrap);\n  font-size: 0px;\n  font-weight: 700;\n  margin: 0%;\n  outline: none;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  @include setDimensions(auto, 15%);\n\n  &:hover {\n    color: $inchworm-green;\n    font-size: 14px;\n    text-shadow: 0px 2px 4px black;\n    transition: .4s ease;\n  }\n}\n\n.nav-btn img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $inchworm-green;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n}\n","$primary-font: \"Quicksand\", sans-serif;\n$secondary-font: \"Sulphur Point\", sans-serif;\n\n$inchworm-green: #C4EB67;\n$steel-blue: #5B7894;\n$eucalyptus-green: #359567;\n\n@mixin setDimensions($height, $width) {\n  height: $height;\n  width: $width;\n}\n\n@mixin displayFlex($flex-direction, $justify-content, $flex-wrap) {\n  display: flex;\n  flex-direction: $flex-direction;\n  justify-content: $justify-content;\n  flex-wrap: $flex-wrap\n}\n",".banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\");\n  grid-area: image;\n  @include setDimensions(150px, 100%);\n  overflow: hidden;\n}\n\n.my-recipes-banner,\n.welcome-msg,\n.recipes-to-cook-banner {\n  text-align: center;\n  @include setDimensions(auto, 95%)\n}\n\n.my-recipes-banner h1,\n.welcome-msg h1,\n.recipes-to-cook-banner h1 {\n  color: white;\n  @include setDimensions(auto, 100%)\n}\n\n.my-recipes-banner,\n.recipes-to-cook-banner {\n  display: none;\n  margin-top: 25px;\n}\n\n.welcome-msg {\n  margin-top: 50px;\n}\n",".show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn,\n.recipe-okay-button,\n.recipes-to-cook-btn,\n.cook-recipe-button {\n  background-color: $eucalyptus-green;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: $primary-font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px;\n\n  &:hover {\n    background-color: lighten(#84C8A4, 5%);\n  }\n}\n\n.show-pantry-recipes-btn {\n  margin-top: 10px;\n}\n\n.cook-recipe-button {\n  margin-left: 40%;\n}\n\n.recipes-to-cook-btn {\n  margin-top: 5%;\n}\n\n.show-all-btn {\n  @include setDimensions(40px, 200px);\n  margin-top: 20px;\n}\n\n.recipe-okay-button {\n  display: none;\n}\n","main {\n  grid-area: main;\n  @include displayFlex(row, center, wrap);\n  align-content: flex-start;\n}\n\n.recipe-card {\n  background-color: white;\n  border: 2px solid $inchworm-green;\n  border-radius: 7px;\n  cursor: pointer;\n  @include setDimensions(270px, 250px);\n  margin: 20px;\n  padding: 15px;\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease;\n  }\n\n  &:hover .card-photo-preview {\n    opacity: 50%;\n    transition: .8s ease;\n  }\n\n  &:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: .5s ease;\n    @include setDimensions(auto, 100%)\n  }\n\n  button {\n    background: none;\n    border: none;\n  }\n\n  &:hover h3 {\n    text-shadow: 0px 0px 4px $inchworm-green;\n    transition: .8s ease;\n  }\n}\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  @include setDimensions(50px, 45px);\n  padding-bottom: 10px;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  @include setDimensions(130px, 100%);\n  transition: .8s ease;\n}\n\n.card-photo-container {\n  align-items: center;\n  @include displayFlex(row, center, nowrap);\n  @include setDimensions(130px, auto);\n  position: relative;\n}\n\n.text {\n  background: $eucalyptus-green;\n  color: white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  @include setDimensions(auto, 0%)\n  transition: .5s ease;\n}\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: white;\n  border: 3px solid $inchworm-green;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  @include setDimensions(70%, 70%);\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  z-index: 1000;\n}\n\n#exit-recipe-btn {\n  background: white;\n  border: 2px double $eucalyptus-green;\n  border-radius: 5px;\n  color: $eucalyptus-green;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease;\n  &:hover {\n    background: $inchworm-green;\n    transition: .3s ease;\n  }\n}\n\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n.recipe-instructions h4 {\n  background: white;\n  color: $eucalyptus-green;\n}\n\n.recipe-instructions p {\n  margin-left: 2%;\n}\n\n.recipe-instructions ol {\n  margin-right: 2%;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color: $steel-blue;\n  @include setDimensions(100%, 100%);\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  z-index:100;\n}\n",".drop-menu {\n  align-items: center;\n  background-color: #DAE4EE;\n  display: none;\n  @include setDimensions(600px, 250px);\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  z-index: 3;\n}\n\n.drop-menu h2 {\n  color: $eucalyptus-green;\n  margin: 0px;\n}\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left;\n  display: inline;\n}\n","aside {\n  background-color: white;\n  @include displayFlex(row, center, nowrap);\n  text-align: center;\n}\n\n.wrap {\n  background-color: white;\n  @include setDimensions(100vh, 200px);\n  padding: 10px;\n  position: relative;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n  display: block;\n}\n\nli {\n  margin: 2px;\n}\n\n.filter-dropbtn {\n  background-color: $eucalyptus-green;\n  display: none;\n  border: 0;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  font-family: $primary-font;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}","@import 'variables';\n@import 'header';\n@import 'banner-image';\n@import 'buttons';\n@import 'main';\n@import 'pantry';\n@import 'sidebar';\n\nbody {\n  background-color: $steel-blue;\n  display: grid;\n  font-family: $primary-font;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  @include setDimensions(100vh, auto);\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\nh1 {\n  align-self: center;\n  color: white;\n  font-family: $secondary-font;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0.5% 0.7% 0%;\n  @include setDimensions(auto, 70%)\n}\n\nh2 {\n  color: #84C8A4;\n  margin: 10px 0px 10px 0px;\n}\n\nh3 {\n  color: $eucalyptus-green;\n  cursor: pointer;\n  @include setDimensions(17%, auto);\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease;\n}\n\nh4 {\n  color: $eucalyptus-green;\n  background-color: $inchworm-green;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  @include setDimensions(auto, max-content);\n}\n\n@media screen and (max-width: 800px) {\n  body {\n    background-color: $steel-blue;\n    display: grid;\n    font-family: $primary-font;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: auto;\n    grid-template-areas:\n      \"header header\"\n      \"image image\"\n      \"aside aside\"\n      \"main main\";\n    @include setDimensions(100vh, auto);\n    margin: 0;\n    padding: 0;\n    -webkit-font-smoothing: auto;\n  }\n\n  aside {\n    background-color: white;\n    grid-area: aside;\n    @include displayFlex(row, center, nowrap);\n    text-align: center;\n  }\n\n  .wrap {\n    background-color: white;\n    @include setDimensions(auto, auto);\n    @include displayFlex(column, center, nowrap);\n    padding: 10px;\n    position: relative;\n  }\n\n  .drop-menu {\n    align-items: center;\n    background-color: #DAE4EE;\n    display: none;\n    @include setDimensions(600px, 250px);\n    margin-left: 60%;\n    margin-top: 110px;\n    overflow: scroll;\n    padding: 12px;\n    position: absolute;\n    text-align: center;\n    z-index: 3;\n  }\n\n  .filter-dropbtn {\n    background-color: $eucalyptus-green;\n    display: inline;\n    border: 0;\n    border-radius: 3px;\n    color: white;\n    cursor: pointer;\n    font-family: $primary-font;\n    font-size: 12pt;\n    font-weight: bold;\n    padding: 5px 10px 5px 10px;\n  }\n\n  ul {\n    list-style-type: none;\n    text-align: left;\n    padding-left: 35px;\n    display: none;\n  }\n\n  .cook-recipe-button {\n    margin-left: 30%;\n  }\n\n  .filter-btn {\n    background-color: $eucalyptus-green;\n    display: none;\n    border: 0;\n    border-radius: 3px;\n    color: white;\n    cursor: pointer;\n    font-family: $primary-font;\n    font-size: 12pt;\n    font-weight: bold;\n    padding: 5px 10px 5px 10px;\n\n    &:hover {\n      background-color: #84C8A4;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    body {\n      background-color: $steel-blue;\n      display: grid;\n      font-family: $primary-font;\n      grid-template-columns: 1fr 5fr;\n      grid-template-rows: auto;\n      grid-template-areas:\n        \"header header\"\n        \"image image\"\n        \"aside aside\"\n        \"main main\";\n      @include setDimensions(100vh, auto);\n      margin: 0;\n      padding: 0;\n      -webkit-font-smoothing: auto;\n    }\n\n    header {\n      @include displayFlex(row, center, wrap);\n      grid-area: header;\n      padding: 0% 0%;\n      @include setDimensions(auto, 100%);\n    }\n\n    .drop-menu {\n      align-items: center;\n      background-color: #DAE4EE;\n      display: none;\n      @include setDimensions(600px, 250px);\n      margin-left: 15%;\n      margin-top: 210px;\n      overflow: scroll;\n      padding: 12px;\n      position: absolute;\n      text-align: center;\n      z-index: 3;\n    }\n\n    ul {\n      list-style-type: none;\n      text-align: left;\n      padding-left: 35px;\n      display: none;\n    }\n\n    .cook-recipe-button {\n      margin-left: 20%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ "./src/user.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_js__WEBPACK_IMPORTED_MODULE_0__);


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
          event.target.src = "./images/apple-logo.png";
        } else {
          event.target.src = "./images/apple-logo-outline.png";
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

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchRequests.js":
/*!******************************!*\
  !*** ./src/fetchRequests.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fetchRequests = {
  getIngredients() {
    return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getUsers() {
    return fetch("http://localhost:3001/api/v1/users")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  getRecipes() {
    return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
  },

  postIngredient(user, ingredient) {
    fetch("http://localhost:3001/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userID": user.id,
        "ingredientID": ingredient.ingredient,
        "ingredientModification": ingredient.modification
      }),
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fetchRequests);


/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo-outline.png");

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/ingredient.js":
/*!***************************!*\
  !*** ./src/ingredient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Ingredient {
  constructor(ingredientData) {
    this.id = ingredientData.id;
    this.name = ingredientData.name;
    this.estimatedCostInCents = ingredientData.estimatedCostInCents
  }
}




module.exports = Ingredient;


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Pantry {
  constructor(user, recipe) {
    this.pantry = user.pantry;
  }

  findIngredient(id) {
    return this.pantry.find(ingredient => ingredient.ingredient === id)
  }

  findMissingIngredients(recipe) {
    let missingIngredients = recipe.ingredients.filter(ingredient => {
      return (!this.findIngredient(ingredient.id) ||
      ingredient.quantity.amount > this.findIngredient(ingredient.id).amount)
    })
    this.removePantryIngredients(missingIngredients);
    this.calculateRemainingCost(missingIngredients);
    return missingIngredients;
  }

  calculateRemainingCost(missingIngredients) {
    missingIngredients.forEach(missingIng => {
      missingIng.cost = Math.floor(missingIng.estimatedCostInCents * missingIng.quantity.amount);
      delete missingIng.estimatedCostInCents;
    })
  }

  removePantryIngredients(missingIngredients) {
    missingIngredients.forEach(ingredient => {
      if (this.findIngredient(ingredient.id)) {
        ingredient.quantity.amount -= this.findIngredient(ingredient.id).amount;
      }
    });
    missingIngredients = missingIngredients.filter(ingredient => ingredient.amount > 0)
  }

  removeCookedIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.findIngredient(ingredient.id).amount -= ingredient.quantity.amount;
      this.findIngredient(ingredient.id).modification = (0 - ingredient.quantity.amount);
    })
  }

  cook(recipe) {
    let missingIngredients = this.findMissingIngredients(recipe)
    if (!missingIngredients.length) {
      this.removeCookedIngredients(recipe);
    }
    return missingIngredients;
  }
}

module.exports = Pantry;


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Recipe {
  constructor(recipe, allIngredients) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.instructions = recipe.instructions;
    this.ingredients = this.findIngredients(allIngredients, recipe.ingredients);
  }

  findIngredients(allIngredients, recipeIngredients) {
    const ingredientList = recipeIngredients.reduce((acc, i) => {
      const foundIngredient = allIngredients.find(ingredient => ingredient.id === i.id);
      // foundIngredient.quantity = i.quantity;
      const completeIngredient = {
        id: i.id,
        name: foundIngredient.name,
        estimatedCostInCents: foundIngredient.estimatedCostInCents,
        quantity: i.quantity
      }
      acc.push(completeIngredient);
      return acc;
    }, []);
    return ingredientList;
  }

  listIngredientNames() {
    const ingredientNames = this.ingredients.map(ingredient => ingredient.name);
    return ingredientNames;
  }

  calculateIngredientsCost() {
    return this.ingredients.reduce((sum, ingredient) => {
      return Math.floor(sum + ingredient.estimatedCostInCents * ingredient.quantity.amount);
    }, 0);
  }
}

module.exports = Recipe;


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchRequests */ "./src/fetchRequests.js");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pantry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient */ "./src/ingredient.js");
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ingredient__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");

















const allRecipesBtn = document.querySelector(".show-all-btn");
const allRecipesBtn2 = document.querySelector(".show-all-btn2");
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
const recipesToCookBtn = document.querySelector(".recipes-to-cook-btn");


let viewFavorites = false;
let menuOpen = false;
let viewTags = false;
let viewRecipesToCook = false;
let user;
let recipes;
let ingredients;
let activeSearch;


window.addEventListener("load", loadAllData);
allRecipesBtn.addEventListener("click", showAllRecipes);
allRecipesBtn2.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", reloadRecipes);
main.addEventListener("click", runCardButtons);
pantryBtn.addEventListener("click", toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", pressEnterSearch);
showPantryRecipes.addEventListener("click", reloadRecipes);
searchForm.addEventListener("submit", pressEnterSearch);
tagFilterDropdown.addEventListener("click", toggleFilter);
cookRecipeButton.addEventListener("click", cookRecipe);
recipesToCookBtn.addEventListener("click", showRecipesToCook);
recipeOkayButton.addEventListener("click", returnToRecipeInfo);

function loadAllData() {
  Promise.all([_fetchRequests__WEBPACK_IMPORTED_MODULE_0__["default"].getUsers(), _fetchRequests__WEBPACK_IMPORTED_MODULE_0__["default"].getRecipes(), _fetchRequests__WEBPACK_IMPORTED_MODULE_0__["default"].getIngredients()])
  .then(values => {
    user = generateUser(values[0]);
    user.pantry = generateUserPantry(user);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayWelcomeMessage(user);
    ingredients = generateIngredients(values[2]);
    recipes = generateRecipes(values[1]);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayPantryInfo(generatePantryInfo());
    createCards();
    findTags();
  });
}

//LOAD DATA MODEL
function generateUser(users) {
  return new _user__WEBPACK_IMPORTED_MODULE_3___default.a(users[Math.floor(Math.random() * users.length)]);
}

function generateRecipes(recipes) {
  return recipes.map(recipe => new _recipe__WEBPACK_IMPORTED_MODULE_4___default.a(recipe, ingredients));
}

function generatePantryInfo() {
  let ingredientsInPantry = [];
  user.pantry.pantry.forEach((pantryIng, i) => {
    ingredientsInPantry.push(ingredients.find(ing => ing.id === pantryIng.ingredient));
    ingredientsInPantry[i].amount = pantryIng.amount;
  })
  return ingredientsInPantry.sort((a, b) => a.name.localeCompare(b.name));
}

function generateUserPantry(user) {
  return new _pantry__WEBPACK_IMPORTED_MODULE_5___default.a(user);
}

function generateIngredients(ingredients) {
  return ingredients.map(ingredient => new _ingredient__WEBPACK_IMPORTED_MODULE_6___default.a(ingredient))
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
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].addCard(main, recipe, shortRecipeName, iconStatus);
  });
}

function checkIfSaved(recipe) {
  if (user.favoriteRecipes.includes(recipe.id)) {
    return _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].returnSavedImg();
  } else {
    return _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].returnNormalImg();
  }
}

function reloadRecipes() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].clearCards();
  createCards();
}

function findTags() {
  let tags = new Set(recipes.reduce((tags, recipe) => {
    return tags.concat(recipe.tags).sort();
  }, []));
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].listTags(tags, tagList);
}

function toggleMenu() {
  menuOpen = !menuOpen;
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].toggleMenuVis(menuOpen);
}

function toggleFilter() {
  viewTags = !viewTags;
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].toggleFilterVis(viewTags);
}

function showSavedRecipes() {
  viewFavorites = true;
  viewRecipesToCook = false;
  reloadRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showMyRecipesBanner();
}

function showRecipesToCook() {
  viewRecipesToCook = true;
  viewFavorites = false;
  reloadRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showRecipesToCookBanner();
}

function showAllRecipes() {
  viewRecipesToCook = false;
  viewFavorites = false;
  reloadRecipes();
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].showWelcomeBanner();
}

function cookRecipe() {
  let recipeId = event.target.id;
  let recipe = recipes.find(recipe => recipe.id === Number(recipeId));
  let missingIngredients = user.pantry.cook(recipe);
  if (missingIngredients.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].clearModalView(fullRecipeInfo);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayTotalCostToCook(missingIngredients, fullRecipeInfo);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayMissingIngredients(missingIngredients, cookRecipeButton, fullRecipeInfo, recipeOkayButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipeTitle(recipe, fullRecipeInfo);
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipeImage(recipe);
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayPantryInfo(generatePantryInfo());
    user.addRecipe("recipesToCook", recipeId);
    updateUserPantryAPI(user, recipe);
  }
}

function updateUserPantryAPI(user) {
  user.pantry.pantry.forEach(ingredient => {
    if (ingredient.modification) {
      _fetchRequests__WEBPACK_IMPORTED_MODULE_0__["default"].postIngredient(user, ingredient)
    }
  })
 }

function returnToRecipeInfo() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].returnToRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton);
}

function runCardButtons(event) {
  if (event.target.className === "card-apple-icon") {
    addToMyRecipes(event)
  } else if (event.target.id === "exit-recipe-btn") {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].exitRecipe(fullRecipeInfo, recipeOkayButton);
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipeInfo(event, fullRecipeInfo, recipes, cookRecipeButton, recipeOkayButton);
  }
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes(event) {
  let cardId = parseInt(event.target.closest(".recipe-card").id);
  _domUpdates__WEBPACK_IMPORTED_MODULE_2__["default"].switchImgSrc(user, cardId)
  if (!user.favoriteRecipes.includes(cardId)) {
    user.addRecipe('favoriteRecipes', cardId);
  } else {
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

function filterByRecipesToCook(recipeArray) {
  recipeArray = recipeArray.filter(recipe => {
    return user.recipesToCook.includes(`${recipe.id}`);
  })
  return recipeArray;
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
    recipe.name.toLowerCase().includes(search))
  });
  return recipeArray
}

function filterRecipes(recipeArray) {
  if (activeSearch) {
    recipeArray = filterRecipesBySearch(recipeArray, activeSearch);
  }
  if (findSelected('.checked-tag')) {
    recipeArray = filterRecipesByTag(recipeArray, findSelected('.checked-tag'));
  }
  if (findSelected('.pantry-checkbox')) {
    recipeArray = filterRecipesByPantry(recipeArray, findSelected('.pantry-checkbox'))
  }
  if (viewFavorites) {
    recipeArray = filterRecipesByFavorites(recipeArray);
  }
  if (viewRecipesToCook) {
    recipeArray = filterByRecipesToCook(recipeArray);
  }
  return recipeArray
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addRecipe(array, recipeId) {
    if (!this[array].includes(recipeId)) {
      this[array].push(recipeId)
    }
  }

  removeRecipe(array, recipeId) {
    let i = this[array].indexOf(recipeId);
    this[array].splice(i, 1);
  }
}

module.exports = User;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/N2IyZiIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hSZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nvb2tib29rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zZWFyY2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2Vhc29uaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5ncmVkaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDAlIDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5zcGFuIHtcXG4gIGNvbG9yOiAjQzRFQjY3O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDE1cHg7XFxuICBib3JkZXI6IDNweCBvdXRzZXQgI0M0RUI2NztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVCNzg5NDtcXG4gIGNvbG9yOiAjNUI3ODk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICAjc2VhcmNoLWlucHV0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlOyB9XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM1Qjc4OTQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtc2hhZG93OiBub25lOyB9XFxuXFxuI3NlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNDNEVCNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1Qjc4OTQgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTUlOyB9XFxuICAubmF2LWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiAjQzRFQjY3O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogLjRzIGVhc2U7IH1cXG5cXG4ubmF2LWJ0biBpbWcge1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7IH1cXG5cXG4uc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0M0RUI2NzsgfVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4OyB9XFxuXFxuLmJhbm5lci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIsXFxuLndlbGNvbWUtbXNnLFxcbi5yZWNpcGVzLXRvLWNvb2stYmFubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5NSU7IH1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIgaDEsXFxuLndlbGNvbWUtbXNnIGgxLFxcbi5yZWNpcGVzLXRvLWNvb2stYmFubmVyIGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi5yZWNpcGVzLXRvLWNvb2stYmFubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4sXFxuLnNob3ctYWxsLWJ0bixcXG4uZmlsdGVyLWJ0bixcXG4ucmVjaXBlLW9rYXktYnV0dG9uLFxcbi5yZWNpcGVzLXRvLWNvb2stYnRuLFxcbi5jb29rLXJlY2lwZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IH1cXG4gIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0bjpob3ZlcixcXG4gIC5zaG93LWFsbC1idG46aG92ZXIsXFxuICAuZmlsdGVyLWJ0bjpob3ZlcixcXG4gIC5yZWNpcGUtb2theS1idXR0b246aG92ZXIsXFxuICAucmVjaXBlcy10by1jb29rLWJ0bjpob3ZlcixcXG4gIC5jb29rLXJlY2lwZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZkMGIxOyB9XFxuXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4uY29vay1yZWNpcGUtYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MCU7IH1cXG5cXG4ucmVjaXBlcy10by1jb29rLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcblxcbi5zaG93LWFsbC1idG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5yZWNpcGUtb2theS1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG5cXG4ucmVjaXBlLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7IH1cXG4gIC5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcbiAgLnJlY2lwZS1jYXJkOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucmVjaXBlLWNhcmQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICAucmVjaXBlLWNhcmQ6aG92ZXIgaDMge1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggI0M0RUI2NztcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4uY2FyZC1hcHBsZS1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLmNhcmQtcGhvdG8tY29udGFpbmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlOyB9XFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgI0M0RUI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgei1pbmRleDogMTAwMDsgfVxcblxcbiNleGl0LXJlY2lwZS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcbiAgI2V4aXQtcmVjaXBlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNDNEVCNjc7XFxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrOyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgaDQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogIzM1OTU2NzsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHAge1xcbiAgbWFyZ2luLWxlZnQ6IDIlOyB9XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgb2wge1xcbiAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLmRyb3AtbWVudSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RBRTRFRTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDM7IH1cXG5cXG4uZHJvcC1tZW51IGgyIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgbWFyZ2luOiAwcHg7IH1cXG5cXG4ucGFudHJ5LWxpc3Qge1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7IH1cXG5cXG4uZmlsdGVyLWRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyB9XFxuXFxuLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCNzg5NDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcImltYWdlIGltYWdlXFxcIiBcXFwiYXNpZGUgbWFpblxcXCI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwJTsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFQjY3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IG1heC1jb250ZW50OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3ODk0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcImltYWdlIGltYWdlXFxcIiBcXFwiYXNpZGUgYXNpZGVcXFwiIFxcXCJtYWluIG1haW5cXFwiO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvOyB9XFxuICBhc2lkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBncmlkLWFyZWE6IGFzaWRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLndyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5kcm9wLW1lbnUge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFFNEVFO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IDExMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgei1pbmRleDogMzsgfVxcbiAgLmZpbHRlci1kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IH1cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5jb29rLXJlY2lwZS1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlOyB9XFxuICAuZmlsdGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTk1Njc7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgICAuZmlsdGVyLWJ0bjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Qjc4OTQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwiaW1hZ2UgaW1hZ2VcXFwiIFxcXCJhc2lkZSBhc2lkZVxcXCIgXFxcIm1haW4gbWFpblxcXCI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87IH1cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAwJSAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmRyb3AtbWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgbWFyZ2luLXRvcDogMjEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAzOyB9XFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuY29vay1yZWNpcGUtYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19iYW5uZXItaW1hZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3BhbnRyeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUNhRSxhQUFhO0VBQ2IsbUJEYndCO0VDY3hCLDJCRGRvQztFQ2VwQyxpQkRmNEM7RUFDNUMsaUJBQWlCO0VBQ2pCLGNBQWM7RUNLZCxZREoyQjtFQ0szQixXRExpQyxFQUFBOztBQUduQztFQUNFLGNDTHNCO0VETXRCLGdCQUFnQixFQUFBOztBQUdsQjtFQ0pFLFlESzJCO0VDSjNCLFdESWlDO0VBQ2pDLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtDQUFrQztFQUNsQywwQkNoQnNCO0VEaUJ0QixtQ0FBbUM7RUNQbkMsYUFBYTtFQUNiLG1CRE93QjtFQ054Qix1QkRNZ0M7RUNMaEMsaUJES3dDO0VBQ3hDLG9DQ3RCb0M7RUR1QnBDLHlCQUF5QjtFQ2Z6QixZRGdCMkI7RUNmM0IsV0RlaUMsRUFBQTs7QUFHbkM7RUFDRSx5QkFBeUI7RUFDekIseUdBQStIO0VBQy9ILGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osNENDNUJrQjtFRDZCbEIsY0M3QmtCO0VEOEJsQixvQ0NsQ29DO0VEbUNwQyxlQUFlO0VDM0JmLFlENEIyQjtFQzNCM0IsV0QyQmlDO0VBQ2pDLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0VBYnRCO0lBZUksdUNBQXVDO0lBQ3ZDLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLHVDQUF1QyxFQUFBOztBQUd6QztFQUNFLGNDaERrQjtFRGlEbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFH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QWU7SUFDZixvQ05ySWtDO0lNc0lsQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDBCQUEwQixFQUFBO0lBVjVCO01BYUkseUJBQXlCLEVBQUEsRUFDMUI7O0FBR0g7RUFDRTtJQUNFLHlCTjdJYztJTThJZCxhQUFhO0lBQ2Isb0NObkpnQztJTW9KaEMsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qiw0RUFJYTtJTmxKakIsYU1tSmdDO0lObEpoQyxXTWtKc0M7SUFDbEMsU0FBUztJQUNULFVBQVU7SUFDViw0QkFBNEIsRUFBQTtFQUc5QjtJTnBKRixhQUFhO0lBQ2IsbUJNb0o0QjtJTm5KNUIsdUJNbUpvQztJTmxKcEMsZU1rSjBDO0lBQ3RDLGlCQUFpQjtJQUNqQixjQUFjO0lONUpsQixZTTZKK0I7SU41Si9CLFdNNEpxQyxFQUFBO0VBR25DO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lObktqQixhTW9LZ0M7SU5uS2hDLFlNbUt1QztJQUNuQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFHWjtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTtFQUdmO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgZmxleC1zdGFydCwgbm93cmFwKTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMCUgMCU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDEwMCUpO1xcbn1cXG5cXG5zcGFuIHtcXG4gIGNvbG9yOiAkaW5jaHdvcm0tZ3JlZW47XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyLWFwcGxlLWljb24ge1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg0MHB4LCAzNXB4KTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAkaW5jaHdvcm0tZ3JlZW47XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAwcHggIzQ3NWQ3NDtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBub3dyYXApO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBtYXJnaW46IDEuMiUgMC41JSAxLjIlIDAlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAxMDAlKTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICRzdGVlbC1ibHVlO1xcbiAgY29sb3I6ICRzdGVlbC1ibHVlO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEwMCUsIDEwMCUpXFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4IHdoaXRlO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogJHN0ZWVsLWJsdWU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG4uc2VhcmNoLWxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICRpbmNod29ybS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAkc3RlZWwtYmx1ZSBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAxNSUpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGNvbG9yOiAkaW5jaHdvcm0tZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNHB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAuNHMgZWFzZTtcXG4gIH1cXG59XFxuXFxuLm5hdi1idG4gaW1nIHtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBwYWRkaW5nOiAycHggMHB4O1xcbn1cXG5cXG4uc2F2ZWQtaW5ncmVkaWVudHMtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJGluY2h3b3JtLWdyZWVuO1xcbn1cXG5cXG4uaW5nLXBhbi1idG4ge1xcbiAgbWFyZ2luOiAxJSAwJTtcXG4gIHBhZGRpbmc6IDFweCA2cHggNXB4IDBweDtcXG59XFxuXCIsXCIkcHJpbWFyeS1mb250OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4kc2Vjb25kYXJ5LWZvbnQ6IFxcXCJTdWxwaHVyIFBvaW50XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG4kaW5jaHdvcm0tZ3JlZW46ICNDNEVCNjc7XFxuJHN0ZWVsLWJsdWU6ICM1Qjc4OTQ7XFxuJGV1Y2FseXB0dXMtZ3JlZW46ICMzNTk1Njc7XFxuXFxuQG1peGluIHNldERpbWVuc2lvbnMoJGhlaWdodCwgJHdpZHRoKSB7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB3aWR0aDogJHdpZHRoO1xcbn1cXG5cXG5AbWl4aW4gZGlzcGxheUZsZXgoJGZsZXgtZGlyZWN0aW9uLCAkanVzdGlmeS1jb250ZW50LCAkZmxleC13cmFwKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcXG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcFxcbn1cXG5cIixcIi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjUpLCByZ2JhKDAsMCwwLC41KSksdXJsKFxcXCIuLi9pbWFnZXMvZ3JlZW4tYXBwbGVzLmpwZ1xcXCIpO1xcbiAgZ3JpZC1hcmVhOiBpbWFnZTtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTUwcHgsIDEwMCUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyxcXG4ucmVjaXBlcy10by1jb29rLWJhbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDk1JSlcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSxcXG4ucmVjaXBlcy10by1jb29rLWJhbm5lciBoMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDEwMCUpXFxufVxcblxcbi5teS1yZWNpcGVzLWJhbm5lcixcXG4ucmVjaXBlcy10by1jb29rLWJhbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblwiLFwiLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuLFxcbi5zaG93LWFsbC1idG4sXFxuLmZpbHRlci1idG4sXFxuLnJlY2lwZS1va2F5LWJ1dHRvbixcXG4ucmVjaXBlcy10by1jb29rLWJ0bixcXG4uY29vay1yZWNpcGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRldWNhbHlwdHVzLWdyZWVuO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzg0QzhBNCwgNSUpO1xcbiAgfVxcbn1cXG5cXG4uc2hvdy1wYW50cnktcmVjaXBlcy1idG4ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmNvb2stcmVjaXBlLWJ1dHRvbiB7XFxuICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG5cXG4ucmVjaXBlcy10by1jb29rLWJ0biB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDQwcHgsIDIwMHB4KTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5yZWNpcGUtb2theS1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCJtYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCB3cmFwKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRpbmNod29ybS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMjcwcHgsIDI1MHB4KTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAmOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgfVxcblxcbiAgJjpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIgLnRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIDEwMCUpXFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAmOmhvdmVyIGgzIHtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICRpbmNod29ybS1ncmVlbjtcXG4gICAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxuICB9XFxufVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg1MHB4LCA0NXB4KTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTMwcHgsIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgQGluY2x1ZGUgZGlzcGxheUZsZXgocm93LCBjZW50ZXIsIG5vd3JhcCk7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEzMHB4LCBhdXRvKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogJGV1Y2FseXB0dXMtZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAwJSlcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbn1cXG5cXG4vKiBSRUNJUEUgSU5TVFJVQ1RJT05TICovXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAkaW5jaHdvcm0tZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjaztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDcwJSwgNzAlKTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAkZXVjYWx5cHR1cy1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAkZXVjYWx5cHR1cy1ncmVlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogJGluY2h3b3JtLWdyZWVuO1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcXG4gIH1cXG59XFxuXFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNnB4IGJsYWNrO1xcbn1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyBoNCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiAkZXVjYWx5cHR1cy1ncmVlbjtcXG59XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgcCB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzdGVlbC1ibHVlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygxMDAlLCAxMDAlKTtcXG4gIGxlZnQ6MDtcXG4gIG9wYWNpdHk6MC41O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MDtcXG4gIHotaW5kZXg6MTAwO1xcbn1cXG5cIixcIi5kcm9wLW1lbnUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyg2MDBweCwgMjUwcHgpO1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5kcm9wLW1lbnUgaDIge1xcbiAgY29sb3I6ICRldWNhbHlwdHVzLWdyZWVuO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblwiLFwiYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgbm93cmFwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDEwMHZoLCAyMDBweCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4uZmlsdGVyLWRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGV1Y2FseXB0dXMtZ3JlZW47XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnaGVhZGVyJztcXG5AaW1wb3J0ICdiYW5uZXItaW1hZ2UnO1xcbkBpbXBvcnQgJ2J1dHRvbnMnO1xcbkBpbXBvcnQgJ21haW4nO1xcbkBpbXBvcnQgJ3BhbnRyeSc7XFxuQGltcG9ydCAnc2lkZWJhcic7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RlZWwtYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiaW1hZ2UgaW1hZ2VcXFwiXFxuICAgIFxcXCJhc2lkZSBtYWluXFxcIjtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTAwdmgsIGF1dG8pO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbmgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBtYXJnaW46IDAlO1xcbiAgcGFkZGluZzogMC41JSAwLjclIDAlO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCA3MCUpXFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjODRDOEE0O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcXG59XFxuXFxuaDMge1xcbiAgY29sb3I6ICRldWNhbHlwdHVzLWdyZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygxNyUsIGF1dG8pO1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4O1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbmg0IHtcXG4gIGNvbG9yOiAkZXVjYWx5cHR1cy1ncmVlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRpbmNod29ybS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDtcXG4gIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoYXV0bywgbWF4LWNvbnRlbnQpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGVlbC1ibHVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgXFxcImltYWdlIGltYWdlXFxcIlxcbiAgICAgIFxcXCJhc2lkZSBhc2lkZVxcXCJcXG4gICAgICBcXFwibWFpbiBtYWluXFxcIjtcXG4gICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucygxMDB2aCwgYXV0byk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bztcXG4gIH1cXG5cXG4gIGFzaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtYXJlYTogYXNpZGU7XFxuICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KHJvdywgY2VudGVyLCBub3dyYXApO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAud3JhcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKGF1dG8sIGF1dG8pO1xcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleChjb2x1bW4sIGNlbnRlciwgbm93cmFwKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLmRyb3AtbWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoNjAwcHgsIDI1MHB4KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgfVxcblxcbiAgLmZpbHRlci1kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV1Y2FseXB0dXMtZ3JlZW47XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvb2stcmVjaXBlLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICB9XFxuXFxuICAuZmlsdGVyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRldWNhbHlwdHVzLWdyZWVuO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg0QzhBNDtcXG4gICAgfVxcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN0ZWVsLWJsdWU7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gICAgICAgIFxcXCJhc2lkZSBhc2lkZVxcXCJcXG4gICAgICAgIFxcXCJtYWluIG1haW5cXFwiO1xcbiAgICAgIEBpbmNsdWRlIHNldERpbWVuc2lvbnMoMTAwdmgsIGF1dG8pO1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICBAaW5jbHVkZSBkaXNwbGF5RmxleChyb3csIGNlbnRlciwgd3JhcCk7XFxuICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgICAgcGFkZGluZzogMCUgMCU7XFxuICAgICAgQGluY2x1ZGUgc2V0RGltZW5zaW9ucyhhdXRvLCAxMDAlKTtcXG4gICAgfVxcblxcbiAgICAuZHJvcC1tZW51IHtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUU0RUU7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBAaW5jbHVkZSBzZXREaW1lbnNpb25zKDYwMHB4LCAyNTBweCk7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgICBtYXJnaW4tdG9wOiAyMTBweDtcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuY29vay1yZWNpcGUtYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBVc2VyIGZyb20gJy4vdXNlci5qcyc7XG5cbmNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gICAgLy9XRUxDT01FIE1FU1NBR0VcbiAgICAgZGlzcGxheVdlbGNvbWVNZXNzYWdlKHVzZXIpIHtcbiAgICAgICAgbGV0IGZpcnN0TmFtZSA9IHVzZXIubmFtZS5zcGxpdChcIiBcIilbMF07XG4gICAgICAgIGxldCB3ZWxjb21lTXNnID0gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLW1zZ1wiPlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgJHtmaXJzdE5hbWV9ITwvaDE+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXItaW1hZ2VcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgICAgIHdlbGNvbWVNc2cpO1xuICAgICAgfSxcblxuICAgIC8vUkVDSVBFIENBUkRTXG4gICAgICBhZGRDYXJkKG1haW4sIHJlY2lwZUluZm8sIHNob3J0UmVjaXBlTmFtZSwgaWNvblN0YXR1cykge1xuICAgICAgICBsZXQgY2FyZEh0bWwgPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGVJbmZvLmlkfSA+XG4gICAgICAgICAgICA8aDMgbWF4bGVuZ3RoPVwiNDBcIj4ke3Nob3J0UmVjaXBlTmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGhvdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdGl0bGU9XCJ2aWV3IHJlY2lwZSBpbnN0cnVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke3JlY2lwZUluZm8uaW1hZ2V9IGNsYXNzPVwiY2FyZC1waG90by1wcmV2aWV3XCIgYWx0PVwiJHtyZWNpcGVJbmZvLm5hbWV9IHJlY2lwZVwiIHRpdGxlPVwiJHtyZWNpcGVJbmZvLm5hbWV9IHJlY2lwZVwiPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5DbGljayBmb3IgSW5zdHJ1Y3Rpb25zPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDQ+JHtyZWNpcGVJbmZvLnRhZ3NbMF19PC9oND5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkLWFwcGxlLWljb25cIiB0aXRsZT1cIkFkZCByZWNpcGUgdG8gZmF2b3JpdGVzXCI+JHtpY29uU3RhdHVzfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FyZEh0bWwpO1xuICAgICAgfSxcblxuICAgICAgY2xlYXJDYXJkcygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY2lwZS1jYXJkJykuZm9yRWFjaChjYXJkID0+IGNhcmQucmVtb3ZlKCkpXG4gICAgICB9LFxuXG4gICAgICByZXR1cm5TYXZlZEltZygpIHtcbiAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cIi4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nXCIgYWx0PVwiZmlsbGVkIGFwcGxlIGljb25cIiBjbGFzcz1cImNhcmQtYXBwbGUtaWNvblwiPic7XG4gICAgICB9LFxuXG4gICAgICByZXR1cm5Ob3JtYWxJbWcoKSB7XG4gICAgICAgIHJldHVybiAnPGltZyBzcmM9XCIuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCIgYWx0PVwidW5maWxsZWQgYXBwbGUgaWNvblwiIGNsYXNzPVwiY2FyZC1hcHBsZS1pY29uXCI+JztcbiAgICAgIH0sXG5cbiAgICAgIHN3aXRjaEltZ1NyYyh1c2VyLCBjYXJkSWQpIHtcbiAgICAgICAgaWYgKCF1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhjYXJkSWQpKSB7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWFnZXMvYXBwbGUtbG9nby5wbmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAvL1NJREVCQVJcbiAgICAgIGxpc3RUYWdzKGFsbFRhZ3MsIHRhZ0xpc3QpIHtcbiAgICAgICAgYWxsVGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgbGV0IHRhZ0h0bWwgPSBgPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrZWQtdGFnXCIgaWQ9XCIke3RhZ31cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke3RhZ31cIj4ke3RoaXMuY2FwaXRhbGl6ZSh0YWcpfTwvbGFiZWw+PC9saT5gO1xuICAgICAgICAgIHRhZ0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRhZ0h0bWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAvL1JFQ0lQRSBJTlNUUlVDVElPTlNcbiAgICAgIGRpc3BsYXlSZWNpcGVJbmZvKGV2ZW50LCBmdWxsUmVjaXBlSW5mbywgcmVjaXBlcywgY29va1JlY2lwZUJ1dHRvbiwgcmVjaXBlT2theUJ1dHRvbikge1xuICAgICAgICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICAgICAgbGV0IHJlY2lwZUlkID0gZXZlbnQucGF0aC5maW5kKGUgPT4gZS5pZCkuaWQ7XG4gICAgICAgIGxldCByZWNpcGUgPSByZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gTnVtYmVyKHJlY2lwZUlkKSk7XG4gICAgICAgIGNvb2tSZWNpcGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgcmVjaXBlSWQpO1xuICAgICAgICByZWNpcGVPa2F5QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIHJlY2lwZUlkKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5SW5zdHJ1Y3Rpb25zKHJlY2lwZSwgZnVsbFJlY2lwZUluZm8pO1xuICAgICAgICB0aGlzLmRpc3BsYXlJbmdyZWRpZW50cyhyZWNpcGUsIGZ1bGxSZWNpcGVJbmZvKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5UmVjaXBlVGl0bGUocmVjaXBlLCBmdWxsUmVjaXBlSW5mbyk7XG4gICAgICAgIHRoaXMuZGlzcGxheVJlY2lwZUltYWdlKHJlY2lwZSk7XG4gICAgICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsIFwiPHNlY3Rpb24gaWQ9J292ZXJsYXknPjwvZGl2PlwiKTtcbiAgICAgICAgY29va1JlY2lwZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSxcblxuICAgICAgZGlzcGxheUluZ3JlZGllbnRzKHJlY2lwZSwgZnVsbFJlY2lwZUluZm8pIHtcbiAgICAgICAgbGV0IGluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jYXBpdGFsaXplKGkubmFtZSl9ICgke2kucXVhbnRpdHkuYW1vdW50fSAke2kucXVhbnRpdHkudW5pdH0pYFxuICAgICAgICB9KS5qb2luKFwiLCBcIik7XG4gICAgICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYDxoND5JbmdyZWRpZW50czwvaDQ+IDxwPiR7aW5ncmVkaWVudHN9PC9wPmApXG4gICAgICB9LFxuXG4gICAgICBkaXNwbGF5UmVjaXBlVGl0bGUocmVjaXBlLCBmdWxsUmVjaXBlSW5mbykge1xuICAgICAgICBsZXQgcmVjaXBlVGl0bGUgPSBgXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImV4aXQtcmVjaXBlLWJ0blwiPlg8L2J1dHRvbj5cbiAgICAgICAgICA8aDMgaWQ9XCJyZWNpcGUtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvaDM+YFxuICAgICAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHJlY2lwZVRpdGxlKTtcbiAgICAgIH0sXG5cbiAgICAgIGRpc3BsYXlSZWNpcGVJbWFnZShyZWNpcGUpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNpcGUtdGl0bGVcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JlY2lwZS5pbWFnZX0pYDtcbiAgICAgIH0sXG5cbiAgICAgICBkaXNwbGF5SW5zdHJ1Y3Rpb25zKHJlY2lwZSwgZnVsbFJlY2lwZUluZm8pIHtcbiAgICAgICAgbGV0IGluc3RydWN0aW9uc0xpc3QgPSBcIlwiO1xuICAgICAgICBsZXQgaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucy5tYXAoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkuaW5zdHJ1Y3Rpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgIGluc3RydWN0aW9uc0xpc3QgKz0gYDxsaT4ke2l9PC9saT5gXG4gICAgICAgIH0pO1xuICAgICAgICBmdWxsUmVjaXBlSW5mby5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGA8b2w+JHtpbnN0cnVjdGlvbnNMaXN0fTwvb2w+YCk7XG4gICAgICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXCI8aDQ+SW5zdHJ1Y3Rpb25zPC9oND5cIik7XG4gICAgICAgfSxcblxuICAgICAgIC8vTUlTU0lORyBJTkdSRURJRU5UU1xuICAgICAgIGRpc3BsYXlNaXNzaW5nSW5ncmVkaWVudHMobWlzc2luZ0luZ3JlZGllbnRzLCByZWNpcGVDb29rQnV0dG9uLCBmdWxsUmVjaXBlSW5mbywgcmVjaXBlT2theUJ1dHRvbikge1xuICAgICAgICAgcmVjaXBlQ29va0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICBtaXNzaW5nSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgICAgICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBgPGxpPiR7dGhpcy5jYXBpdGFsaXplKGluZ3JlZGllbnQubmFtZSl9LCAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50fSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH08L2xpPmApXG4gICAgICAgICB9KTtcbiAgICAgICAgIGZ1bGxSZWNpcGVJbmZvLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXCI8aDI+WW91IG5lZWQgdGhlIGZvbGxvd2luZyBpbmdyZWRpZW50cyB0byBjb29rIHRoaXMgbWVhbDo8L2gyPlwiKTtcbiAgICAgICAgIHJlY2lwZU9rYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICB9LFxuXG4gICAgICAgZGlzcGxheVRvdGFsQ29zdFRvQ29vayhtaXNzaW5nSW5ncmVkaWVudHMsIGZ1bGxSZWNpcGVJbmZvKSB7XG4gICAgICAgICBsZXQgcmVjaXBlQ29zdCA9IG1pc3NpbmdJbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgaW5nKSA9PiB7XG4gICAgICAgICAgIHJldHVybiBhY2MgKyBpbmcuY29zdDtcbiAgICAgICAgIH0sIDApO1xuICAgICAgICAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBgPGgyPkNvc3QgJCR7KHJlY2lwZUNvc3QgKiAuMDAxKS50b0ZpeGVkKDIpfS48L2gyPmApO1xuICAgICAgIH0sXG5cbiAgICAgICBjbGVhck1vZGFsVmlldyhmdWxsUmVjaXBlSW5mbykge1xuICAgICAgICAgd2hpbGUgKGZ1bGxSZWNpcGVJbmZvLmNoaWxkTm9kZXMubGVuZ3RoID4gNCkge1xuICAgICAgICAgICBmdWxsUmVjaXBlSW5mby5yZW1vdmVDaGlsZChmdWxsUmVjaXBlSW5mby5maXJzdENoaWxkKTtcbiAgICAgICAgIH1cbiAgICAgICB9LFxuXG4gICAgICAgZXhpdFJlY2lwZShmdWxsUmVjaXBlSW5mbywgcmVjaXBlT2theUJ1dHRvbikge1xuICAgICAgICB0aGlzLmNsZWFyTW9kYWxWaWV3KGZ1bGxSZWNpcGVJbmZvKVxuICAgICAgICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHJlY2lwZU9rYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikucmVtb3ZlKCk7XG4gICAgICB9LFxuXG4gICAgICByZXR1cm5Ub1JlY2lwZUluZm8oZXZlbnQsIGZ1bGxSZWNpcGVJbmZvLCByZWNpcGVzLCBjb29rUmVjaXBlQnV0dG9uLCByZWNpcGVPa2F5QnV0dG9uKSB7XG4gICAgICAgIHRoaXMuY2xlYXJNb2RhbFZpZXcoZnVsbFJlY2lwZUluZm8pO1xuICAgICAgICB0aGlzLmRpc3BsYXlSZWNpcGVJbmZvKGV2ZW50LCBmdWxsUmVjaXBlSW5mbywgcmVjaXBlcywgY29va1JlY2lwZUJ1dHRvbiwgcmVjaXBlT2theUJ1dHRvbik7XG4gICAgICAgIHJlY2lwZU9rYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikucmVtb3ZlKCk7XG4gICAgICB9LFxuXG4gICAgICAvLyBUT0dHTEUgRElTUExBWVNcbiAgICAgICBzaG93TXlSZWNpcGVzQmFubmVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWUtbXNnXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1yZWNpcGVzLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfSxcblxuICAgICAgc2hvd1JlY2lwZXNUb0Nvb2tCYW5uZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGVzLXRvLWNvb2stYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9LFxuXG4gICAgICAgc2hvd1dlbGNvbWVCYW5uZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LXJlY2lwZXMtYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGVzLXRvLWNvb2stYmFubmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0sXG5cbiAgICAgICB0b2dnbGVNZW51VmlzKG1lbnVPcGVuKSB7XG4gICAgICAgIHZhciBtZW51RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtbWVudVwiKTtcbiAgICAgICAgaWYgKG1lbnVPcGVuKSB7XG4gICAgICAgICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlRmlsdGVyVmlzKHZpZXdUYWdzKSB7XG4gICAgICAgIHZhciB0YWdEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWxpc3RcIik7XG4gICAgICAgIHZhciBmaWx0ZXJSZWNpcGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXItYnRuXCIpO1xuICAgICAgICBpZiAodmlld1RhZ3MpIHtcbiAgICAgICAgICB0YWdEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIGZpbHRlclJlY2lwZXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZmlsdGVyUmVjaXBlcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vUEFOVFJZXG4gICAgICAgZGlzcGxheVBhbnRyeUluZm8ocGFudHJ5KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFudHJ5LWxpc3RcIikuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcGFudHJ5LmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICAgICAgbGV0IGluZ3JlZGllbnRIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJwYW50cnktY2hlY2tib3hcIiBpZD1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPiR7aW5ncmVkaWVudC5uYW1lfSwgJHtpbmdyZWRpZW50LmFtb3VudH08L2xhYmVsPjwvbGk+YDtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhbnRyeS1saXN0XCIpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgaW5ncmVkaWVudEh0bWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vU1VQUE9SVFxuICAgICAgY2FwaXRhbGl6ZSh3b3Jkcykge1xuICAgICAgICByZXR1cm4gd29yZHMuc3BsaXQoXCIgXCIpLm1hcCh3b3JkID0+IHtcbiAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSk7XG4gICAgICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiY29uc3QgZmV0Y2hSZXF1ZXN0cyA9IHtcbiAgZ2V0SW5ncmVkaWVudHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50c1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG4gIH0sXG5cbiAgZ2V0VXNlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2Vyc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KGVycm9yKSk7XG4gIH0sXG5cbiAgZ2V0UmVjaXBlcygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3JlY2lwZXNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBhbGVydChlcnJvcikpO1xuICB9LFxuXG4gIHBvc3RJbmdyZWRpZW50KHVzZXIsIGluZ3JlZGllbnQpIHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwidXNlcklEXCI6IHVzZXIuaWQsXG4gICAgICAgIFwiaW5ncmVkaWVudElEXCI6IGluZ3JlZGllbnQuaW5ncmVkaWVudCxcbiAgICAgICAgXCJpbmdyZWRpZW50TW9kaWZpY2F0aW9uXCI6IGluZ3JlZGllbnQubW9kaWZpY2F0aW9uXG4gICAgICB9KSxcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoUmVxdWVzdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXBwbGUtbG9nby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jb29rYm9vay5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2VhcmNoLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXNvbmluZy5wbmdcIjsiLCJjbGFzcyBJbmdyZWRpZW50IHtcbiAgY29uc3RydWN0b3IoaW5ncmVkaWVudERhdGEpIHtcbiAgICB0aGlzLmlkID0gaW5ncmVkaWVudERhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gaW5ncmVkaWVudERhdGEubmFtZTtcbiAgICB0aGlzLmVzdGltYXRlZENvc3RJbkNlbnRzID0gaW5ncmVkaWVudERhdGEuZXN0aW1hdGVkQ29zdEluQ2VudHNcbiAgfVxufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEluZ3JlZGllbnQ7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCByZWNpcGUpIHtcbiAgICB0aGlzLnBhbnRyeSA9IHVzZXIucGFudHJ5O1xuICB9XG5cbiAgZmluZEluZ3JlZGllbnQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5wYW50cnkuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaW5ncmVkaWVudCA9PT0gaWQpXG4gIH1cblxuICBmaW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSkge1xuICAgIGxldCBtaXNzaW5nSW5ncmVkaWVudHMgPSByZWNpcGUuaW5ncmVkaWVudHMuZmlsdGVyKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuICghdGhpcy5maW5kSW5ncmVkaWVudChpbmdyZWRpZW50LmlkKSB8fFxuICAgICAgaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQgPiB0aGlzLmZpbmRJbmdyZWRpZW50KGluZ3JlZGllbnQuaWQpLmFtb3VudClcbiAgICB9KVxuICAgIHRoaXMucmVtb3ZlUGFudHJ5SW5ncmVkaWVudHMobWlzc2luZ0luZ3JlZGllbnRzKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZ0Nvc3QobWlzc2luZ0luZ3JlZGllbnRzKTtcbiAgICByZXR1cm4gbWlzc2luZ0luZ3JlZGllbnRzO1xuICB9XG5cbiAgY2FsY3VsYXRlUmVtYWluaW5nQ29zdChtaXNzaW5nSW5ncmVkaWVudHMpIHtcbiAgICBtaXNzaW5nSW5ncmVkaWVudHMuZm9yRWFjaChtaXNzaW5nSW5nID0+IHtcbiAgICAgIG1pc3NpbmdJbmcuY29zdCA9IE1hdGguZmxvb3IobWlzc2luZ0luZy5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIG1pc3NpbmdJbmcucXVhbnRpdHkuYW1vdW50KTtcbiAgICAgIGRlbGV0ZSBtaXNzaW5nSW5nLmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICAgIH0pXG4gIH1cblxuICByZW1vdmVQYW50cnlJbmdyZWRpZW50cyhtaXNzaW5nSW5ncmVkaWVudHMpIHtcbiAgICBtaXNzaW5nSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmZpbmRJbmdyZWRpZW50KGluZ3JlZGllbnQuaWQpKSB7XG4gICAgICAgIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50IC09IHRoaXMuZmluZEluZ3JlZGllbnQoaW5ncmVkaWVudC5pZCkuYW1vdW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1pc3NpbmdJbmdyZWRpZW50cyA9IG1pc3NpbmdJbmdyZWRpZW50cy5maWx0ZXIoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmFtb3VudCA+IDApXG4gIH1cblxuICByZW1vdmVDb29rZWRJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuZmluZEluZ3JlZGllbnQoaW5ncmVkaWVudC5pZCkuYW1vdW50IC09IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgdGhpcy5maW5kSW5ncmVkaWVudChpbmdyZWRpZW50LmlkKS5tb2RpZmljYXRpb24gPSAoMCAtIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KTtcbiAgICB9KVxuICB9XG5cbiAgY29vayhyZWNpcGUpIHtcbiAgICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gdGhpcy5maW5kTWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSlcbiAgICBpZiAoIW1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29va2VkSW5ncmVkaWVudHMocmVjaXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pc3NpbmdJbmdyZWRpZW50cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbnRyeTtcbiIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSwgYWxsSW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGUuaW1hZ2U7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlLnRhZ3M7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSB0aGlzLmZpbmRJbmdyZWRpZW50cyhhbGxJbmdyZWRpZW50cywgcmVjaXBlLmluZ3JlZGllbnRzKTtcbiAgfVxuXG4gIGZpbmRJbmdyZWRpZW50cyhhbGxJbmdyZWRpZW50cywgcmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICBjb25zdCBpbmdyZWRpZW50TGlzdCA9IHJlY2lwZUluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBpKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZEluZ3JlZGllbnQgPSBhbGxJbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4gaW5ncmVkaWVudC5pZCA9PT0gaS5pZCk7XG4gICAgICAvLyBmb3VuZEluZ3JlZGllbnQucXVhbnRpdHkgPSBpLnF1YW50aXR5O1xuICAgICAgY29uc3QgY29tcGxldGVJbmdyZWRpZW50ID0ge1xuICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgbmFtZTogZm91bmRJbmdyZWRpZW50Lm5hbWUsXG4gICAgICAgIGVzdGltYXRlZENvc3RJbkNlbnRzOiBmb3VuZEluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMsXG4gICAgICAgIHF1YW50aXR5OiBpLnF1YW50aXR5XG4gICAgICB9XG4gICAgICBhY2MucHVzaChjb21wbGV0ZUluZ3JlZGllbnQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGluZ3JlZGllbnRMaXN0O1xuICB9XG5cbiAgbGlzdEluZ3JlZGllbnROYW1lcygpIHtcbiAgICBjb25zdCBpbmdyZWRpZW50TmFtZXMgPSB0aGlzLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQubmFtZSk7XG4gICAgcmV0dXJuIGluZ3JlZGllbnROYW1lcztcbiAgfVxuXG4gIGNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKHN1bSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Ioc3VtICsgaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY2lwZTtcbiIsImltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IEluZ3JlZGllbnQgZnJvbSAnLi9pbmdyZWRpZW50JztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2VhcmNoLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tib29rLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3NlYXNvbmluZy5wbmcnO1xuXG5cblxuY29uc3QgYWxsUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvdy1hbGwtYnRuXCIpO1xuY29uc3QgYWxsUmVjaXBlc0J0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctYWxsLWJ0bjJcIik7XG5jb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlci1idG5cIik7XG5jb25zdCBmdWxsUmVjaXBlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjaXBlLWluc3RydWN0aW9uc1wiKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IHBhbnRyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcGFudHJ5LWJ0blwiKTtcbmNvbnN0IHNhdmVkUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZWQtcmVjaXBlcy1idG5cIik7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idG5cIik7XG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuY29uc3Qgc2hvd1BhbnRyeVJlY2lwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuXCIpO1xuY29uc3QgdGFnTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFnLWxpc3RcIik7XG5jb25zdCB0YWdGaWx0ZXJEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyLWRyb3BidG5cIik7XG5jb25zdCBjb29rUmVjaXBlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29rLXJlY2lwZS1idXR0b25cIik7XG5jb25zdCByZWNpcGVPa2F5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGUtb2theS1idXR0b25cIik7XG5jb25zdCByZWNpcGVzVG9Db29rQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNpcGVzLXRvLWNvb2stYnRuXCIpO1xuXG5cbmxldCB2aWV3RmF2b3JpdGVzID0gZmFsc2U7XG5sZXQgbWVudU9wZW4gPSBmYWxzZTtcbmxldCB2aWV3VGFncyA9IGZhbHNlO1xubGV0IHZpZXdSZWNpcGVzVG9Db29rID0gZmFsc2U7XG5sZXQgdXNlcjtcbmxldCByZWNpcGVzO1xubGV0IGluZ3JlZGllbnRzO1xubGV0IGFjdGl2ZVNlYXJjaDtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgbG9hZEFsbERhdGEpO1xuYWxsUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFJlY2lwZXMpO1xuYWxsUmVjaXBlc0J0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxSZWNpcGVzKTtcbmZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVsb2FkUmVjaXBlcyk7XG5tYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBydW5DYXJkQnV0dG9ucyk7XG5wYW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xuc2F2ZWRSZWNpcGVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2F2ZWRSZWNpcGVzKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJlc3NFbnRlclNlYXJjaCk7XG5zaG93UGFudHJ5UmVjaXBlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVsb2FkUmVjaXBlcyk7XG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgcHJlc3NFbnRlclNlYXJjaCk7XG50YWdGaWx0ZXJEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRmlsdGVyKTtcbmNvb2tSZWNpcGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvb2tSZWNpcGUpO1xucmVjaXBlc1RvQ29va0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1JlY2lwZXNUb0Nvb2spO1xucmVjaXBlT2theUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV0dXJuVG9SZWNpcGVJbmZvKTtcblxuZnVuY3Rpb24gbG9hZEFsbERhdGEoKSB7XG4gIFByb21pc2UuYWxsKFtmZXRjaFJlcXVlc3RzLmdldFVzZXJzKCksIGZldGNoUmVxdWVzdHMuZ2V0UmVjaXBlcygpLCBmZXRjaFJlcXVlc3RzLmdldEluZ3JlZGllbnRzKCldKVxuICAudGhlbih2YWx1ZXMgPT4ge1xuICAgIHVzZXIgPSBnZW5lcmF0ZVVzZXIodmFsdWVzWzBdKTtcbiAgICB1c2VyLnBhbnRyeSA9IGdlbmVyYXRlVXNlclBhbnRyeSh1c2VyKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlXZWxjb21lTWVzc2FnZSh1c2VyKTtcbiAgICBpbmdyZWRpZW50cyA9IGdlbmVyYXRlSW5ncmVkaWVudHModmFsdWVzWzJdKTtcbiAgICByZWNpcGVzID0gZ2VuZXJhdGVSZWNpcGVzKHZhbHVlc1sxXSk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5SW5mbyhnZW5lcmF0ZVBhbnRyeUluZm8oKSk7XG4gICAgY3JlYXRlQ2FyZHMoKTtcbiAgICBmaW5kVGFncygpO1xuICB9KTtcbn1cblxuLy9MT0FEIERBVEEgTU9ERUxcbmZ1bmN0aW9uIGdlbmVyYXRlVXNlcih1c2Vycykge1xuICByZXR1cm4gbmV3IFVzZXIodXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlY2lwZXMocmVjaXBlcykge1xuICByZXR1cm4gcmVjaXBlcy5tYXAocmVjaXBlID0+IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50cykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBhbnRyeUluZm8oKSB7XG4gIGxldCBpbmdyZWRpZW50c0luUGFudHJ5ID0gW107XG4gIHVzZXIucGFudHJ5LnBhbnRyeS5mb3JFYWNoKChwYW50cnlJbmcsIGkpID0+IHtcbiAgICBpbmdyZWRpZW50c0luUGFudHJ5LnB1c2goaW5ncmVkaWVudHMuZmluZChpbmcgPT4gaW5nLmlkID09PSBwYW50cnlJbmcuaW5ncmVkaWVudCkpO1xuICAgIGluZ3JlZGllbnRzSW5QYW50cnlbaV0uYW1vdW50ID0gcGFudHJ5SW5nLmFtb3VudDtcbiAgfSlcbiAgcmV0dXJuIGluZ3JlZGllbnRzSW5QYW50cnkuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVXNlclBhbnRyeSh1c2VyKSB7XG4gIHJldHVybiBuZXcgUGFudHJ5KHVzZXIpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUluZ3JlZGllbnRzKGluZ3JlZGllbnRzKSB7XG4gIHJldHVybiBpbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudCA9PiBuZXcgSW5ncmVkaWVudChpbmdyZWRpZW50KSlcbn1cblxuXG4vL0NBTEwgZG9tVXBkYXRlc1xuZnVuY3Rpb24gY3JlYXRlQ2FyZHMoKSB7XG4gIGxldCByZWNpcGVBcnJheSA9IGZpbHRlclJlY2lwZXMocmVjaXBlcyk7XG4gIHJlY2lwZUFycmF5LmZvckVhY2gocmVjaXBlID0+IHtcbiAgICBsZXQgc2hvcnRSZWNpcGVOYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgbGV0IGljb25TdGF0dXMgPSBjaGVja0lmU2F2ZWQocmVjaXBlKTtcbiAgICBpZiAocmVjaXBlLm5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgIHNob3J0UmVjaXBlTmFtZSA9IHJlY2lwZS5uYW1lLnN1YnN0cmluZygwLCA0MCkgKyBcIi4uLlwiO1xuICAgIH1cbiAgICBkb21VcGRhdGVzLmFkZENhcmQobWFpbiwgcmVjaXBlLCBzaG9ydFJlY2lwZU5hbWUsIGljb25TdGF0dXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZlNhdmVkKHJlY2lwZSkge1xuICBpZiAodXNlci5mYXZvcml0ZVJlY2lwZXMuaW5jbHVkZXMocmVjaXBlLmlkKSkge1xuICAgIHJldHVybiBkb21VcGRhdGVzLnJldHVyblNhdmVkSW1nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvbVVwZGF0ZXMucmV0dXJuTm9ybWFsSW1nKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsb2FkUmVjaXBlcygpIHtcbiAgZG9tVXBkYXRlcy5jbGVhckNhcmRzKCk7XG4gIGNyZWF0ZUNhcmRzKCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYWdzKCkge1xuICBsZXQgdGFncyA9IG5ldyBTZXQocmVjaXBlcy5yZWR1Y2UoKHRhZ3MsIHJlY2lwZSkgPT4ge1xuICAgIHJldHVybiB0YWdzLmNvbmNhdChyZWNpcGUudGFncykuc29ydCgpO1xuICB9LCBbXSkpO1xuICBkb21VcGRhdGVzLmxpc3RUYWdzKHRhZ3MsIHRhZ0xpc3QpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICBtZW51T3BlbiA9ICFtZW51T3BlbjtcbiAgZG9tVXBkYXRlcy50b2dnbGVNZW51VmlzKG1lbnVPcGVuKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmlsdGVyKCkge1xuICB2aWV3VGFncyA9ICF2aWV3VGFncztcbiAgZG9tVXBkYXRlcy50b2dnbGVGaWx0ZXJWaXModmlld1RhZ3MpO1xufVxuXG5mdW5jdGlvbiBzaG93U2F2ZWRSZWNpcGVzKCkge1xuICB2aWV3RmF2b3JpdGVzID0gdHJ1ZTtcbiAgdmlld1JlY2lwZXNUb0Nvb2sgPSBmYWxzZTtcbiAgcmVsb2FkUmVjaXBlcygpO1xuICBkb21VcGRhdGVzLnNob3dNeVJlY2lwZXNCYW5uZXIoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1JlY2lwZXNUb0Nvb2soKSB7XG4gIHZpZXdSZWNpcGVzVG9Db29rID0gdHJ1ZTtcbiAgdmlld0Zhdm9yaXRlcyA9IGZhbHNlO1xuICByZWxvYWRSZWNpcGVzKCk7XG4gIGRvbVVwZGF0ZXMuc2hvd1JlY2lwZXNUb0Nvb2tCYW5uZXIoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FsbFJlY2lwZXMoKSB7XG4gIHZpZXdSZWNpcGVzVG9Db29rID0gZmFsc2U7XG4gIHZpZXdGYXZvcml0ZXMgPSBmYWxzZTtcbiAgcmVsb2FkUmVjaXBlcygpO1xuICBkb21VcGRhdGVzLnNob3dXZWxjb21lQmFubmVyKCk7XG59XG5cbmZ1bmN0aW9uIGNvb2tSZWNpcGUoKSB7XG4gIGxldCByZWNpcGVJZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgbGV0IHJlY2lwZSA9IHJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIocmVjaXBlSWQpKTtcbiAgbGV0IG1pc3NpbmdJbmdyZWRpZW50cyA9IHVzZXIucGFudHJ5LmNvb2socmVjaXBlKTtcbiAgaWYgKG1pc3NpbmdJbmdyZWRpZW50cy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLmNsZWFyTW9kYWxWaWV3KGZ1bGxSZWNpcGVJbmZvKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlUb3RhbENvc3RUb0Nvb2sobWlzc2luZ0luZ3JlZGllbnRzLCBmdWxsUmVjaXBlSW5mbyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWlzc2luZ0luZ3JlZGllbnRzKG1pc3NpbmdJbmdyZWRpZW50cywgY29va1JlY2lwZUJ1dHRvbiwgZnVsbFJlY2lwZUluZm8sIHJlY2lwZU9rYXlCdXR0b24pO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZVRpdGxlKHJlY2lwZSwgZnVsbFJlY2lwZUluZm8pO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZUltYWdlKHJlY2lwZSk7XG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5SW5mbyhnZW5lcmF0ZVBhbnRyeUluZm8oKSk7XG4gICAgdXNlci5hZGRSZWNpcGUoXCJyZWNpcGVzVG9Db29rXCIsIHJlY2lwZUlkKTtcbiAgICB1cGRhdGVVc2VyUGFudHJ5QVBJKHVzZXIsIHJlY2lwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVXNlclBhbnRyeUFQSSh1c2VyKSB7XG4gIHVzZXIucGFudHJ5LnBhbnRyeS5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgIGlmIChpbmdyZWRpZW50Lm1vZGlmaWNhdGlvbikge1xuICAgICAgZmV0Y2hSZXF1ZXN0cy5wb3N0SW5ncmVkaWVudCh1c2VyLCBpbmdyZWRpZW50KVxuICAgIH1cbiAgfSlcbiB9XG5cbmZ1bmN0aW9uIHJldHVyblRvUmVjaXBlSW5mbygpIHtcbiAgZG9tVXBkYXRlcy5yZXR1cm5Ub1JlY2lwZUluZm8oZXZlbnQsIGZ1bGxSZWNpcGVJbmZvLCByZWNpcGVzLCBjb29rUmVjaXBlQnV0dG9uLCByZWNpcGVPa2F5QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcnVuQ2FyZEJ1dHRvbnMoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2FyZC1hcHBsZS1pY29uXCIpIHtcbiAgICBhZGRUb015UmVjaXBlcyhldmVudClcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZXhpdC1yZWNpcGUtYnRuXCIpIHtcbiAgICBkb21VcGRhdGVzLmV4aXRSZWNpcGUoZnVsbFJlY2lwZUluZm8sIHJlY2lwZU9rYXlCdXR0b24pO1xuICB9IGVsc2UgaWYgKGlzRGVzY2VuZGFudChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKSwgZXZlbnQudGFyZ2V0KSkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVJlY2lwZUluZm8oZXZlbnQsIGZ1bGxSZWNpcGVJbmZvLCByZWNpcGVzLCBjb29rUmVjaXBlQnV0dG9uLCByZWNpcGVPa2F5QnV0dG9uKTtcbiAgfVxufVxuXG4vLyBGQVZPUklURSBSRUNJUEUgRlVOQ1RJT05BTElUWVxuZnVuY3Rpb24gYWRkVG9NeVJlY2lwZXMoZXZlbnQpIHtcbiAgbGV0IGNhcmRJZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnJlY2lwZS1jYXJkXCIpLmlkKTtcbiAgZG9tVXBkYXRlcy5zd2l0Y2hJbWdTcmModXNlciwgY2FyZElkKVxuICBpZiAoIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKGNhcmRJZCkpIHtcbiAgICB1c2VyLmFkZFJlY2lwZSgnZmF2b3JpdGVSZWNpcGVzJywgY2FyZElkKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyLnJlbW92ZVJlY2lwZSgnZmF2b3JpdGVSZWNpcGVzJywgY2FyZElkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICBsZXQgbm9kZSA9IGNoaWxkO1xuICB3aGlsZSAobm9kZSAhPT0gbnVsbCkge1xuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy9GSUxURVJJTkcgQU5EIFNFQVJDSElOR1xuZnVuY3Rpb24gcHJlc3NFbnRlclNlYXJjaChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBhY3RpdmVTZWFyY2ggPSBzZWFyY2hJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICByZWxvYWRSZWNpcGVzKCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckJ5UmVjaXBlc1RvQ29vayhyZWNpcGVBcnJheSkge1xuICByZWNpcGVBcnJheSA9IHJlY2lwZUFycmF5LmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiB1c2VyLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMoYCR7cmVjaXBlLmlkfWApO1xuICB9KVxuICByZXR1cm4gcmVjaXBlQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclJlY2lwZXNCeUZhdm9yaXRlcyhyZWNpcGVBcnJheSkge1xuICByZWNpcGVBcnJheSA9IHJlY2lwZUFycmF5LmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiB1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUuaWQpO1xuICB9KVxuICByZXR1cm4gcmVjaXBlQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTZWxlY3RlZChjaGVja2JveENsYXNzKSB7XG4gIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjaGVja2JveENsYXNzKTtcbiAgbGV0IGNoZWNrYm94SW5mbyA9IEFycmF5LmZyb20oY2hlY2tib3hlcyk7XG4gIHJldHVybiBjaGVja2JveEluZm8uZmlsdGVyKGJveCA9PiB7XG4gICAgcmV0dXJuIGJveC5jaGVja2VkO1xuICB9KVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJSZWNpcGVzQnlUYWcocmVjaXBlQXJyYXksIHNlbGVjdGVkKSB7XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICByZWNpcGVBcnJheSA9IHJlY2lwZUFycmF5LmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnLmlkKSk7XG4gIH0pXG4gIHJldHVybiByZWNpcGVBcnJheTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmVjaXBlc0J5UGFudHJ5KHJlY2lwZUFycmF5LCBzZWxlY3RlZCkge1xuICBzZWxlY3RlZC5mb3JFYWNoKGluZyA9PiB7XG4gICAgcmVjaXBlQXJyYXkgPSByZWNpcGVBcnJheS5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS5saXN0SW5ncmVkaWVudE5hbWVzKCkuaW5jbHVkZXMoaW5nLmlkKSk7XG4gIH0pXG4gIHJldHVybiByZWNpcGVBcnJheTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmVjaXBlc0J5U2VhcmNoKHJlY2lwZUFycmF5LCBzZWFyY2gpIHtcbiAgcmVjaXBlQXJyYXkgPSByZWNpcGVBcnJheS5maWx0ZXIocmVjaXBlID0+IHtcbiAgICByZXR1cm4gKHJlY2lwZS5saXN0SW5ncmVkaWVudE5hbWVzKCkuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaW5jbHVkZXMoc2VhcmNoKSkgfHxcbiAgICByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpXG4gIH0pO1xuICByZXR1cm4gcmVjaXBlQXJyYXlcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmVjaXBlcyhyZWNpcGVBcnJheSkge1xuICBpZiAoYWN0aXZlU2VhcmNoKSB7XG4gICAgcmVjaXBlQXJyYXkgPSBmaWx0ZXJSZWNpcGVzQnlTZWFyY2gocmVjaXBlQXJyYXksIGFjdGl2ZVNlYXJjaCk7XG4gIH1cbiAgaWYgKGZpbmRTZWxlY3RlZCgnLmNoZWNrZWQtdGFnJykpIHtcbiAgICByZWNpcGVBcnJheSA9IGZpbHRlclJlY2lwZXNCeVRhZyhyZWNpcGVBcnJheSwgZmluZFNlbGVjdGVkKCcuY2hlY2tlZC10YWcnKSk7XG4gIH1cbiAgaWYgKGZpbmRTZWxlY3RlZCgnLnBhbnRyeS1jaGVja2JveCcpKSB7XG4gICAgcmVjaXBlQXJyYXkgPSBmaWx0ZXJSZWNpcGVzQnlQYW50cnkocmVjaXBlQXJyYXksIGZpbmRTZWxlY3RlZCgnLnBhbnRyeS1jaGVja2JveCcpKVxuICB9XG4gIGlmICh2aWV3RmF2b3JpdGVzKSB7XG4gICAgcmVjaXBlQXJyYXkgPSBmaWx0ZXJSZWNpcGVzQnlGYXZvcml0ZXMocmVjaXBlQXJyYXkpO1xuICB9XG4gIGlmICh2aWV3UmVjaXBlc1RvQ29vaykge1xuICAgIHJlY2lwZUFycmF5ID0gZmlsdGVyQnlSZWNpcGVzVG9Db29rKHJlY2lwZUFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVjaXBlQXJyYXlcbn1cbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgdGhpcy5pZCA9IHVzZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlci5uYW1lO1xuICAgIHRoaXMucGFudHJ5ID0gdXNlci5wYW50cnk7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMgPSBbXTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBbXTtcbiAgfVxuXG4gIGFkZFJlY2lwZShhcnJheSwgcmVjaXBlSWQpIHtcbiAgICBpZiAoIXRoaXNbYXJyYXldLmluY2x1ZGVzKHJlY2lwZUlkKSkge1xuICAgICAgdGhpc1thcnJheV0ucHVzaChyZWNpcGVJZClcbiAgICB9XG4gIH1cblxuICByZW1vdmVSZWNpcGUoYXJyYXksIHJlY2lwZUlkKSB7XG4gICAgbGV0IGkgPSB0aGlzW2FycmF5XS5pbmRleE9mKHJlY2lwZUlkKTtcbiAgICB0aGlzW2FycmF5XS5zcGxpY2UoaSwgMSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==