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
    getCars: () => {
        return new Promise((res) => {
            setTimeout(res, 2000);
        }).then(() => {
            return CarSchema.array().parse(carsJSON);
        });
    }
};
