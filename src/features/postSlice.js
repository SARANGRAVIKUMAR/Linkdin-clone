import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    postDetails: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { postDetails } = postSlice.actions;
export const selectPost = (state) => state.post.post;

export default postSlice.reducer;
