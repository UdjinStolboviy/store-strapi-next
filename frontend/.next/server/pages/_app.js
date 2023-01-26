"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eC": () => (/* reexport */ ConditionalFeedback),
  "II": () => (/* reexport */ Input/* Input */.I)
});

// UNUSED EXPORTS: Feedback

// EXTERNAL MODULE: ./components/Input/Input.tsx
var Input = __webpack_require__(5634);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/Input/Feedback/Feedback.tsx


const Feedback = (styled_default()).span`
  color: ${({ isValid , theme  })=>isValid ? theme.font.valid : theme.font.invalid};
`;
const ConditionalFeedback = ({ children  })=>children ? /*#__PURE__*/ jsx_runtime_.jsx(Feedback, {
        children: children
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "\xa0"
    });

;// CONCATENATED MODULE: ./components/Input/Feedback/index.ts


;// CONCATENATED MODULE: ./components/Input/index.ts




/***/ }),

/***/ 4809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* reexport */ Logo)
});

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/Logo/Logo.tsx


const Logo = (styled_default()).header`
  font-family: Monoton;
  font-size: ${({ size =3  })=>`${size}rem`};
  ${({ theme , size =3  })=>{
    return react_.css`
      color: ${theme.font.logo};
      text-shadow: 0 0 ${0.1 * size}rem ${theme.font.logoShadow1},
        0 0 ${0.05 * size}rem ${theme.font.logoShadow2},
        0 0 ${0.07 * size}rem ${theme.font.logoShadow2},
        0 0 ${0.08 * size}rem ${theme.font.logoShadow2},
        0 0 ${0.1 * size}rem ${theme.font.logoShadow2};
    `;
}}
`;

;// CONCATENATED MODULE: ./components/Logo/index.ts



/***/ }),

/***/ 3909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./services/userSlice.ts
var userSlice = __webpack_require__(6759);
;// CONCATENATED MODULE: ./services/cartSlice.ts

const clearCart = (0,toolkit_.createAsyncThunk)("cart/clear", async ()=>clearCartLocalStorage());
const initialState = {
    cart: [],
    infoUser: ""
};
const cartSlice = (0,toolkit_.createSlice)({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(clearCart.fulfilled, ()=>initialState);
        builder.addMatcher((action)=>/\/(login|registration)\/fulfilled$/.test(action.type), (state, { payload  })=>{
            state.requestState = "fulfilled";
            state.cart = payload.cart;
            state.infoUser = payload.infoUser;
            state.error = undefined;
        }).addMatcher((action)=>action.type.endsWith("/pending"), (state)=>{
            state.requestState = "pending";
        }).addMatcher((action)=>action.type.endsWith("/rejected"), (state, { payload  })=>{
            const payloadError = payload?.error;
            state.error = payloadError;
            state.requestState = "rejected";
        });
    }
});
const { actions , reducer  } = cartSlice;
const selectCart = ({ cart  })=>cart;
const api_url = (/* unused pure expression or super */ null && ("https://e227-88-18-255-33.eu.ngrok.io/api"));
const clearCartLocalStorage = ()=>{
    localStorage.removeItem("cart");
    localStorage.removeItem("infoUser");
};
const setupCartToLocalStorage = (result)=>{
    const cart = JSON.stringify(result.cart);
    localStorage.setItem("cart", cart);
    localStorage.setItem("infoUser", result.infoUser);
}; // export const addCart = createAsyncThunk<CartPayload, LoginData | undefined>(
 //     "cart/add",
 //     async (loginData, { rejectWithValue }) => {
 //         try {
 //             setupCartToLocalStorage(result);
 //             return result;
 //         } catch (error) {
 //             clearUserInfoFromLocalStorage();
 //             return rejectWithValue(error);
 //         }
 //     }
 // );

;// CONCATENATED MODULE: ./store.ts



const rootReducer = {
    user: userSlice/* userSlice.reducer */.sv.reducer,
    cart: cartSlice.reducer
};
const store = (0,toolkit_.configureStore)({
    reducer: rootReducer
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./styles/themes.ts
// AppTheme is basic type for the themes based on dark theme
const dark = {
    name: "dark",
    background: "#5e5c64",
    components: {
        background: "#7a7880",
        shadow1: "#504e55",
        shadow2: "#6c6a73",
        active: "#e4ebf5",
        nonActive: "#9baacf",
        primary: "#6d5dfc",
        danger: "#dc3545e6",
        warning: "#ffca2ce6;"
    },
    font: {
        regular: "#E4EBF5e6",
        button: "#E4EBF5e6",
        placeholder: "#bec8e4",
        warning: "#5e5c64e6",
        valid: "#6FF173",
        invalid: "#FFCCD0",
        logo: "#ff9933",
        logoShadow1: "#fed028",
        logoShadow2: "#880f22"
    }
};
const light = {
    name: "light",
    background: "#e4ebf5",
    components: {
        background: "#DEE7F2",
        shadow1: "#c8d0e7",
        shadow2: "#FFFFFF",
        active: "#e4ebf5",
        nonActive: "#9baacf",
        primary: "#6d5dfc",
        danger: "#dc3545e6",
        warning: "#ffca2ce6;"
    },
    font: {
        regular: "#504e55e6",
        button: "#E4EBF5e6",
        placeholder: "#504e55e6",
        warning: "#504e55e6",
        valid: "#1F784E",
        invalid: "#BF3845",
        logo: "#ffffff",
        logoShadow1: "#000000",
        logoShadow2: "#6d5dfc"
    }
};
const Themes = {
    dark,
    light
};

// EXTERNAL MODULE: ./components/IconButton/index.ts + 1 modules
var IconButton = __webpack_require__(393);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./components/StyledLink/index.ts + 1 modules
var StyledLink = __webpack_require__(2206);
// EXTERNAL MODULE: ./components/Logo/index.ts + 1 modules
var Logo = __webpack_require__(4809);
// EXTERNAL MODULE: ./components/Input/index.ts + 2 modules
var Input = __webpack_require__(3322);
;// CONCATENATED MODULE: ./components/Layout/components.ts




const Wrapper = (styled_default()).div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme  })=>theme.font.regular};
  background-color: ${({ theme  })=>theme.background};
  padding: 0.5rem;
 // border: 4px solid #000;
  
  grid-template-areas:
    "header  nav"
    "search  search"
    "content content"
    "footer  footer";
  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 2vmin;
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-areas:
      "header  search  nav"
      "content content content"
      "footer  footer  footer";
  }
`;
const LogoLink = styled_default()(StyledLink/* StyledLink */.F)`
  padding-right: 1vw;
`;
const StyledLogo = styled_default()(Logo/* Logo */.T)`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  & .logo_full {
    display: none;
  }
  @media (min-width: 560px) {
    & .logo_short {
      display: none;
    }
    & .logo_full {
      display: inline;
    }
  }
`;
const MainNav = (styled_default()).nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2vmin;
`;
const SearchInput = styled_default()(Input/* Input */.II)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;
const Content = (styled_default()).main`
  grid-area: content;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;
const Footer = (styled_default()).footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

// EXTERNAL MODULE: ./components/styles.ts
var styles = __webpack_require__(5893);
;// CONCATENATED MODULE: ./styles/style-guide/Colors.tsx
const Colors = {
    Basic: {
        white: "#FFFFFF",
        black: "#000000",
        black900: "#1A1A1A",
        black60: "#F0F0F0"
    },
    Brand: {
        purple: "#A057A2",
        blue: "#3D5DA9",
        green: "#80C242",
        red: "#E9262A",
        orange: "#FF810C",
        yellow: "#FFCD0C"
    },
    Gradient: {
        purple: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #A057A2",
        blue: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #3D5DA9",
        red: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #E9262A",
        green: " linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #80C242",
        yellow: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #FFCD0C",
        orange: "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%), #FF810C"
    }
};

;// CONCATENATED MODULE: ./styles/style-guide/Fount.tsx
const FontStyles = {
    title: {
        h1: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "70px",
            lineHeight: "84px"
        },
        h2: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "64px",
            lineHeight: "76px"
        },
        h3: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "60px"
        },
        h4: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "36px",
            lineHeight: "44px"
        },
        h5: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "32px"
        },
        h6: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
            lineHeight: "28px"
        }
    },
    tab: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "24px"
    },
    subheading: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "36px"
    },
    quote: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "58px"
    },
    paragraph: {
        paragraph1: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "28px"
        },
        paragraph2: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "24px"
        }
    },
    counter: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "80px",
        lineHeight: "96px"
    },
    link: {
        huge: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "72px",
            lineHeight: "86px"
        },
        defoult: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "17px",
            lineHeight: "24px"
        },
        nav: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "15px",
            lineHeight: "20px"
        },
        small: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "16px"
        }
    },
    percentageIncrease: "10%"
};

;// CONCATENATED MODULE: ./styles/style-guide/index.tsx


const StyleGuide = {
    Colors: Colors,
    FontStyles: FontStyles
};
/* harmony default export */ const style_guide = (StyleGuide);

;// CONCATENATED MODULE: ./components/footer/styles.tsx



const FooterMobileStyled = (styled_default()).footer`
  grid-area: footer;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 95%;
  transform: translate(-50%, 0%);
  padding: 10px 10px 10px 10px;
  border-radius: 90px;
  border: 0.5px solid ${({ theme  })=>theme.components.shadow2};
  background: ${({ theme  })=>theme.background};
  ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2)};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const FooterDesktopStyled = (styled_default()).footer`
  grid-area: footer;
  padding: 30px 96px 30px 96px;
  border-radius: 90px;
  border: 0.5px solid ${({ theme  })=>theme.components.shadow2};
  background: ${({ theme  })=>theme.background};
  ${({ theme  })=>(0,styles/* boxShadow */.Wn)(theme.components.shadow1, theme.components.shadow2)};
  @media screen and (max-width: 768px) {
    display: none;
  }
  & div {
    width: 100%;
    transform: translateY();
    color: ${({ theme  })=>theme.font.regular};
    background-color: ${({ theme  })=>theme.background};
    display: flex;
    flex-direction: column;
  }
  & nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & .footer-wrapper-privacy {
    padding-top: 30px;
    padding-bottom: 32px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .footer-privacy li {
      margin-left: 30px;
    }
    & ul {
      display: flex;
      justify-content: flex-end;

      & li:last-of-type {
      }
      & li {
        & a {
          color: ${style_guide.Colors.Basic.black};
          transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        }
        & a:hover {
          color: #9e279b;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 739px) {
    padding: 0 46px;
    nav {
      flex-direction: column;
      align-items: center;
    }
    ul {
      margin: 0 auto;
    }
    & p {
      margin-bottom: 24px;
    }
    & div {
      flex-direction: column;
      align-items: center;
      padding-bottom: 34px;
    }
  }
  @media screen and (max-width: 374px) {
    min-width: 375px;
  }
`;
const StyleSocialList = (styled_default()).ul`
  margin: 0 auto;
  z-index: 4;
  display: flex;
  width: 60%;
  justify-content: flex-end;

  & li {
    margin-right: 50px;
  }
  & li:last-of-type {
    margin-right: 0;
  }

  @media screen and (min-width: 740px) and (max-width: 1200px) {
    margin: 0 auto;
    z-index: 4;
    max-width: 1240px;
    display: flex;
    width: 50%;
    text-align: start;
    justify-content: flex-end;

    & li {
      margin-right: 50px;
    }
    & li:last-of-type {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 740px) {
    padding: 30px 15px;
    width: 100%;
    margin: 0 auto;
    & li:first-of-type {
      margin-left: auto;
    }
    & li:last-of-type {
      margin-right: auto;
    }
    & li {
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 380px) {
    padding: 30px 15px;
    width: 100%;
    margin: 0 auto;
    & li:first-of-type {
      margin-left: auto;
    }
    & li:last-of-type {
      margin-right: auto;
    }
    & li {
      margin-right: 30px;
    }
  }
`;
const StyleEmail = (styled_default()).div`
  height: 100%;

  & a {
    font-size: ${style_guide.FontStyles.title.h5.fontSize};
    font-weight: ${style_guide.FontStyles.title.h5.fontWeight};
    font-style: ${style_guide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #9e279b;
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    width: 40%;
    & a {
      font-size: ${style_guide.FontStyles.title.h6.fontSize};
    }
  }
`;

;// CONCATENATED MODULE: ./components/footer/FooterMobile.tsx


// Styles



const FooterMobile = ()=>/*#__PURE__*/ jsx_runtime_.jsx(FooterMobileStyled, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/cart",
            passHref: true,
            legacyBehavior: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* IconButton */.h, {
                name: "Cart",
                size: 1.5,
                onClick: ()=>console.log("onPressCar")
            })
        })
    });
/* harmony default export */ const footer_FooterMobile = (FooterMobile);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ImageLoader.ts
const imageLoader = (resolverProps)=>{
    return resolverProps.src;
};

;// CONCATENATED MODULE: ./components/footer/FooterDeskstop.tsx



// Styles


const socialLinks = [
    {
        link: "https://www.im/",
        src: "/images/instagram.svg"
    },
    {
        link: "https://www.facebook.com/de",
        src: "/images/facebook.svg"
    }
];
const FooterDesktop = ()=>/*#__PURE__*/ jsx_runtime_.jsx(FooterDesktopStyled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StyleEmail, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:hello@icoe.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "hello@sdgsgs.com"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StyleSocialList, {
                            children: socialLinks.map((navItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: navItem.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: navItem.src,
                                            unoptimized: true,
                                            width: 28,
                                            height: 28,
                                            loader: imageLoader,
                                            alt: ""
                                        })
                                    })
                                }, navItem.link + index))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-wrapper-privacy ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "\xa9udjin 2011 — 2022"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "footer-privacy",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://de.com/privacy-policy/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Адресса и контакти"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://.com/terms-of-use/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Більше про нас"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const FooterDeskstop = (FooterDesktop);

;// CONCATENATED MODULE: ./components/Layout/Layout.tsx












const useIsomorphicLayoutEffect =  false ? 0 : external_react_.useEffect;
const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { q  } = router.query;
    const [query, setQuery] = (0,external_react_.useState)(q);
    const { username  } = (0,external_react_redux_.useSelector)(userSlice/* selectUser */.dy);
    const [isDark, setIsDark] = (0,external_react_.useState)(true);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const toggleDark = ()=>{
        localStorage.setItem("theme", isDark ? "light" : "dark");
        setIsDark(!isDark);
    };
    useIsomorphicLayoutEffect(()=>{
        dispatch((0,userSlice/* login */.x4)());
        const theme = localStorage.getItem("theme");
        const themeExistsInStorage = Boolean(theme !== null);
        setIsDark(themeExistsInStorage ? Boolean(theme === "dark") : window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, []);
    const searchChange = (e)=>{
        const { value  } = e.currentTarget;
        setQuery(value);
        if (value?.length >= 2) {
            router.push({
                pathname: "/search",
                query: {
                    q: value
                }
            });
        }
        if (!value) {
            router.push("/");
        }
    };
    (0,external_react_.useEffect)(()=>{
        q && setQuery(q);
        if (query && !q) {
            setQuery("");
        }
    }, [
        q
    ]);
    const theme = Themes[isDark ? "dark" : "light"];
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    legacyBehavior: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LogoLink, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLogo, {
                            size: 3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "logo_short",
                                    children: "Fish"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "logo_full",
                                    children: "TropicalFish"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainNav, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: username ? "/user" : "/login",
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* IconButton */.h, {
                                name: username ? "User" : "Login",
                                size: 1.5
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* IconButton */.h, {
                            name: !isDark ? "Moon" : "Sun",
                            size: 1.5,
                            onClick: toggleDark
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/cart",
                            passHref: true,
                            legacyBehavior: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IconButton/* IconButton */.h, {
                                name: "Cart",
                                size: 1.5,
                                onClick: ()=>console.log("onPressCar")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                    icon: "Search",
                    placeholder: "Search",
                    value: query,
                    onChange: searchChange
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footer_FooterMobile, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterDeskstop, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

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

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,634,206,759,393], () => (__webpack_exec__(3909)));
module.exports = __webpack_exports__;

})();