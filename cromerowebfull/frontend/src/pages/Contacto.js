import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
    return (
        <main className="contenedor_principal holder">
            <div className="img_bienvenida">
                <img className="img_bienvenida" src="imagenes/contacto/contacto.jpg" alt="" width="100%" />
            </div>
            <div className="contacto holder">
                <div className="contactoleft">
                    <h2>Contacto Rapido</h2>
                    <form action="" className="formulario">
                        <p>
                            <label for="">Nombre</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" />
                        </p>
                        <p>
                            <label for="">Telefono</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="comentario">Comentario</label>
                            <textarea name="" id="comentario" cols="30" rows="10"></textarea>
                        </p>
                        <p className="acciones"><input type="submit" value="Enviar"/></p>
                    </form>
                </div>
                <div className="contactoright">
                    <h2>Otras vias de contacto</h2>
                    <ul>
                        <li>Telefonos 4578-7456</li>
                        <li>Email: info@cromerowebfull.com</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </main>

    );
}

export default Contacto;