import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCPU: [],
  productMotherboard: [],
  productRAM: [],
  productPSU: [],
  productStorage: [],
  productMonitor: [],
};

const productsBuildSlice = createSlice({
  name: "PCBuild",
  initialState,
  reducers: {
    addToBuildList: (state, action) => {
      if (action.payload.cid == "1") {
        state.productCPU = action.payload;
      }
      if (action.payload.cid == "2") {
        state.productMotherboard = action.payload;
      }
      if (action.payload.cid == "3") {
        state.productRAM = action.payload;
      }
      if (action.payload.cid == "4") {
        state.productPSU = action.payload;
      }
      if (action.payload.cid == "5") {
        state.productStorage = action.payload;
      }
      if (action.payload.cid == "6") {
        state.productMonitor = action.payload;
      }
    },
    removeFromBuildList: (state, action) => {
      if (action.payload.id == "1") {
        state.productCPU = [];
      }
      if (action.payload.id == "2") {
        state.productMotherboard = [];
      }
      if (action.payload.id == "3") {
        state.productRAM = [];
      }
      if (action.payload.id == "4") {
        state.productPSU = [];
      }
      if (action.payload.id == "5") {
        state.productStorage = [];
      }
      if (action.payload.id == "6") {
        state.productMonitor = [];
      }
    },
  },
});

export const { addToBuildList, removeFromBuildList } = productsBuildSlice.actions;

export default productsBuildSlice.reducer;
