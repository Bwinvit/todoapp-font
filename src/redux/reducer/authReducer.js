import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
    message: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            const { userInfo, token } = action.payload;

            return {
                ...state,
                userInfo: userInfo,
                success: true,
                userToken: token,
            };
        },
        logout(state) {
            return {
                ...state,
                loading: false,
                userInfo: {},
                userToken: null,
                error: null,
                success: false,
                message: null,
            };
        },
        profile(state, action) {
            const { username, id } = action.payload;

            return {
                ...state,
                userInfo: {
                    username: username,
                    userId: id,
                },
                success: true,
            };
        },
    },
});

export const { login, logout, profile } = authSlice.actions;
export default authSlice.reducer;
