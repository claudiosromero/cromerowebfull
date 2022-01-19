// import logo from './logo.svg';
// import './App.css';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Contacto from "./pages/Contacto";
import Criptomonedas from "./pages/Cripto";
import Gamers from "./pages/Gamers";
import Hardware from "./pages/Hardware";
import HomePage from "./pages/Home";
import Tecnologias from "./pages/Tecnologia";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
