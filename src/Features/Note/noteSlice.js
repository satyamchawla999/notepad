import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes : []
}

const noteSlice = createSlice({
    name:"note",
    initialState,
    reducers: {
        addNote: (state,action)=>{
            state.notes.push({id: Date.now(), data:action.payload});
        },

        deleteNote: (state,action)=>{
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },

        editNote: (state,action)=>{
            state.notes.map((note)=>{
                if(note.id === action.id) {
                    note.data.title = action.title;
                    note.data.value = action.value;
                    return true;
                }
                return false;
            })
        }

    },
});

export const {addNote,deleteNote,editNote} = noteSlice.actions;

export default noteSlice.reducer;