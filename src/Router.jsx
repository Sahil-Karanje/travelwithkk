import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

const AllRoutes = () => {
    return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="//about-us" element={<About/>} />
            </Routes>
    )
}

export default AllRoutes;