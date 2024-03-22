import { styled } from "styled-components";

const EmailEnviado = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.$dialogo ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    .box-alert {
        background: var(--branco);
        padding: 3rem 5rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        border-radius: 16px;
        button {
            padding: 1rem 3rem;
            background: var(--quarta-cor);
            border: none;
            cursor: pointer;
        }
    }
`;

export default EmailEnviado;
