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
                Hej 😊 <br /><br />
                Jestem początkującą frontend - developerką.<br /><br />
                Kodowanie to moja pasja i nie potrafię się oderwać od ekranu, kiedy tworzę coś nowego i ciekawego. <br /><br />
                Kiedy potrzebuję odpoczynku, zanurzam się w świecie gier komputerowych. <br /><br />
                Lubię też aktywnie spędzać czas na świeżym powietrzu, zwłaszcza w górach, gdzie mogę zmierzyć się z własnymi słabościami. 
                W tym roku udało mi się przejść całe Karkonosze zimą w trudnych warunkach pogodowych co jest dla mnie dużym osiągnięciem 🎉 <br /><br />
                Już planuję kolejne podróże i wyprawy, które będą niezapomnianymi doświadczeniami! 💪
            </StyledDiv>
        }
        />
    </Container>
);