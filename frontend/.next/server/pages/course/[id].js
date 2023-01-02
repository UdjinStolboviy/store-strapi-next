"use strict";
(() => {
var exports = {};
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 5893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E0": () => (/* binding */ borderRadius),
/* harmony export */   "Wn": () => (/* binding */ boxShadow),
/* harmony export */   "eR": () => (/* binding */ transition)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);

// https://github.com/styled-components/styled-components/issues/397
const boxShadow = (shadowColor1, shadowColor2, inset = false)=>{
    const insetStr = inset ? "inset" : "";
    return _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
    box-shadow: ${insetStr} 0.5vmin 0.5vmin 1vmin ${shadowColor1},
      ${insetStr} -0.5vmin -0.5vmin 1vmin ${shadowColor2};
  `;
};
const borderRadius = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
  border-radius: 1rem;
`;
const transition = ()=>_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`
    transition: all 0.4s ease;
  `;


/***/ }),

/***/ 3783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
// EXTERNAL MODULE: ./components/Tile/index.ts + 2 modules
var Tile = __webpack_require__(4966);
// EXTERNAL MODULE: ./pages/course/styled-course.tsx
var styled_course = __webpack_require__(9275);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
;// CONCATENATED MODULE: ./pages/course/[id].tsx









const getStaticPaths = async ()=>{
    try {
        const api_url = "https://172b-88-19-238-70.eu.ngrok.io/api";
        const res = await fetch(`${api_url}/courses?populate=*`, {
            method: "GET"
        });
        const response = await res.json();
        const status = response?.error?.status;
        if (status && (status < 200 || status >= 300)) {
            return {
                paths: [],
                fallback: true
            };
        }
        const paths = response.data.map(({ id  })=>`/course/${id}`);
        return {
            paths,
            fallback: true
        };
    } catch (e) {
        console.log(e);
        return {
            paths: [],
            fallback: true
        };
    }
};
const getStaticProps = async (context)=>{
    try {
        const api_url = "https://172b-88-19-238-70.eu.ngrok.io/api";
        const id = context?.params?.id;
        const res = await fetch(`${api_url}/courses/${id}?populate=*`, {
            method: "GET"
        });
        const { error , data , meta  } = await res.json();
        if (error && (error?.status < 200 || error?.status >= 300)) {
            return {
                props: {
                    course: {},
                    meta: {}
                }
            };
        }
        const md = new (external_markdown_it_default())();
        return {
            props: {
                course: {
                    ...data,
                    attributes: {
                        ...data.attributes,
                        description: md.render(data.attributes.description)
                    }
                },
                meta: meta
            }
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                course: {},
                meta: {}
            }
        };
    }
};
const strapi_url = "https://172b-88-19-238-70.eu.ngrok.io";
const CoursePage = ({ course  })=>{
    const router = (0,router_.useRouter)();
    if (!router.isFallback && !course) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    if (course && course?.attributes) {
        const { attributes: { header , link , description , publishedAt , cover: { data: { attributes: { formats: { large: { url , width  }  }  }  }  }  }  } = course;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                            children: [
                                "Course: ",
                                header
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: header
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tile/* CenteredTile */.m, {
                    header: header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(styled_course["default"], {
                            maxWidth: `${width}px`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                layout: "fill",
                                alt: `Cover for ${header}`,
                                src: `${strapi_url}${url}`,
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link,
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(styled_course.CustomLinkCourse, {
                                children: "Enroll now!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                maxWidth: width
                            },
                            dangerouslySetInnerHTML: {
                                __html: description
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link,
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(styled_course.CustomLinkCourse, {
                                children: "Enroll now!"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: new Date(publishedAt).toDateString()
                        })
                    ]
                })
            ]
        });
    }
    return null;
};
/* harmony default export */ const _id_ = (CoursePage);


/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomLinkCourse": () => (/* binding */ CustomLinkCourse),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StyledLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2206);


const ImageContainerCourse = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth  })=>maxWidth};
  height: 30vw;
`;
const CustomLinkCourse = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_components_StyledLink__WEBPACK_IMPORTED_MODULE_1__/* .StyledLink */ .F)`
  text-decoration: underline;
  font-size: 2rem;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageContainerCourse);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,272,675,206,966], () => (__webpack_exec__(3783)));
module.exports = __webpack_exports__;

})();