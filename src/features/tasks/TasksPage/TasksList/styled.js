import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0px;
    word-break: break-word;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media(max-width: 767px) {
        padding: 5px;
    }
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;
export const StyledLink = styled(Link)`
    text-decoration:none;
    color: teal;
`

export const Button = styled.button`
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    padding: 0;
    transition: 1s;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 100%, 25%);

        &:hover {
            background: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(0, 100%, 50%);

        &:hover {
            background: hsl(0, 100%, 60%);
        }
    `}

`;