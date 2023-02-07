import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  memesArr: [],
  fullMemesList:[],
  filteredArray:[]
};

const memesSlice = createSlice({
  name: "memes",
  initialState,
  reducers: {
    addMemes: (state, action) => {
      state.memesArr = action.payload.newArray;
      state.fullMemesList = action.payload.newArray;
      console.log(state.memesArr);
    },
   
   
  },
},
);

export const { addMemes} = memesSlice.actions;

export const memesReducer = memesSlice.reducer;