import styled from "styled-components";

export const FormField = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid black;
`;

export const Button = styled.button`
    border: none;
    background-color:hsl(180, 100%, 25%);
    color: white;
    padding: 10px;
    transition: 1s;
    cursor: pointer;

    &:hover {
        background: hsl(180, 100%, 35%);
        transform: scale(1.1);
    }

     &:active {
        background: hsl(180, 100%, 35%);
    }
`;