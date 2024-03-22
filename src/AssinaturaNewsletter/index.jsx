import Newsletter from "./Newsletter";

function AssinaturaNewsletter({ setEmail, setDialogo }) {
    function mensagem(e) {
        e.preventDefault();
        setDialogo(true);
    }

    function tratamento(e) {
        setEmail(e.target.value);
    }

    return (
        <Newsletter>
            <h3>Sua casa com as </h3>
            <h2>melhores plantas</h2>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <div>
                <form className="n-form" onSubmit={(e) => mensagem(e)}>
                    <input type="email" placeholder="Insira seu e-mail" onChange={(e) => tratamento(e)} required />
                    <input type="submit" value="Assinar newsletter" />
                </form>
            </div>
        </Newsletter>
    );
}

export default AssinaturaNewsletter;
