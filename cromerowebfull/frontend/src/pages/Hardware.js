import '../styles/components/pages/Hardware.css'


const Hardware = (props) => {
    return (
        <main className="contenedor_principal holder">
            <div className="img_bienvenida">
                <img className="img_bienvenida" src="imagenes/portadaHARDWARE1.jpg" alt="" width="100%" />
            </div>
            <div className="presentacion">
                <div className="notashardware">
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/mother.jpg" alt="" /></a>
                        <h3>Placa base o tarjeta madre (mother board)</h3>
                        <h4>Es la placa más grande del sistema. Un conjunto de circuitos integrados y chips electrónicos donde se conectan el resto de componentes en unas ranuras llamadas slots. Muchas placas traen integradas tarjetas de video, de sonido, red, modem… De no ser así, se pueden comprar aparte e instalar fácilmente.</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/microprocesador.jpg" alt="" /></a>
                        <h3>Procesador o CPU</h3>
                        <h4>Es el cerebro de la computadora, también llamado Unidad Central de Procesamiento (CPU). Encargado de ejecutar las operaciones matemáticas. Recuerda que las computadoras trabajan con dígitos binarios, por eso, procesar información digital no es más que realizar diferentes operaciones con ellos.</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/memorias.jpg" alt="" /></a>
                        <h3>Memoria RAM</h3>
                        <h4>Randes Acces Memory o Memoria de Acceso Aleatorio. Mientras el procesador realiza sus operaciones, guarda en la memoria RAM los resultados. Supongamos que estamos escribiendo una carta en la computadora. Abrimos el programa. Los datos comienzan a almacenarse en la memoria que los envía al procesador para que ejecute las instrucciones y realice las operaciones. El procesador devuelve los resultados a la memoria y recibe nuevos datos para seguir procesando, y así sucesivamente. Por eso, a mayor RAM, mayor desahogo y mejor desempeño de la computadora. La RAM se mide en bytes. Las actuales memorias vienen de 512 megas o 1024 (1 giga). Sumando módulos, podemos tener computadoras de 2, 4, 8 gigas o más.</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/placa_de_video.jpg" alt="" /></a>
                        <h3>Placa de Video</h3>
                        <h4>Como vimos, algunas tarjetas madre vienen con el video incluido pero, por lo general, siempre se le instala aparte una tarjeta gráfica o de video para que las imágenes se muestren con mayor nitidez y calidad en la pantalla. Sobre todo si la computadora se dedicará a tareas que requieren más potencia de procesamiento de la imagen, como puede ser la edición de videos o jugar videojuegos. Se compran aparte y se conectan a la placa madre a través de las rendijas o slots.</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/rigido.jpg" alt="" /></a>
                        <h3>Discos de almacenamiento</h3>
                        <h4>En ellos se guarda toda la información y programas: el Sistema Operativo (GNU/Linux, Windows o MAC OS), las aplicaciones de software para escribir, dibujar, editar audio… También en los discos duros se guardan los textos, archivos musicales, fotos o videos. A mayor capacidad, mayor número de datos guardados. Ya se venden discos con más de 1 terabyte de capacidad. En ellos caben miles, casi millones, de canciones en mp3.</h4>
                    </div>
                    <div className="notahardware">
                        <a href=""><img src="imagenes/hardware/ssd.jpg" alt="" /></a>
                        <h3>Unidades de estado sólido</h3>
                        <h4>En vez de discos rígidos las computadoras más nuevas tienen unidades de estado sólido. Son memorias flash, como las que utilizan los «usbs» o pinchos. Son menos sensibles y más rápidas que los discos duros convencionales.</h4>
                    </div>
                </div>

                <div className="recomendadas">
                    <h2>Los Grandes del Mercado!</h2>
                    <div className="presentacion_novedades">
                        <h3>Intel</h3>
                        <a href="https://www.intel.la/content/www/xl/es/homepage.html" target="_blank"><img src="imagenes/hardware/intel.png" alt="" /></a>

                        <h3>AMD</h3>
                        <a href="https://www.amd.com/es" target="_blank"><img src="imagenes/hardware/amd.png" alt="" /></a>

                        <h3>Nvidia</h3>
                        <a href="https://www.nvidia.com/es-la/" target="_blank"><img src="imagenes/hardware/nvidia.jpg" alt="" /></a>

                    </div>
                </div>
            </div>
        </main>

    );
}

export default Hardware;