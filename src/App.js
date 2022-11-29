import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Pizzas from "./Components/pages/Pizzas";
import Salads from "./Components/pages/Salads";
import Pastas from "./Components/pages/Pastas";
import Desserts from "./Components/pages/Desserts";
import Order from "./Components/pages/Order";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/pastas" element={<Pastas />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
