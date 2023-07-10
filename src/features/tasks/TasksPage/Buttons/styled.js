import styled, { css } from "styled-components";

export const ButtonField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Button = styled.button`
    box-sizing: border-box;
    background-color: white;
    border: none;
    color: teal;
    width: 180px;
    height: 50px ;
    transition: 1s;
    padding: 1%;
    cursor: pointer;

    ${({ disabled }) => disabled && css`
        color: #ccc;
        cursor: none;
    `}

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 0;
        padding: 0,5%;
        width: auto;
    }
`;