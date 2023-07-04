import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
  middleware: getDefaultMiddleware().concat(thunk),
});

export default store;
