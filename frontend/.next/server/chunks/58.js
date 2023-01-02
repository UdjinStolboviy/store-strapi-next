"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button)
});

// UNUSED EXPORTS: DangerButton, PrimaryButton, SecondaryButton, WarningButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./components/styles.ts
var styles = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Button/Button.tsx




const getColors = (theme, color)=>{
    switch(color){
        case "secondary":
            return react_.css`
        color: ${theme.font.regular};
      `;
        case "primary":
        case "danger":
            return react_.css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
        case "warning":
            return react_.css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `;
        default:
            return react_.css``;
    }
};
const Button = (styled_default()).button`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  ${styles/* borderRadius */.E0};
  ${({ theme , color  })=>getColors(theme, color)};
  &:hover {
    opacity: 0.9;
  }
  ${(0,styles/* transition */.eR)()}
  ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2)}
  &:active {
    ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2, true)}
  }
`;
Button.defaultProps = {
    color: "primary"
};
const PrimaryButton = (props)=>/*#__PURE__*/ _jsx(Button, {
        color: "primary",
        ...props
    });
const SecondaryButton = (props)=>/*#__PURE__*/ _jsx(Button, {
        color: "secondary",
        ...props
    });
const DangerButton = (props)=>/*#__PURE__*/ _jsx(Button, {
        color: "danger",
        ...props
    });
const WarningButton = (props)=>/*#__PURE__*/ _jsx(Button, {
        color: "warning",
        ...props
    });

;// CONCATENATED MODULE: ./components/Button/index.ts



/***/ })

};
;