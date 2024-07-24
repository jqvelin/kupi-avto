import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { carsSlice } from "./slices/carsSlice";
import { baseApi, carsApi } from "../api";

export const store = configureStore({
    reducer: {
        [carsSlice.name]: carsSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
});

export type AppState = ReturnType<typeof store.getState>;
export const useAppStore = useStore.withTypes<typeof store>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
