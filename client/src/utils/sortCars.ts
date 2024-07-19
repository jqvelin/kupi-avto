import { Car } from "../graphql/generated"
import { SortingMethod } from "../shared/state/slices/carsSlice"

export const sortCars = (unsortedCars: (Car | undefined)[], sortBy: SortingMethod): Car[] => {
    const cars = unsortedCars.filter((car) => car !== undefined)
    switch (sortBy) {
        case 'byNameAsc': {
            return cars.sort((firstCar, secondCar) => {
                const firstCarName = firstCar.brand + firstCar.model;
                const secondCarName = secondCar.brand + secondCar.model;
                return firstCarName.localeCompare(secondCarName);
            })
        };
        case 'byNameDesc': {
            return cars.sort((firstCar, secondCar) => {
                const firstCarName = firstCar.brand + firstCar.model;
                const secondCarName = secondCar.brand + secondCar.model;
                return secondCarName.localeCompare(firstCarName);
            })
        };
        case 'newerFirst': {
            return cars.sort((firstCar, secondCar) => {
                return secondCar.model_year - firstCar.model_year
            })
        };
        case 'olderFirst': {
            return cars.sort((firstCar, secondCar) => {
                return firstCar.model_year - secondCar.model_year
            })
        };
        case 'priceAsc': {
            return cars.sort((firstCar, secondCar) => {
                return parseInt(firstCar.price.slice(1)) - parseInt(secondCar.price.slice(1))
            })
        };
        case 'priceDesc': {
            return cars.sort((firstCar, secondCar) => {
                return parseInt(secondCar.price.slice(1)) - parseInt(firstCar.price.slice(1))
            })
        };
        default:
            return cars
    }
}