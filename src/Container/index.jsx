import { styled } from "styled-components";
import bg from "/imagens/bg.svg";

const Container = styled.main`
    max-width: 1920px;
    margin: 0 auto;
    background: url(${bg}) top right no-repeat;
    padding: 0 18.75%;
    @media screen and (max-width: 1700px) {
        padding: 0 8%;
    }
`;

export default Container;
