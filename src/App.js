import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Clients from './views/Clients';
import Tecnicians from './views/Tecnicians';
import ServiceOrder from './views/ServiceOrder';
import Products from "./views/Products";
import ServicesType from "./views/TypesOfServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/tecnicians" element={<Tecnicians />} />
          <Route exact path="/services-order" element={<ServiceOrder />} />
          <Route exact path="/services-type" element={<ServicesType />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;