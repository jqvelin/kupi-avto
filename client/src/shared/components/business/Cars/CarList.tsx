import { useQuery } from "@tanstack/react-query";
import { findCarByName } from "../../../../utils/findCarByName";
import { sortCars } from "../../../../utils/sortCars";
import { api, CarResponseSchema } from "../../../api";
import { useAppSelector } from "../../../state/store";
import { CarCard } from "./CarCard";
import { CarCardSkeleton } from "../../ui/CarCardSkeleton";

const CarList = () => {
    const sortBy = useAppSelector((state) => state.cars.sortBy);
    const searchQuery = useAppSelector((state) => state.cars.searchQuery);
    const { data: unsortedCars, isLoading } = useQuery({
        queryKey: ["cars"],
        queryFn: api.getCars,
        select: (response) =>
            CarResponseSchema.array().parse(response.data.data.cars)
    });

    if (isLoading)
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-[40px] gap-x-4 gap-y-16">
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarCardSkeleton key={index} />
                ))}
            </div>
        );

    if (!unsortedCars?.length) return null;

    const cars = findCarByName(sortCars(unsortedCars, sortBy), searchQuery);

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
                /*  */