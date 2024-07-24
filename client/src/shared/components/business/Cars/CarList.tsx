import { findCarByName } from "../../../../utils/findCarByName";
import { sortCars } from "../../../../utils/sortCars";
import { carsApi } from "../../../api";
import { useAppSelector } from "../../../state/store";
import { CarCard } from "./CarCard";

const CarList = () => {
    const sortBy = useAppSelector((state) => state.cars.sortBy);
    const searchQuery = useAppSelector((state) => state.cars.searchQuery);
    const { data: response, isFetching } = carsApi.useGetCarsQuery();
    const unsortedCars = response?.data.cars;
    if (!unsortedCars?.length) return null;

    const cars = findCarByName(sortCars(unsortedCars, sortBy), searchQuery);

    if (isFetching) return <h2 className="animate-pulse">Загрузка...</h2>;
    if (!cars?.length) return <h2>По вашему запросу ничего не найдено :(</h2>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[40px] gap-x-4 gap-y-16">
            {cars.map((car) => (
                <CarCard
                    key={car.id}
                    car={car}
                />
            ))}
        </div>
    );
};

export default CarList;
