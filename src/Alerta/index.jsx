import EmailEnviado from "./EmailEnviado";

function Alerta({ acoesDialogo }) {
    return (
        <>
            <EmailEnviado $dialogo={acoesDialogo.dialogo}>
                <div className="box-alert">
                    <p>Obrigado pela sua assinatura. Você receberá nossas novidades no e-mail {acoesDialogo.email}.</p>
                    <button onClick={() => acoesDialogo.setDialogo(false)}>OK</button>
                </div>
            </EmailEnviado>
        </>
    );
}

export default Alerta;
