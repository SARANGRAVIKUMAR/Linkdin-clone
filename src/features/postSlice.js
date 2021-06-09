import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    postDetails: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { postDetails } = postSlice.actions;
export const selectPost = (state) => state.post.posts;

export default postSlice.reducer;
