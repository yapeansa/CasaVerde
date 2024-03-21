import Planta from "./Planta";
import minhaPlanta from "../assets/minha_planta.png";

function MinhaPlanta() {
    return (
        <Planta>
            <img src={minhaPlanta} alt="Minha planta" />
            <div className="acoes-planta">
                <h3>Como conseguir</h3>
                <h2>minha planta</h2>
                <ul className="conseguir-planta">
                    <li className="mouse"><a href="#">Escolha suas plantas</a></li>
                    <li className="cart"><a href="#">Faça seu pedido</a></li>
                    <li className="truck"><a href="#">Aguarde na sua casa</a></li>
                </ul>
            </div>
        </Planta>
    );
}

export default MinhaPlanta;
