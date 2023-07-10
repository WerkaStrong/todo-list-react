import styled, { css } from "styled-components";

export const Button = styled.button`
    background-color: white;
    width: 300px;
    margin: 0;
    border: none;
    color:teal;
    padding: 3%;
    cursor: pointer;

    ${({ disabled }) => disabled && css`
        color: #ccc;
        margin: 0;
        border: none;
        padding: 3%;
    `}

    &:hover:not([disabled]) {
        color: hsl(180, 100%, 35%);
    }

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 0;
        padding: 0,5%;
        width: auto;
    }
`;