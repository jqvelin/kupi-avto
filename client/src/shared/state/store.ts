import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { carsSlice } from "./slices/carsSlice";

export const store = configureStore({
    reducer: {
        [carsSlice.name]: carsSlice.reducer
    },
})

export type AppState = ReturnType<typeof store.getState>
export const useAppStore = useStore.withTypes<typeof store>()
export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()