import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    :root {
        --fonte-principal: "Montserrat";
        --fonte-secundaria: "Elsie Swash Caps";
        --primeira-cor: #202020;
        --segunda-cor: #888;
        --terceira-cor: #aaa;
        --quarta-cor: #ffcb47;
        --branco: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--fonte-principal), sans-serif;
        font-weight: 400;
    }
    a { text-decoration: none; }
`;

export default EstilosGlobais;
