import { configureStore } from '@reduxjs/toolkit'
import { pageSlice } from './reducers/page';
import { fiveViewSlice } from './reducers/fiveView';
import { baseGridSlice } from './reducers/baseGrid';

const store = configureStore({
    reducer: {
        page: pageSlice.reducer,
        baseGrid: baseGridSlice.reducer,
        fiveView: fiveViewSlice.reducer,
    },
})
export default store;