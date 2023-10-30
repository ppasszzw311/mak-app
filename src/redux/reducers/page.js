import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1
}

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        // 加入function
        setPageToNext: (state) => {
            state.page += 1;
        },
        setPageToBack: (state) => {
            state.page -= 1;
        },
        setReSetPage: (state) => {
            state.page = 1
        }
    }
})

export const { setPageToNext, setPageToBack, setReSetPage} = pageSlice.actions;
export default pageSlice.reducer;