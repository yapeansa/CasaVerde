import Menu from "../Menu";
import AssinaturaNewsletter from "../AssinaturaNewsletter";
import Container from "../Container";
import EstilosGlobais from "../EstilosGlobais";
import MinhaPlanta from "../MinhaPlanta";

function HomePage() {
    return (
        <Container>
            <EstilosGlobais />
            <Menu />
            <AssinaturaNewsletter />
            <MinhaPlanta />
        </Container>
    );
}

export default HomePage;
