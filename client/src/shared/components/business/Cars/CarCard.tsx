import { FC } from "react";
import { Car } from "../../../../graphql/generated";
import { HeartIconDisabled } from "../../ui/icons/HeartIconDisabled";
import { formatPrice } from "../../../../utils/formatPrice";
import { HeartIconEmpty } from "../../ui/icons/HeartIconEmpty";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { carsSlice } from "../../../state/slices/carsSlice";
import { HeartIconFilled } from "../../ui/icons/HeartIconFilled";

export const CarCard = ({ car }: { car: Car }) => {
    const favoriteCars = useAppSelector((state) => state.cars.favoriteCars);
    const isCarInFavorites = favoriteCars.includes(car);
    const dispatch = useAppDispatch();

    function toggleFavoriteCar() {
        if (isCarInFavorites) {
            dispatch(carsSlice.actions.removeFavoriteCar(car));
        } else {
            dispatch(carsSlice.actions.addFavoriteCar(car));
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center relative border-[1px] border-gray-2 [border-top-left-radius:15px] [border-top-right-radius:15px] mb-[26px]">
                <img
                    src={car.img_src}
                    className={`${!car.availability && "opacity-30"}`}
                    alt={`${car.brand} ${car.model} ${car.model_year} ${car.color}`}
                />
                {!car.availability && (
                    <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
                        <h3 className="bg-black text-white text-[16px] md:text-[24px] rounded-[15px] px-[20px] py-[10px]">
                            Нет в наличии
                        </h3>
                    </div>
                )}
            </div>
            <div className="w-full flex flex-col gap-1">
                <h3
                    className="w-full text-ellipsis overflow-hidden whitespace-nowrap"
                    title={car.brand + " " + car.model}
                >
                    {car.brand + " " + car.model}
                </h3>
                <p className="flex gap-[14px]">
                    <span className="text-gray-3">Год: {car.model_year}</span>
                    <span className="text-gray-3">Цвет: {car.color}</span>
                </p>
                <h4>от {formatPrice(car.price)}</h4>
                <div className="flex items-center gap-[25px] mt-2">
                    <button
                        className={`py-[19px] px-[99px] ${
                            !car.availability
                                ? "bg-gray-2 text-black"
                                : "bg-blue-2 text-white"
                        }`}
                        disabled={!car.availability}
                    >
                        Купить
                    </button>
                    <button
                        onClick={toggleFavoriteCar}
                        disabled={!car.availability}
                    >
                        {!car.availability ? (
                            <HeartIconDisabled />
                        ) : isCarInFavorites ? (
                            <HeartIconFilled />
                        ) : (
                            <HeartIconEmpty />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
