import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchFilterSlice from "./searchFilterSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchfilter: searchFilterSlice,
  },
});

export default appStore;
