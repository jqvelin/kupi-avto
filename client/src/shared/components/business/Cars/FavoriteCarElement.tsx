import { FC } from "react";
import { Car } from "../../../../graphql/generated";
import { formatPrice } from "../../../../utils/formatPrice";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";
import { useAppDispatch } from "../../../state/store";
import { carsSlice } from "../../../state/slices/carsSlice";

export const FavoriteCarElement = ({ car }: { car: Car }) => {
    const dispatch = useAppDispatch();
    function deleteCarFromFavorites() {
        dispatch(carsSlice.actions.removeFavoriteCar(car));
    }
    return (
        <div className="md:row gap-[20px]">
            <img
                src={car.img_src}
                alt={`${car.brand} ${car.model} ${car.model_year} ${car.color}`}
                className="border-[1px] border-gray-2 rounded-[12px] "
            />
            <div className="column h-[308px] justify-between md:w-[50%]">
                <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {car.brand + " " + car.model}
                </h2>
                <p className="text-ellipsis line-clamp-3">{car.description}</p>
                <p>Год: {car.model_year}</p>
                <p>Цвет: {car.color}</p>
                <h3>от {formatPrice(car.price)}</h3>
                <div className="row gap-[20px]">
                    <button className="h-[56px] px-[34px] g-blue-2 text-white bg-blue-2">
                        Выбрать комплектацию
                    </button>
                    <button
                        onClick={deleteCarFromFavorites}
                        className="h-[56px] grid place-items-center aspect-square border-[2px] border-red-1"
                    >
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
