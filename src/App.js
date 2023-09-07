import './App.css';
import AllRoutes from './Router.jsx';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
