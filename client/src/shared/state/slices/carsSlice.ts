import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../../../graphql/generated";

type CarId = number;

type SortingMethod = 
'inStockFirst' 
| 'byNameAsc' 
| 'byNameDesc' 
| 'newerFirst' 
| 'olderFirst'
| 'priceAsc'
| 'priseDesc';

type CarsState = {
    // Record<CarId, Car> - более быстрый способ получить объект Car по CarId при больших объёмах данных.
    entities: Record<CarId, Car | undefined>;
    favorites: Record<CarId, Car | undefined>;
    ids: CarId[];
    sortBy: SortingMethod;
    fetchCarsStatus: "idle" | "pending" | "success" | "failed";
};

// Данные будут подгружены в компоненте.
const initialCarsState: CarsState = {
    entities: {},
    favorites: {},
    ids: [],
    sortBy: 'inStockFirst',
    fetchCarsStatus: "idle"
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
    selectors: {
        selectIsFetchCarsPending: (state) =>
            state.fetchCarsStatus === "pending",
        selectIsFetchCarsIdle: (state) => state.fetchCarsStatus === "idle"
    },
    reducers: {
        fetchCarsPending: (state) => {
            state.fetchCarsStatus = "pending";
        },
        fetchCarsSuccess: (state, action: { payload: Car[] }) => {
            const cars = action.payload;

            state.fetchCarsStatus = "success";
            state.entities = cars.reduce((acc, car) => {
                acc[car.id] = car;
                return acc;
            }, {} as Record<CarId, Car>);
            state.ids = cars.map((car) => car.id);
        },
        fetchCarsFailed: (state) => {
            state.fetchCarsStatus = "failed"
        }
    }
});
