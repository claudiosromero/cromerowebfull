import NavLink from "../NavLink";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><a href="gamers.html">Mundo Gamers</a></li>
                <li><a href="harware.html">Hardware</a></li>
                <li><a href="tecnologia.html">Nuevas Tecnologias</a></li>
                <li><a href="cripto.html">Criptomonedas</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>

    );
}

export default Nav;