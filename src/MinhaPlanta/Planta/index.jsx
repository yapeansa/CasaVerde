import { styled } from "styled-components";
import mouse from "../../assets/mouse.svg";
import cart from "../../assets/cart.svg";
import truck from "../../assets/truck.svg";

const Planta = styled.div`
    max-width: 995px;
    margin: 0 auto;
    display: flex;
    box-shadow: 0 3px 18px 0px #ddd;
    img { max-width: 100%; }
    .acoes-planta {
        padding: 0 0 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        h3 {
            font-size: 22px;
            color: var(--segunda-cor);
            font-weight: 400;
        }
        h2 {
            font-size: 42px;
            font-family: var(--fonte-secundaria);
            margin-bottom: 20px;
        }
        .conseguir-planta {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 32px;
            li {
                font-size: 22px;
                position: relative;
                height: 52px;
                display: flex;
                align-items: center;
                padding-left: 72px;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 52px;
                    height: 52px;
                    border-radius: 100%;
                }
                a {
                    color: var(--segunda-cor);
                    position: relative;
                    padding: .3rem 0;
                    transition: all .3s ease-in-out;
                    &::before {
                        content: '';
                        position: absolute;
                        width: 0;
                        left: 50%;
                        bottom: 0;
                        height: 2px;
                        background: var(--quarta-cor);
                        transition: all .3s ease-in-out;
                    }
                    &:hover {
                        color: var(--primeira-cor);
                        &::before {
                            left: 0;
                            width: 100%;
                        }
                    }
                }
            }
            .mouse {
                &::before { background: var(--quarta-cor) url(${mouse}) center no-repeat; }
            }
            .cart {
                &::before { background: var(--quarta-cor) url(${cart}) center no-repeat; }
            }
            .truck {
                &::before { background: var(--quarta-cor) url(${truck}) center no-repeat; }
            }
        }
    }
`;

export default Planta;
