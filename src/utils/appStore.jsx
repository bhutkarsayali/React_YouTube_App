import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchReducer from "./searchSlice";
import searchFilterReducer from "./searchFilterSlice";
import ChatReducer from "./ChatSlice";

const appStore = configureStore({
  reducer: {
    app: appSlice,
    search: searchReducer,
    searchfilter: searchFilterReducer,
    chat: ChatReducer,
  },
});

export default appStore;
