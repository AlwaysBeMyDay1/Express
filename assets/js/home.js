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

/***/ "./src/client/js/home.js":
/*!*******************************!*\
  !*** ./src/client/js/home.js ***!
  \*******************************/
/***/ (() => {

eval("var timer = document.querySelector(\".content timer\");\nvar timerTime = document.querySelector(\".content_timer_time\");\nvar timerBtn = document.querySelector(\"#timer_button\");\nvar currentDate = document.querySelector(\".content_top\");\nvar run = 0;\n\nfunction startTimer(clickedTime) {\n  var date = new Date();\n  var sumOfTime = parseInt((date.getTime() - clickedTime) / 1000);\n  var hours = parseInt(sumOfTime / 3600);\n  var minutes = parseInt(sumOfTime % 3600 / 60);\n  var seconds = parseInt(sumOfTime % 3600 % 60);\n  timerTime.innerText = \"\".concat(String(hours).padStart(2, \"0\"), \" : \").concat(String(minutes).padStart(2, \"0\"), \" : \").concat(String(seconds).padStart(2, \"0\"));\n}\n\nfunction paintTime(event) {\n  var timerInterval;\n\n  if (timerBtn.innerText == \"정지\") {\n    timerBtn.innerText = \"재개\";\n    clearInterval(timerInterval);\n  } else {\n    timerBtn.innerText = \"정지\";\n    var date = new Date();\n    var clickedTime = date.getTime();\n    timerInterval = setInterval(function () {\n      startTimer(clickedTime);\n    }, 1000);\n    console.log(timerInterval);\n  }\n}\n\ntimerBtn.addEventListener('click', paintTime);\n\nfunction paintCurrentDate() {\n  var date = new Date();\n  var year = date.getFullYear();\n  var month = date.getMonth();\n  var dateToday = date.getDate();\n  currentDate.innerText = \"\".concat(String(year), \". \").concat(String(month).padStart(2, \"0\"), \". \").concat(String(dateToday).padStart(2, \"0\"));\n}\n\npaintCurrentDate();\n\n//# sourceURL=webpack://web/./src/client/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home.js"]();
/******/ 	
/******/ })()
;