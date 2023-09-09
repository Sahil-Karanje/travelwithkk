import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import HotelPage from "./Pages/Hotels/HotelPage"; 
import User from "./Pages/User/User";

const AllRoutes = () => {
    return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about-us" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/hotels" element={<HotelPage/>} />
                <Route path="/user" element={<User/>} />
            </Routes>
    )
}

export default AllRoutes;