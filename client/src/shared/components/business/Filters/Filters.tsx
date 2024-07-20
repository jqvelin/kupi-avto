import { Search } from "./Search"
import { SortBy } from "./SortBy"

export const Filters = () => {
    return <div className="column items-center gap-2 md:flex-row md:gap-0 justify-between w-full px-[10px] md:px-[40px] mb-[36px]">
            <SortBy />
            <Search />
    </div>
}