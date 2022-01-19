const Header = (props) => {
    return (
        <header>
        <div className="holder">
            <div classNamer="boton_inicio">
                <a href="index.html"><i class="fas fa-home"></i></a>
                <input class="busqueda" type="text" placeholder="Busqueda"/>
                <input type="button" value="Buscar"/>
            </div>
            <div className="encabezado">
                <h1>CromeroWebFull</h1>
            </div>
        </div>
    </header>
    );
}

export default Header;