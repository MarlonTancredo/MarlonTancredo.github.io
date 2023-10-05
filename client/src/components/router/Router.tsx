import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Misdemeanours from "../../pages/misdemeanours/Misdemeanors";
import ConfessToUs from "../../pages/confess-to-us/ConfessToUs";
import NotFound from "../not-found/NotFound";

const Router = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="misdemeanours" element={<Misdemeanours />} />
            <Route path="confess-to-us" element={<ConfessToUs />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
);

export default Router;
