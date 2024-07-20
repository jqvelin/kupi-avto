import { FC } from "react";
import { Car } from "../../../../graphql/generated";
import { formatPrice } from "../../../../utils/formatPrice";
import { DeleteIcon } from "../../ui/icons/DeleteIcon";
import { useAppDispatch } from "../../../state/store";
import { carsSlice } from "../../../state/slices/carsSlice";

export const FavoriteCarElement: FC<Car> = ({
    id,
    img_src,
    brand,
    model,
    description,
    model_year,
    color,
    price
}) => {
    const dispatch = useAppDispatch()
    function deleteCarFromFavorites() {
        dispatch(carsSlice.actions.removeFavoriteCar(id))
    }
    return (
        <div className="md:row gap-[20px]">
            <img
                src={img_src}
                alt={`${brand} ${model} ${model_year} ${color}`}
                className="border-[1px] border-gray-2 rounded-[12px] "
            />
            <div className="column h-[308px] justify-between md:w-[50%]">
                <h2 className="whitespace-nowrap overflow-hidden text-ellipsis">{brand + " " + model}</h2>
                <p className="text-ellipsis line-clamp-3">{description}</p>
                <p>Год: {model_year}</p>
                <p>Цвет: {color}</p>
                <h3>от {formatPrice(price)}</h3>
                <div className="row gap-[20px]">
                    <button className="h-[56px] px-[34px] g-blue-2 text-white bg-blue-2">
                        Выбрать комплектацию
                    </button>
                    <button onClick={deleteCarFromFavorites} className="h-[56px] grid place-items-center aspect-square border-[2px] border-red-1">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
