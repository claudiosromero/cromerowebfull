const Hardware = (props) => {
    return (
        <main className="contenedor_principal holder">
            <div className="img_bienvenida">
                <img className="img_bienvenida" src="imagenes/portadaHARDWARE1.jpg" alt="" width="100%" />
            </div>
            <div className="presentacion">
                <div className="notashardware">
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/defecto.jpg" alt="" /></a>
                        <h3>TITULO</h3>
                        <h4>subtitulo</h4>
                    </div>
                </div>

                <div className="recomendadas">
                    <h2>Imperdibles Hardwartre!</h2>
                    <div className="presentacion_novedades">
                        <h3>Intel</h3>
                        <a href=""><img src="imagenes/hardware/intel.png" alt="" /></a>

                        <h3>AMD</h3>
                        <a href=""><img src="imagenes/hardware/amd.png" alt="" /></a>

                        <h3>Nvidia</h3>
                        <a href=""><img src="imagenes/hardware/nvidia.jpg" alt="" /></a>

                    </div>
                </div>
            </div>
        </main>

    );
}

export default Hardware;