import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    SerializedError,
} from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { Product } from "@/types";
import cart from "@/pages/cart";

type RequestState = "pending" | "fulfilled" | "rejected";

export type CartState = {
    cart: Product[];
    infoUser: string;
    requestState?: RequestState;
    error?: SerializedError;
};

export type LoginData = {
    identifier: string;
    password: string;
};

export type RegistrationData = {
    username: string;
    email: string;
    password: string;
};

// export const clearCart = createAsyncThunk("cart/clear", async () =>
//     clearCartLocalStorage()
// );

type CartPayload = { cart: Product[], infoUser: string };

export const initialState: CartState = {
    cart: [],
    infoUser: "",
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.infoUser = action.payload.infoUser;
        }
    },
});

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {

//         builder.addCase(clearCart.fulfilled, () => initialState);


//         builder
//             .addMatcher<PayloadAction<CartPayload>>(
//                 (action) => /\/(login|registration)\/fulfilled$/.test(action.type),
//                 (state, { payload }) => {
//                     state.requestState = "fulfilled";
//                     state.cart = payload.cart;
//                     state.infoUser = payload.infoUser;
//                     state.error = undefined;
//                 }
//             )
//             .addMatcher(
//                 (action) => action.type.endsWith("/pending"),
//                 (state) => {
//                     state.requestState = "pending";
//                 }
//             )
//             .addMatcher(
//                 (action) => action.type.endsWith("/rejected"),
//                 (state, { payload }) => {
//                     const payloadError = (payload as { error: SerializedError })?.error;
//                     state.error = payloadError;
//                     state.requestState = "rejected";
//                 }
//             );
//     },
// });

//export const { actions, reducer } = cartSlice;

//export const selectCart = ({ cart }: RootState) => cart;

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const clearCartLocalStorage = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("infoUser");

};

const setupCartToLocalStorage = (result: CartPayload) => {
    const cart: string = JSON.stringify(result.cart);
    localStorage.setItem("cart", cart);
    localStorage.setItem("infoUser", result.infoUser);

};

// export const addCart = createAsyncThunk<CartPayload, LoginData | undefined>(
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