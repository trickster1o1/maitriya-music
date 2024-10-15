import { createSlice } from "@reduxjs/toolkit";
let initialStateValue = window.location.href;
const urlSlice = createSlice({
    name: 'current',
    initialState: {value: initialStateValue},
    reducers: {
        changeUrl: (state,action) => {
            state.value = action.payload;
        }
    },
});

export const {changeUrl} = urlSlice.actions;
export default urlSlice.reducer;
