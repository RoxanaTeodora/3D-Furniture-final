import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar color="whie" textColor="#265073" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;

// definim diferite rute care pot avea istoric diferit
