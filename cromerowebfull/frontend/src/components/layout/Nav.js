import { Link } from "react-router-dom";
// import NavLink from "../NavLink";
import '../../styles/components/layout/Nav.css'


const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/Gamers">Gamers</Link></li> */}
                <li><Link to="/Hardware">Hardware</Link></li>
                <li><Link to="/Cripto">Criptomonedas</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </nav>

    );
}

export default Nav;