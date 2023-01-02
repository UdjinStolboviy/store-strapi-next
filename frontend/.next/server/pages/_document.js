"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 1458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./styles/global.ts

const GlobalStyles = react_.css`
  html,
  body {
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
    background-color: var(--themeBackgroundColor);
    color: var(--themeColor);
  }

 .body-not-scroll {
     overflow: hidden;
 }


 a {
     color: inherit;
     text-decoration: none;
 }

 * {
     box-sizing: border-box;
 }

 body,
 h1,
 h2,
 h3,
 h4,
 p,
 ul,
 ol,
 li,
 figure,
 figcaption,
 blockquote,
 dl,
 dd {
     margin: 0;
     padding: 0;
 }

 ul {
     list-style: none;
 }

 main {
 }

 @media screen and (min-width:320px) and (max-width:740px) {

     h1,
     h2,
     h3 {
         text-align: center;
         overflow: hidden;
         text-overflow: ellipsis;
     }
 }
`;

;// CONCATENATED MODULE: ./pages/_document.tsx




function Document() {
    const setInitialTheme = `
    var theme = localStorage.getItem("theme");
    var themeExistsInStorage = Boolean(theme !== null);

    var isDark = themeExistsInStorage ?
      Boolean(theme === "dark") :
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    var backgroundColor = isDark ? "#5e5c64" : "#e4ebf5";
    var textColor = isDark ? "#E4EBF5e6" : "#504e55e6";

    document.documentElement.style.setProperty("--themeBackgroundColor", backgroundColor);
    document.documentElement.style.setProperty("--themeColor", textColor);
  `;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Poppins|Monoton&display=swap"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: setInitialTheme
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Global, {
                        styles: GlobalStyles
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,859], () => (__webpack_exec__(1458)));
module.exports = __webpack_exports__;

})();