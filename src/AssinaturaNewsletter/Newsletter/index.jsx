import { styled } from "styled-components";
import planta from "../../assets/planta.svg";
import mail from "../../assets/mail.svg";

const Newsletter = styled.div`
    background: url(${planta}) 358px -60px no-repeat;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 150px 0 228px;
    h3 {
        font-size: 22px;
        font-weight: 400;
        color: var(--segunda-cor);
    }
    h2 {
        font-size: 82px;
        max-width: 375px;
        font-family: var(--fonte-secundaria);
    }
    p {
        max-width: 481px;
        line-height: 26px;
        color: var(--segunda-cor);
    }
    .n-form {
        max-width: 585px;
        display: flex;
        box-shadow: 0 3px 18px 0px #ddd;
        input[type=email] {
            width: 67%;
            border: none;
            padding: 27px 0 27px 55px;
            font-size: 16px;
            font-family: var(--fonte-principal);
            background: url(${mail}) 17px center no-repeat;
            outline: none;
            &::placeholder {
                color: var(--terceira-cor);
            }
        }
        input[type=submit] {
            display: block;
            width: 33%;
            border: none;
            background: var(--quarta-cor);
            font-family: var(--fonte-principal);
            font-size: 16px;
            color: var(--branco);
            cursor: pointer;
        }
    }
`;

export default Newsletter;
