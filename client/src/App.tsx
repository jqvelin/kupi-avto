import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import { Layout } from "./shared/components/ui/Layout";
import { Header } from "./shared/components/ui/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

const App: FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Layout />}
            >
              <Route path="/" element={<Cars />}></Route>
              <Route path="/favorites" element={<Favorites />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
