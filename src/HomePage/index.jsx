import Menu from "../Menu";
import AssinaturaNewsletter from "../AssinaturaNewsletter";
import Container from "../Container";
import EstilosGlobais from "../EstilosGlobais";
import MinhaPlanta from "../MinhaPlanta";
import Ofertas from "../Ofertas";
import Rodape from "../Rodape";

function HomePage() {
    return (
        <Container>
            <EstilosGlobais />
            <Menu />
            <AssinaturaNewsletter />
            <MinhaPlanta />
            <Ofertas />
            <Rodape />
        </Container>
    );
}

export default HomePage;
