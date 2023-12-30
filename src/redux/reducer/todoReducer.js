import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    isLoading: false,
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fetchList(state, action) {
            return {
                ...state,
                list: action.payload,
            };
        },
    },
});

export const { fetchList } = todoSlice.actions;
export default todoSlice.reducer;
