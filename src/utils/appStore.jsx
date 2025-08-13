import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchFilterSlice from "./searchFilterSlice";
import ChatSlice from "./ChatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchfilter: searchFilterSlice,
    chat: ChatSlice,
  },
});

export default appStore;
