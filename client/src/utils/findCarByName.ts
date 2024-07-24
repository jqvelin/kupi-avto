import { Car } from "../graphql/generated";

export const findCarByName = (cars: Car[], searchQuery: string) => {
    return cars.filter((car) =>
        `${car.brand} ${car.model}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );
};
