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
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart = [];

        },
        changQuantity: (state, action) => {
            const index = state.cart.findIndex((product) => product.id === action.payload.id);

            state.cart[index].quantity = action.payload.quantity;

        },
    }
});


export const { addCart, removeProduct, clearCart, changQuantity } = cartSlice.actions;

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

