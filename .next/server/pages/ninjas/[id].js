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
exports.id = "pages/ninjas/[id]";
exports.ids = ["pages/ninjas/[id]"];
exports.modules = {

/***/ "./pages/ninjas/[id].js":
/*!******************************!*\
  !*** ./pages/ninjas/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    const paths = data.map((ninja)=>{\n        return {\n            params: {\n                id: ninja.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n    const data = await res.json();\n    return {\n        props: {\n            ninja: data\n        }\n    };\n};\nconst Details = ({ ninja  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: ninja.name\n            }, void 0, false, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/ninjas/[id].js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.email\n            }, void 0, false, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/ninjas/[id].js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.website\n            }, void 0, false, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/ninjas/[id].js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.address.city\n            }, void 0, false, {\n                fileName: \"/home/hp/nextjs/ninjalist/pages/ninjas/[id].js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hp/nextjs/ninjalist/pages/ninjas/[id].js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uaW5qYXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQU8sTUFBTUEsY0FBYyxHQUFHLFVBQVk7SUFDdEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUNyRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFN0IsTUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO1FBQzVCLE9BQU87WUFDSEMsTUFBTSxFQUFFO2dCQUFDQyxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBQztTQUNwQztLQUNKLENBQUM7SUFDRixPQUFPO1FBQ0hMLEtBQUs7UUFDTE0sUUFBUSxFQUFFLEtBQUs7S0FDbEI7Q0FDSjtBQUVNLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFPLEdBQUs7SUFDN0MsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUM1QixNQUFNUixHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHTyxFQUFFLENBQUM7SUFDM0UsTUFBTU4sSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRTdCLE9BQU87UUFDSFUsS0FBSyxFQUFFO1lBQUNQLEtBQUssRUFBRUosSUFBSTtTQUFDO0tBQ3ZCO0NBRUo7QUFHRCxNQUFNWSxPQUFPLEdBQUcsQ0FBQyxFQUFDUixLQUFLLEdBQUMsR0FBSztJQUN6QixxQkFDSSw4REFBQ1MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUVWLEtBQUssQ0FBQ1csSUFBSTs7Ozs7eUJBQU07MEJBQ3JCLDhEQUFDQyxHQUFDOzBCQUFFWixLQUFLLENBQUNhLEtBQUs7Ozs7O3lCQUFLOzBCQUNwQiw4REFBQ0QsR0FBQzswQkFBRVosS0FBSyxDQUFDYyxPQUFPOzs7Ozt5QkFBSzswQkFDdEIsOERBQUNGLEdBQUM7MEJBQUVaLEtBQUssQ0FBQ2UsT0FBTyxDQUFDQyxJQUFJOzs7Ozt5QkFBSzs7Ozs7O2lCQUN6QixDQUNQO0NBQ047QUFFRCxpRUFBZVIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmluamFsaXN0Ly4vcGFnZXMvbmluamFzL1tpZF0uanM/NTc3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKG5pbmphID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge2lkOiBuaW5qYS5pZC50b1N0cmluZygpfVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8nICsgaWQpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtuaW5qYTogZGF0YX1cbiAgICB9XG5cbn1cblxuXG5jb25zdCBEZXRhaWxzID0gKHtuaW5qYX0pID0+IHtcbiAgICByZXR1cm4gKCBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57bmluamEubmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+e25pbmphLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxwPntuaW5qYS53ZWJzaXRlfTwvcD5cbiAgICAgICAgICAgIDxwPntuaW5qYS5hZGRyZXNzLmNpdHl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IERldGFpbHM7Il0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwibmluamEiLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsIkRldGFpbHMiLCJkaXYiLCJoMSIsIm5hbWUiLCJwIiwiZW1haWwiLCJ3ZWJzaXRlIiwiYWRkcmVzcyIsImNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ninjas/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ninjas/[id].js"));
module.exports = __webpack_exports__;

})();