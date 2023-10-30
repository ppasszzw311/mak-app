import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectNumber: "",
  grid: {
    long: 0,
    width: 0,
    height: 0,
  },
  count: {
    xCount: 0,
    yCount: 0,
    zCount: 0,
  },
  size: {
    long: [1.5, 1.8, 1.829, 1.35, 1, 0.9, 0.7, 0.6],
    width: [0.76, 0.8, 1.2, 1.35, 1.4, 1.5, 1.8, 0.7, 0.9, 0.6],
    height: [1.5, 1.7, 1.8, 2.25, 1.35, 0.9, 0.45],
  },
  role: {
    anchor: ["每三樓一根"],
    brace: ["0.45 一根", "0.45, 0.9 二根", "0.45, 0.9, 1.35 三根"],
  },
  roleSelect: {
    anchor: [],
    brace: [],
  },
};

export const baseGridSlice = createSlice({
  name: "baseGrid",
  initialState,
  reducers: {
    // 加入function
    setInitial: (state) => {
      state.grids = initialState.grids;
    },
    setProjectNumber: (state, action) => {
      state.projectNumber = action.payload;
    },
    setGrid: (state, action) => {
      console.log(action.payload);
      state.grid = action.payload;
    },
    setLong: (state, action) => {
      state.grid.long = action.payload;
    },
    setWidth: (state, action) => {
      state.grid.width = action.payload;
    },
    setHeight: (state, action) => {
      state.grid.height = action.payload;
    },
    setXCount: (state, action) => {
      state.count.xCount = action.payload;
    },
    setYCount: (state, action) => {
      state.count.yCount = action.payload;
    },
    setZCount: (state, action) => {
      state.count.zCount = action.payload;
    },
    setCount: (state, action) => {
      console.log(action.payload);
      state.count = action.payload;
    },
    setRoleAnchor: (state, action) => {
      state.roleSelect.anchor = action.payload;
    },
  },
});

export const {
  setInitial,
  setProjectNumber,
  setGrid,
  setLong,
  setWidth,
  setHeight,
  setCount,
  setXCount,
  setYCount,
  setZCount,
  setRoleAnchor,
} = baseGridSlice.actions;
export default baseGridSlice.reducer;
