import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {
	const initialForm = {
		nombre: '',
		email: '',
        telefono: '',
		mensaje: ''
	}
	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response = await
			axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}
	}

    return (
        <main className="contenedor_principal holder">

            <div className="contacto holder">
                <div className="contactoleft">
                    <h2>Contacto</h2>
                    <form action="/contacto" method="post" className="formulario loginBox" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
                        </p>

                        <p className="centrar"><input type="submit" value="Enviar" /></p>
                    </form>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </div>
                <div className="contactoright">
                    <h2>Otras vias de contacto</h2>
                    <ul>
                        <li>Telefonos 4578-7456</li>
                        <li>Email: clau_sr511@hotmail.com</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                    <div className="img_bienvenida">
                        <img className="img_bienvenida" src="imagenes/contacto/contacto.jpg" alt="" width="100%" />
                    </div>
                </div>

            </div>
        </main>

    );
}

export default Contacto;