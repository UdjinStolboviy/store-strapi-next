"use strict";
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 4966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ CenteredTile)
});

// UNUSED EXPORTS: Tile

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./components/styles.ts
var styles = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/Tile/Tile.tsx



const Section = (styled_default()).section`
  ${styles/* borderRadius */.E0};
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme  })=>theme.background};
  color: ${({ theme  })=>theme.font.regular};
  ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2)}
`;
const Tile = ({ header , children , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: header
            }),
            children
        ]
    });

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/Tile/CenteredTile.tsx




const CommonStyles = react_.css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = (styled_default()).div`
  ${CommonStyles};
`;
const StyledTile = styled_default()(Tile)`
  ${CommonStyles};
  flex-flow: column;
`;
const CenteredTile = ({ children , header , ...rest })=>/*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        ...rest,
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledTile, {
            header: header,
            children: children
        })
    });

;// CONCATENATED MODULE: ./components/Tile/index.ts




/***/ })

};
;