import { FC } from "react";
import { Car } from "../../../../graphql/generated";
import { HeartIconDisabled } from "../../ui/icons/HeartIconDisabled";
import { formatPrice } from "../../../../utils/formatPrice";
import { HeartIconEmpty } from "../../ui/icons/HeartIconEmpty";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { carsSlice } from "../../../state/slices/carsSlice";
import { HeartIconFilled } from "../../ui/icons/HeartIconFilled";

export const CarCard: FC<Car> = ({
    id,
    img_src,
    brand,
    model,
    availability,
    model_year,
    color,
    price
}) => {
    const favoriteCarIds = useAppSelector(state => state.cars.favoriteCarIds)
    const isCarInFavorites = favoriteCarIds.includes(id)
    const dispatch = useAppDispatch()
    
    function toggleFavoriteCar() {
        if (isCarInFavorites) {
            dispatch(carsSlice.actions.removeFavoriteCar(id))
        } else {
            dispatch(carsSlice.actions.addFavoriteCar(id))
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center relative border-[1px] border-gray-2 [border-top-left-radius:15px] [border-top-right-radius:15px] mb-[26px]">
                <img
                    src={img_src}
                    className={`${!availability && "opacity-30"}`}
                    alt={`${brand} ${model} ${model_year} ${color}`}
                />
                {!availability && <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
                        <h3 className="bg-black text-white text-[16px] md:text-[24px] rounded-[15px] px-[20px] py-[10px]">Нет в наличии</h3>
                    </div>}
            </div>
            <div className="w-full flex flex-col gap-1">
                <h3
                    className="w-full text-ellipsis overflow-hidden whitespace-nowrap"
                    title={brand + " " + model}
                >
                    {brand + " " + model}
                </h3>
                <p className="flex gap-[14px]">
                    <span className="text-gray-3">Год: {model_year}</span>
                    <span className="text-gray-3">Цвет: {color}</span>
                </p>
                <h4>от {formatPrice(price)}</h4>
                <div className="flex items-center gap-[25px] mt-2">
                    <button className={`py-[19px] px-[99px] ${!availability ? "bg-gray-2 text-black" : 'bg-blue-2 text-white'}`} disabled={!availability}>
                        Купить
                    </button>
                    <button onClick={toggleFavoriteCar} disabled={!availability}>
                        {!availability 
                            ? <HeartIconDisabled /> 
                            : (
                                isCarInFavorites
                                ? <HeartIconFilled />
                                : <HeartIconEmpty />
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};
