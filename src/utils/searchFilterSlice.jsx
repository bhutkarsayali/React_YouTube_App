import { createSlice } from "@reduxjs/toolkit";

const searchFilterSlice = createSlice({
  name: "searchFilter", // ✅ Required
  initialState: {
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;
