import Cars from "./pages/Cars/Cars";
import { Layout } from "./shared/components/ui/Layout";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
                <Route
                    index
                    element={<Cars />}
                ></Route>
                <Route
                    path="/favorites"
                    element={<Favorites />}
                ></Route>
            </Route>
        </Routes>
    );
};

export default App;
