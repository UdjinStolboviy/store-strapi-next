"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ StyledLink)
});

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/StyledLink/StyledLink.tsx

const StyledLink = (styled_default()).a`
  all: unset;
  cursor: pointer;
  color: ${({ theme  })=>theme.font.regular};
  text-decoration: ${({ underline  })=>underline ? "underline" : "none"};
  &:hover {
    opacity: 0.7;
  }
`;

;// CONCATENATED MODULE: ./components/StyledLink/index.ts



/***/ })

};
;