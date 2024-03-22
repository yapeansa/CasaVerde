import RodapeEstilos from "./RodapeEstilos";

function Rodape() {

    const data = new Date();

    return (
        <RodapeEstilos>
            &copy;{data.getFullYear()} Desenvolvido por <a href="https://yago.bohr.io" target="_blank">Yago Pereira</a>.
        </RodapeEstilos>
    );
}

export default Rodape;
