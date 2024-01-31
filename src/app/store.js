import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import userReducer from "../features/users/userSlice";
import {thunk} from "redux-thunk";
import logger from "redux-logger"; 
import movieReducer from "../features/movie/movieSlice";
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk, logger);
const store= configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;