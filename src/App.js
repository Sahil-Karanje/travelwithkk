import './App.css';
import AllRoutes from './Router.jsx';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
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
