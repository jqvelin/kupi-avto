import { Link } from "react-router-dom";
import { HeartIconFilled } from "./icons/HeartIconFilled";
import { BurgerMenuIcon } from "./icons/BurgerMenuIcon";

export const Header = () => {
    return (
        <header className="fixed z-[9999] row justify-between top-0 left-0 w-screen h-[70px] bg-white border-b-[1px] border-gray-2 px-[10px] md:px-[40px] gap-4 overflow-y-auto">
            <div className="row gap-[8px] md:gap-[16px]">
                <Link
                    to="/"
                    className="uppercase text-xl md:text-2xl"
                >
                    <span className="text-blue-1 font-bold">купи</span>
                    авто
                </Link>
                <button className="flex items-center text-[14px] md:[font-size:initial] gap-[7px] bg-blue-2 text-white px-[13px] py-[4px] md:px-[26px] md:py-[9px] flex-shrink-0">
                    <BurgerMenuIcon />
                    Каталог
                </button>
            </div>
            <div className="hidden lg:flex flex-1 justify-end mr-[4vw]">
                <h4 className="mr-[2vw]">
                    Москва, Волгоградский пр-кт, 43, стр 1
                </h4>
                <a href="tel:+78005553535">
                    <h4>+7 800 555 35 35</h4>
                </a>
            </div>
            <Link
                to="favorites"
                className="flex items-center gap-[6px] md:gap-[13px] text-[14px] md:[font-size:initial] font-medium"
            >
                <HeartIconFilled />
                Избранное
            </Link>
        </header>
    );
};
