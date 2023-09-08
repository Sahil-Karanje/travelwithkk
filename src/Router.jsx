import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import HotelPage from "./Pages/Hotels/HotelPage";

const AllRoutes = () => {
    return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about-us" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/hotels" element={<HotelPage/>} />
            </Routes>
    )
}

export default AllRoutes;