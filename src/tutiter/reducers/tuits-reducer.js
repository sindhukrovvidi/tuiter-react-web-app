import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  findTuitsThunk,
  deleteTuitThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";
const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa_logo.jpeg",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: { tuits: tuits },
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },
  },
  reducers: {
    // createTuit(state, action) {
    //   state.tuits.unshift({
    //     ...action.payload,
    //     ...templateTuit,
    //     _id: new Date().getTime(),
    //   });
    // },
    // deleteTuit(state, action) {
    //   const index = state.tuits.findIndex(
    //     (tuit) => tuit._id === action.payload
    //   );
    //   state.tuits.splice(index, 1);
    // },
    // updateTuit(state, action) {
    //   const currTuit = state.tuits.findIndex(
    //     (tuit) => tuit._id === action.payload._id
    //   );
    //   state.tuits[currTuit].liked = action.payload.liked;
    //   state.tuits[currTuit].likes = action.payload.likes;
    // },
  },
});

export const { createTuit, deleteTuit, updateTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
