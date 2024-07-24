import { useState } from "react";
import { sortingMethods } from "../../../../utils/sortingMethods";
import { useAppDispatch, useAppSelector } from "../../../state/store";
import { SortIcon } from "../../ui/icons/SortIcon";
import { carsSlice, SortingMethod } from "../../../state/slices/carsSlice";

export const SortBy = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const sortBy = useAppSelector((state) => state.cars.sortBy);
    const dispatch = useAppDispatch();
    return (
        <div
            className="flex items-center gap-[12px] relative cursor-pointer select-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            <SortIcon />
            <button>{sortingMethods[sortBy]}</button>
            {isDropdownOpen && (
                <div className="flex flex-col whitespace-nowrap bg-white border-[1px] absolute z-10 top-full left-[28px] [box-shadow:0px_10px_13px_0px_#382E5F4A];">
                    {Object.entries(sortingMethods).map(([prop, value]) => {
                        return (
                            <button
                                key={prop}
                                className="flex pr-[5vw] rounded-none hover:bg-cyan hover:text-white pl-[4px]"
                                onClick={() =>
                                    dispatch(
                                        carsSlice.actions.toggleSortBy(
                                            prop as SortingMethod
                                        )
                                    )
                                }
                            >
                                {value}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
