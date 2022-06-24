"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cookbook";
exports.ids = ["pages/api/cookbook"];
exports.modules = {

/***/ "(api)/./pages/api/cookbook.ts":
/*!*******************************!*\
  !*** ./pages/api/cookbook.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_ingredients_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/ingredients.json */ \"(api)/./data/ingredients.json\");\n\nfunction handler(req, res) {\n    res.status(200).json(_data_ingredients_json__WEBPACK_IMPORTED_MODULE_0__);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29va2Jvb2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFMEQ7QUFPM0MsU0FBU0MsT0FBTyxDQUMzQkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzVCO0lBQ0VBLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLG1EQUFlLENBQUMsQ0FBQztDQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyaWluay1jb2RpbmctdGFzay8uL3BhZ2VzL2FwaS9jb29rYm9vay50cz9hNThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBJbmdyZWRpZW50cyB9IGZyb20gXCIuLi8uLi90eXBlcy9pbmdyZWRpZW50c1wiO1xuaW1wb3J0IEluZ3JlZGllbnRzSnNvbiBmcm9tIFwiLi4vLi4vZGF0YS9pbmdyZWRpZW50cy5qc29uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSB7XG4gICAgbWFpbl9pbmdyZWRpZW50czogSW5ncmVkaWVudHNbXTtcbiAgICBvdGhlcl9pbmdyZWRpZW50czogSW5ncmVkaWVudHNbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihJbmdyZWRpZW50c0pzb24pO1xufVxuIl0sIm5hbWVzIjpbIkluZ3JlZGllbnRzSnNvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/cookbook.ts\n");

/***/ }),

/***/ "(api)/./data/ingredients.json":
/*!*******************************!*\
  !*** ./data/ingredients.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"main_ingredients":[{"name":"Paprika","color":"red"},{"name":"Aubergine","color":"purple"}],"other_ingredients":[{"name":"Paprika","color":"red"},{"name":"Aubergine","color":"purple"},{"name":"Pumpkin","color":"orange"},{"name":"Lemon","color":"yellow"},{"name":"Spinach","color":"green"},{"name":"Blueberries","color":"blue"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cookbook.ts"));
module.exports = __webpack_exports__;

})();