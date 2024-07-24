import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../../../graphql/generated";

export type SortingMethod =
    | "inStockFirst"
    | "byNameAsc"
    | "byNameDesc"
    | "newerFirst"
    | "olderFirst"
    | "priceAsc"
    | "priceDesc";

type CarsState = {
    sortBy: SortingMethod;
    searchQuery: string;
    favoriteCars: Car[];
};

// Данные будут подгружены в компоненте.
const initialCarsState: CarsState = {
    favoriteCars: [],
    sortBy: "inStockFirst",
    searchQuery: ""
};

/* 
    Создаём carsSlice как изолированную часть основного состояния проекта.
    Передаём начальное состояние (ровно так же, как и при помощи useState(initialCarsState)),
    редьюсеры для изменения состояния,
    селекторы для получения состояния запроса (т.к. мы симулируем загрузку данных с сервера)
    и селекторы для получения, собственно, данных.
*/
export const carsSlice = createSlice({
    name: "cars",
    initialState: initialCarsState,
    reducers: {
        toggleSortBy: (state, action: PayloadAction<SortingMethod>) => {
            state.sortBy = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        addFavoriteCar: (state, action: PayloadAction<Car>) => {
            state.favoriteCars.push(action.payload);
        },
        removeFavoriteCar: (state, action: PayloadAction<Car>) => {
            state.favoriteCars = state.favoriteCars.filter(
                (car) => car.id !== action.payload.id
            );
        }
    }
});
