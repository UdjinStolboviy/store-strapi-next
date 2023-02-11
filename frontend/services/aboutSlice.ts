import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    SerializedError,
} from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { Product, IAbout } from "@/types";
import cart from "@/pages/cart";

type RequestState = "pending" | "fulfilled" | "rejected";

export type AboutState = {
    about: IAbout[];
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



export const initialState: AboutState = {
    about: [],
    infoUser: "",
};

export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {
        addAbout: (state, action) => {
            state.about = [...state.about, action.payload];
            state.infoUser = action.payload.infoUser;
        },
        removeAbout: (state, action) => {
            state.about = state.about.filter((product) => product.link_fb !== action.payload.link_fb);
        }
    },
});


export const { addAbout, removeAbout } = aboutSlice.actions;

export default aboutSlice.reducer;




