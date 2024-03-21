import { useEffect, useState } from "react";
import ofertas from "./db.json";
import { SecaoOfertas, ContainerOfertas } from "./OfertasEstilos";

function Ofertas() {

    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yapeansa/CasaVerde/main/src/Ofertas/db.json')
            .then(dados => dados.json())
            .then(resposta => setOfertas(resposta));
    }, []);

    return (
        <SecaoOfertas>
            <h3 className="titulo-secao">Conheça nossas</h3>
            <h2 className="subtitulo-secao">ofertas</h2>
            <ContainerOfertas>
                {ofertas.map(planta =>
                    <div key={planta.id} className="card-planta">
                        <div clasName="imagem-planta">
                            <img src={planta.imagem} alt={planta.nome} />
                        </div>
                        <div className="info-planta">
                            <h2>{planta.nome}</h2>
                            <p>R$ {planta.preco}</p>
                            <a href="#" target="_parent">Comprar</a>
                        </div>
                    </div>
                )}
            </ContainerOfertas>
        </SecaoOfertas>
    );
}

export default Ofertas;
