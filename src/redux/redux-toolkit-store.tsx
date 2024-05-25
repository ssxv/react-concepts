import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./ReduxCounter";

export const reduxToolkitStore = configureStore({
    reducer: {
        count: counterSlice.reducer
    }
});
