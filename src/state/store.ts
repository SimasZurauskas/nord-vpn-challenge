import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import formReducer from "./reducers/form";
import serversReducer from "./reducers/servers";

export const store = configureStore({
  reducer: {
    form: formReducer,
    servers: serversReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useStateDispatch = () => useDispatch<AppDispatch>();
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
