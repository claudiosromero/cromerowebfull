const Criptomonedas = (props) => {
    return(
<main className="contenedor_principal holder">
        <div class="img_bienvenida">
            <img class="img_bienvenida" src="imagenes/criptos/portada.jpg" alt="" width="100%"/>
        </div>
        
<div className="historiacripto holder">
<h2>Historia</h2>
<p>Una criptomoneda, criptodivisa (del inglés cryptocurrency) o criptoactivo es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos usando tecnologías de registro distribuido.1​2​3​4​ Las criptomonedas son un tipo de divisa alternativa o moneda digital. Existe controversia respecto a que las criptomonedas tienen que ser de control descentralizado o monedas centralizadas por los bancos centrales u otra entidad, dejando a estas entidades y/o bancos centrales sin función ninguna. Podría darse el caso en que se adoptara masivamente y convertirse en moneda fiduciaria para todo el planeta. Las criptiopurrenciales generalmente usan control descentralizado en lugar de una moneda digital de un banco central (CBDC).5​

    El control de cada moneda funciona a través de una base de datos descentralizada, usualmente una cadena de bloques (en inglés blockchain), que sirve como una base de datos de transacciones financieras pública.
    
    La primera criptomoneda que empezó a operar fue Bitcoin en 2009,6​ y desde entonces han aparecido otras con diferentes características como Litecoin, Ethereum, Bitcoin Cash, Ripple, Dogecoin..</p>
</div>

<div className="criptos">
    <h2>Mas Conocidas</h2>
    <div className="monedas">
        <div className="moneda">
            <img src="imagenes/criptos/btc.png" alt=""/>
            <h5>Bitcoin</h5>
            <h6>BTC</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cum fugit. Laudantium fugiat fuga harum ut deserunt minima sequi fugit! Quisquam incidunt fugiat nesciunt facilis dolor, fuga deleniti assumenda optio!</p>
        </div>
        <div className="moneda">
            <img src="imagenes/criptos/eth.png" alt=""/>
            <h5>Ethereum</h5>
            <h6>ETH</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cum fugit. Laudantium fugiat fuga harum ut deserunt minima sequi fugit! Quisquam incidunt fugiat nesciunt facilis dolor, fuga deleniti assumenda optio!</p>
        </div>
        <div className="moneda">
            <img src="imagenes/criptos/ltc.png" alt=""/>
            <h5>Litecoin</h5>
            <h6>LTC</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cum fugit. Laudantium fugiat fuga harum ut deserunt minima sequi fugit! Quisquam incidunt fugiat nesciunt facilis dolor, fuga deleniti assumenda optio!</p>
        </div>
        <div className="moneda">
            <img src="imagenes/criptos/bnb.png" alt=""/>
            <h5>BnanceCoin</h5>
            <h6>BNB</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, cum fugit. Laudantium fugiat fuga harum ut deserunt minima sequi fugit! Quisquam incidunt fugiat nesciunt facilis dolor, fuga deleniti assumenda optio!</p>
        </div>
    </div>
</div>

    </main>

    );
}

export default Criptomonedas;