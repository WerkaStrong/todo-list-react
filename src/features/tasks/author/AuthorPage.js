import React from "react";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { StyledDiv } from "../../../styled";

export default () => (
    <Container>
        <Header title="O autorze"></Header>
        <Section
            title="Weronika Chmielewska"
            body={
            <StyledDiv>
                Cześć! Nazywam się Weronika Chmielewska, jestem początkującą Fronten Developerką.
            </StyledDiv>
        }
        />
    </Container>
);