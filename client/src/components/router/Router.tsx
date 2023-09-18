import { Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import MainLayout from "../layouts/MainLayout"
import NotFound from "../not-found/NotFound"

const Router = () =>
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>

export default Router