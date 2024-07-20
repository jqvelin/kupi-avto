import { z } from "zod";
import carsJSON from "../fake_cars.json";
const CarSchema = z.object({
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

export const api = {
    getCars: (searchQuery?: string) => {
        const endpoint = "https://server-black-one.vercel.app/api";
        const graphqlQuery = `
            {
                cars ${(searchQuery ?? "")} {
                    id
                    availability
                    brand
                    color
                    description
                    img_src
                    model
                    model_year
                    price
                }
            }
        `
        return fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ query: graphqlQuery })
        }).then (response => response.json())
        .then (result => CarSchema.array().parse(result.data.cars))
        .catch (error => console.error(error))
    }
};
