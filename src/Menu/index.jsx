import LogoMarca from "./LogoMarca";
import Header from "./Header";
import menu from "./Labels";
import Navegacao from "./Navegacao";

function Menu() {
    return (
        <Header>
            <LogoMarca />
            <div className="right-head">
                <Navegacao>
                    <ul>
                        {menu.map(link => <li key={link.id}><a href="#" target="_parent">{link.nome}</a></li>)}
                    </ul>
                </Navegacao>
                <a href="#" target="_parent" className="link-carrinho">Meu carrinho</a>
            </div>
        </Header>
    );
}

export default Menu;
