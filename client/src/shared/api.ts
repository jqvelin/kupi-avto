import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { z } from "zod";
import { Car } from "../graphql/generated";
import axios from "axios";

export const CarResponseSchema = z.object({
    id: z.number(),
    availability: z.boolean(),
    brand: z.string(),
    color: z.string(),
    description: z.string(),
    img_src: z.string(),
    model: z.string(),
    model_year: z.number(),
    price: z.string()
});

// Замените на "http://localhost:4000/api" для проверки на локальном сервере
const BASE_URL = "https://server-black-one.vercel.app/api";
export const api = {
    getCars: async () => {
        return axios.post(BASE_URL, {
            query: `{cars {id availability brand color description img_src model model_year price}}`
        });
    }
};

//RTK Query request
export const baseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: () => ({})
});

export const carsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query<{ data: { cars: Car[] } }, void>({
            query: () => ({
                headers: {
                    "Content-Type": "application/json"
                },
                url: "/",
                method: "POST",
                body: JSON.stringify({
                    query: `{cars {id availability brand color description img_src model model_year price}}`
                })
            })
        })
    })
});
