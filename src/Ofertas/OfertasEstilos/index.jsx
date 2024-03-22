import { styled } from "styled-components";
import seta from "/imagens/seta.svg";

const SecaoOfertas = styled.div`
    padding: 45px 0 0;
    .titulo-secao {
        text-align: center;
        font-size: 22px;
        color: var(--segunda-cor);
        font-weight: 400;
        margin-bottom: 10px;
    }
    .subtitulo-secao {
        font-size: 82px;
        font-family: var(--fonte-secundaria);
        text-align: center;
    }
`;

const ContainerOfertas = styled.div`
    display: flex;
    margin-top: 26px;
    padding-bottom: 120px;
    gap: 22px;
    flex-wrap: wrap;
    .card-planta {
        flex: 1 1 28%;
        //max-width: 379px;
        background: var(--branco);
        box-shadow: 0 3px 18px #ddd;
        display: flex;
        height: 200px;
        .imagem-planta {
            width: 50%;
        }
        .info-planta {
            width: 50%;
            padding-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2 {
                font-family: var(--fonte-secundaria);
                font-size: 32px;
                margin-bottom: 10px;
            }
            p { color: var(--segunda-cor); margin-bottom: 20px; }
            a {
                color: var(--quarta-cor);
                font-weight: 700;
                background: url(${seta}) right center no-repeat;
                display: block;
                max-width: 110px;
                position: relative;
                padding: .4rem 0;
                &::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background: var(--primeira-cor);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    &::before {
                        left: 0;
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export { SecaoOfertas, ContainerOfertas };
