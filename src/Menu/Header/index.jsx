import { styled } from "styled-components";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 10px;
    .right-head {
        display: flex;
        gap: 30px;
        .link-carrinho {
            color: var(--primeira-cor);
            font-weight: 700;
        }
    }
`;

export default Header;
