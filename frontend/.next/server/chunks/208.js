"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c2": () => (/* reexport */ Courses)
});

// UNUSED EXPORTS: Course, Wrapper

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./components/styles.ts
var styles = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/StyledLink/index.ts + 1 modules
var StyledLink = __webpack_require__(2206);
;// CONCATENATED MODULE: ./components/Course/Course.tsx






const Section = (styled_default()).section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2vmin;
  background: ${({ theme  })=>theme.background};
  color: ${({ theme  })=>theme.font.regular};
  ${styles/* borderRadius */.E0};
  ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2)};
`;
const CourseLink = styled_default()(StyledLink/* StyledLink */.F)`
  display: flex;
  width: 94vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`;
const Course = ({ children , header , link , imageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        legacyBehavior: true,
        href: link,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(CourseLink, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        ...imageProps,
                        alt: header
                    }),
                    children
                ]
            })
        })
    });
const Wrapper = (styled_default()).div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin: 2vh 1vw;
`;
const Courses = ({ courses , strapi_url  })=>/*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: courses?.map(({ id , attributes: { header , subtitle , publishedAt , cover: { data: { attributes: { formats: { medium: { url , width , height  }  }  }  }  }  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Course, {
                header: header,
                link: `/course/${id}`,
                imageProps: {
                    width,
                    height,
                    alt: `Cover for ${header}`,
                    src: `${strapi_url}${url}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: subtitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("time", {
                        dateTime: publishedAt,
                        children: new Date(publishedAt).toDateString()
                    })
                ]
            }, id))
    });

;// CONCATENATED MODULE: ./components/Course/index.ts



/***/ }),

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

/***/ 4146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);

const api_url = "https://172b-88-19-238-70.eu.ngrok.io/api";
const fetchWithTimeout = (url, options, timeout)=>{
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout error")), timeout))
    ]);
};
class ApiService {
    getVacancies() {
        return this.makeRequest(`${api_url}/api/jobs`, "GET");
    }
    getFeedbacks(q) {
        const defaultQuery = {
            pagination: {
                page: 2,
                pageSize: 3
            },
            sort: [
                "publishedAt:desc"
            ]
        };
        const query = q ? qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(q) : qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(defaultQuery);
        return this.makeRequest(`${api_url}/api/fecks?${query}`, "GET");
    }
    getInstagramPosts(q) {
        return this.makeRequest(`${api_url}/inssts`, "GET");
    }
    getPost(id) {
        return this.makeRequest(`${api_url}/posts/${id}?populate=adminior.img,mainImg`, "GET");
    }
    getPosts(limit) {
        return this.makeRequest(`${api_url}/posts?populate=administrator,administrator.img,mainImpagination[limit]=${limit}`, "GET");
    }
    getProduct() {
        return this.makeRequest(`${api_url}/courses?populate=*`, "GET");
    }
    async searchProduct(q) {
        const query = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify({
            populate: "*",
            filters: {
                $or: [
                    {
                        header: {
                            $containsi: q
                        }
                    },
                    {
                        subtitle: {
                            $containsi: q
                        }
                    },
                    {
                        description: {
                            $containsi: q
                        }
                    }
                ]
            }
        }, {
            encodeValuesOnly: true
        });
        const res = await fetch(`${api_url}/courses?${query}`, {
            method: "GET",
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.statusText === "OK") {
            const result = res && await res.json();
            return result;
        } else {
            return {};
        }
    }
    // public createLoginRequest = (
    //     jwt: string | null,
    //     loginData: LoginData | undefined
    // ) => {
    //     if (jwt && !loginData) {
    //         return fetch(`${api_url}/users/me`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${jwt}`,
    //             },
    //         });
    //     }
    //     if (loginData) {
    //         return fetch(`${api_url}/auth/local`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(loginData),
    //         });
    //     }
    //     throw { error: "Invalid login request" };
    // };
    async makeRequest(url, method, requestBody, headerOptions) {
        const body = !(requestBody instanceof FormData) ? JSON.stringify(requestBody) : requestBody;
        const requestHeaders = headerOptions || {};
        const headers = {
            accept: "application/json",
            ...requestHeaders
        };
        if (!(requestBody instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }
        const response = await fetchWithTimeout(url, {
            method,
            headers,
            body
        }, 15000);
        if (response.ok) {
            const resJson = await response.json();
            return resJson;
        } else {
            console.log("response", response);
            throw await response;
        }
    }
}


/***/ })

};
;