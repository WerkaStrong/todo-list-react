import React from "react";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { StyledDiv } from "../../../styled";
import AuthorDescription from "./AuthorDescription";

export default () => (
    <Container>
        <Header title="O autorze"></Header>
        <Section
            title="Weronika Chmielewska"
            body={<AuthorDescription />}
        />
    </Container>
);