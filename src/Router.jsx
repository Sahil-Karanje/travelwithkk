import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;