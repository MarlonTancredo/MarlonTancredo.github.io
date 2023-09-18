import { Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import NotFound from "../not-found/NotFound"

const Router = () =>
    <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>

export default Router