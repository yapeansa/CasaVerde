import Menu from "../Menu";
import AssinaturaNewsletter from "../AssinaturaNewsletter";
import Container from "../Container";
import EstilosGlobais from "../EstilosGlobais";
import MinhaPlanta from "../MinhaPlanta";
import Ofertas from "../Ofertas";
import Rodape from "../Rodape";
import Alerta from "../Alerta";
import { useState } from "react";

function HomePage() {

    const [dialogo, setDialogo] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <Container>
            <EstilosGlobais />
            <Menu />
            <AssinaturaNewsletter setEmail={setEmail} setDialogo={setDialogo} />
            <MinhaPlanta />
            <Ofertas />
            <Rodape />
            <Alerta acoesDialogo={{ dialogo, setDialogo, email }} />
        </Container>
    );
}

export default HomePage;
