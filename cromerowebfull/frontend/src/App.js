// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Contacto from "./pages/Contacto";
import Criptomonedas from "./pages/Cripto";
import Gamers from "./pages/Gamers";
import Hardware from "./pages/Hardware";
import HomePage from "./pages/Home";




function App() {
  return (
    <Router>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Contacto" exact element={<Contacto />} />
        <Route path="/Cripto" exact element={<Criptomonedas />} />
        <Route path="/Gamers" exact element={<Gamers />} />
        <Route path="/Hardware" exact element={<Hardware />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
