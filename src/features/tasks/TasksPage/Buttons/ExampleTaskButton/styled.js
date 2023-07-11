import styled, { css } from "styled-components";

export const Button = styled.button`
    background-color: white;
    width: 300px;
    margin: 0;
    border: none;
    color:teal;
    padding: 20px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${({ disabled }) => disabled && css`
        color: #ccc;
        margin: 0;
        border: none;
        padding: 20px;
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