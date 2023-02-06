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
      state.memesArr = state.fullMemesList;
      state.memesArr = state.memesArr.filter((meme:any) => action.payload.search.toLowerCase() === '' ? meme : meme.name.toLowerCase().startsWith(action.payload.search));
    },
    showAllMemes: (state) => {
      state.memesArr = state.fullMemesList;
    }
  },
},
);

export const { addMemes, filterMemes, showAllMemes } = memesSlice.actions;

export const memesReducer = memesSlice.reducer;