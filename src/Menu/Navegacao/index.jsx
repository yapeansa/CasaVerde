import { styled } from "styled-components";

const Navegacao = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
        gap: 5px;
        li {
            font-size: 16px;
            &::after {
                content: "/";
                padding: 10px;
            }
            a {
                color: var(--primeira-cor);
                padding: .3rem 0;
                position: relative;
                overflow: hidden;
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

export default Navegacao;
