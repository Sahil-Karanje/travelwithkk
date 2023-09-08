import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import AllRoutes from './Router.jsx';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AllRoutes />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
