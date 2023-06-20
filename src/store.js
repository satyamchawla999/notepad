import { configureStore } from "@reduxjs/toolkit";
import noteReducers from "./Features/Note/noteSlice"

const store = configureStore({
    reducer: {
        note:noteReducers
    },
});

export default store;