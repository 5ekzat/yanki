import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name: "signUp", // исправлено имя здесь
    initialState: {
        userData: {},
        loading: false,
        err: '',
    },
    reducers: { // исправлен ключ здесь
        createUser(state, action) {
            state.userData = action.payload; // исправлено userData здесь
            localStorage.setItem("auth", JSON.stringify(state.userData))
        },
        getFromLs() {},
        signOut() {}
    }
});

export const { createUser } = signUpSlice.actions; // исправлен ключ здесь
export default signUpSlice.reducer;
