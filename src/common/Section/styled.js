import styled from "styled-components";

export const SectionBody = styled.section`
    background-color: white;
    margin: 10px 0;
    box-shadow: 2px #0000;
    display: block;

    @media(max-width: 767px) {
        padding: 15px;
    }
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;

    @media(max-width: 767px) {
        font-size: 20px;
        padding: 10px;
        margin: 0;
    }
`;

export const List = styled.div`
    @media(max-width: 767px) {
        padding: 10px;
    }
`;