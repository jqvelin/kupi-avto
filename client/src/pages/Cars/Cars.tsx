import CarList from "../../shared/components/business/Cars/CarList";
import { Filters } from "../../shared/components/business/Filters/Filters";

const Cars = () => {
    return (
        <>
            <Filters />
            <CarList />
        </>
    );
};

export default Cars;
