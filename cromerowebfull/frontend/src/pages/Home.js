import '../styles/components/pages/Home.css'


const HomePage = (props) => {
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
                        entreteniumiento! Ademas vas a poder informarte sobre el munto de las Criptas, NFT, y todo lo que
                        viene en tecnologia!
                    </p>
                    <h2>Novedades</h2>
                    <div className="novedades">
                        <div>
                            <div className="img_novedades">
                                <img src="imagenes/topnoticias.jpg" alt="" />
                            </div>
                            <div className="info_novedades">
                                <h3>TITULO</h3>
                                <h4>subtitulo</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo itaque, commodi exercitationem
                                    minima unde, nesciunt est suscipit beatae, quos provident aperiam dolores autem eius atque
                                    quo
                                    repellendus corporis explicabo labore!</p>
                            </div>
                        </div>
                        <div>
                            <div className="img_novedades">
                                <img src="imagenes/topnoticias.jpg" alt="" />
                            </div>
                            <div className="info_novedades">
                                <h3>TITULO</h3>
                                <h4>subtitulo</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo itaque, commodi exercitationem
                                    minima unde, nesciunt est suscipit beatae, quos provident aperiam dolores autem eius atque
                                    quo
                                    repellendus corporis explicabo labore!</p>
                            </div>
                        </div>
                        <div>
                            <div className="img_novedades">
                                <img src="imagenes/topnoticias.jpg" alt="" />
                            </div>
                            <div className="info_novedades">
                                <h3>TITULO</h3>
                                <h4>subtitulo</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo itaque, commodi exercitationem
                                    minima unde, nesciunt est suscipit beatae, quos provident aperiam dolores autem eius atque
                                    quo
                                    repellendus corporis explicabo labore!</p>
                            </div>
                        </div>
                        <div>
                            <div className="img_novedades">
                                <img src="imagenes/topnoticias.jpg" alt="" />
                            </div>
                            <div className="info_novedades">
                                <h3>TITULO</h3>
                                <h4>subtitulo</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo itaque, commodi exercitationem
                                    minima unde, nesciunt est suscipit beatae, quos provident aperiam dolores autem eius atque
                                    quo
                                    repellendus corporis explicabo labore!</p>
                            </div>
                        </div>
                        <div>
                            <div className="img_novedades">
                                <img src="imagenes/topnoticias.jpg" alt="" />
                            </div>
                            <div className="info_novedades">
                                <h3>TITULO</h3>
                                <h4>subtitulo</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo itaque, commodi exercitationem
                                    minima unde, nesciunt est suscipit beatae, quos provident aperiam dolores autem eius atque
                                    quo
                                    repellendus corporis explicabo labore!</p>
                            </div>
                        </div>




                    </div>


                </div>

                <div className="recomendadas">
                    <h2>Notas Recomendadas</h2>
                    <div className="presentacion_novedades">
                        <h3>Lanzamientos 2021</h3>
                        <h4>Los titulos para Pc y Consolas de este año</h4>
                        <a href=""><img src="imagenes/videojuegos2021.jpg" alt="" /></a>

                        <h3>BTC como unidad de valor</h3>
                        <h4>Es Bitcoin el oro digital?</h4>
                        <a href=""><img src="imagenes/btc.jpg" alt="" /></a>

                        <h3>Combos recomendados para armar tu PC</h3>
                        <h4>Cuales son los copmponentes mas destacados</h4>
                        <a href=""><img src="imagenes/pc.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default HomePage;