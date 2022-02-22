import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/Novedad.Item'


import '../styles/components/pages/Home.css'


const HomePage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNodades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNodades(response.data);
            setLoading(false);
        };

        cargarNovedades();

    }, []);

    return (
        <main className="contenedor_principal holder">
            <div className="img_bienvenida">
                <img className="img_bienvenida" src="imagenes/1200px-×-628px-–-Imagen-destacada-4.jpg" alt="" width="100%" />
            </div>
            <div className="presentacion">
                <div className="bienvenido">
                    <h2>Bienvenido!</h2>
                    <p> Si te gusta saber de tecnologia, o no queres perderte los ultimos lanzamientos de videojuegos y
                        queres estar al tanto de lo ultimo que sale a la venta en materia de hardware! Esta es tu pagina de
                        entretenimiento! 
                        <br />
                        Ademas vas a poder informarte sobre el munto de las Criptos, NFT, y todo lo que
                        viene en tecnologia!
                    </p>           
                    <h2>Ultimas Noticias</h2>
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (
                        novedades.map(item => <NovedadItem key={item.id}
                            title={item.titulo} subtitle={item.subtitulo}
                            imagen={item.imagen} body={item.cuerpo} />)
                    )}
                </div>
            </div>
        </main>

    );
}

export default HomePage;