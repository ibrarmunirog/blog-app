import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "redux/reducer";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { loadState, saveState } from "redux/local-store";

const persistedState = loadState();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  preloadedState: persistedState,
});

store.subscribe(() => {
  const newState = store.getState();
  if (newState) {
    saveState(newState);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
