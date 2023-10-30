import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grids: [],
}

export const fiveViewSlice = createSlice({
    name: "fiveView",
    initialState,
    reducers: {
        // 加入function
        setInitial: (state) => {
            state.grids = initialState.grids
        }
    }
})

export const { setInitial } = fiveViewSlice.reducer;
export default fiveViewSlice.reducer;
