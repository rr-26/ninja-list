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
exports.id = "pages/Ninjalist";
exports.ids = ["pages/Ninjalist"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"Home_title__T09hD\",\n\t\"text\": \"Home_text__upzyl\",\n\t\"btn\": \"Home_btn__UGRT9\",\n\t\"single\": \"Home_single__w_OJc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmluamFsaXN0Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJ0ZXh0XCI6IFwiSG9tZV90ZXh0X191cHp5bFwiLFxuXHRcImJ0blwiOiBcIkhvbWVfYnRuX19VR1JUOVwiLFxuXHRcInNpbmdsZVwiOiBcIkhvbWVfc2luZ2xlX193X09KY1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/Ninjalist.js":
/*!****************************!*\
  !*** ./pages/Ninjalist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// import styles from '../styles/glo'\n\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    return {\n        props: {\n            Ninjas: data\n        }\n    };\n};\nconst ninjalist = ({ Ninjas  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Ninja List | Ninja Listing\"\n                    }, void 0, false, {\n                        fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"ninjas\"\n                    }, void 0, false, {\n                        fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"All Ninjas List \"\n                    }, void 0, false, {\n                        fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    Ninjas.map((ninja)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().single),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: ninja.name\n                                }, void 0, false, {\n                                    fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, undefined)\n                        }, ninja.id, false, {\n                            fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/Ninjalist.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ninjalist);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OaW5qYWxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUM3QixxQ0FBcUM7QUFDUztBQUd2QyxNQUFNRSxjQUFjLEdBQUcsVUFBWTtJQUV0QyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3JFLE1BQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUU3QixPQUFPO1FBQ0hDLEtBQUssRUFBRztZQUFDQyxNQUFNLEVBQUdILElBQUk7U0FBQztLQUMxQjtDQUNKO0FBR0QsTUFBTUksU0FBUyxHQUFHLENBQUMsRUFBQ0QsTUFBTSxHQUFDLEdBQUs7SUFDNUIscUJBQ0k7OzBCQUNJLDhEQUFDUixrREFBSTs7a0NBQ0QsOERBQUNVLE9BQUs7a0NBQUMsNEJBQTBCOzs7OztpQ0FBUTtrQ0FDekMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBRyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsUUFBUTs7Ozs7aUNBQUU7Ozs7Ozt5QkFDdkM7MEJBQ1AsOERBQUNDLEtBQUc7O2tDQUNBLDhEQUFDQyxJQUFFO2tDQUFDLGtCQUFnQjs7Ozs7aUNBQUs7b0JBQ3hCUCxNQUFNLENBQUNRLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxpQkFDYiw4REFBQ0gsS0FBRztzQ0FDQSw0RUFBQ0ksR0FBQztnQ0FBQ0MsU0FBUyxFQUFFbEIsdUVBQWE7MENBQ3ZCLDRFQUFDb0IsSUFBRTs4Q0FBR0osS0FBSyxDQUFDTCxJQUFJOzs7Ozs2Q0FBTzs7Ozs7eUNBQ3ZCOzJCQUhHSyxLQUFLLENBQUNLLEVBQUU7Ozs7cUNBSWIsQ0FDUjs7Ozs7O3lCQUNBOztvQkFDUCxDQUNMO0NBQ0w7QUFFRCxpRUFBZWIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmluamFsaXN0Ly4vcGFnZXMvTmluamFsaXN0LmpzP2ZlN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZ2xvJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHMgOiB7TmluamFzIDogZGF0YX1cbiAgICB9XG59XG5cblxuY29uc3QgbmluamFsaXN0ID0gKHtOaW5qYXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5OaW5qYSBMaXN0IHwgTmluamEgTGlzdGluZzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZSA9IFwia2V5d29yZHNcIiBjb250ZW50PVwibmluamFzXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+QWxsIE5pbmphcyBMaXN0IDwvaDE+XG4gICAgICAgICAgICAgICAge05pbmphcy5tYXAobmluamEgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT0ge25pbmphLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnNpbmdsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnsgbmluamEubmFtZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IG5pbmphbGlzdDsiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwiTmluamFzIiwibmluamFsaXN0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkaXYiLCJoMSIsIm1hcCIsIm5pbmphIiwiYSIsImNsYXNzTmFtZSIsInNpbmdsZSIsImgzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Ninjalist.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Ninjalist.js"));
module.exports = __webpack_exports__;

})();