import styled, { css } from "styled-components";

export const ButtonField = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Button = styled.button`
    background-color: white;
    border: none;
    color:teal;
    width: 170px;
    height: 50px ;
    transition: 1s;
    padding: 1%;
    cursor: pointer;

    ${({ disabled }) => disabled && css`
        color: #ccc;
    `}

    ${({ hover }) => hover && css`
        color: hsl(180, 100%, 35%);
    `}

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 0;
        padding: 0,5%;
    }
`;