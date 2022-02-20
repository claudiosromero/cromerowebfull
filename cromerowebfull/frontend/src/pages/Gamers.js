import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/Novedad.Item'

import '../styles/components/pages/Gamer.css'




const Gamers = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNodades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNodades(response.data);
            setLoading(false);
        };

        cargarNovedades();

    }, []);

    return (
        <main className="contenedor_principal holder">

            <div className="recomendadas notasgamer">
                <h2>Ultimos lanzamientos, Consolas y Mas!!!</h2>


                
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )}


            </div>


        </main>

    );
}

export default Gamers;