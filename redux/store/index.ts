import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "./packagesSlice";
import transformationsReducer from "./transformationsSlice";
import reviewsReducer from "./reviewsSlice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
    transformations: transformationsReducer,
    reviews: reviewsReducer,
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
