import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./slices/signUpSlices"; 
import productsSlices from "./slices/productsSlices";

const store = configureStore({
    reducer: {
        signUp: signUpSlice,
        products:productsSlices
    }
});

export default store;
