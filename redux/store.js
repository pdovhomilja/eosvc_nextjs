import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import listenerMiddleware from "./listener";
//import boardReducer from "./features/boardSlice";
import favouriteReducer from "./features/favouriteSlice";
import userReducer from "./userSlice";
import boardReducer from "./projects/boardSlice";

export const store = configureStore({
  reducer: {
    app: Reducer,
    board: boardReducer,
    favourites: favouriteReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
