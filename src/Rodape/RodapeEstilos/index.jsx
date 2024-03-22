import { styled } from "styled-components";

const RodapeEstilos = styled.p`
    padding: 1rem 0 3rem;
    text-align: center;
    font-size: 18px;
    a {
        font-weight: 700;
        color: var(--primeira-cor);
        position: relative;
        padding: .3rem 0;
        &::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 2px;
            background: var(--quarta-cor);
            transition: all .3s ease-in-out;
        }
        &:hover {
            &::before {
                width: 100%;
                left: 0;
            }
        }
    }
`;

export default RodapeEstilos;
