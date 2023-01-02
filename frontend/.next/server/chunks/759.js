"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 6759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dy": () => (/* binding */ selectUser),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "l9": () => (/* binding */ registration),
/* harmony export */   "sv": () => (/* binding */ userSlice),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports initialState, actions, reducer */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    jwt: "",
    username: "",
    email: ""
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        // Logout flow
        builder.addCase(logout.fulfilled, ()=>initialState);
        /** Login/registration flow */ builder.addMatcher((action)=>/\/(login|registration)\/fulfilled$/.test(action.type), (state, { payload  })=>{
            state.requestState = "fulfilled";
            state.jwt = payload.jwt;
            state.username = payload.user.username;
            state.email = payload.user.email;
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
const { actions , reducer  } = userSlice;
const selectUser = ({ user  })=>user;
const api_url = "https://172b-88-19-238-70.eu.ngrok.io/api";
const clearUserInfoFromLocalStorage = ()=>{
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
};
const setupUserInfoToLocalStorage = (result)=>{
    localStorage.setItem("jwt", result.jwt);
    localStorage.setItem("username", result?.user?.username);
    localStorage.setItem("email", result?.user?.email);
};
const createRequest = (jwt, loginData)=>{
    if (jwt && !loginData) {
        return fetch(`${api_url}/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
    }
    if (loginData) {
        return fetch(`${api_url}/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });
    }
    throw {
        error: "Invalid login request"
    };
};
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/login", async (loginData, { rejectWithValue  })=>{
    try {
        const jwt = localStorage.getItem("jwt");
        const response = await createRequest(jwt, loginData);
        const data = await response.json();
        if (response.status < 200 || response.status >= 300) {
            clearUserInfoFromLocalStorage();
            return rejectWithValue(data);
        }
        const result = jwt ? {
            jwt,
            user: data
        } : data;
        setupUserInfoToLocalStorage(result);
        return result;
    } catch (error) {
        clearUserInfoFromLocalStorage();
        return rejectWithValue(error);
    }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/logout", async ()=>clearUserInfoFromLocalStorage());
const registration = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/registration", async (data, { rejectWithValue  })=>{
    try {
        const response = await fetch(`${api_url}/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(result);
        }
        setupUserInfoToLocalStorage(result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});


/***/ })

};
;