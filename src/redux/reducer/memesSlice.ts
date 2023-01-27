import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memesArr: [],
  fullMemesList:[],
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
    filterMemes: (state, action) => {
      console.log(action.payload.letter);
      state.memesArr = state.fullMemesList;
      state.memesArr = state.memesArr.filter((meme:any) => meme.name.toLowerCase().startsWith(action.payload.letter));
    },
    showAllMemes: (state) => {
      state.memesArr = state.fullMemesList;
    }
  },
},
);

export const { addMemes, filterMemes, showAllMemes } = memesSlice.actions;

export const memesReducer = memesSlice.reducer;