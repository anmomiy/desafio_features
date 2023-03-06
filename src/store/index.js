import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./location.slice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});