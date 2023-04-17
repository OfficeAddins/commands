/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./commands.js":
/*!*********************!*\
  !*** ./commands.js ***!
  \*********************/
/***/ (() => {

eval("Office.onReady = function (reason) {};\nfunction ButtonPressedFunction(event) {\n  try {\n    Excel.run(async ctx => {\n      const _range = ctx.workbook.getSelectedRange();\n      _range.format.fill.color = \"yellow\";\n      ctx.sync();\n    });\n  } catch (error) {\n    console.error(error);\n  }\n  event.completed();\n}\nOffice.actions.associate(\"ButtonPressedEvent\", ButtonPressedFunction);\n\n//# sourceURL=webpack://ribbon-commands/./commands.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./commands.js"]();
/******/ 	
/******/ })()
;